import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the LLM module
vi.mock("./_core/llm", () => ({
  invokeLLM: vi.fn(),
}));

import { invokeLLM } from "./_core/llm";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createTestContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("system.chat", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should accept messages and return a string response", async () => {
    const mockResponse = {
      choices: [
        {
          message: {
            content: "According to ACOG, 150 minutes of moderate-intensity aerobic activity per week is recommended during pregnancy.",
          },
        },
      ],
    };

    vi.mocked(invokeLLM).mockResolvedValueOnce(mockResponse as any);

    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.system.chat({
      messages: [
        {
          role: "system" as const,
          content: "You are Lunebloom, a helpful pregnancy assistant.",
        },
        {
          role: "user" as const,
          content: "How much exercise should I do during pregnancy?",
        },
      ],
    });

    expect(result).toEqual(
      "According to ACOG, 150 minutes of moderate-intensity aerobic activity per week is recommended during pregnancy."
    );
    expect(invokeLLM).toHaveBeenCalledWith({
      messages: [
        {
          role: "system",
          content: "You are Lunebloom, a helpful pregnancy assistant.",
        },
        {
          role: "user",
          content: "How much exercise should I do during pregnancy?",
        },
      ],
    });
  });

  it("should return error message when LLM response is empty", async () => {
    const mockResponse = {
      choices: [
        {
          message: {
            content: null,
          },
        },
      ],
    };

    vi.mocked(invokeLLM).mockResolvedValueOnce(mockResponse as any);

    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.system.chat({
      messages: [
        {
          role: "system" as const,
          content: "You are Lunebloom.",
        },
        {
          role: "user" as const,
          content: "Test question",
        },
      ],
    });

    expect(result).toEqual("I encountered an error processing your request.");
  });

  it("should return error message when choices array is empty", async () => {
    const mockResponse = {
      choices: [],
    };

    vi.mocked(invokeLLM).mockResolvedValueOnce(mockResponse as any);

    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.system.chat({
      messages: [
        {
          role: "system" as const,
          content: "You are Lunebloom.",
        },
        {
          role: "user" as const,
          content: "Test question",
        },
      ],
    });

    expect(result).toEqual("I encountered an error processing your request.");
  });

  it("should handle multiple messages in conversation", async () => {
    const mockResponse = {
      choices: [
        {
          message: {
            content: "Swimming is an excellent low-impact exercise during pregnancy according to ACOG.",
          },
        },
      ],
    };

    vi.mocked(invokeLLM).mockResolvedValueOnce(mockResponse as any);

    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.system.chat({
      messages: [
        {
          role: "system" as const,
          content: "You are Lunebloom, a pregnancy assistant.",
        },
        {
          role: "user" as const,
          content: "What exercises are safe?",
        },
        {
          role: "assistant" as const,
          content: "Walking and swimming are safe.",
        },
        {
          role: "user" as const,
          content: "Tell me more about swimming",
        },
      ],
    });

    expect(result.toLowerCase()).toContain("swimming");
    expect(result).toContain("ACOG");
  });

  it("should work for public users (no authentication required)", async () => {
    const mockResponse = {
      choices: [
        {
          message: {
            content: "I don't have information about that in my documentation.",
          },
        },
      ],
    };

    vi.mocked(invokeLLM).mockResolvedValueOnce(mockResponse as any);

    // Create a context with no user (public)
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const result = await caller.system.chat({
      messages: [
        {
          role: "user" as const,
          content: "Can I use this service without logging in?",
        },
      ],
    });

    expect(result).toBeDefined();
    expect(typeof result).toBe("string");
  });

  it("should pass all messages to LLM in correct order", async () => {
    const mockResponse = {
      choices: [
        {
          message: {
            content: "Test response",
          },
        },
      ],
    };

    vi.mocked(invokeLLM).mockResolvedValueOnce(mockResponse as any);

    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const messages = [
      { role: "system" as const, content: "System prompt" },
      { role: "user" as const, content: "First question" },
      { role: "assistant" as const, content: "First answer" },
      { role: "user" as const, content: "Follow-up question" },
    ];

    await caller.system.chat({ messages });

    expect(invokeLLM).toHaveBeenCalledWith({ messages });
  });
});
