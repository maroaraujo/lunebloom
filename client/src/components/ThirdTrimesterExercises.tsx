import { useState } from "react";
import { Button } from "@/components/ui/button";
import GymExerciseModal, { GymExercise } from "./GymExerciseModal";
import TipBox from "./TipBox";

const thirdTrimesterExercises: GymExercise[] = [
  {
    name: "Modified Squats (Wall Support)",
    description: "Strengthens legs and opens the pelvis in preparation for labor.",
    sets: 3,
    reps: "10-12 reps",
    difficulty: "beginner",
    muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
    benefits: [
      "Strengthens legs for labor",
      "Opens pelvis naturally",
      "Improves balance and stability",
      "Reduces pressure on joints"
    ],
    modifications: "Keep back against wall. Feet shoulder-width apart. Lower slowly with control. Do not go below 90 degrees.",
    cautions: "Use wall for support. Stop if you feel dizzy. Do not squat too deeply.",
  },
  {
    name: "Pelvic Floor Exercises (Kegels)",
    description: "Essential for preparing your pelvic floor for labor and recovery.",
    sets: 3,
    reps: "10-15 contractions",
    difficulty: "beginner",
    muscleGroups: ["Pelvic Floor"],
    benefits: [
      "Strengthens pelvic floor for labor",
      "Prepares for delivery",
      "Improves bladder control",
      "Aids postpartum recovery"
    ],
    modifications: "Identify pelvic floor muscles. Contract for 3-5 seconds, relax for 3-5 seconds. Do not hold breath.",
    cautions: "Do not do Kegels while urinating. Avoid overdoing them.",
  },
  {
    name: "Walking (Increased Duration)",
    description: "Excellent cardiovascular exercise that prepares your body for labor.",
    sets: 1,
    reps: "45-60 minutes daily",
    difficulty: "beginner",
    muscleGroups: ["Legs", "Core", "Cardiovascular"],
    benefits: [
      "Excellent cardiovascular exercise",
      "Prepares body for labor",
      "Reduces swelling and discomfort",
      "Improves mood and energy"
    ],
    modifications: "Walk at comfortable pace. Stay well hydrated. Wear supportive shoes. Walk on flat surfaces.",
    cautions: "Stop if dizzy or uncomfortable. Avoid overheating. Listen to your body.",
  },
  {
    name: "Prenatal Yoga (Gentle)",
    description: "Improves flexibility and calms your nervous system as you prepare for birth.",
    sets: 1,
    reps: "30-45 minutes",
    difficulty: "beginner",
    muscleGroups: ["Full Body", "Flexibility", "Core"],
    benefits: [
      "Improves flexibility and range of motion",
      "Reduces back pain and discomfort",
      "Calms nervous system",
      "Prepares mentally and physically for labor"
    ],
    modifications: "Focus on gentle stretches. Avoid deep twists. Do not lie flat on back. Use props for support.",
    cautions: "Listen to your body. Modify poses as needed. Stop if you feel uncomfortable.",
  },
  {
    name: "Swimming or Water Aerobics",
    description: "Full-body, low-impact exercise that feels amazing during the third trimester.",
    sets: 1,
    reps: "20-30 minutes",
    difficulty: "beginner",
    muscleGroups: ["Full Body", "Cardiovascular", "Shoulders", "Back", "Legs"],
    benefits: [
      "Relieves back pain and joint pressure",
      "Supports your growing body",
      "Full-body workout",
      "Cooling and comfortable sensation"
    ],
    modifications: "Water walking, water aerobics, or gentle swimming. Use kickboard for support if needed.",
    cautions: "Avoid diving. Stay hydrated even in water. Avoid overheating.",
  },
  {
    name: "Side-Lying Leg Lifts",
    description: "Targets hip stabilizers and outer thighs without straining your abdomen.",
    sets: 3,
    reps: "12 reps each side",
    difficulty: "beginner",
    muscleGroups: ["Glutes", "Hip Abductors", "Outer Thighs"],
    benefits: [
      "Strengthens hip stabilizers",
      "Reduces hip and pelvic pain",
      "Improves balance",
      "Prepares for labor positions"
    ],
    modifications: "Lie on your side with hips stacked. Lift top leg slowly. Keep core engaged. Use pillow between knees.",
    cautions: "Avoid lying flat on your back. Use pillow for comfort.",
  },
];

export default function ThirdTrimesterExercises() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--color-blush)]/20 to-[var(--color-lavender)]/20">
        <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-4">
          Safe Gym Exercises for Third Trimester
        </h3>
        <p className="text-sm mb-4">
          The third trimester is about preparing your body for labor and managing discomfort. 
          Exercise becomes gentler and more focused on pelvic floor strengthening and flexibility. 
          Listen to your body and modify as needed—your comfort and safety are paramount.
        </p>

        <div className="space-y-3 mb-6">
          {thirdTrimesterExercises.map((exercise, idx) => (
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
              <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-blush)]/30">
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

      <TipBox type="tip" title="Third Trimester Exercise Tips">
        Recommended frequency: 3-4 days per week at gentle intensity. Focus on pelvic floor, flexibility, and comfort. 
        Your key goal is to prepare for labor and manage symptoms. Listen to your body and modify as needed.
      </TipBox>

      <GymExerciseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        phase="Third Trimester"
        exercises={thirdTrimesterExercises}
      />
    </div>
  );
}
