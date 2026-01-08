import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import DataTable from "@/components/DataTable";
import TipBox from "@/components/TipBox";
import MocktailCard from "@/components/MocktailCard";
import PostpartumExercises from "@/components/PostpartumExercises";
import { 
  Baby, 
  Leaf, 
  Dumbbell, 
  Stethoscope, 
  Sparkles,
  Brain,
  Heart,
  CheckCircle,
  XCircle
} from "lucide-react";

const nutritionData = [
  { nutrient: "Protein", amount: "75-100g/day", source: "Lean meats, eggs, legumes", benefit: "Tissue repair and milk production" },
  { nutrient: "Iron", amount: "18 mg/day", source: "Red meat, spinach, fortified cereals", benefit: "Replenishes blood loss" },
  { nutrient: "Calcium", amount: "1000 mg/day", source: "Dairy, fortified foods", benefit: "Bone health, especially if breastfeeding" },
  { nutrient: "Omega-3 DHA", amount: "200-300 mg/day", source: "Fatty fish, supplements", benefit: "Brain health, mood support" },
  { nutrient: "Vitamin D", amount: "600 IU/day", source: "Sunlight, fortified foods", benefit: "Mood, bone health" },
  { nutrient: "Fiber", amount: "25-30g/day", source: "Whole grains, fruits, vegetables", benefit: "Prevents constipation" },
  { nutrient: "Fluids", amount: "12+ cups/day", source: "Water, herbal tea, broth", benefit: "Milk production, hydration" },
];

const exerciseData = [
  { exercise: "Walking", timing: "Week 1+", duration: "10-15 min", benefits: "Gentle movement, mood boost" },
  { exercise: "Kegel Exercises", timing: "Day 1+", duration: "3 sets of 10", benefits: "Pelvic floor recovery" },
  { exercise: "Deep Breathing", timing: "Day 1+", duration: "5-10 min", benefits: "Core reconnection, relaxation" },
  { exercise: "Gentle Stretching", timing: "Week 2+", duration: "10-15 min", benefits: "Relieves tension" },
  { exercise: "Postnatal Yoga", timing: "Week 6+", duration: "20-30 min", benefits: "Core strength, flexibility" },
  { exercise: "Strength Training", timing: "Week 6+ (cleared)", duration: "20-30 min", benefits: "Rebuilds muscle" },
];

const medicalVisits = [
  { visit: "Hospital Discharge Check", timing: "Before leaving", purpose: "Ensure recovery is on track" },
  { visit: "Pediatrician Visit", timing: "3-5 days", purpose: "Baby's first checkup" },
  { visit: "Postpartum Visit", timing: "3-6 weeks", purpose: "Physical and mental health check" },
  { visit: "Pelvic Floor Assessment", timing: "6 weeks+", purpose: "Check for prolapse, incontinence" },
  { visit: "Mental Health Screening", timing: "Each visit", purpose: "Screen for PPD/PPA" },
];

const safeSkincareIngredients = [
  { ingredient: "Vitamin C", purpose: "Brightening", notes: "Safe while breastfeeding" },
  { ingredient: "Hyaluronic Acid", purpose: "Hydration", notes: "Combat postpartum dryness" },
  { ingredient: "Niacinamide", purpose: "Barrier repair", notes: "Helps with hormonal changes" },
  { ingredient: "Azelaic Acid", purpose: "Acne, melasma", notes: "Safe while breastfeeding" },
  { ingredient: "Ceramides", purpose: "Moisture barrier", notes: "Excellent for dry skin" },
  { ingredient: "SPF 30+", purpose: "Melasma prevention", notes: "Continue daily use" },
];

const reintroduceIngredients = [
  { ingredient: "Retinoids", timing: "After weaning (or if not BF)", purpose: "Anti-aging, acne, stretch marks" },
  { ingredient: "Hydroquinone", timing: "After weaning (with MD)", purpose: "Stubborn melasma" },
  { ingredient: "Salicylic Acid", timing: "Low % safe while BF", purpose: "Acne treatment" },
  { ingredient: "Chemical Peels", timing: "After weaning", purpose: "Skin renewal" },
];

const mocktails = [
  {
    name: "Lactation Lemonade",
    description: "Supports milk production",
    ingredients: ["Lemon juice", "Coconut water", "Brewer's yeast (1 tsp)", "Honey"],
    instructions: "Mix all ingredients, serve over ice.",
    benefits: ["Hydration", "Electrolytes", "Lactation support"],
    color: "var(--color-peach)",
  },
  {
    name: "Berry Recovery Smoothie",
    description: "Nutrient-packed for healing",
    ingredients: ["Mixed berries", "Spinach", "Greek yogurt", "Almond milk", "Flaxseed"],
    instructions: "Blend all ingredients until smooth.",
    benefits: ["Iron", "Protein", "Antioxidants"],
    color: "var(--color-blush)",
  },
  {
    name: "Calming Chamomile Cooler",
    description: "For those precious rest moments",
    ingredients: ["Chamomile tea (cooled)", "Apple juice", "Mint", "Sparkling water"],
    instructions: "Mix tea with apple juice, add mint and sparkling water.",
    benefits: ["Relaxation", "Hydration", "Gentle energy"],
    color: "var(--color-lavender)",
  },
];

export default function Postpartum() {
  return (
    <Layout>
      <PageHero
        title="Postpartum"
        subtitle="A New Beginning"
        description="Congratulations on your new arrival! The fourth trimester is a time of profound adjustment, healing, and bonding. Be patient and compassionate with yourself as you navigate this beautiful new chapter."
        icon={Baby}
        gradient="bg-gradient-to-br from-[var(--color-blush)]/40 via-[var(--color-lavender)]/20 to-[var(--color-cream)]"
        imageSrc="/mascots/postpartum-lunebloom.png"
        weeks="0-12 Weeks Postpartum"
      />

      <div className="container py-8">
        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {["Recovery", "Nutrition", "Exercise", "Medical Care", "Skincare", "Mental Health"].map((section) => (
            <a 
              key={section} 
              href={`#${section.toLowerCase().replace(" ", "-")}`}
              className="px-4 py-2 rounded-full bg-[var(--color-cream)] hover:bg-[var(--color-blush)]/30 text-sm font-medium transition-colors"
            >
              {section}
            </a>
          ))}
        </div>

        {/* Recovery Timeline */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-[var(--color-blush)]/10">
          <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-4 text-center">
            Postpartum Recovery Timeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-white/50">
              <h4 className="font-semibold mb-2">Week 1-2</h4>
              <p>Rest, bonding, establishing feeding, healing begins</p>
            </div>
            <div className="p-4 rounded-xl bg-white/50">
              <h4 className="font-semibold mb-2">Week 3-6</h4>
              <p>Gradual increase in activity, hormones stabilizing</p>
            </div>
            <div className="p-4 rounded-xl bg-white/50">
              <h4 className="font-semibold mb-2">Week 6-12</h4>
              <p>Postpartum checkup, cleared for exercise, finding new normal</p>
            </div>
          </div>
        </div>

        {/* Physical Recovery Section */}
        <ContentSection title="Physical Recovery" icon={Heart} id="recovery">
          <p className="mb-6">
            Your body has done something incredible. Give yourself grace as you heal. 
            Recovery looks different for everyone—whether you had a vaginal delivery or 
            cesarean section, your body needs time and care.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[var(--color-lavender)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">Vaginal Delivery Recovery</h3>
              <ul className="space-y-2 text-sm">
                <li>• Perineal soreness (ice packs, sitz baths help)</li>
                <li>• Lochia (postpartum bleeding) for 4-6 weeks</li>
                <li>• Uterine cramping, especially while breastfeeding</li>
                <li>• Hemorrhoids and constipation</li>
                <li>• Breast engorgement</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-mint)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">C-Section Recovery</h3>
              <ul className="space-y-2 text-sm">
                <li>• Incision care and monitoring</li>
                <li>• Limited lifting (nothing heavier than baby)</li>
                <li>• Longer recovery time (6-8 weeks)</li>
                <li>• Gas pain and bloating</li>
                <li>• Gradual return to activity</li>
              </ul>
            </div>
          </div>

          <TipBox type="warning" title="When to Seek Help">
            Contact your provider if you experience: fever over 100.4°F, heavy bleeding 
            (soaking a pad in an hour), foul-smelling discharge, severe pain, or signs of infection.
          </TipBox>
        </ContentSection>

        {/* Nutrition Section */}
        <ContentSection title="Nourishing Your Recovery" icon={Leaf} id="nutrition">
          <p className="mb-6">
            Good nutrition supports healing and, if breastfeeding, milk production. 
            Focus on nutrient-dense foods and stay well-hydrated. Don't worry about 
            "bouncing back"—focus on nourishing yourself.
            <sup className="text-[var(--color-rose)]">[1]</sup>
          </p>
          
          <TipBox type="tip" title="Breastfeeding Nutrition">
            If breastfeeding, you need about 500 extra calories per day. 
            Drink water every time you nurse and keep healthy snacks within reach.
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
        </ContentSection>

        {/* Exercise Section */}
        <ContentSection title="Returning to Movement" icon={Dumbbell} id="exercise">
          <p className="mb-6">
            Start slowly and listen to your body. Most women can begin gentle movement 
            within days of delivery, but wait for your 6-week checkup before resuming 
            intense exercise.<sup className="text-[var(--color-rose)]">[2]</sup>
          </p>

          <PostpartumExercises />
        </ContentSection>

        {/* Medical Care Section */}
        <ContentSection title="Postpartum Medical Care" icon={Stethoscope} id="medical-care">
          <p className="mb-6">
            Don't skip your postpartum appointments! These visits are crucial for 
            monitoring your physical recovery and mental health. Your provider will 
            also discuss contraception options.
          </p>

          <DataTable
            columns={[
              { key: "visit", header: "Visit" },
              { key: "timing", header: "Timing" },
              { key: "purpose", header: "Purpose" },
            ]}
            data={medicalVisits}
          />
        </ContentSection>

        {/* Skincare Section */}
        <ContentSection title="Postpartum Skincare" icon={Sparkles} id="skincare">
          <p className="mb-6">
            Postpartum brings new skin challenges as hormones shift. You may experience 
            dryness, acne, and lingering melasma. If you're not breastfeeding, you can 
            reintroduce some previously avoided ingredients.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-[var(--color-sage)]" />
                <h3 className="text-lg font-[var(--font-heading)] font-semibold text-[var(--color-sage)]">
                  Safe While Breastfeeding
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
                <Sparkles className="w-5 h-5 text-[var(--color-lavender)]" />
                <h3 className="text-lg font-[var(--font-heading)] font-semibold text-[var(--color-lavender)]">
                  Can Reintroduce
                </h3>
              </div>
              <DataTable
                columns={[
                  { key: "ingredient", header: "Ingredient" },
                  { key: "timing", header: "When" },
                  { key: "purpose", header: "Purpose" },
                ]}
                data={reintroduceIngredients}
                variant="neutral"
              />
            </div>
          </div>

          <TipBox type="tip" title="Stretch Mark Care">
            While stretch marks fade over time, you can now use retinoids (if not breastfeeding) 
            to help improve their appearance. Keep skin moisturized and be patient.
          </TipBox>
        </ContentSection>

        {/* Mental Health Section */}
        <ContentSection title="Mental Health & Emotional Wellbeing" icon={Brain} id="mental-health">
          <p className="mb-6">
            The postpartum period can be emotionally intense. "Baby blues" affecting up to 
            80% of new mothers typically resolve within two weeks. Postpartum depression 
            and anxiety are more serious and require professional support.
            <sup className="text-[var(--color-rose)]">[3]</sup>
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[var(--color-lavender)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">Baby Blues (Normal)</h3>
              <ul className="space-y-2 text-sm">
                <li>• Mood swings</li>
                <li>• Crying spells</li>
                <li>• Anxiety</li>
                <li>• Difficulty sleeping</li>
                <li>• Resolves within 2 weeks</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-blush)]/20">
              <h3 className="font-[var(--font-heading)] font-semibold mb-4">PPD/PPA (Seek Help)</h3>
              <ul className="space-y-2 text-sm">
                <li>• Persistent sadness or emptiness</li>
                <li>• Difficulty bonding with baby</li>
                <li>• Overwhelming anxiety or panic</li>
                <li>• Thoughts of harming yourself or baby</li>
                <li>• Symptoms lasting beyond 2 weeks</li>
              </ul>
            </div>
          </div>

          <TipBox type="warning" title="Get Help Immediately If">
            You have thoughts of harming yourself or your baby, feel like you can't care 
            for yourself or your baby, or experience severe anxiety or panic attacks. 
            Call your provider, go to the ER, or call the Postpartum Support International 
            helpline: 1-800-944-4773.
          </TipBox>

          <TipBox type="love" title="You Are Not Alone">
            Postpartum mental health challenges are common and treatable. 
            Asking for help is a sign of strength, not weakness. You deserve support.
          </TipBox>
        </ContentSection>

        {/* Mocktails Section */}
        <ContentSection title="Recovery Mocktails" icon={Baby} id="mocktails">
          <p className="mb-6">
            These mocktails are designed to support your postpartum recovery with 
            hydrating, nourishing ingredients.
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
              <em> Physical Activity and Exercise During Pregnancy and the Postpartum Period.</em> ACOG Committee Opinion No. 804.
            </li>
            <li>
              <span className="text-[var(--color-rose)]">[3]</span> American College of Obstetricians and Gynecologists. (2023). 
              <em> Screening and Diagnosis of Mental Health Conditions During Pregnancy and Postpartum.</em>
            </li>
          </ol>
        </section>
      </div>
    </Layout>
  );
}
