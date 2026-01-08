import { useState } from "react";
import { Button } from "@/components/ui/button";
import GymExerciseModal, { GymExercise } from "./GymExerciseModal";
import TipBox from "./TipBox";

const firstTrimesterExercises: GymExercise[] = [
  {
    name: "Modified Squats",
    description: "A foundational lower body exercise that strengthens legs and glutes while maintaining good posture.",
    sets: 3,
    reps: "12-15 reps",
    difficulty: "beginner",
    muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
    benefits: [
      "Strengthens legs for carrying extra pregnancy weight",
      "Improves balance and stability",
      "Prepares body for labor and delivery",
      "Helps maintain pelvic floor strength"
    ],
    modifications: "Use a wall or chair for support. Keep feet shoulder-width apart. Lower only as far as comfortable without knee pain.",
    cautions: "Avoid going too deep. Stop if you feel dizzy or short of breath. Keep chest upright.",
  },
  {
    name: "Wall Push-ups",
    description: "A safe upper body exercise that strengthens chest, shoulders, and arms without straining the abdomen.",
    sets: 3,
    reps: "10-12 reps",
    difficulty: "beginner",
    muscleGroups: ["Chest", "Shoulders", "Triceps", "Core"],
    benefits: [
      "Strengthens upper body for carrying baby after birth",
      "Improves posture during pregnancy",
      "Maintains arm strength",
      "Low impact on joints"
    ],
    modifications: "Stand arm's length from wall. Lean in and push back. Adjust distance to wall for easier or harder variation.",
    cautions: "Do not do floor push-ups. Avoid any exercise that puts pressure on your abdomen.",
  },
  {
    name: "Stationary Lunges",
    description: "Targets leg strength and balance with a controlled, low-impact movement.",
    sets: 3,
    reps: "10 reps each leg",
    difficulty: "intermediate",
    muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Calves"],
    benefits: [
      "Strengthens legs asymmetrically to prevent imbalances",
      "Improves balance and coordination",
      "Reduces lower back strain",
      "Prepares for active labor"
    ],
    modifications: "Hold onto a rail or chair for balance. Take smaller steps. Keep torso upright.",
    cautions: "Do not let front knee go past your toes. Stop if you feel unstable.",
  },
  {
    name: "Dumbbell Rows (Light Weight)",
    description: "A back-strengthening exercise that improves posture and counteracts pregnancy slouching.",
    sets: 3,
    reps: "12 reps each side",
    difficulty: "intermediate",
    muscleGroups: ["Back", "Biceps", "Shoulders", "Core"],
    benefits: [
      "Strengthens back to support growing belly",
      "Improves posture",
      "Reduces back pain",
      "Prepares for carrying and lifting baby"
    ],
    modifications: "Use very light weights (2-5 lbs). Bend knees slightly. Keep core engaged.",
    cautions: "Do not use heavy weights. Avoid twisting motions. Keep movements controlled.",
  },
  {
    name: "Pelvic Floor Exercises (Kegels)",
    description: "Strengthens the pelvic floor muscles that support the uterus and help with delivery.",
    sets: 3,
    reps: "10-15 contractions",
    difficulty: "beginner",
    muscleGroups: ["Pelvic Floor"],
    benefits: [
      "Strengthens muscles used during labor",
      "Prevents incontinence",
      "Improves sexual function postpartum",
      "Supports uterus as it grows"
    ],
    modifications: "Squeeze as if stopping urination, hold for 3 seconds, release. Can do anywhere, anytime.",
    cautions: "Do not do Kegels while urinating. Avoid overdoing them.",
  },
  {
    name: "Stationary Cycling",
    description: "A low-impact cardiovascular exercise that's safe throughout pregnancy.",
    sets: 1,
    reps: "20-30 minutes",
    difficulty: "beginner",
    muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Calves", "Heart"],
    benefits: [
      "Improves cardiovascular health",
      "Low impact on joints",
      "Maintains fitness without overheating",
      "Reduces gestational diabetes risk"
    ],
    modifications: "Adjust seat height so knees are slightly bent. Use recumbent bike for more comfort.",
    cautions: "Stay hydrated. Avoid overheating. Stop if dizzy or short of breath.",
  },
];

export default function FirstTrimesterExercises() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--color-lavender)]/20 to-[var(--color-mint)]/20">
        <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-4">
          Safe Gym Exercises for First Trimester
        </h3>
        <p className="text-sm mb-4">
          During the first trimester, focus on maintaining fitness and building strength. 
          Most exercises are safe, but avoid contact sports and exercises lying flat on your back after 12 weeks.
        </p>

        <div className="space-y-3 mb-6">
          {firstTrimesterExercises.map((exercise, idx) => (
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

      <TipBox type="tip" title="First Trimester Exercise Tips">
        Stay hydrated, avoid overheating, and listen to your body. It's normal to feel more tired—rest when you need to. 
        If you experience any pain, dizziness, or bleeding, stop and contact your healthcare provider.
      </TipBox>

      <GymExerciseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        phase="First Trimester"
        exercises={firstTrimesterExercises}
      />
    </div>
  );
}
