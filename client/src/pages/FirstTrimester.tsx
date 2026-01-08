import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import DataTable from "@/components/DataTable";
import TipBox from "@/components/TipBox";
import MocktailCard from "@/components/MocktailCard";
import FirstTrimesterExercises from "@/components/FirstTrimesterExercises";
import { 
  Sparkles, 
  Leaf, 
  Dumbbell, 
  Stethoscope, 
  Brain,
  CheckCircle,
  XCircle
} from "lucide-react";

const nutritionData = [
  { nutrient: "Folic Acid", amount: "600 mcg/day", source: "Prenatal vitamins, leafy greens", benefit: "Neural tube development" },
  { nutrient: "Iron", amount: "27 mg/day", source: "Red meat, spinach, fortified cereals", benefit: "Increased blood volume" },
  { nutrient: "Vitamin B6", amount: "1.9 mg/day", source: "Poultry, fish, potatoes, bananas", benefit: "May help with nausea" },
  { nutrient: "Ginger", amount: "As needed", source: "Fresh ginger, ginger tea", benefit: "Natural nausea relief" },
  { nutrient: "Protein", amount: "75g/day", source: "Lean meats, eggs, legumes, dairy", benefit: "Tissue growth and repair" },
  { nutrient: "Calcium", amount: "1000 mg/day", source: "Dairy, fortified plant milk", benefit: "Bone and teeth development" },
];

const medicalTests = [
  { test: "First Prenatal Visit", timing: "Weeks 6-8", purpose: "Confirm pregnancy, establish due date" },
  { test: "Blood Work Panel", timing: "First visit", purpose: "Blood type, Rh factor, immunity checks" },
  { test: "Urine Tests", timing: "Each visit", purpose: "Check for infections, protein, glucose" },
  { test: "Ultrasound", timing: "Weeks 6-9", purpose: "Confirm viability, check heartbeat" },
  { test: "NT Scan (optional)", timing: "Weeks 11-14", purpose: "Screen for chromosomal abnormalities" },
  { test: "NIPT (optional)", timing: "Week 10+", purpose: "Non-invasive genetic screening" },
];

const safeSkincareIngredients = [
  { ingredient: "Vitamin C", purpose: "Brightening", notes: "Safe and recommended" },
  { ingredient: "Hyaluronic Acid", purpose: "Hydration", notes: "Excellent for pregnancy skin" },
  { ingredient: "Niacinamide", purpose: "Acne, redness", notes: "Safe alternative to retinoids" },
  { ingredient: "Azelaic Acid", purpose: "Acne, melasma", notes: "ACOG approved for pregnancy" },
  { ingredient: "Centella Asiatica", purpose: "Soothing, healing", notes: "Great for sensitive skin" },
  { ingredient: "Mineral SPF 30+", purpose: "Sun protection", notes: "Essential for preventing melasma" },
];

const unsafeSkincareIngredients = [
  { ingredient: "Retinoids", reason: "Birth defect risk", alternative: "Bakuchiol, Vitamin C" },
  { ingredient: "Hydroquinone", reason: "High absorption", alternative: "Vitamin C, Azelaic Acid" },
  { ingredient: "High-dose Salicylic Acid", reason: "Oral form concerns", alternative: "Low-dose or avoid" },
  { ingredient: "Benzoyl Peroxide (high %)", reason: "Limited safety data", alternative: "Azelaic Acid" },
  { ingredient: "Essential Oils", reason: "Some can trigger contractions", alternative: "Fragrance-free products" },
];

const mocktails = [
  {
    name: "Ginger Mint Soother",
    description: "Perfect for morning sickness relief",
    ingredients: ["1 inch fresh ginger", "Fresh mint leaves", "1 cup sparkling water", "Honey to taste"],
    instructions: "Steep ginger in hot water, cool, add mint and sparkling water.",
    benefits: ["Anti-nausea", "Digestive aid", "Refreshing"],
    color: "var(--color-mint)",
  },
  {
    name: "Citrus Sunrise",
    description: "Vitamin C boost to start your day",
    ingredients: ["1 orange, juiced", "1/2 grapefruit, juiced", "Splash of grenadine", "Ice"],
    instructions: "Mix juices over ice, add grenadine for sunrise effect.",
    benefits: ["Vitamin C", "Immune support", "Energizing"],
    color: "var(--color-peach)",
  },
];

export default function FirstTrimester() {
  return (
    <Layout>
      <PageHero
        title="First Trimester"
        subtitle="The Beginning of a Miracle"
        description="Weeks 1-13 bring incredible transformation as your baby develops from a tiny cluster of cells to a fully formed little human. Navigate this foundational period with confidence and care."
        icon={Sparkles}
        gradient="bg-gradient-to-br from-[var(--color-lavender)]/40 via-[var(--color-blush)]/20 to-[var(--color-cream)]"
        imageSrc="/mascots/first-trimester-lunebloom.png"
        weeks="Weeks 1-13"
      />

      <div className="container py-8">
        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {["Nutrition", "Exercise", "Medical Care", "Skincare", "Mental Health", "Mocktails"].map((section) => (
            <a 
              key={section} 
              href={`#${section.toLowerCase().replace(" ", "-")}`}
              className="px-4 py-2 rounded-full bg-[var(--color-cream)] hover:bg-[var(--color-lavender)]/30 text-sm font-medium transition-colors"
            >
              {section}
            </a>
          ))}
        </div>

        {/* Common Symptoms */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-[var(--color-lavender)]/10">
          <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-4 text-center">
            Common First Trimester Symptoms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="p-3 rounded-xl bg-white/50">Morning Sickness</div>
            <div className="p-3 rounded-xl bg-white/50">Fatigue</div>
            <div className="p-3 rounded-xl bg-white/50">Breast Tenderness</div>
            <div className="p-3 rounded-xl bg-white/50">Food Aversions</div>
            <div className="p-3 rounded-xl bg-white/50">Frequent Urination</div>
            <div className="p-3 rounded-xl bg-white/50">Mood Changes</div>
            <div className="p-3 rounded-xl bg-white/50">Heightened Smell</div>
            <div className="p-3 rounded-xl bg-white/50">Light Cramping</div>
          </div>
        </div>

        {/* Nutrition Section */}
        <ContentSection title="Nutrition: Nourishing You and Baby" icon={Leaf} id="nutrition">
          <p className="mb-6">
            The first trimester is crucial for your baby's organ development. Even though your baby is tiny, 
            their nutritional needs are significant. Focus on nutrient-dense foods, and don't worry if 
            nausea makes eating difficult—do your best and stay hydrated.
            <sup className="text-[var(--color-rose)]">[1]</sup>
          </p>
          
          <TipBox type="tip" title="Managing Morning Sickness">
            Eat small, frequent meals throughout the day. Keep crackers by your bedside for early morning 
            nausea. Ginger and vitamin B6 have been shown to help reduce nausea symptoms.
          </TipBox>

          <h3 className="text-xl font-[var(--font-heading)] font-semibold mt-8 mb-4">
            Key Nutrients for First Trimester
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

          <TipBox type="warning" title="Foods to Avoid">
            <ul className="list-disc list-inside space-y-1">
              <li>Raw or undercooked meats, fish, and eggs</li>
              <li>Unpasteurized dairy and juices</li>
              <li>High-mercury fish</li>
              <li>Deli meats (unless heated until steaming)</li>
              <li>Raw sprouts</li>
            </ul>
          </TipBox>
        </ContentSection>

        {/* Exercise Section */}
        <ContentSection title="Exercise: Staying Active & Healthy" icon={Dumbbell} id="exercise">
          <p className="mb-6">
            Staying active during pregnancy is beneficial for both you and your baby. Regular exercise 
            can help manage weight gain, reduce gestational diabetes risk, and improve mood. Always consult 
            with your healthcare provider before starting a new exercise routine.
            <sup className="text-[var(--color-rose)]">[2]</sup>
          </p>
          
          <FirstTrimesterExercises />
        </ContentSection>

        {/* Medical Care Section */}
        <ContentSection title="Medical Care & Prenatal Testing" icon={Stethoscope} id="medical-care">
          <p className="mb-6">
            Your first prenatal visits are exciting milestones! You'll likely have your first ultrasound 
            and hear your baby's heartbeat. Regular prenatal care is essential for monitoring your 
            health and your baby's development.
          </p>

          <DataTable
            columns={[
              { key: "test", header: "Test/Visit" },
              { key: "timing", header: "Timing" },
              { key: "purpose", header: "Purpose" },
            ]}
            data={medicalTests}
          />

          <TipBox type="info" title="Questions for Your Provider">
            Write down questions before each appointment. Ask about genetic testing options, 
            safe medications for common symptoms, and any concerns about your specific health history.
          </TipBox>
        </ContentSection>

        {/* Skincare Section */}
        <ContentSection title="First Trimester Skincare" icon={Sparkles} id="skincare">
          <p className="mb-6">
            Hormonal changes may cause skin changes like acne, dryness, or sensitivity. 
            Stick to gentle, pregnancy-safe products and be patient—your skin will likely 
            stabilize in the second trimester.
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
                  Avoid These
                </h3>
              </div>
              <DataTable
                columns={[
                  { key: "ingredient", header: "Ingredient" },
                  { key: "reason", header: "Why" },
                  { key: "alternative", header: "Alternative" },
                ]}
                data={unsafeSkincareIngredients}
                variant="unsafe"
              />
            </div>
          </div>
        </ContentSection>

        {/* Mental Health Section */}
        <ContentSection title="Mental Health & Emotional Wellness" icon={Brain} id="mental-health">
          <p className="mb-6">
            The first trimester brings a whirlwind of emotions—excitement, anxiety, joy, and fear are all normal. 
            Your hormones are shifting dramatically, which can affect your mood and emotional well-being.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <TipBox type="tip" title="Self-Care Practices">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Practice meditation or prenatal yoga</li>
                <li>Journal your feelings and experiences</li>
                <li>Connect with other pregnant women</li>
                <li>Take walks in nature</li>
                <li>Get adequate sleep</li>
              </ul>
            </TipBox>

            <TipBox type="info" title="When to Seek Support">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Persistent sadness or anxiety</li>
                <li>Inability to enjoy activities</li>
                <li>Thoughts of harming yourself</li>
                <li>Overwhelming stress about pregnancy</li>
                <li>Relationship difficulties</li>
              </ul>
            </TipBox>
          </div>
        </ContentSection>

        {/* Mocktails Section */}
        <ContentSection title="Mocktails: Delicious & Pregnancy-Safe" icon={Sparkles} id="mocktails">
          <p className="mb-6">
            Enjoy refreshing, alcohol-free beverages that support your health and satisfy cravings. 
            These mocktails are designed to help with common pregnancy symptoms while being delicious!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {mocktails.map((mocktail) => (
              <MocktailCard key={mocktail.name} {...mocktail} />
            ))}
          </div>
        </ContentSection>
      </div>
    </Layout>
  );
}
