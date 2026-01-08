import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import DataTable from "@/components/DataTable";
import TipBox from "@/components/TipBox";
import MocktailCard from "@/components/MocktailCard";
import ThirdTrimesterExercises from "@/components/ThirdTrimesterExercises";
import { 
  Sun, 
  Leaf, 
  Dumbbell, 
  Stethoscope, 
  Sparkles,
  Brain,
  CheckCircle,
  XCircle
} from "lucide-react";

const nutritionData = [
  { nutrient: "Protein", amount: "100g/day", source: "Lean meats, eggs, legumes", benefit: "Baby's final growth spurt" },
  { nutrient: "Calcium", amount: "1000 mg/day", source: "Dairy, fortified foods", benefit: "Bone hardening" },
  { nutrient: "Iron", amount: "27 mg/day", source: "Red meat, spinach", benefit: "Prepares for blood loss at birth" },
  { nutrient: "Fiber", amount: "30g/day", source: "Whole grains, fruits, vegetables", benefit: "Prevents constipation" },
  { nutrient: "Magnesium", amount: "350 mg/day", source: "Nuts, seeds, leafy greens", benefit: "Reduces leg cramps" },
  { nutrient: "Vitamin K", amount: "90 mcg/day", source: "Leafy greens, broccoli", benefit: "Blood clotting for delivery" },
];

const exerciseData = [
  { exercise: "Walking", duration: "20-30 min", muscles: "Legs, cardiovascular", benefits: "Maintains fitness, helps baby descend" },
  { exercise: "Prenatal Yoga", duration: "20-30 min", muscles: "Flexibility, breathing", benefits: "Prepares for labor, reduces anxiety" },
  { exercise: "Swimming", duration: "20-30 min", muscles: "Full body", benefits: "Relieves pressure, supports joints" },
  { exercise: "Pelvic Tilts", duration: "10-15 min", muscles: "Lower back, pelvis", benefits: "Relieves back pain" },
  { exercise: "Squats", duration: "2-3 sets of 10", muscles: "Legs, pelvic floor", benefits: "Opens pelvis for delivery" },
  { exercise: "Birth Ball Exercises", duration: "15-20 min", muscles: "Core, pelvis", benefits: "Encourages optimal baby position" },
];

const medicalTests = [
  { test: "Group B Strep Test", timing: "Weeks 36-37", purpose: "Screens for bacteria that can affect baby" },
  { test: "Non-Stress Test", timing: "Week 32+ if needed", purpose: "Monitors baby's heart rate and movement" },
  { test: "Biophysical Profile", timing: "If indicated", purpose: "Assesses baby's health via ultrasound" },
  { test: "Cervical Check", timing: "Weeks 36-40", purpose: "Checks for dilation and effacement" },
  { test: "Weekly Visits", timing: "Weeks 36-40", purpose: "Monitor for signs of labor" },
  { test: "Fetal Position Check", timing: "Week 36+", purpose: "Ensures baby is head-down" },
];

const safeSkincareIngredients = [
  { ingredient: "Rich Moisturizers", purpose: "Combat extreme dryness", notes: "Ceramide-based formulas" },
  { ingredient: "Colloidal Oatmeal", purpose: "Soothe itchy skin", notes: "Baths and lotions" },
  { ingredient: "Hyaluronic Acid", purpose: "Deep hydration", notes: "Layer under moisturizer" },
  { ingredient: "Mineral SPF", purpose: "Sun protection", notes: "Continue daily use" },
  { ingredient: "Fragrance-Free Products", purpose: "Reduce irritation", notes: "Skin is extra sensitive" },
  { ingredient: "Belly Oils", purpose: "Stretch mark care", notes: "Massage gently daily" },
];

const unsafeSkincareIngredients = [
  { ingredient: "Retinoids", reason: "Still unsafe", alternative: "Wait until postpartum" },
  { ingredient: "Strong Fragrances", reason: "Can cause irritation", alternative: "Fragrance-free options" },
  { ingredient: "Hot Baths", reason: "Can raise body temperature", alternative: "Warm baths only" },
];

const mocktails = [
  {
    name: "Raspberry Leaf Relaxer",
    description: "Traditional herb for late pregnancy",
    ingredients: ["Raspberry leaf tea (cooled)", "Honey", "Lemon", "Sparkling water"],
    instructions: "Brew tea, cool, add honey and lemon, top with sparkling water.",
    benefits: ["Uterine toning", "Relaxation", "Hydration"],
    color: "var(--color-blush)",
  },
  {
    name: "Date Night Delight",
    description: "Sweet and nourishing",
    ingredients: ["3 dates, pitted", "Almond milk", "Cinnamon", "Ice"],
    instructions: "Blend dates with almond milk and cinnamon, serve over ice.",
    benefits: ["Natural sugars", "May help labor", "Iron"],
    color: "var(--color-peach)",
  },
];

export default function ThirdTrimester() {
  return (
    <Layout>
      <PageHero
        title="Third Trimester"
        subtitle="The Final Stretch"
        description="You're in the home stretch! Weeks 28-40 bring final preparations as your baby gains weight and you prepare for the big day. Focus on rest, preparation, and listening to your body."
        icon={Sun}
        gradient="bg-gradient-to-br from-[var(--color-mint)]/40 via-[var(--color-peach)]/20 to-[var(--color-cream)]"
        imageSrc="/mascots/third-trimester-lunebloom.png"
        weeks="Weeks 28-40"
      />

      <div className="container py-8">
        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {["Nutrition", "Exercise", "Medical Care", "Skincare", "Mental Health", "Birth Prep"].map((section) => (
            <a 
              key={section} 
              href={`#${section.toLowerCase().replace(" ", "-")}`}
              className="px-4 py-2 rounded-full bg-[var(--color-cream)] hover:bg-[var(--color-mint)]/30 text-sm font-medium transition-colors"
            >
              {section}
            </a>
          ))}
        </div>

        {/* Common Experiences */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-[var(--color-mint)]/10">
          <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-4 text-center">
            Common Third Trimester Experiences
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="p-3 rounded-xl bg-white/50">Braxton Hicks</div>
            <div className="p-3 rounded-xl bg-white/50">Shortness of Breath</div>
            <div className="p-3 rounded-xl bg-white/50">Frequent Urination</div>
            <div className="p-3 rounded-xl bg-white/50">Back Pain</div>
            <div className="p-3 rounded-xl bg-white/50">Swelling</div>
            <div className="p-3 rounded-xl bg-white/50">Trouble Sleeping</div>
            <div className="p-3 rounded-xl bg-white/50">Nesting Instinct</div>
            <div className="p-3 rounded-xl bg-white/50">Baby Dropping</div>
          </div>
        </div>

        {/* Nutrition Section */}
        <ContentSection title="Nutrition: Final Preparations" icon={Leaf} id="nutrition">
          <p className="mb-6">
            Your baby is gaining about half a pound per week during the third trimester. 
            Your caloric needs increase by about 450 calories per day. Focus on nutrient-dense 
            foods that support your baby's final development and prepare your body for labor.
            <sup className="text-[var(--color-rose)]">[1]</sup>
          </p>
          
          <TipBox type="tip" title="Eating for Comfort">
            As your stomach gets compressed, eat smaller, more frequent meals. 
            Stay hydrated but reduce fluids before bed to minimize nighttime bathroom trips.
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

          <TipBox type="info" title="Dates for Labor">
            Some studies suggest eating 6 dates per day starting at week 36 may help 
            with cervical ripening and reduce the need for labor induction.
          </TipBox>
        </ContentSection>

        {/* Exercise Section */}
        <ContentSection title="Gentle Movement" icon={Dumbbell} id="exercise">
          <p className="mb-6">
            While you may feel less mobile, staying active helps with common discomforts, 
            prepares your body for labor, and can help baby get into optimal position.
            <sup className="text-[var(--color-rose)]">[2]</sup>
          </p>

          <ThirdTrimesterExercises />
        </ContentSection>

        {/* Medical Care Section */}
        <ContentSection title="Medical Care & Monitoring" icon={Stethoscope} id="medical-care">
          <p className="mb-6">
            Prenatal visits become more frequent in the third trimester—typically every 2 weeks 
            until week 36, then weekly until delivery. Your provider will monitor you closely 
            for signs of labor and any complications.
          </p>

          <DataTable
            columns={[
              { key: "test", header: "Test/Visit" },
              { key: "timing", header: "Timing" },
              { key: "purpose", header: "Purpose" },
            ]}
            data={medicalTests}
          />

          <TipBox type="warning" title="When to Call Your Provider">
            Contact your provider immediately if you experience: regular contractions, 
            water breaking, decreased fetal movement, severe headache, vision changes, 
            or severe swelling.
          </TipBox>
        </ContentSection>

        {/* Skincare Section */}
        <ContentSection title="Skincare: Comfort Focus" icon={Sparkles} id="skincare">
          <p className="mb-6">
            Your skin may feel stretched, itchy, and dry. Focus on soothing, hydrating 
            products and gentle care. Severe itching, especially on palms and soles, 
            should be reported to your provider.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-[var(--color-sage)]" />
                <h3 className="text-lg font-[var(--font-heading)] font-semibold text-[var(--color-sage)]">
                  Soothing Products
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
                  Avoid
                </h3>
              </div>
              <DataTable
                columns={[
                  { key: "ingredient", header: "Item" },
                  { key: "reason", header: "Why" },
                  { key: "alternative", header: "Alternative" },
                ]}
                data={unsafeSkincareIngredients}
                variant="unsafe"
              />
            </div>
          </div>

          <TipBox type="warning" title="Cholestasis Warning">
            Severe itching, especially on palms and soles without a rash, can be a sign 
            of intrahepatic cholestasis of pregnancy (ICP). Contact your provider immediately.
          </TipBox>
        </ContentSection>

        {/* Mental Health Section */}
        <ContentSection title="Emotional Preparation" icon={Brain} id="mental-health">
          <p className="mb-6">
            The final weeks can bring a mix of excitement, anxiety, and impatience. 
            It's normal to feel nervous about labor and the changes ahead. 
            Focus on what you can control and trust your body.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[var(--color-mint)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">Coping with Anxiety</h3>
              <ul className="space-y-2 text-sm">
                <li>• Practice breathing techniques</li>
                <li>• Take a childbirth class</li>
                <li>• Create a birth plan (but stay flexible)</li>
                <li>• Talk about fears with your partner/provider</li>
                <li>• Focus on one day at a time</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-peach)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">Practical Preparations</h3>
              <ul className="space-y-2 text-sm">
                <li>• Pack your hospital bag</li>
                <li>• Install car seat</li>
                <li>• Prepare freezer meals</li>
                <li>• Set up baby's sleep space</li>
                <li>• Arrange help for after birth</li>
              </ul>
            </div>
          </div>

          <TipBox type="love" title="You've Got This">
            Your body was made for this. Trust the process, lean on your support system, 
            and know that soon you'll be holding your baby in your arms.
          </TipBox>
        </ContentSection>

        {/* Birth Prep Section */}
        <ContentSection title="Birth Preparation" icon={Sun} id="birth-prep">
          <p className="mb-6">
            While you can't control exactly how labor will go, you can prepare yourself 
            mentally and physically. Knowledge is power—understanding the process can 
            help reduce fear and anxiety.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[var(--color-lavender)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">Signs of Labor</h3>
              <ul className="space-y-2 text-sm">
                <li>• Regular contractions that intensify</li>
                <li>• Water breaking</li>
                <li>• Bloody show</li>
                <li>• Lower back pain</li>
                <li>• Nesting urge</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-blush)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">Hospital Bag Essentials</h3>
              <ul className="space-y-2 text-sm">
                <li>• ID and insurance cards</li>
                <li>• Birth plan</li>
                <li>• Comfortable clothes</li>
                <li>• Toiletries</li>
                <li>• Going-home outfit for baby</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-mint)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">Pain Management Options</h3>
              <ul className="space-y-2 text-sm">
                <li>• Breathing techniques</li>
                <li>• Movement and positions</li>
                <li>• Hydrotherapy</li>
                <li>• Epidural</li>
                <li>• Nitrous oxide</li>
              </ul>
            </div>
          </div>
        </ContentSection>

        {/* Mocktails Section */}
        <ContentSection title="Late Pregnancy Mocktails" icon={Sun} id="mocktails">
          <p className="mb-6">
            These mocktails feature ingredients traditionally associated with late pregnancy 
            preparation, like raspberry leaf tea and dates.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
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
