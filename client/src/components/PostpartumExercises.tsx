import { useState } from "react";
import { Button } from "@/components/ui/button";
import GymExerciseModal, { GymExercise } from "./GymExerciseModal";
import TipBox from "./TipBox";

const postpartumExercises: GymExercise[] = [
  {
    name: "Pelvic Floor Exercises (Kegels)",
    description: "Rebuilds pelvic floor strength after delivery, essential for continence and sexual function.",
    sets: 3,
    reps: "10-15 reps",
    difficulty: "beginner",
    muscleGroups: ["Pelvic Floor", "Core"],
    benefits: [
      "Restores pelvic floor strength",
      "Improves bladder control",
      "Enhances sexual sensation",
      "Supports long-term pelvic health"
    ],
    modifications: "Start gently if you had tearing or an episiotomy. Can be done sitting, standing, or lying down.",
    cautions: "Do not do these while urinating. Breathe normally and do not hold your breath.",
  },
  {
    name: "Abdominal Bracing",
    description: "Gentle core strengthening to rebuild abdominal muscles after pregnancy.",
    sets: 3,
    reps: "10-15 reps",
    difficulty: "beginner",
    muscleGroups: ["Core", "Rectus Abdominis", "Transverse Abdominis"],
    benefits: [
      "Rebuilds core strength",
      "Improves posture",
      "Supports back health",
      "Helps with diastasis recti recovery"
    ],
    modifications: "Lie on your back with knees bent. Gently tighten abs without holding breath. Start with short holds.",
    cautions: "Avoid crunches initially. If you have diastasis recti, consult a physical therapist.",
  },
  {
    name: "Glute Bridges",
    description: "Strengthens glutes and lower back while being gentle on the core.",
    sets: 3,
    reps: "10-12 reps",
    difficulty: "beginner",
    muscleGroups: ["Glutes", "Hamstrings", "Lower Back", "Core"],
    benefits: [
      "Strengthens glutes and lower back",
      "Improves posture",
      "Reduces back pain",
      "Rebuilds lower body strength"
    ],
    modifications: "Lie on back with knees bent. Lift hips gently. Can use a pillow under shoulders for support.",
    cautions: "Do not arch lower back excessively. Move slowly and controlled.",
  },
  {
    name: "Walking",
    description: "Low-impact cardiovascular exercise that can be started immediately postpartum.",
    sets: 1,
    reps: "20-30 minutes",
    difficulty: "beginner",
    muscleGroups: ["Legs", "Core", "Cardiovascular"],
    benefits: [
      "Improves cardiovascular health",
      "Low-impact on healing body",
      "Boosts mood and mental health",
      "Can be done with baby in stroller"
    ],
    modifications: "Start with short walks and gradually increase duration. Walk at comfortable pace.",
    cautions: "Wait for medical clearance (usually 6 weeks). Wear supportive shoes.",
  },
  {
    name: "Modified Planks",
    description: "Gentle core strengthening without excessive abdominal pressure.",
    sets: 3,
    reps: "15-30 seconds",
    difficulty: "intermediate",
    muscleGroups: ["Core", "Shoulders", "Back"],
    benefits: [
      "Strengthens core safely",
      "Improves posture",
      "Builds back strength",
      "Prepares for more intense exercise"
    ],
    modifications: "Start with wall plank or knee plank. Hold for shorter duration and build up gradually.",
    cautions: "Do not let hips sag. Stop if you feel pain or pressure in abdomen.",
  },
  {
    name: "Swimming or Water Aerobics",
    description: "Full-body, low-impact exercise that supports healing and rebuilds fitness.",
    sets: 1,
    reps: "20-30 minutes",
    difficulty: "intermediate",
    muscleGroups: ["Full Body", "Core", "Cardiovascular"],
    benefits: [
      "Excellent cardiovascular workout",
      "Low-impact on healing body",
      "Full-body muscle engagement",
      "Reduces stress and anxiety"
    ],
    modifications: "Wait until bleeding has stopped. Start with gentle swimming or water walking.",
    cautions: "Ensure water is clean. Avoid chlorinated pools if you have open wounds.",
  },
];

export default function PostpartumExercises() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--color-mint)]/20 to-[var(--color-cream)]/20">
        <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-4">
          Safe Gym Exercises for Postpartum Recovery
        </h3>
        <p className="text-sm mb-4">
          Postpartum exercise should focus on gentle, progressive recovery. Always get medical clearance (typically 6 weeks 
          postpartum, or 8-12 weeks after C-section) before starting exercise. Listen to your body and prioritize healing.
        </p>

        <div className="space-y-3 mb-6">
          {postpartumExercises.map((exercise, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors"
            >
              <div>
                <div className="font-semibold text-sm">{exercise.name}</div>
                <div className="text-xs text-gray-600">
                  {exercise.sets} sets × {exercise.reps}
                </div>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-mint)]/30">
                {exercise.difficulty}
              </span>
            </div>
          ))}
        </div>

        <Button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-[var(--color-rose)] hover:bg-[var(--color-rose)]/90 text-white"
        >
          View Detailed Exercises
        </Button>
      </div>

      <TipBox type="warning" title="Important Postpartum Safety">
        <ul className="list-disc list-inside space-y-1">
          <li>Wait for medical clearance before starting exercise (6 weeks vaginal, 8-12 weeks C-section)</li>
          <li>Stop immediately if you experience pain, bleeding, or dizziness</li>
          <li>Avoid high-impact activities and heavy lifting initially</li>
          <li>If breastfeeding, exercise after feeding to avoid discomfort</li>
          <li>Stay well-hydrated, especially if breastfeeding</li>
        </ul>
      </TipBox>

      <GymExerciseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        phase="Postpartum"
        exercises={postpartumExercises}
      />
    </div>
  );
}
