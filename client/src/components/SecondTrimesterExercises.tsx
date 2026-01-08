import { useState } from "react";
import { Button } from "@/components/ui/button";
import GymExerciseModal, { GymExercise } from "./GymExerciseModal";
import TipBox from "./TipBox";

const secondTrimesterExercises: GymExercise[] = [
  {
    name: "Glute Bridges",
    description: "Strengthens glutes and lower back while being safe for your growing belly.",
    sets: 3,
    reps: "12-15 reps",
    difficulty: "beginner",
    muscleGroups: ["Glutes", "Hamstrings", "Lower Back", "Core"],
    benefits: [
      "Strengthens glutes for labor preparation",
      "Reduces lower back pain",
      "Improves pelvic floor function",
      "Maintains hip stability"
    ],
    modifications: "Lie on back with pillow under head. Feet flat on floor, hip-width apart. Lift hips and squeeze glutes.",
    cautions: "Do not lie flat on your back for extended periods after 20 weeks. Use a pillow under your head.",
  },
  {
    name: "Side-Lying Leg Lifts",
    description: "Targets outer thighs and hips without straining the abdomen.",
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
    modifications: "Lie on your side with hips stacked. Lift top leg slowly and controlled. Keep core engaged.",
    cautions: "Avoid lying flat on your back. Use a pillow between knees for comfort.",
  },
  {
    name: "Modified Plank (Wall or Incline)",
    description: "Builds core strength without putting pressure on your abdomen.",
    sets: 3,
    reps: "20-30 seconds hold",
    difficulty: "intermediate",
    muscleGroups: ["Core", "Shoulders", "Back", "Chest"],
    benefits: [
      "Strengthens core for labor",
      "Improves posture",
      "Reduces back pain",
      "Builds endurance"
    ],
    modifications: "Use wall or incline bench. Hands shoulder-width apart. Keep body in straight line.",
    cautions: "Do not do floor planks. Avoid any exercise that causes doming of the abdomen.",
  },
  {
    name: "Stationary Lunges (Modified)",
    description: "Continues building leg strength with modifications for your changing body.",
    sets: 3,
    reps: "10 reps each leg",
    difficulty: "intermediate",
    muscleGroups: ["Quadriceps", "Glutes", "Hamstrings"],
    benefits: [
      "Maintains leg strength",
      "Improves balance",
      "Prepares for active labor",
      "Reduces leg cramps"
    ],
    modifications: "Hold onto a rail. Take smaller steps. Keep torso upright. Avoid going too deep.",
    cautions: "Do not let front knee go past toes. Stop if you feel unstable or dizzy.",
  },
  {
    name: "Dumbbell Bicep Curls (Light)",
    description: "Maintains upper body strength for carrying and lifting after baby arrives.",
    sets: 3,
    reps: "12-15 reps",
    difficulty: "beginner",
    muscleGroups: ["Biceps", "Shoulders", "Forearms"],
    benefits: [
      "Maintains arm strength",
      "Prepares for carrying baby",
      "Improves posture",
      "Boosts confidence"
    ],
    modifications: "Use 2-5 lb weights. Keep elbows at sides. Move slowly and controlled.",
    cautions: "Do not use heavy weights. Avoid jerky movements.",
  },
  {
    name: "Swimming or Water Aerobics",
    description: "Full-body, low-impact exercise that feels amazing during pregnancy.",
    sets: 1,
    reps: "20-30 minutes",
    difficulty: "beginner",
    muscleGroups: ["Full Body", "Shoulders", "Back", "Legs", "Core"],
    benefits: [
      "Relieves joint pressure",
      "Improves cardiovascular health",
      "Reduces swelling",
      "Boosts mood",
      "Safe for all trimesters"
    ],
    modifications: "Water walking, water aerobics, or gentle swimming. Use kickboard for support.",
    cautions: "Avoid diving. Stay hydrated even in water. Avoid overheating.",
  },
];

export default function SecondTrimesterExercises() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--color-peach)]/20 to-[var(--color-blush)]/20">
        <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-4">
          Safe Gym Exercises for Second Trimester
        </h3>
        <p className="text-sm mb-4">
          The second trimester is often called the honeymoon phase of pregnancy. You likely have more energy and your belly is showing, 
          making it easier to modify exercises appropriately. Focus on maintaining strength and preparing your body for labor.
        </p>

        <div className="space-y-3 mb-6">
          {secondTrimesterExercises.map((exercise, idx) => (
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

      <TipBox type="tip" title="Second Trimester Exercise Tips">
        You may feel stronger now, but avoid lying flat on your back for extended periods. 
        Stay hydrated, wear supportive shoes, and do not push yourself too hard. 
        This is a great time to bond with your baby while exercising!
      </TipBox>

      <GymExerciseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        phase="Second Trimester"
        exercises={secondTrimesterExercises}
      />
    </div>
  );
}
