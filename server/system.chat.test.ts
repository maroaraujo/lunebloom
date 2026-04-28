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
          role: "user" as const,
          content: "How much exercise should I do during pregnancy?",
        },
      ],
    });

    expect(result).toEqual(
      "According to ACOG, 150 minutes of moderate-intensity aerobic activity per week is recommended during pregnancy."
    );
    
    // Verify that system prompt was added
    const callArgs = vi.mocked(invokeLLM).mock.calls[0][0];
    expect(callArgs.messages[0].role).toBe("system");
    expect(callArgs.messages[0].content).toContain("Lunebloom");
    expect(callArgs.messages[0].content).toContain("ACOG");
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

  it("should include comprehensive system prompt with knowledge base", async () => {
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

    await caller.system.chat({
      messages: [
        { role: "user" as const, content: "Test question" },
      ],
    });

    const callArgs = vi.mocked(invokeLLM).mock.calls[0][0];
    const systemPrompt = callArgs.messages[0].content;

    // Verify system prompt contains key information
    expect(systemPrompt).toContain("Lunebloom");
    expect(systemPrompt).toContain("Trying to Conceive");
    expect(systemPrompt).toContain("Fertile window");
    expect(systemPrompt).toContain("ovulation");
    expect(systemPrompt).toContain("First Trimester");
    expect(systemPrompt).toContain("Postpartum");
    expect(systemPrompt).toContain("ACOG");
    expect(systemPrompt).toContain("CDC");
    expect(systemPrompt).toContain("NIH");
    expect(systemPrompt).toContain("150 min/week");
    expect(systemPrompt).toContain("200mg/day");
  });

  it("should cite sources in responses", async () => {
    const mockResponse = {
      choices: [
        {
          message: {
            content: "According to ACOG and CDC guidelines, exercise is beneficial during pregnancy.",
          },
        },
      ],
    };

    vi.mocked(invokeLLM).mockResolvedValueOnce(mockResponse as any);

    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.system.chat({
      messages: [
        { role: "user" as const, content: "Is exercise safe during pregnancy?" },
      ],
    });

    expect(result).toContain("ACOG");
    expect(result).toContain("CDC");
  });

  it("should handle out-of-scope questions appropriately", async () => {
    const mockResponse = {
      choices: [
        {
          message: {
            content: "I don't have information about that in my documentation. Please consult with your healthcare provider for personalized advice.",
          },
        },
      ],
    };

    vi.mocked(invokeLLM).mockResolvedValueOnce(mockResponse as any);

    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.system.chat({
      messages: [
        { role: "user" as const, content: "What's the weather like today?" },
      ],
    });

    expect(result).toContain("don't have information");
    expect(result).toContain("healthcare provider");
  });

  it("should pass all user messages to LLM with system prompt prepended", async () => {
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

    const userMessages = [
      { role: "user" as const, content: "First question" },
      { role: "assistant" as const, content: "First answer" },
      { role: "user" as const, content: "Follow-up question" },
    ];

    await caller.system.chat({ messages: userMessages });

    const callArgs = vi.mocked(invokeLLM).mock.calls[0][0];
    
    // System prompt should be first
    expect(callArgs.messages[0].role).toBe("system");
    expect(callArgs.messages[0].content).toContain("Lunebloom");
    
    // User messages should follow in order
    expect(callArgs.messages[1]).toEqual(userMessages[0]);
    expect(callArgs.messages[2]).toEqual(userMessages[1]);
    expect(callArgs.messages[3]).toEqual(userMessages[2]);
  });
});
