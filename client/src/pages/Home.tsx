import Layout from "@/components/Layout";
import LunebloomMascot from "@/components/LunebloomMascot";
import PhaseCard from "@/components/PhaseCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Baby, 
  Flower2, 
  Sun, 
  Moon,
  Sparkles,
  BookOpen,
  Shield,
  Leaf,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

const phases = [
  {
    title: "Trying to Conceive",
    description: "Optimize your fertility with evidence-based guidance on nutrition, lifestyle, and preconception health.",
    href: "/trying-to-conceive",
    icon: Heart,
    gradient: "gradient-blush",
  },
  {
    title: "First Trimester",
    description: "Navigate weeks 1-13 with confidence. Learn about early development, nutrition, and managing symptoms.",
    href: "/first-trimester",
    icon: Sparkles,
    gradient: "gradient-lavender",
  },
  {
    title: "Second Trimester",
    description: "The golden weeks 14-27. Enjoy renewed energy while supporting your growing baby's development.",
    href: "/second-trimester",
    icon: Flower2,
    gradient: "gradient-peach",
  },
  {
    title: "Third Trimester",
    description: "Prepare for arrival during weeks 28-40. Final preparations, birth planning, and staying comfortable.",
    href: "/third-trimester",
    icon: Sun,
    gradient: "gradient-mint",
  },
  {
    title: "Postpartum",
    description: "Your fourth trimester journey. Recovery, bonding, and adjusting to life with your newborn.",
    href: "/postpartum",
    icon: Baby,
    gradient: "gradient-blush",
  },
];

const trustIndicators = [
  { name: "ACOG", description: "American College of Obstetricians and Gynecologists" },
  { name: "WHO", description: "World Health Organization" },
  { name: "NIH", description: "National Institutes of Health" },
  { name: "CDC", description: "Centers for Disease Control and Prevention" },
  { name: "FDA", description: "Food and Drug Administration" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-lavender)]/20 via-[var(--color-cream)] to-background" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-blush)]/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-[var(--color-lavender)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[var(--color-mint)]/20 rounded-full blur-3xl" />
        
        <div className="container relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <Badge 
                variant="secondary" 
                className="mb-4 bg-[var(--color-lavender)]/50 text-[var(--color-rose)] border-0"
              >
                <Leaf className="w-3 h-3 mr-1" />
                Evidence-Based Guidance
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold leading-tight mb-6">
                Your Gentle Guide to{" "}
                <span className="text-gradient">Motherhood</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                From the first flutter of hope to the joy of holding your baby, 
                Lunebloom walks beside you with science-backed wisdom and heartfelt support 
                through every phase of your journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/trying-to-conceive">
                  <Button size="lg" className="bg-[var(--color-rose)] hover:bg-[var(--color-rose)]/90 text-white shadow-lg shadow-[var(--color-rose)]/25">
                    Begin Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button size="lg" variant="outline" className="border-[var(--color-lavender)] hover:bg-[var(--color-lavender)]/20">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Resources
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Mascot illustration */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md">
                {/* Floating flowers */}
                <div className="absolute -left-8 top-1/4 animate-float">
                  <Flower2 className="w-8 h-8 text-[var(--color-blush)]" />
                </div>
                <div className="absolute -right-4 top-1/3 animate-float-delayed">
                  <Flower2 className="w-6 h-6 text-[var(--color-lavender)]" />
                </div>
                <div className="absolute left-0 bottom-1/4 animate-float">
                  <Flower2 className="w-5 h-5 text-[var(--color-peach)]" />
                </div>
                
                {/* Main mascot - PNG image */}
                <img 
                  src="/mascots/landing-lunebloom.png" 
                  alt="Lunebloom mascot" 
                  className="w-full h-auto drop-shadow-lg animate-float"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
          </svg>
        </div>
      </section>

      {/* Phase Selection Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge 
              variant="secondary" 
              className="mb-4 bg-[var(--color-peach)]/50 text-[var(--color-rose)] border-0"
            >
              <Moon className="w-3 h-3 mr-1" />
              Your Journey Phases
            </Badge>
            <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold mb-4">
              Where Are You on Your Journey?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each phase of motherhood is unique and beautiful. Select your current stage 
              to access personalized guidance, tips, and resources.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {phases.map((phase, index) => (
              <PhaseCard
                key={phase.href}
                {...phase}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-[var(--color-cream)]/50">
        <div className="container">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-[var(--color-sage)]" />
              <span className="text-sm font-medium text-[var(--color-sage)]">
                Evidence-Based Information
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-[var(--font-heading)] font-bold mb-4">
              Trusted by Science, Made with Love
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every piece of guidance on Lunebloom is backed by research from the world's 
              most respected health organizations.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {trustIndicators.map((org) => (
              <div 
                key={org.name}
                className="group relative px-6 py-3 bg-card rounded-xl shadow-sm hover:shadow-md transition-all cursor-default"
              >
                <span className="font-[var(--font-heading)] font-semibold text-[var(--color-rose)]">
                  {org.name}
                </span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {org.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Nutrition */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--color-mint)]/30 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-[var(--color-sage)]" />
              </div>
              <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-2">
                Nutrition & Skincare
              </h3>
              <p className="text-sm text-muted-foreground">
                Phase-specific dietary guidance, supplement recommendations, and pregnancy-safe skincare routines.
              </p>
            </div>
            
            {/* Exercise */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--color-peach)]/30 flex items-center justify-center">
                <Sun className="w-8 h-8 text-[var(--color-rose)]" />
              </div>
              <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-2">
                Exercise & Wellness
              </h3>
              <p className="text-sm text-muted-foreground">
                Safe exercises for each trimester with muscle targets and pregnancy-specific benefits.
              </p>
            </div>
            
            {/* Medical */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--color-lavender)]/30 flex items-center justify-center">
                <Heart className="w-8 h-8 text-[var(--color-lavender)]" />
              </div>
              <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-2">
                Medical Care & Support
              </h3>
              <p className="text-sm text-muted-foreground">
                Test schedules, mental health resources, and mocktail recipes for healthy celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-lavender)]/30 via-[var(--color-blush)]/20 to-[var(--color-peach)]/30" />
        <div className="container relative text-center">
          <LunebloomMascot variant="bloom" size="md" className="mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let Lunebloom guide you through every beautiful moment of your path to motherhood.
          </p>
          <Link href="/trying-to-conceive">
            <Button size="lg" className="bg-[var(--color-rose)] hover:bg-[var(--color-rose)]/90 text-white shadow-lg shadow-[var(--color-rose)]/25">
              Start with Trying to Conceive
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
