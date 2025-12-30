import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import DataTable from "@/components/DataTable";
import TipBox from "@/components/TipBox";
import MocktailCard from "@/components/MocktailCard";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Leaf, 
  Dumbbell, 
  Stethoscope, 
  Sparkles,
  Brain,
  AlertTriangle,
  CheckCircle,
  XCircle
} from "lucide-react";

const nutritionData = [
  { nutrient: "Folic Acid", amount: "400-800 mcg/day", source: "Leafy greens, fortified cereals, supplements", benefit: "Prevents neural tube defects" },
  { nutrient: "Iron", amount: "18 mg/day", source: "Red meat, spinach, beans, fortified cereals", benefit: "Supports blood production" },
  { nutrient: "Calcium", amount: "1000 mg/day", source: "Dairy, fortified plant milk, leafy greens", benefit: "Bone health for you and baby" },
  { nutrient: "Vitamin D", amount: "600 IU/day", source: "Sunlight, fatty fish, fortified foods", benefit: "Calcium absorption, immune function" },
  { nutrient: "Omega-3 (DHA)", amount: "200-300 mg/day", source: "Fatty fish, walnuts, flaxseed", benefit: "Brain and eye development" },
  { nutrient: "Zinc", amount: "8 mg/day", source: "Meat, shellfish, legumes, seeds", benefit: "Fertility and immune function" },
];

const exerciseData = [
  { exercise: "Walking", duration: "30 min/day", muscles: "Legs, core, cardiovascular", benefits: "Low impact, improves circulation, reduces stress" },
  { exercise: "Swimming", duration: "30-45 min", muscles: "Full body, cardiovascular", benefits: "Joint-friendly, builds endurance" },
  { exercise: "Yoga", duration: "20-30 min", muscles: "Core, flexibility, balance", benefits: "Reduces stress, improves flexibility" },
  { exercise: "Strength Training", duration: "2-3x/week", muscles: "Full body", benefits: "Builds muscle, supports metabolism" },
  { exercise: "Cycling", duration: "30 min", muscles: "Legs, cardiovascular", benefits: "Low impact cardio, builds leg strength" },
];

const medicalTests = [
  { test: "General Health Checkup", timing: "3-6 months before TTC", purpose: "Baseline health assessment" },
  { test: "Blood Work Panel", timing: "3 months before TTC", purpose: "Check iron, thyroid, vitamin levels" },
  { test: "Pap Smear", timing: "If due", purpose: "Cervical health screening" },
  { test: "STI Screening", timing: "Before TTC", purpose: "Ensure reproductive health" },
  { test: "Genetic Carrier Screening", timing: "Optional, before TTC", purpose: "Identify genetic conditions" },
  { test: "Dental Checkup", timing: "Before TTC", purpose: "Oral health affects pregnancy" },
];

const safeSkincareIngredients = [
  { ingredient: "Vitamin C", purpose: "Brightening, antioxidant", notes: "Safe and beneficial" },
  { ingredient: "Hyaluronic Acid", purpose: "Hydration", notes: "Safe throughout pregnancy" },
  { ingredient: "Niacinamide", purpose: "Pore minimizing, brightening", notes: "Safe alternative to retinoids" },
  { ingredient: "Azelaic Acid", purpose: "Acne, hyperpigmentation", notes: "Safe for pregnancy" },
  { ingredient: "Glycolic Acid (low %)", purpose: "Gentle exfoliation", notes: "Under 10% concentration" },
  { ingredient: "Mineral Sunscreen", purpose: "Sun protection", notes: "Zinc oxide, titanium dioxide" },
];

const unsafeSkincareIngredients = [
  { ingredient: "Retinoids (Retinol, Tretinoin)", reason: "Linked to birth defects", alternative: "Bakuchiol, Vitamin C" },
  { ingredient: "Hydroquinone", reason: "High absorption rate", alternative: "Vitamin C, Azelaic Acid" },
  { ingredient: "Salicylic Acid (high %)", reason: "Oral form linked to complications", alternative: "Glycolic acid, Lactic acid" },
  { ingredient: "Chemical Sunscreens", reason: "Potential hormone disruption", alternative: "Mineral sunscreens" },
  { ingredient: "Formaldehyde", reason: "Carcinogenic", alternative: "Formaldehyde-free products" },
];

const mocktails = [
  {
    name: "Sparkling Berry Bliss",
    description: "A refreshing antioxidant-rich mocktail",
    ingredients: ["1 cup mixed berries", "1/2 cup sparkling water", "Fresh mint leaves", "1 tbsp honey", "Ice"],
    instructions: "Muddle berries with honey, add ice and sparkling water, garnish with mint.",
    benefits: ["Antioxidants", "Hydration", "Vitamin C"],
    color: "var(--color-blush)",
  },
  {
    name: "Ginger Peach Sunrise",
    description: "Soothing and naturally sweet",
    ingredients: ["1 ripe peach, sliced", "1 inch fresh ginger", "1 cup coconut water", "Squeeze of lime"],
    instructions: "Blend peach and ginger, strain, mix with coconut water and lime.",
    benefits: ["Anti-nausea", "Hydration", "Vitamins"],
    color: "var(--color-peach)",
  },
  {
    name: "Lavender Lemonade",
    description: "Calming and elegant",
    ingredients: ["2 lemons, juiced", "1 tbsp lavender syrup", "2 cups water", "Fresh lavender sprig"],
    instructions: "Mix lemon juice with lavender syrup and water, serve over ice with lavender garnish.",
    benefits: ["Relaxation", "Vitamin C", "Hydration"],
    color: "var(--color-lavender)",
  },
];

export default function TryingToConceive() {
  return (
    <Layout>
      <PageHero
        title="Trying to Conceive"
        subtitle="Preconception Health"
        description="Prepare your body and mind for the beautiful journey ahead. Our evidence-based guidance helps you optimize your fertility naturally while building healthy habits for pregnancy."
        icon={Heart}
        gradient="bg-gradient-to-br from-[var(--color-blush)]/40 via-[var(--color-lavender)]/20 to-[var(--color-cream)]"
        mascotVariant="meditation"
      />

      <div className="container py-8">
        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {["Nutrition", "Exercise", "Medical Care", "Skincare", "Mental Health", "Mocktails"].map((section) => (
            <a 
              key={section} 
              href={`#${section.toLowerCase().replace(" ", "-")}`}
              className="px-4 py-2 rounded-full bg-[var(--color-cream)] hover:bg-[var(--color-blush)]/30 text-sm font-medium transition-colors"
            >
              {section}
            </a>
          ))}
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The preconception period is a crucial time to optimize your health before pregnancy. 
            According to the <strong>American College of Obstetricians and Gynecologists (ACOG)</strong>, 
            preconception care can significantly improve pregnancy outcomes and reduce the risk of complications.
            <sup className="text-[var(--color-rose)]">[1]</sup>
          </p>
        </div>

        {/* Nutrition Section */}
        <ContentSection title="Nutrition & Supplements" icon={Leaf} id="nutrition">
          <p className="mb-6">
            Proper nutrition before conception is essential for both fertility and early fetal development. 
            The <strong>National Institutes of Health (NIH)</strong> recommends starting prenatal vitamins 
            at least one month before trying to conceive, with folic acid being particularly critical for 
            preventing neural tube defects.<sup className="text-[var(--color-rose)]">[2]</sup>
          </p>
          
          <TipBox type="tip" title="Lunebloom's Tip">
            Start taking a prenatal vitamin with at least 400 mcg of folic acid at least 3 months before 
            trying to conceive. This gives your body time to build up adequate folate levels.
          </TipBox>

          <h3 className="text-xl font-[var(--font-heading)] font-semibold mt-8 mb-4">
            Essential Nutrients for Preconception
          </h3>
          
          <DataTable
            columns={[
              { key: "nutrient", header: "Nutrient" },
              { key: "amount", header: "Daily Amount" },
              { key: "source", header: "Food Sources" },
              { key: "benefit", header: "Benefit" },
            ]}
            data={nutritionData}
            variant="safe"
          />

          <TipBox type="warning" title="Foods to Limit or Avoid">
            <ul className="list-disc list-inside space-y-1">
              <li>High-mercury fish (shark, swordfish, king mackerel)</li>
              <li>Raw or undercooked meats and eggs</li>
              <li>Unpasteurized dairy products</li>
              <li>Excessive caffeine (limit to 200mg/day)</li>
              <li>Alcohol (no safe amount during TTC or pregnancy)</li>
            </ul>
          </TipBox>
        </ContentSection>

        {/* Exercise Section */}
        <ContentSection title="Exercise & Physical Activity" icon={Dumbbell} id="exercise">
          <p className="mb-6">
            Regular physical activity improves fertility by maintaining a healthy weight, reducing stress, 
            and improving blood flow to reproductive organs. The <strong>ACOG</strong> recommends at least 
            150 minutes of moderate-intensity aerobic activity per week for women trying to conceive.
            <sup className="text-[var(--color-rose)]">[1]</sup>
          </p>

          <h3 className="text-xl font-[var(--font-heading)] font-semibold mt-8 mb-4">
            Recommended Exercises
          </h3>

          <DataTable
            columns={[
              { key: "exercise", header: "Exercise" },
              { key: "duration", header: "Duration" },
              { key: "muscles", header: "Muscles Worked" },
              { key: "benefits", header: "Fertility Benefits" },
            ]}
            data={exerciseData}
            variant="neutral"
          />

          <TipBox type="love" title="Listen to Your Body">
            While exercise is beneficial, avoid overtraining. Excessive high-intensity exercise can 
            actually disrupt ovulation. Aim for moderate, consistent activity that makes you feel 
            energized, not exhausted.
          </TipBox>
        </ContentSection>

        {/* Medical Care Section */}
        <ContentSection title="Medical Care & Testing" icon={Stethoscope} id="medical-care">
          <p className="mb-6">
            A preconception checkup with your healthcare provider is one of the most important steps 
            you can take. This visit allows you to review your medical history, update vaccinations, 
            and address any health conditions that could affect pregnancy.
            <sup className="text-[var(--color-rose)]">[1]</sup>
          </p>

          <h3 className="text-xl font-[var(--font-heading)] font-semibold mt-8 mb-4">
            Recommended Tests & Checkups
          </h3>

          <DataTable
            columns={[
              { key: "test", header: "Test/Checkup" },
              { key: "timing", header: "When" },
              { key: "purpose", header: "Purpose" },
            ]}
            data={medicalTests}
          />

          <TipBox type="info" title="Medications Review">
            Bring a list of all medications, supplements, and herbal remedies you're taking to your 
            preconception appointment. Some medications need to be adjusted or changed before pregnancy.
          </TipBox>
        </ContentSection>

        {/* Skincare Section */}
        <ContentSection title="Skincare During Preconception" icon={Sparkles} id="skincare">
          <p className="mb-6">
            Now is the perfect time to transition your skincare routine to pregnancy-safe products. 
            The <strong>American Academy of Dermatology (AAD)</strong> recommends avoiding certain 
            ingredients that could be harmful during early pregnancy, even before you know you're pregnant.
            <sup className="text-[var(--color-rose)]">[3]</sup>
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-[var(--color-sage)]" />
                <h3 className="text-lg font-[var(--font-heading)] font-semibold text-[var(--color-sage)]">
                  Safe Ingredients
                </h3>
              </div>
              <DataTable
                columns={[
                  { key: "ingredient", header: "Ingredient" },
                  { key: "purpose", header: "Purpose" },
                  { key: "notes", header: "Notes" },
                ]}
                data={safeSkincareIngredients}
                variant="safe"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-[var(--color-rose)]" />
                <h3 className="text-lg font-[var(--font-heading)] font-semibold text-[var(--color-rose)]">
                  Ingredients to Avoid
                </h3>
              </div>
              <DataTable
                columns={[
                  { key: "ingredient", header: "Ingredient" },
                  { key: "reason", header: "Why Avoid" },
                  { key: "alternative", header: "Safe Alternative" },
                ]}
                data={unsafeSkincareIngredients}
                variant="unsafe"
              />
            </div>
          </div>

          <TipBox type="tip" title="Skincare Transition Tip">
            If you're currently using retinoids, stop them at least one month before trying to conceive. 
            Replace with pregnancy-safe alternatives like bakuchiol or vitamin C serums.
          </TipBox>
        </ContentSection>

        {/* Mental Health Section */}
        <ContentSection title="Mental & Emotional Health" icon={Brain} id="mental-health">
          <p className="mb-6">
            The emotional journey of trying to conceive can be both exciting and stressful. 
            Taking care of your mental health is just as important as physical preparation. 
            Chronic stress can affect hormone levels and ovulation, so finding healthy coping 
            strategies is essential.<sup className="text-[var(--color-rose)]">[4]</sup>
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl bg-[var(--color-lavender)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">Stress Management Techniques</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-lavender)] mt-2" />
                  Mindfulness meditation (10-15 minutes daily)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-lavender)] mt-2" />
                  Deep breathing exercises
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-lavender)] mt-2" />
                  Journaling your thoughts and feelings
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-lavender)] mt-2" />
                  Gentle yoga or stretching
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-lavender)] mt-2" />
                  Spending time in nature
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-mint)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">Building Your Support System</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-mint)] mt-2" />
                  Communicate openly with your partner
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-mint)] mt-2" />
                  Join a TTC support group or community
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-mint)] mt-2" />
                  Consider speaking with a therapist
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-mint)] mt-2" />
                  Lean on trusted friends and family
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-mint)] mt-2" />
                  Set boundaries around pregnancy discussions
                </li>
              </ul>
            </div>
          </div>

          <TipBox type="love" title="Remember">
            It's completely normal to feel a range of emotions during this time. Be patient and 
            compassionate with yourself. Your journey is unique, and there's no "right" way to feel.
          </TipBox>
        </ContentSection>

        {/* Mocktails Section */}
        <ContentSection title="Lunebloom's Mocktail Menu" icon={Heart} id="mocktails">
          <p className="mb-6">
            Choosing to avoid alcohol doesn't mean missing out on delicious, celebratory drinks! 
            These mocktails are not only beautiful and tasty but also packed with nutrients that 
            support your fertility journey.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {mocktails.map((mocktail) => (
              <MocktailCard key={mocktail.name} {...mocktail} />
            ))}
          </div>
        </ContentSection>

        {/* References */}
        <section className="py-12 border-t border-border mt-12">
          <h2 className="text-xl font-[var(--font-heading)] font-semibold mb-6">Scientific References</h2>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li>
              <span className="text-[var(--color-rose)]">[1]</span> American College of Obstetricians and Gynecologists. (2019). 
              <em> Prepregnancy Counseling.</em> ACOG Committee Opinion No. 762.
            </li>
            <li>
              <span className="text-[var(--color-rose)]">[2]</span> National Institutes of Health. (2024). 
              <em> Dietary Supplements During Pregnancy.</em> Office of Dietary Supplements.
            </li>
            <li>
              <span className="text-[var(--color-rose)]">[3]</span> American Academy of Dermatology. (2025). 
              <em> Dermatologist-approved pregnancy skin care.</em>
            </li>
            <li>
              <span className="text-[var(--color-rose)]">[4]</span> World Health Organization. (2016). 
              <em> WHO recommendations on antenatal care for a positive pregnancy experience.</em>
            </li>
          </ol>
        </section>
      </div>
    </Layout>
  );
}
