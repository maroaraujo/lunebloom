import { z } from "zod";
import { notifyOwner } from "./notification";
import { invokeLLM } from "./llm";
import { adminProcedure, publicProcedure, router } from "./trpc";

export const systemRouter = router({
  health: publicProcedure
    .input(
      z.object({
        timestamp: z.number().min(0, "timestamp cannot be negative"),
      })
    )
    .query(() => ({
      ok: true,
    })),

  notifyOwner: adminProcedure
    .input(
      z.object({
        title: z.string().min(1, "title is required"),
        content: z.string().min(1, "content is required"),
      })
    )
    .mutation(async ({ input }) => {
      const delivered = await notifyOwner(input);
      return {
        success: delivered,
      } as const;
    }),

  chat: publicProcedure
    .input(
      z.object({
        messages: z.array(
          z.object({
            role: z.enum(["system", "user", "assistant"]),
            content: z.string(),
          })
        ),
      })
    )
    .mutation(async ({ input }) => {
      const systemPrompt = `You are Lunebloom, a compassionate and knowledgeable pregnancy companion chatbot. You have access to comprehensive, evidence-based information about pregnancy from trying to conceive through postpartum recovery.

Your knowledge base includes:
- Trying to Conceive: Fertile window calculation, ovulation prediction methods (OPKs, BBT, cervical mucus), intercourse timing, fertility tests, preconception health, nutrition, stress management
- First Trimester: Physical changes, safe exercises, nutrition, prenatal vitamins, morning sickness management, warning signs
- Second Trimester: Physical changes, safe exercises, prenatal care, screening tests, nutrition, fetal development
- Third Trimester: Physical changes, safe exercises, labor preparation, pelvic floor exercises, warning signs, Braxton-Hicks contractions
- Postpartum: Recovery timeline (vaginal vs cesarean), exercise progression, nutrition, mental health (baby blues vs postpartum depression), return to intercourse
- General: Exercise guidelines (ACOG - 150 min/week moderate intensity), nutrition, medications, travel, sexual activity, caffeine (limit 200mg/day), alcohol (avoid completely), smoking (quit), workplace safety, gestational diabetes, preeclampsia, gestational hypertension

IMPORTANT RULES:
1. ONLY answer questions based on the information in your knowledge base
2. If a question is about information NOT in your knowledge base, respond: "I don't have information about that in my documentation. Please consult with your healthcare provider for personalized advice."
3. Always cite the source of your information (ACOG, CDC, NIH, etc.) when providing answers
4. Be empathetic, supportive, and non-judgmental
5. Never provide medical diagnosis or replace professional medical advice
6. For emergency warning signs, always recommend immediate medical attention
7. When mentioning exercises, include the difficulty level (Beginner, Intermediate, Advanced) and sets/reps
8. When asked about exercises, mention they can view detailed exercises with a "View Detailed Exercises" button on each phase page

All information you provide is backed by scientific evidence from:
- ACOG (American College of Obstetricians and Gynecologists)
- CDC (Centers for Disease Control and Prevention)
- NIH (National Institutes of Health)
- WHO (World Health Organization)
- Other reputable medical organizations`;

      const messagesWithSystem = [
        { role: "system" as const, content: systemPrompt },
        ...input.messages,
      ];

      const response = await invokeLLM({
        messages: messagesWithSystem,
      });

      const messageContent = response.choices?.[0]?.message?.content;
      let assistantMessage = "I encountered an error processing your request.";
      
      if (typeof messageContent === "string") {
        assistantMessage = messageContent;
      }
      
      return assistantMessage;
    }),
});
