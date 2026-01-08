import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExerciseCardProps {
  name: string;
  image: string;
  reps?: string;
  sets?: number;
  duration?: string;
  benefits: string[];
  formTips: string[];
  modifications?: string[];
  musclesWorked: string[];
  difficulty: 'easy' | 'moderate' | 'challenging';
}

export default function ExerciseCard({
  name,
  image,
  reps,
  sets,
  duration,
  benefits,
  formTips,
  modifications,
  musclesWorked,
  difficulty,
}: ExerciseCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const difficultyColors = {
    easy: 'bg-mint-cream text-green-700',
    moderate: 'bg-warm-peach text-orange-700',
    challenging: 'bg-soft-blush text-red-700',
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-soft-cream">
      {/* Exercise Image */}
      <div className="relative w-full h-64 bg-gradient-to-br from-soft-cream to-mint-cream overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Exercise Details */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-dark-text mb-2">{name}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[difficulty]}`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-soft-cream">
          {sets && (
            <div className="bg-soft-cream rounded-lg p-3">
              <p className="text-xs text-gray-600 font-medium">SETS</p>
              <p className="text-lg font-bold text-dark-text">{sets}</p>
            </div>
          )}
          {reps && (
            <div className="bg-soft-cream rounded-lg p-3">
              <p className="text-xs text-gray-600 font-medium">REPS</p>
              <p className="text-lg font-bold text-dark-text">{reps}</p>
            </div>
          )}
          {duration && (
            <div className="bg-soft-cream rounded-lg p-3">
              <p className="text-xs text-gray-600 font-medium">DURATION</p>
              <p className="text-lg font-bold text-dark-text">{duration}</p>
            </div>
          )}
        </div>

        {/* Muscles Worked */}
        <div className="mb-4">
          <h4 className="font-semibold text-dark-text mb-2 text-sm">Muscles Worked</h4>
          <div className="flex flex-wrap gap-2">
            {musclesWorked.map((muscle) => (
              <span
                key={muscle}
                className="px-3 py-1 bg-gentle-lavender text-purple-700 rounded-full text-sm font-medium"
              >
                {muscle}
              </span>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <h4 className="font-semibold text-dark-text mb-2 text-sm">Benefits</h4>
          <ul className="space-y-1">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start">
                <span className="text-warm-peach mr-2 font-bold">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable Section */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-gradient-to-r from-soft-blush to-warm-peach hover:from-soft-blush/80 hover:to-warm-peach/80 text-white font-semibold py-2 rounded-lg flex items-center justify-between transition-all duration-300"
        >
          <span>{isExpanded ? 'Hide Details' : 'Show Form Tips'}</span>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </Button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 space-y-4 pt-4 border-t border-soft-cream animate-in fade-in duration-300">
            {/* Form Tips */}
            <div>
              <h5 className="font-semibold text-dark-text mb-2 text-sm">Form Tips</h5>
              <ul className="space-y-2">
                {formTips.map((tip, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start">
                    <span className="text-gentle-lavender mr-2 font-bold">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Modifications */}
            {modifications && modifications.length > 0 && (
              <div>
                <h5 className="font-semibold text-dark-text mb-2 text-sm">Modifications</h5>
                <ul className="space-y-2">
                  {modifications.map((mod, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-mint-cream mr-2 font-bold">→</span>
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
