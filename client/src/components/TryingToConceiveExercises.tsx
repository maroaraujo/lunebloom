import { useState } from "react";
import { Button } from "@/components/ui/button";
import GymExerciseModal, { GymExercise } from "./GymExerciseModal";
import TipBox from "./TipBox";

const tryingToConceiveExercises: GymExercise[] = [
  {
    name: "Pelvic Floor Exercises (Kegels)",
    description: "Strengthens the pelvic floor muscles, improving blood flow to reproductive organs and enhancing fertility.",
    sets: 3,
    reps: "10-15 reps",
    difficulty: "beginner",
    muscleGroups: ["Pelvic Floor", "Core"],
    benefits: [
      "Improves blood circulation to reproductive organs",
      "Strengthens pelvic floor for pregnancy and delivery",
      "Enhances sexual function and sensitivity",
      "Prepares body for pregnancy"
    ],
    modifications: "Can be done sitting, standing, or lying down. Tighten pelvic floor for 3-5 seconds, then relax.",
    cautions: "Do not hold your breath. Breathe normally throughout the exercise.",
  },
  {
    name: "Squats",
    description: "A foundational lower body exercise that strengthens legs, glutes, and improves pelvic stability.",
    sets: 3,
    reps: "12-15 reps",
    difficulty: "beginner",
    muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
    benefits: [
      "Strengthens legs and glutes for overall fitness",
      "Improves pelvic floor engagement",
      "Increases lower body stability",
      "Prepares body for pregnancy demands"
    ],
    modifications: "Use a chair for support if needed. Keep feet shoulder-width apart. Lower only as far as comfortable.",
    cautions: "Keep knees aligned with toes. Avoid excessive forward knee travel.",
  },
  {
    name: "Lunges",
    description: "Targets leg strength and balance with a dynamic, controlled movement.",
    sets: 3,
    reps: "10 reps each leg",
    difficulty: "intermediate",
    muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Calves"],
    benefits: [
      "Strengthens legs asymmetrically",
      "Improves balance and coordination",
      "Engages core muscles",
      "Increases cardiovascular endurance"
    ],
    modifications: "Hold onto a wall or chair for balance. Take smaller steps if needed.",
    cautions: "Keep torso upright. Do not let front knee extend past toes.",
  },
  {
    name: "Plank Hold",
    description: "A core-strengthening exercise that builds abdominal and back strength without high impact.",
    sets: 3,
    reps: "20-30 seconds",
    difficulty: "intermediate",
    muscleGroups: ["Core", "Shoulders", "Back", "Glutes"],
    benefits: [
      "Strengthens core for pregnancy support",
      "Improves posture",
      "Builds back strength",
      "Enhances overall stability"
    ],
    modifications: "Do a wall plank or knee plank if full plank is too challenging. Hold for shorter duration.",
    cautions: "Do not let hips sag. Keep body in straight line from head to heels.",
  },
  {
    name: "Stationary Cycling",
    description: "Low-impact cardiovascular exercise that improves heart health and leg strength.",
    sets: 1,
    reps: "20-30 minutes",
    difficulty: "beginner",
    muscleGroups: ["Quadriceps", "Hamstrings", "Glutes", "Calves"],
    benefits: [
      "Improves cardiovascular health",
      "Low-impact exercise for joints",
      "Strengthens lower body",
      "Reduces stress and improves mood"
    ],
    modifications: "Adjust resistance to comfortable level. Can be done on stationary or recumbent bike.",
    cautions: "Stay hydrated. Avoid overheating. Maintain steady, moderate pace.",
  },
  {
    name: "Swimming or Water Aerobics",
    description: "Full-body, low-impact exercise that improves cardiovascular fitness and muscle tone.",
    sets: 1,
    reps: "20-30 minutes",
    difficulty: "beginner",
    muscleGroups: ["Full Body", "Core", "Cardiovascular"],
    benefits: [
      "Excellent cardiovascular workout",
      "Low-impact on joints",
      "Full-body muscle engagement",
      "Reduces stress and anxiety"
    ],
    modifications: "Can do gentle swimming, water walking, or water aerobics classes.",
    cautions: "Ensure water temperature is comfortable. Stay hydrated even in water.",
  },
];

export default function TryingToConceiveExercises() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--color-peach)]/20 to-[var(--color-lavender)]/20">
        <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-4">
          Safe Gym Exercises for Trying to Conceive
        </h3>
        <p className="text-sm mb-4">
          Regular exercise during the trying-to-conceive phase can improve fertility by enhancing cardiovascular health, 
          reducing stress, and optimizing hormone levels. Focus on moderate-intensity activities and pelvic floor strengthening.
        </p>

        <div className="space-y-3 mb-6">
          {tryingToConceiveExercises.map((exercise, idx) => (
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
              <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-peach)]/30">
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

      <TipBox type="tip" title="Trying to Conceive Exercise Tips">
        Aim for 150 minutes of moderate-intensity aerobic activity per week. Include strength training 2-3 times per week. 
        Avoid overexercising, as excessive exercise can interfere with fertility. Listen to your body and rest when needed.
      </TipBox>

      <GymExerciseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        phase="Trying to Conceive"
        exercises={tryingToConceiveExercises}
      />
    </div>
  );
}
