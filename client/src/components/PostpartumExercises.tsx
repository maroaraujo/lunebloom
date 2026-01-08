import React from 'react';
import ExerciseCard from './ExerciseCard';

export default function PostpartumExercises() {
  const exercises = [
    {
      name: 'Pelvic Floor Rehabilitation',
      image: '/exercises/postpartum-kegels.png',
      duration: 'Daily, 3 sets of 10',
      benefits: [
        'Restores pelvic floor strength',
        'Improves bladder control',
        'Enhances sexual function',
        'Prevents prolapse',
      ],
      formTips: [
        'Start gently if had tear or episiotomy',
        'Contract for 3-5 seconds',
        'Relax for 3-5 seconds',
        'Increase duration gradually',
        'Do not hold breath',
      ],
      modifications: [
        'Start with shorter contractions',
        'Increase frequency gradually',
        'Work with pelvic floor PT if needed',
      ],
      musclesWorked: ['Pelvic Floor'],
      difficulty: 'easy' as const,
    },
    {
      name: 'Abdominal Bracing (Weeks 2-6)',
      image: '/exercises/postpartum-bracing.png',
      sets: 3,
      reps: '10-15',
      benefits: [
        'Rebuilds core strength',
        'Supports diastasis recti recovery',
        'Improves posture',
        'Reduces back pain',
      ],
      formTips: [
        'Lie on your back with knees bent',
        'Gently engage core muscles',
        'Hold for 5-10 seconds',
        'Breathe throughout',
        'Avoid full sit-ups initially',
      ],
      modifications: [
        'Do while sitting',
        'Do while standing',
        'Reduce duration if uncomfortable',
      ],
      musclesWorked: ['Core', 'Rectus Abdominis'],
      difficulty: 'easy' as const,
    },
    {
      name: 'Walking (Weeks 2+)',
      image: '/exercises/postpartum-walking.png',
      duration: '20-30 minutes daily',
      benefits: [
        'Rebuilds cardiovascular fitness',
        'Improves mood',
        'Aids healing',
        'Low impact on joints',
      ],
      formTips: [
        'Start with short walks',
        'Gradually increase distance',
        'Wear supportive shoes',
        'Stay well hydrated',
        'Listen to your body',
      ],
      modifications: [
        'Start with 10-minute walks',
        'Walk indoors if weather is bad',
        'Use stroller for support',
      ],
      musclesWorked: ['Legs', 'Core', 'Cardiovascular'],
      difficulty: 'easy' as const,
    },
    {
      name: 'Postpartum Yoga (Weeks 4-6+)',
      image: '/exercises/postpartum-yoga.png',
      duration: '20-30 minutes',
      benefits: [
        'Gentle stretching',
        'Rebuilds flexibility',
        'Reduces stress',
        'Improves breathing',
      ],
      formTips: [
        'Focus on gentle poses',
        'Avoid deep twists initially',
        'Do not strain abdomen',
        'Breathe deeply',
        'Modify as needed',
      ],
      modifications: [
        'Take postpartum yoga class',
        'Use online guided videos',
        'Work with instructor',
      ],
      musclesWorked: ['Full Body', 'Flexibility', 'Core'],
      difficulty: 'easy' as const,
    },
    {
      name: 'Glute Bridges (Weeks 6+)',
      image: '/exercises/postpartum-glute-bridge.png',
      sets: 3,
      reps: '12-15',
      benefits: [
        'Strengthens glutes',
        'Supports lower back',
        'Improves posture',
        'Helps with baby carrying',
      ],
      formTips: [
        'Lie on back with knees bent',
        'Feet flat on floor',
        'Lift hips toward ceiling',
        'Squeeze glutes at top',
        'Lower slowly',
      ],
      modifications: [
        'Reduce range of motion',
        'Do on incline',
        'Use resistance band',
      ],
      musclesWorked: ['Glutes', 'Hamstrings', 'Core'],
      difficulty: 'moderate' as const,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-mint-cream/30 to-soft-blush/30 rounded-2xl p-8 border border-mint-cream">
        <h3 className="text-2xl font-bold text-dark-text mb-4">💪 Postpartum Exercise Recovery</h3>
        <p className="text-gray-700 mb-4">
          Postpartum exercise is about gentle recovery and rebuilding strength. The timeline depends on your delivery method and how you feel. Always get clearance from your healthcare provider before starting exercise, typically at the 6-week postpartum checkup.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-dark-text mb-2">Weeks 1-2</h4>
            <p className="text-gray-700 text-sm">Rest and recovery. Gentle pelvic floor exercises only.</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-dark-text mb-2">Weeks 2-6</h4>
            <p className="text-gray-700 text-sm">Walking and gentle core work. Get provider clearance.</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-dark-text mb-2">Weeks 6+</h4>
            <p className="text-gray-700 text-sm">Gradually increase intensity based on how you feel.</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-dark-text mb-2">Key Principle</h4>
            <p className="text-gray-700 text-sm">Listen to your body. Healing takes time.</p>
          </div>
        </div>
      </div>

      {/* Exercise Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.name} {...(exercise as any)} />
        ))}
      </div>

      {/* Recovery Timeline */}
      <div className="bg-warm-peach/20 rounded-2xl p-8 border border-warm-peach">
        <h3 className="text-2xl font-bold text-dark-text mb-4">📅 Postpartum Recovery Timeline</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-dark-text mb-3">Weeks 1-2: Complete Rest</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Focus on bonding with baby</li>
              <li>• Rest as much as possible</li>
              <li>• Gentle pelvic floor exercises</li>
              <li>• Light walking around house only</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">Weeks 2-6: Gentle Movement</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Increase walking gradually</li>
              <li>• Begin gentle core work</li>
              <li>• Continue pelvic floor exercises</li>
              <li>• Get provider clearance at 6 weeks</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">Weeks 6-12: Progressive Return</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Gradually increase exercise intensity</li>
              <li>• Start strength training (if cleared)</li>
              <li>• Return to cardio gradually</li>
              <li>• Monitor for pain or bleeding</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">3+ Months: Full Return</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Resume pre-pregnancy exercise routine</li>
              <li>• Increase intensity as tolerated</li>
              <li>• Continue pelvic floor exercises</li>
              <li>• Work with PT if issues persist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Special Considerations */}
      <div className="bg-soft-blush/20 rounded-2xl p-8 border border-soft-blush">
        <h3 className="text-2xl font-bold text-dark-text mb-4">Special Considerations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-dark-text mb-3">After Vaginal Delivery</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Soreness and bleeding are normal</li>
              <li>• Pelvic floor may be bruised</li>
              <li>• Start with very gentle exercises</li>
              <li>• Increase gradually over weeks</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">After C-Section</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Abdominal incision needs time to heal</li>
              <li>• Avoid heavy lifting initially</li>
              <li>• Wait for provider clearance</li>
              <li>• Core work may take longer</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">Diastasis Recti</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Separation of abdominal muscles</li>
              <li>• Very common postpartum</li>
              <li>• Avoid sit-ups and crunches</li>
              <li>• Work with PT if severe</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark-text mb-3">If Breastfeeding</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Exercise does not affect milk</li>
              <li>• Wear supportive sports bra</li>
              <li>• Stay well hydrated</li>
              <li>• Exercise after feeding if possible</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Warning Signs */}
      <div className="bg-soft-blush/20 rounded-2xl p-8 border border-soft-blush">
        <h3 className="text-2xl font-bold text-dark-text mb-4">⚠️ Stop Exercise and Call Your Doctor If:</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-soft-blush font-bold mr-3">•</span>
            <span className="text-gray-700">Increased vaginal bleeding or clots</span>
          </li>
          <li className="flex items-start">
            <span className="text-soft-blush font-bold mr-3">•</span>
            <span className="text-gray-700">Severe abdominal or pelvic pain</span>
          </li>
          <li className="flex items-start">
            <span className="text-soft-blush font-bold mr-3">•</span>
            <span className="text-gray-700">Incision reopening or increased drainage</span>
          </li>
          <li className="flex items-start">
            <span className="text-soft-blush font-bold mr-3">•</span>
            <span className="text-gray-700">Dizziness or fainting</span>
          </li>
          <li className="flex items-start">
            <span className="text-soft-blush font-bold mr-3">•</span>
            <span className="text-gray-700">Chest pain or shortness of breath</span>
          </li>
        </ul>
      </div>

      {/* Mental Health Note */}
      <div className="bg-gentle-lavender/20 rounded-2xl p-8 border border-gentle-lavender">
        <h3 className="text-2xl font-bold text-dark-text mb-4">💝 Remember: Be Gentle With Yourself</h3>
        <p className="text-gray-700 mb-4">
          Your body just accomplished something incredible. Recovery is not linear, and that is completely normal. 
          Some days you will feel energized; other days you will be exhausted. Both are okay. Prioritize rest, 
          nourishment, and emotional well-being alongside physical recovery.
        </p>
        <p className="text-gray-700">
          If you are struggling with postpartum depression or anxiety, exercise is beneficial, but professional 
          support is essential. Please reach out to your healthcare provider.
        </p>
      </div>
    </div>
  );
}
