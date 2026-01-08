import React from 'react';
import ExerciseCard from './ExerciseCard';

export default function ThirdTrimesterExercises() {
  const exercises = [
    {
      name: 'Modified Squats (Wall Support)',
      image: '/exercises/wall-squats-third.png',
      sets: 3,
      reps: '10-12',
      benefits: [
        'Strengthens legs for labor',
        'Opens pelvis',
        'Improves balance',
        'Reduces pressure on joints',
      ],
      formTips: [
        'Keep back against wall',
        'Feet shoulder-width apart',
        'Lower slowly with control',
        'Do not go below 90 degrees',
        'Use wall for support',
      ],
      modifications: [
        'Reduce depth of squat',
        'Use chair for support',
        'Hold onto resistance band',
      ],
      musclesWorked: ['Quadriceps', 'Glutes', 'Hamstrings', 'Core'],
      difficulty: 'easy' as const,
    },
    {
      name: 'Pelvic Floor Exercises (Kegels)',
      image: '/exercises/pelvic-floor.png',
      duration: 'Daily, 3 sets of 10',
      benefits: [
        'Strengthens pelvic floor',
        'Prepares for labor',
        'Improves bladder control',
        'Aids postpartum recovery',
      ],
      formTips: [
        'Identify pelvic floor muscles',
        'Contract for 3-5 seconds',
        'Relax for 3-5 seconds',
        'Do not hold breath',
        'Repeat 10 times',
      ],
      modifications: [
        'Do exercises while sitting',
        'Do exercises while lying down',
        'Reduce duration if uncomfortable',
      ],
      musclesWorked: ['Pelvic Floor'],
      difficulty: 'easy' as const,
    },
    {
      name: 'Walking (Increased)',
      image: '/exercises/pregnancy-walking.png',
      duration: '45-60 minutes daily',
      benefits: [
        'Excellent cardiovascular exercise',
        'Prepares body for labor',
        'Reduces swelling',
        'Improves mood',
      ],
      formTips: [
        'Walk at comfortable pace',
        'Stay well hydrated',
        'Wear supportive shoes',
        'Walk on flat surfaces',
        'Stop if dizzy or uncomfortable',
      ],
      modifications: [
        'Walk shorter distances',
        'Take breaks as needed',
        'Walk indoors if weather is bad',
      ],
      musclesWorked: ['Legs', 'Core', 'Cardiovascular'],
      difficulty: 'easy' as const,
    },
    {
      name: 'Prenatal Yoga (Gentle)',
      image: '/exercises/prenatal-yoga-gentle.png',
      duration: '30-45 minutes',
      benefits: [
        'Improves flexibility',
        'Reduces back pain',
        'Calms nervous system',
        'Prepares for labor',
      ],
      formTips: [
        'Focus on gentle stretches',
        'Avoid deep twists',
        'Do not lie flat on back',
        'Breathe deeply',
        'Listen to your body',
      ],
      modifications: [
        'Use props for support',
        'Take prenatal yoga class',
        'Use online guided videos',
      ],
      musclesWorked: ['Full Body', 'Flexibility', 'Core'],
      difficulty: 'easy' as const,
    },
    {
      name: 'Swimming (Low Impact)',
      image: '/exercises/pregnancy-swimming.png',
      duration: '20-30 minutes',
      benefits: [
        'Relieves back pain',
        'Supports joints',
        'Full body workout',
        'Cooling and comfortable',
      ],
      formTips: [
        'Use pool with lifeguard',
        'Avoid diving',
        'Use gentle strokes',
        'Stay hydrated',
        'Stop if uncomfortable',
      ],
      modifications: [
        'Water walking instead',
        'Floating exercises',
        'Aqua aerobics class',
      ],
      musclesWorked: ['Full Body', 'Cardiovascular'],
      difficulty: 'easy' as const,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-soft-blush/30 to-gentle-lavender/30 rounded-2xl p-8 border border-soft-blush">
        <h3 className="text-2xl font-bold text-dark-text mb-4">💪 Third Trimester Gym Routine</h3>
        <p className="text-gray-700 mb-4">
          The third trimester is about preparing your body for labor and managing discomfort. 
          Exercise becomes gentler and more focused on pelvic floor strengthening and flexibility. 
          Listen to your body and modify as needed—your comfort and safety are paramount.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-dark-text mb-2">Recommended Frequency</h4>
            <p className="text-gray-700">3-4 days per week, gentler intensity</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-dark-text mb-2">Focus</h4>
            <p className="text-gray-700">Pelvic floor, flexibility, and comfort</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-dark-text mb-2">Intensity</h4>
            <p className="text-gray-700">Light to moderate, listen to your body</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-dark-text mb-2">Key Goal</h4>
            <p className="text-gray-700">Prepare for labor and manage symptoms</p>
          </div>
        </div>
      </div>

      {/* Exercise Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.name} {...(exercise as any)} />
        ))}
      </div>

      {/* Labor Preparation */}
      <div className="bg-mint-cream/30 rounded-2xl p-8 border border-mint-cream">
        <h3 className="text-2xl font-bold text-dark-text mb-4">🤰 Preparing Your Body for Labor</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-dark-text mb-3">Pelvic Floor Strength</h4>
            <p className="text-sm text-gray-700 mb-3">
              A strong pelvic floor helps during labor and recovery. Kegel exercises are your best friend now.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Do 3 sets of 10 Kegels daily</li>
              <li>• Hold each contraction 3-5 seconds</li>
              <li>• Relax between contractions</li>
              <li>• Do them anywhere, anytime</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">Perineal Massage</h4>
            <p className="text-sm text-gray-700 mb-3">
              Starting at 34 weeks, gentle perineal massage may reduce tearing risk.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Use clean hands or partner's hands</li>
              <li>• Apply warm oil or lubricant</li>
              <li>• Gently stretch perineal area</li>
              <li>• Do 5-10 minutes daily</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">Squatting Practice</h4>
            <p className="text-sm text-gray-700 mb-3">
              Squatting opens the pelvis and is a great labor position. Practice now.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Hold onto a sturdy object</li>
              <li>• Lower into a squat slowly</li>
              <li>• Hold for 30 seconds</li>
              <li>• Practice several times daily</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">Breathing Exercises</h4>
            <p className="text-sm text-gray-700 mb-3">
              Deep breathing calms your nervous system and prepares you for labor.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Practice belly breathing</li>
              <li>• Inhale for 4 counts</li>
              <li>• Exhale for 4 counts</li>
              <li>• Do 5-10 minutes daily</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Common Discomforts */}
      <div className="bg-warm-peach/20 rounded-2xl p-8 border border-warm-peach">
        <h3 className="text-2xl font-bold text-dark-text mb-4">Managing Third Trimester Discomforts</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-dark-text mb-3">Back Pain</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Prenatal yoga and stretching</li>
              <li>• Pelvic support belt</li>
              <li>• Proper posture and body mechanics</li>
              <li>• Warm baths or heating pads</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">Swelling</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Elevate legs when possible</li>
              <li>• Wear compression socks</li>
              <li>• Stay hydrated</li>
              <li>• Gentle walking and swimming</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">Insomnia</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Prenatal yoga and meditation</li>
              <li>• Pregnancy pillow for support</li>
              <li>• Avoid caffeine after 2pm</li>
              <li>• Establish sleep routine</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">Braxton Hicks</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Change positions</li>
              <li>• Take a warm bath</li>
              <li>• Stay hydrated</li>
              <li>• Practice relaxation techniques</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Warning Signs */}
      <div className="bg-soft-blush/20 rounded-2xl p-8 border border-soft-blush">
        <h3 className="text-2xl font-bold text-dark-text mb-4">⚠️ When to Stop Exercise and Call Your Doctor:</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-soft-blush font-bold mr-3">•</span>
            <span className="text-gray-700">Vaginal bleeding or fluid leakage</span>
          </li>
          <li className="flex items-start">
            <span className="text-soft-blush font-bold mr-3">•</span>
            <span className="text-gray-700">Severe abdominal or pelvic pain</span>
          </li>
          <li className="flex items-start">
            <span className="text-soft-blush font-bold mr-3">•</span>
            <span className="text-gray-700">Persistent contractions (more than 6 per hour)</span>
          </li>
          <li className="flex items-start">
            <span className="text-soft-blush font-bold mr-3">•</span>
            <span className="text-gray-700">Chest pain or severe shortness of breath</span>
          </li>
          <li className="flex items-start">
            <span className="text-soft-blush font-bold mr-3">•</span>
            <span className="text-gray-700">Dizziness, fainting, or vision changes</span>
          </li>
          <li className="flex items-start">
            <span className="text-soft-blush font-bold mr-3">•</span>
            <span className="text-gray-700">Decreased fetal movement</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
