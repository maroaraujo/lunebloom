import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import DataTable from "@/components/DataTable";
import TipBox from "@/components/TipBox";
import MocktailCard from "@/components/MocktailCard";
import SecondTrimesterExercises from "@/components/SecondTrimesterExercises";
import { 
  Flower2, 
  Leaf, 
  Dumbbell, 
  Stethoscope, 
  Sparkles,
  Brain,
  CheckCircle,
  XCircle
} from "lucide-react";

const nutritionData = [
  { nutrient: "Protein", amount: "75-100g/day", source: "Lean meats, eggs, legumes, dairy", benefit: "Baby's rapid growth" },
  { nutrient: "Calcium", amount: "1000 mg/day", source: "Dairy, fortified foods, leafy greens", benefit: "Bone development" },
  { nutrient: "Iron", amount: "27 mg/day", source: "Red meat, spinach, fortified cereals", benefit: "Prevents anemia" },
  { nutrient: "Omega-3 DHA", amount: "200-300 mg/day", source: "Fatty fish, walnuts, supplements", benefit: "Brain development" },
  { nutrient: "Fiber", amount: "25-30g/day", source: "Whole grains, fruits, vegetables", benefit: "Prevents constipation" },
  { nutrient: "Vitamin D", amount: "600 IU/day", source: "Sunlight, fortified foods, fish", benefit: "Calcium absorption" },
];

const exerciseData = [
  { exercise: "Walking", duration: "30 min/day", muscles: "Legs, core, cardiovascular", benefits: "Maintains fitness, reduces swelling" },
  { exercise: "Prenatal Yoga", duration: "30-45 min", muscles: "Full body, flexibility", benefits: "Prepares for labor, reduces stress" },
  { exercise: "Swimming", duration: "30 min", muscles: "Full body", benefits: "Relieves back pain, supports joints" },
  { exercise: "Prenatal Pilates", duration: "30 min", muscles: "Core, pelvic floor", benefits: "Strengthens core safely" },
  { exercise: "Low-impact Aerobics", duration: "20-30 min", muscles: "Cardiovascular, legs", benefits: "Maintains endurance" },
  { exercise: "Strength Training", duration: "20-30 min", muscles: "Full body", benefits: "Maintains muscle tone" },
];

const medicalTests = [
  { test: "Anatomy Scan", timing: "Weeks 18-22", purpose: "Detailed check of baby's organs and development" },
  { test: "Quad Screen (optional)", timing: "Weeks 15-20", purpose: "Screens for chromosomal conditions" },
  { test: "Glucose Screening", timing: "Weeks 24-28", purpose: "Tests for gestational diabetes" },
  { test: "Rh Antibody Test", timing: "Week 28", purpose: "Check for Rh incompatibility" },
  { test: "Blood Pressure Check", timing: "Each visit", purpose: "Monitor for preeclampsia" },
  { test: "Fundal Height", timing: "Each visit", purpose: "Measures baby's growth" },
];

const safeSkincareIngredients = [
  { ingredient: "Vitamin C Serum", purpose: "Brightening, melasma", notes: "Morning application" },
  { ingredient: "Hyaluronic Acid", purpose: "Deep hydration", notes: "Layer under moisturizer" },
  { ingredient: "Azelaic Acid", purpose: "Melasma, acne", notes: "Safe for pregnancy pigmentation" },
  { ingredient: "Niacinamide", purpose: "Barrier repair", notes: "Helps with pregnancy glow" },
  { ingredient: "Mineral SPF 50", purpose: "Melasma prevention", notes: "Reapply every 2 hours" },
  { ingredient: "Cocoa/Shea Butter", purpose: "Stretch mark prevention", notes: "Apply to belly, hips, breasts" },
];

const unsafeSkincareIngredients = [
  { ingredient: "Retinoids", reason: "Birth defect risk", alternative: "Vitamin C, Bakuchiol" },
  { ingredient: "Hydroquinone", reason: "High absorption", alternative: "Azelaic Acid, Vitamin C" },
  { ingredient: "Chemical Peels", reason: "Deep penetration", alternative: "Gentle enzyme masks" },
  { ingredient: "Laser Treatments", reason: "Not studied in pregnancy", alternative: "Wait until postpartum" },
];

const mocktails = [
  {
    name: "Tropical Paradise",
    description: "A vacation in a glass",
    ingredients: ["1/2 cup mango chunks", "1/2 cup pineapple juice", "Coconut cream", "Ice"],
    instructions: "Blend mango and pineapple, layer with coconut cream over ice.",
    benefits: ["Vitamin C", "Tropical vibes", "Hydration"],
    color: "var(--color-peach)",
  },
  {
    name: "Berry Glow",
    description: "Antioxidant powerhouse",
    ingredients: ["Mixed berries", "Greek yogurt", "Honey", "Sparkling water"],
    instructions: "Blend berries with yogurt, top with sparkling water.",
    benefits: ["Antioxidants", "Protein", "Calcium"],
    color: "var(--color-blush)",
  },
  {
    name: "Cucumber Mint Cooler",
    description: "Refreshing and hydrating",
    ingredients: ["1/2 cucumber", "Fresh mint", "Lime juice", "Sparkling water"],
    instructions: "Muddle cucumber and mint, add lime and sparkling water.",
    benefits: ["Hydration", "Cooling", "Digestive aid"],
    color: "var(--color-mint)",
  },
];

export default function SecondTrimester() {
  return (
    <Layout>
      <PageHero
        title="Second Trimester"
        subtitle="The Golden Weeks"
        description="Welcome to the 'honeymoon phase' of pregnancy! Many women feel their best during weeks 14-27 as nausea fades and energy returns. Your baby is growing rapidly and you'll soon feel those magical first kicks."
        icon={Flower2}
        gradient="bg-gradient-to-br from-[var(--color-peach)]/40 via-[var(--color-blush)]/20 to-[var(--color-cream)]"
        imageSrc="/mascots/second-trimester-lunebloom.png"
        weeks="Weeks 14-27"
      />

      <div className="container py-8">
        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {["Nutrition", "Exercise", "Medical Care", "Skincare", "Mental Health", "Mocktails"].map((section) => (
            <a 
              key={section} 
              href={`#${section.toLowerCase().replace(" ", "-")}`}
              className="px-4 py-2 rounded-full bg-[var(--color-cream)] hover:bg-[var(--color-peach)]/30 text-sm font-medium transition-colors"
            >
              {section}
            </a>
          ))}
        </div>

        {/* Milestones */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-[var(--color-peach)]/10">
          <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-4 text-center">
            Second Trimester Milestones
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="p-3 rounded-xl bg-white/50">Baby Bump Appears</div>
            <div className="p-3 rounded-xl bg-white/50">First Kicks (16-25 weeks)</div>
            <div className="p-3 rounded-xl bg-white/50">Gender Reveal Option</div>
            <div className="p-3 rounded-xl bg-white/50">Anatomy Scan</div>
            <div className="p-3 rounded-xl bg-white/50">Increased Energy</div>
            <div className="p-3 rounded-xl bg-white/50">Pregnancy Glow</div>
            <div className="p-3 rounded-xl bg-white/50">Baby Hears Your Voice</div>
            <div className="p-3 rounded-xl bg-white/50">Nesting Instincts Begin</div>
          </div>
        </div>

        {/* Nutrition Section */}
        <ContentSection title="Nutrition: Fueling Growth" icon={Leaf} id="nutrition">
          <p className="mb-6">
            Your baby is growing rapidly during the second trimester, and your caloric needs increase 
            by about 340 calories per day. Focus on nutrient-dense foods that support your baby's 
            bone, brain, and organ development.<sup className="text-[var(--color-rose)]">[1]</sup>
          </p>
          
          <TipBox type="tip" title="Healthy Weight Gain">
            Most women should gain about 1 pound per week during the second trimester. 
            Focus on quality over quantity—nutrient-dense foods support both you and baby.
          </TipBox>

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

          <TipBox type="info" title="Dealing with Heartburn">
            As your uterus grows, heartburn may become more common. Eat smaller meals, 
            avoid spicy foods, and don't lie down right after eating.
          </TipBox>
        </ContentSection>

        {/* Exercise Section */}
        <ContentSection title="Exercise: Staying Active" icon={Dumbbell} id="exercise">
          <p className="mb-6">
            The second trimester is often the best time for exercise. With renewed energy and 
            a manageable bump, you can maintain an active lifestyle that benefits both you and baby.
            <sup className="text-[var(--color-rose)]">[2]</sup>
          </p>

          <SecondTrimesterExercises />
        </ContentSection>

        {/* Medical Care Section */}
        <ContentSection title="Medical Care & Testing" icon={Stethoscope} id="medical-care">
          <p className="mb-6">
            The anatomy scan around week 20 is a highlight of the second trimester—you'll see 
            your baby in detail and can often learn the sex if you choose. Regular prenatal 
            visits continue to monitor your health and baby's growth.
          </p>

          <DataTable
            columns={[
              { key: "test", header: "Test/Visit" },
              { key: "timing", header: "Timing" },
              { key: "purpose", header: "Purpose" },
            ]}
            data={medicalTests}
          />

          <TipBox type="info" title="Glucose Screening">
            The glucose test between weeks 24-28 screens for gestational diabetes. 
            It involves drinking a sweet solution and having your blood drawn. 
            Most women pass without issues.
          </TipBox>
        </ContentSection>

        {/* Skincare Section */}
        <ContentSection title="Skincare: The Glow & The Challenges" icon={Sparkles} id="skincare">
          <p className="mb-6">
            The "pregnancy glow" is real—increased blood volume gives your skin a radiant flush. 
            However, you may also notice melasma (dark patches) and the beginning of stretch marks. 
            Sun protection is crucial during this time.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-[var(--color-sage)]" />
                <h3 className="text-lg font-[var(--font-heading)] font-semibold text-[var(--color-sage)]">
                  Recommended Products
                </h3>
              </div>
              <DataTable
                columns={[
                  { key: "ingredient", header: "Product" },
                  { key: "purpose", header: "Purpose" },
                  { key: "notes", header: "Tips" },
                ]}
                data={safeSkincareIngredients}
                variant="safe"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-[var(--color-rose)]" />
                <h3 className="text-lg font-[var(--font-heading)] font-semibold text-[var(--color-rose)]">
                  Still Avoid
                </h3>
              </div>
              <DataTable
                columns={[
                  { key: "ingredient", header: "Treatment" },
                  { key: "reason", header: "Why" },
                  { key: "alternative", header: "Alternative" },
                ]}
                data={unsafeSkincareIngredients}
                variant="unsafe"
              />
            </div>
          </div>

          <TipBox type="tip" title="Stretch Mark Prevention">
            While genetics play a big role, keeping skin well-moisturized can help. 
            Apply rich butters or oils to your belly, hips, breasts, and thighs daily.
          </TipBox>
        </ContentSection>

        {/* Mental Health Section */}
        <ContentSection title="Emotional Wellbeing" icon={Brain} id="mental-health">
          <p className="mb-6">
            The second trimester often brings emotional stability as hormones level out. 
            This is a great time to prepare mentally for parenthood, connect with your 
            partner, and enjoy your pregnancy.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[var(--color-peach)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">Bonding Activities</h3>
              <ul className="space-y-2 text-sm">
                <li>• Talk and sing to your baby</li>
                <li>• Play music for your bump</li>
                <li>• Start a pregnancy journal</li>
                <li>• Take bump photos</li>
                <li>• Plan the nursery together</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-mint)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">Preparing for Parenthood</h3>
              <ul className="space-y-2 text-sm">
                <li>• Take a childbirth class</li>
                <li>• Discuss parenting values with partner</li>
                <li>• Research childcare options</li>
                <li>• Start baby registry</li>
                <li>• Plan maternity leave</li>
              </ul>
            </div>
          </div>

          <TipBox type="love" title="Enjoy This Time">
            The second trimester is often called the "honeymoon phase" for good reason. 
            Take time to enjoy your pregnancy, document memories, and celebrate this special time.
          </TipBox>
        </ContentSection>

        {/* Mocktails Section */}
        <ContentSection title="Celebratory Mocktails" icon={Flower2} id="mocktails">
          <p className="mb-6">
            With your energy back and appetite restored, enjoy these delicious mocktails 
            at baby showers, date nights, or just because!
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
              <span className="text-[var(--color-rose)]">[1]</span> National Institutes of Health. (2024). 
              <em> Dietary Supplements During Pregnancy.</em> Office of Dietary Supplements.
            </li>
            <li>
              <span className="text-[var(--color-rose)]">[2]</span> American College of Obstetricians and Gynecologists. (2020). 
              <em> Physical Activity and Exercise During Pregnancy.</em> ACOG Committee Opinion No. 804.
            </li>
          </ol>
        </section>
      </div>
    </Layout>
  );
}
