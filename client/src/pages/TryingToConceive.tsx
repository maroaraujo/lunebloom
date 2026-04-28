import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import DataTable from "@/components/DataTable";
import TipBox from "@/components/TipBox";
import MocktailCard from "@/components/MocktailCard";
import TryingToConceiveExercises from "@/components/TryingToConceiveExercises";
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
        imageSrc="/mascots/ttc-lunebloom.png"
      />

      <div className="container py-8">
        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {["Fertile Window", "Ovulation Testing", "Nutrition", "Exercise", "Medical Care", "Skincare", "Mental Health", "Mocktails"].map((section) => (
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

        {/* Fertile Window Section */}
        <ContentSection title="Understanding Your Fertile Window" icon={Heart} id="fertile-window">
          <p className="mb-6">
            The fertile window is the period during your menstrual cycle when pregnancy is most likely to occur. 
            According to <strong>ACOG</strong>, the fertile window includes the 5 days before ovulation and the day 
            of ovulation itself. Understanding and tracking your fertile window can help you time intercourse 
            optimally for conception.
          </p>

          <h3 className="text-xl font-[var(--font-heading)] font-semibold mt-8 mb-4">
            How to Calculate Your Fertile Window
          </h3>

          <div className="p-6 rounded-xl bg-[var(--color-blush)]/20 mb-6">
            <h4 className="font-semibold mb-4">Step-by-Step Calculation:</h4>
            <ol className="space-y-3 list-decimal list-inside text-sm">
              <li>Track your menstrual cycle for at least 3 months (count from day 1 of your period)</li>
              <li>Identify your shortest cycle length (e.g., 26 days)</li>
              <li>Identify your longest cycle length (e.g., 32 days)</li>
              <li>Subtract 18 from your shortest cycle = First fertile day (26 - 18 = day 8)</li>
              <li>Subtract 11 from your longest cycle = Last fertile day (32 - 11 = day 21)</li>
              <li>Your fertile window is from day 8 to day 21 of your cycle</li>
            </ol>
          </div>

          <TipBox type="tip" title="Standard Days Method">
            If your cycle is consistently between 26-32 days, the Standard Days Method (ACOG-approved) indicates 
            that days 8-19 are your most fertile days. This is a simple and reliable method for regular cycles.
          </TipBox>

          <h3 className="text-xl font-[var(--font-heading)] font-semibold mt-8 mb-4">
            Best Timing for Intercourse
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 rounded-xl bg-[var(--color-sage)]/20">
              <h4 className="font-semibold mb-3">Optimal Timing (ACOG & NIH Research)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-sage)] mt-2 flex-shrink-0" />
                  <span><strong>1-2 days BEFORE ovulation:</strong> Greatest chance of conception</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-sage)] mt-2 flex-shrink-0" />
                  <span><strong>Day of ovulation:</strong> Pregnancy still possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-sage)] mt-2 flex-shrink-0" />
                  <span><strong>Sperm lifespan:</strong> 3-5 days in female reproductive tract</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-sage)] mt-2 flex-shrink-0" />
                  <span><strong>Egg lifespan:</strong> 12-24 hours after release</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-mint)]/20">
              <h4 className="font-semibold mb-3">Recommended Frequency</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-mint)] mt-2 flex-shrink-0" />
                  <span><strong>Every 2-3 days:</strong> Throughout your entire cycle ensures sperm is present during fertile window</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-mint)] mt-2 flex-shrink-0" />
                  <span><strong>Daily intercourse:</strong> Not necessary and may reduce sperm count</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-mint)] mt-2 flex-shrink-0" />
                  <span><strong>Stress-free approach:</strong> Reduces pressure and improves sexual satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
        </ContentSection>

        {/* Ovulation Testing Section */}
        <ContentSection title="Ovulation Prediction & Testing" icon={Stethoscope} id="ovulation-testing">
          <p className="mb-6">
            There are several methods to predict or confirm ovulation, each with different levels of accuracy. 
            According to <strong>ACOG</strong>, combining multiple methods provides the most reliable results.
          </p>

          <h3 className="text-xl font-[var(--font-heading)] font-semibold mt-8 mb-4">
            Ovulation Prediction Methods
          </h3>

          <div className="space-y-6">
            <div className="p-6 rounded-xl border-2 border-[var(--color-rose)]/30 bg-[var(--color-rose)]/5">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[var(--color-rose)]" />
                Ovulation Predictor Kits (OPKs) - Most Accurate
              </h4>
              <ul className="space-y-2 text-sm mb-4">
                <li><strong>How it works:</strong> Detects luteinizing hormone (LH) surge in urine</li>
                <li><strong>Timing:</strong> LH surge occurs 24-36 hours before ovulation</li>
                <li><strong>Best time to test:</strong> Morning (second urine of the day)</li>
                <li><strong>Accuracy:</strong> Very sensitive and specific for ovulation detection (NIH)</li>
                <li><strong>Cost:</strong> $15-50 for a pack of tests</li>
              </ul>
              <TipBox type="tip" title="OPK Pro Tip">
                Start testing a few days before your expected ovulation date. A positive result means ovulation 
                will likely occur within 24-36 hours.
              </TipBox>
            </div>

            <div className="p-6 rounded-xl border-2 border-[var(--color-peach)]/30 bg-[var(--color-peach)]/5">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[var(--color-peach)]" />
                Basal Body Temperature (BBT) - Confirmatory
              </h4>
              <ul className="space-y-2 text-sm mb-4">
                <li><strong>How it works:</strong> Temperature rises slightly after ovulation</li>
                <li><strong>Temperature rise:</strong> Typically less than 0.5°F (0.3°C)</li>
                <li><strong>When to measure:</strong> Immediately upon waking, before getting out of bed</li>
                <li><strong>Timing:</strong> Confirms ovulation has occurred (not predictive)</li>
                <li><strong>Best for:</strong> Identifying patterns after 3+ months of tracking</li>
              </ul>
              <TipBox type="info" title="BBT Tracking">
                Use a basal thermometer (more precise than regular thermometers). Record temperature at the same 
                time each morning for accurate results.
              </TipBox>
            </div>

            <div className="p-6 rounded-xl border-2 border-[var(--color-lavender)]/30 bg-[var(--color-lavender)]/5">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[var(--color-lavender)]" />
                Cervical Mucus Method - Natural Indicator
              </h4>
              <ul className="space-y-2 text-sm mb-4">
                <li><strong>How it works:</strong> Cervical mucus changes throughout your cycle</li>
                <li><strong>Before ovulation:</strong> Clear, stretchy, slippery (like egg white) - FERTILE</li>
                <li><strong>After ovulation:</strong> Thick and sticky - LESS FERTILE</li>
                <li><strong>Why it matters:</strong> Slippery mucus helps sperm reach the egg</li>
                <li><strong>Observation:</strong> Check consistency daily and record changes</li>
              </ul>
              <TipBox type="tip" title="Cervical Mucus Observation">
                Check your cervical mucus throughout the day. The most fertile mucus is clear, stretchy, and 
                slippery - similar to raw egg white.
              </TipBox>
            </div>

            <div className="p-6 rounded-xl border-2 border-[var(--color-mint)]/30 bg-[var(--color-mint)]/5">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[var(--color-mint)]" />
                Progesterone Blood Test - Medical Confirmation
              </h4>
              <ul className="space-y-2 text-sm mb-4">
                <li><strong>How it works:</strong> Blood test measuring progesterone levels</li>
                <li><strong>When to test:</strong> 7 days after ovulation (luteal phase)</li>
                <li><strong>Purpose:</strong> Confirms ovulation has occurred</li>
                <li><strong>Not predictive:</strong> Used to confirm ovulation, not predict it</li>
                <li><strong>Cost:</strong> Usually covered by insurance with doctor's order</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-2 border-[var(--color-sage)]/30 bg-[var(--color-sage)]/5">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[var(--color-sage)]" />
                Fertility Tracking Apps - Supportive Tool
              </h4>
              <ul className="space-y-2 text-sm mb-4">
                <li><strong>Important note:</strong> ACOG states that apps based on cycle length alone cannot accurately predict ovulation</li>
                <li><strong>Best use:</strong> Combined with OPKs, BBT, or cervical mucus tracking</li>
                <li><strong>Benefits:</strong> Records patterns and predicts fertile window based on your data</li>
                <li><strong>Accuracy improves:</strong> After 3+ months of consistent tracking</li>
                <li><strong>Popular options:</strong> Fertility Friend, Flo, Premom, Natural Cycles</li>
              </ul>
            </div>
          </div>

          <TipBox type="love" title="Combining Methods for Best Results">
            Using multiple tracking methods together provides the most accurate ovulation prediction. For example, 
            combine OPKs with cervical mucus observation and BBT tracking for comprehensive fertility awareness.
          </TipBox>
        </ContentSection>

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

          <TryingToConceiveExercises />

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
