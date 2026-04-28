import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle } from "lucide-react";
import { AIChatBox, type Message } from "./AIChatBox";
import { trpc } from "@/lib/trpc";

export function AskLunebloomChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system" as const,
      content: `You are Lunebloom, a helpful pregnancy and motherhood assistant. You answer questions based ONLY on the scientific documentation provided to you about pregnancy, exercise, nutrition, and postpartum care.

CRITICAL RULES:
1. ONLY answer questions based on the documentation you have been provided
2. If a question is NOT covered in your documentation, respond with: "I don't have information about that in my documentation. Please consult with your healthcare provider for personalized advice."
3. Always cite the source when answering (e.g., "According to ACOG..." or "According to CDC...")
4. Be empathetic, supportive, and encouraging
5. Never provide medical diagnosis or replace professional medical advice
6. If the question is about something outside pregnancy/motherhood/women's health, politely redirect to your core topics

DOCUMENTATION YOU HAVE:
- ACOG (American College of Obstetricians and Gynecologists) Committee Opinion 804: Physical Activity and Exercise During Pregnancy and the Postpartum Period (April 2020)
- CDC Physical Activity Guidelines: Pregnant & Postpartum Activity - An Overview
- NIH Research: "Infertility and cortisol: a systematic review" (2023)
- Safe exercises for all pregnancy phases: trying to conceive, first trimester, second trimester, third trimester, and postpartum
- Exercise recommendations: 150 minutes of moderate-intensity aerobic activity per week during pregnancy and postpartum
- Postpartum recovery guidelines: 6 weeks for vaginal delivery, 8-12 weeks for C-section before starting exercise
- Pelvic floor exercises, strength training, and cardiovascular activities for each phase
- Warning signs to stop exercise: persistent contractions, vaginal bleeding, chest pain, severe shortness of breath

Start by greeting the user warmly and asking how you can help them today.`,
    },
  ]);

  const chatMutation = trpc.system.chat.useMutation({
    onSuccess: (response) => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant" as const,
          content: response,
        },
      ]);
    },
    onError: (error) => {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant" as const,
          content:
            "Sorry, I encountered an error. Please try again or consult your healthcare provider.",
        },
      ]);
    },
  });

  const handleSendMessage = (content: string) => {
    const newMessages = [...messages, { role: "user" as const, content }]
    setMessages(newMessages);
    chatMutation.mutate({ messages: newMessages });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-[var(--color-rose)] hover:bg-[var(--color-rose)]/90 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Ask Lunebloom"
      >
        {isOpen ? (
          <X className="size-6" />
        ) : (
          <MessageCircle className="size-6" />
        )}
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[600px] rounded-xl shadow-2xl bg-white overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[var(--color-rose)] to-[var(--color-peach)] text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Ask Lunebloom</h3>
              <p className="text-xs opacity-90">
                Your pregnancy & motherhood companion
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Chat Box */}
          <div className="flex-1 overflow-hidden">
            <AIChatBox
              messages={messages}
              onSendMessage={handleSendMessage}
              isLoading={chatMutation.isPending}
              placeholder="Ask me about pregnancy, exercise, or postpartum care..."
              emptyStateMessage="Hi! I'm Lunebloom. Ask me anything about pregnancy, exercise, nutrition, or postpartum recovery!"
              suggestedPrompts={[
                "Is it safe to exercise during pregnancy?",
                "What exercises are safe in the first trimester?",
                "When can I start exercising after giving birth?",
                "How much exercise should I do while pregnant?",
              ]}
              height="100%"
              className="border-0 rounded-none"
            />
          </div>
        </div>
      )}
    </>
  );
}
