import { useState } from "react";
import { X, ChevronRight, Heart, Zap, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

export interface GymExercise {
  name: string;
  description: string;
  sets: number;
  reps: string;
  duration?: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  muscleGroups: string[];
  benefits: string[];
  modifications?: string;
  cautions?: string;
  imageUrl?: string;
}

interface GymExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
  phase: string;
  exercises: GymExercise[];
}

export default function GymExerciseModal({
  isOpen,
  onClose,
  phase,
  exercises,
}: GymExerciseModalProps) {
  const [selectedExercise, setSelectedExercise] = useState<GymExercise | null>(
    exercises[0] || null
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-[var(--font-heading)]">
            Detailed Gym Exercises - {phase}
          </DialogTitle>
          <DialogClose />
        </DialogHeader>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {/* Exercise List */}
          <div className="md:col-span-1 space-y-2">
            <h3 className="font-[var(--font-heading)] font-semibold mb-4">
              Select Exercise
            </h3>
            {exercises.map((exercise, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedExercise(exercise)}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  selectedExercise?.name === exercise.name
                    ? "bg-[var(--color-blush)] text-white shadow-md"
                    : "bg-[var(--color-cream)] hover:bg-[var(--color-blush)]/20"
                }`}
              >
                <div className="font-semibold text-sm">{exercise.name}</div>
                <div className="text-xs opacity-75">
                  {exercise.difficulty.charAt(0).toUpperCase() +
                    exercise.difficulty.slice(1)}
                </div>
              </button>
            ))}
          </div>

          {/* Exercise Details */}
          <div className="md:col-span-2">
            {selectedExercise && (
              <div className="space-y-6">
                {/* Exercise Image */}
                {selectedExercise.imageUrl && (
                  <div className="w-full h-64 rounded-lg overflow-hidden bg-[var(--color-cream)]">
                    <img
                      src={selectedExercise.imageUrl}
                      alt={selectedExercise.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Description */}
                <div>
                  <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-2">
                    {selectedExercise.name}
                  </h3>
                  <p className="text-gray-700">{selectedExercise.description}</p>
                </div>

                {/* Sets & Reps */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[var(--color-lavender)]/20">
                    <div className="text-sm font-semibold text-[var(--color-lavender)]">
                      Sets
                    </div>
                    <div className="text-2xl font-bold">
                      {selectedExercise.sets}
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--color-mint)]/20">
                    <div className="text-sm font-semibold text-[var(--color-sage)]">
                      Reps/Duration
                    </div>
                    <div className="text-lg font-bold">
                      {selectedExercise.reps}
                    </div>
                  </div>
                </div>

                {/* Muscle Groups */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[var(--color-rose)]" />
                    Muscles Worked
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExercise.muscleGroups.map((muscle, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[var(--color-peach)]/30 text-sm font-medium"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[var(--color-rose)]" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {selectedExercise.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-[var(--color-rose)] flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modifications */}
                {selectedExercise.modifications && (
                  <div className="p-4 rounded-lg bg-[var(--color-lavender)]/20">
                    <h4 className="font-semibold mb-2">Modifications</h4>
                    <p className="text-sm">{selectedExercise.modifications}</p>
                  </div>
                )}

                {/* Cautions */}
                {selectedExercise.cautions && (
                  <div className="p-4 rounded-lg bg-[var(--color-rose)]/10 border border-[var(--color-rose)]/30">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-[var(--color-rose)]">
                      <AlertCircle className="w-4 h-4" />
                      Important Cautions
                    </h4>
                    <p className="text-sm">{selectedExercise.cautions}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
