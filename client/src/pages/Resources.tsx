import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  Heart, 
  Phone,
  FileText,
  HelpCircle,
  Shield,
  Users
} from "lucide-react";
import LunebloomMascot from "@/components/LunebloomMascot";

const downloadableGuides = [
  {
    title: "Preconception Checklist",
    description: "Everything you need to do before trying to conceive",
    category: "TTC",
    icon: Heart,
  },
  {
    title: "First Trimester Survival Guide",
    description: "Managing symptoms and what to expect weeks 1-13",
    category: "Trimester 1",
    icon: FileText,
  },
  {
    title: "Pregnancy-Safe Skincare Guide",
    description: "Complete list of safe and unsafe ingredients",
    category: "Skincare",
    icon: FileText,
  },
  {
    title: "Prenatal Nutrition Planner",
    description: "Weekly meal planning with nutrient targets",
    category: "Nutrition",
    icon: FileText,
  },
  {
    title: "Exercise Guide by Trimester",
    description: "Safe workouts for each stage of pregnancy",
    category: "Exercise",
    icon: FileText,
  },
  {
    title: "Hospital Bag Checklist",
    description: "Everything you need packed and ready",
    category: "Birth Prep",
    icon: FileText,
  },
  {
    title: "Postpartum Recovery Guide",
    description: "Week-by-week recovery expectations",
    category: "Postpartum",
    icon: FileText,
  },
  {
    title: "Breastfeeding Basics",
    description: "Getting started with nursing your baby",
    category: "Postpartum",
    icon: FileText,
  },
];

const glossaryTerms = [
  { term: "Amniocentesis", definition: "A prenatal test where amniotic fluid is sampled to check for genetic conditions." },
  { term: "Braxton Hicks", definition: "Practice contractions that prepare your body for labor but don't indicate labor has begun." },
  { term: "Cervical Effacement", definition: "The thinning and shortening of the cervix in preparation for birth." },
  { term: "Dilation", definition: "The opening of the cervix, measured in centimeters (0-10cm)." },
  { term: "Ectopic Pregnancy", definition: "A pregnancy that develops outside the uterus, usually in a fallopian tube." },
  { term: "Fundal Height", definition: "The distance from the pubic bone to the top of the uterus, used to track baby's growth." },
  { term: "Gestational Diabetes", definition: "Diabetes that develops during pregnancy and usually resolves after birth." },
  { term: "HELLP Syndrome", definition: "A serious pregnancy complication involving hemolysis, elevated liver enzymes, and low platelets." },
  { term: "Implantation", definition: "When a fertilized egg attaches to the uterine lining, usually 6-12 days after conception." },
  { term: "Jaundice", definition: "Yellowing of skin in newborns due to elevated bilirubin, common and usually harmless." },
  { term: "Kick Counts", definition: "Tracking baby's movements to monitor wellbeing, typically starting around week 28." },
  { term: "Linea Nigra", definition: "A dark line that appears on the belly during pregnancy due to hormonal changes." },
  { term: "Melasma", definition: "Dark patches on the skin, often on the face, caused by pregnancy hormones." },
  { term: "NIPT", definition: "Non-Invasive Prenatal Testing - a blood test that screens for chromosomal conditions." },
  { term: "Oxytocin", definition: "The 'love hormone' that triggers labor contractions and promotes bonding." },
  { term: "Placenta Previa", definition: "When the placenta partially or fully covers the cervix." },
  { term: "Quickening", definition: "The first fetal movements felt by the mother, usually between 16-25 weeks." },
  { term: "Rh Factor", definition: "A protein on red blood cells; Rh-negative mothers may need RhoGAM injections." },
  { term: "Stretch Marks (Striae)", definition: "Marks on the skin caused by rapid stretching during pregnancy." },
  { term: "Trimester", definition: "Pregnancy is divided into three trimesters of approximately 13 weeks each." },
  { term: "Umbilical Cord", definition: "The cord connecting baby to placenta, providing nutrients and oxygen." },
  { term: "Vernix", definition: "A waxy coating protecting baby's skin in the womb." },
  { term: "Water Breaking", definition: "Rupture of the amniotic sac, releasing amniotic fluid." },
];

const supportResources = [
  {
    name: "Postpartum Support International",
    description: "Support for perinatal mental health",
    phone: "1-800-944-4773",
    website: "https://www.postpartum.net",
    category: "Mental Health",
  },
  {
    name: "La Leche League",
    description: "Breastfeeding support and education",
    phone: "1-800-525-3243",
    website: "https://www.llli.org",
    category: "Breastfeeding",
  },
  {
    name: "March of Dimes",
    description: "Pregnancy and baby health resources",
    website: "https://www.marchofdimes.org",
    category: "General",
  },
  {
    name: "ACOG Patient Resources",
    description: "Evidence-based pregnancy information",
    website: "https://www.acog.org/womens-health",
    category: "Medical",
  },
  {
    name: "National Domestic Violence Hotline",
    description: "Support for those experiencing abuse",
    phone: "1-800-799-7233",
    website: "https://www.thehotline.org",
    category: "Safety",
  },
  {
    name: "988 Suicide & Crisis Lifeline",
    description: "24/7 crisis support",
    phone: "988",
    website: "https://988lifeline.org",
    category: "Crisis",
  },
];

const trustedSources = [
  { name: "ACOG", fullName: "American College of Obstetricians and Gynecologists", url: "https://www.acog.org" },
  { name: "WHO", fullName: "World Health Organization", url: "https://www.who.int" },
  { name: "NIH", fullName: "National Institutes of Health", url: "https://www.nih.gov" },
  { name: "CDC", fullName: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov" },
  { name: "AAD", fullName: "American Academy of Dermatology", url: "https://www.aad.org" },
  { name: "FDA", fullName: "Food and Drug Administration", url: "https://www.fda.gov" },
];

export default function Resources() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-lavender)]/30 via-[var(--color-cream)] to-[var(--color-mint)]/20" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-[var(--color-blush)]/20 rounded-full blur-3xl" />
        
        <div className="container relative py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge 
                variant="secondary" 
                className="mb-4 bg-[var(--color-lavender)]/50 text-[var(--color-rose)] border-0"
              >
                <BookOpen className="w-3 h-3 mr-1" />
                Knowledge Center
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-heading)] font-bold leading-tight mb-6">
                Resources & Support
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Downloadable guides, a comprehensive glossary, and trusted support resources 
                to accompany you on your journey to motherhood.
              </p>
            </div>
            
            <div className="flex justify-center">
              <LunebloomMascot variant="hero" size="lg" className="animate-float" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-background">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
          </svg>
        </div>
      </section>

      <div className="container py-12">
        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Guides</span>
            </TabsTrigger>
            <TabsTrigger value="glossary" className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Glossary</span>
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Support</span>
            </TabsTrigger>
          </TabsList>

          {/* Downloadable Guides Tab */}
          <TabsContent value="guides">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-[var(--font-heading)] font-bold mb-2">
                Downloadable Guides
              </h2>
              <p className="text-muted-foreground">
                Printable resources to support your journey
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {downloadableGuides.map((guide) => (
                <Card key={guide.title} className="group hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="p-2 rounded-lg bg-[var(--color-cream)]">
                        <guide.icon className="w-5 h-5 text-[var(--color-rose)]" />
                      </div>
                      <Badge variant="secondary" className="text-xs bg-[var(--color-lavender)]/30">
                        {guide.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-base font-[var(--font-heading)] mt-2">
                      {guide.title}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {guide.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-[var(--color-lavender)] hover:bg-[var(--color-lavender)]/20"
                      onClick={() => {
                        import('sonner').then(({ toast }) => {
                          toast.info("Feature coming soon! Downloadable guides will be available in a future update.");
                        });
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Glossary Tab */}
          <TabsContent value="glossary">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-[var(--font-heading)] font-bold mb-2">
                Pregnancy Glossary
              </h2>
              <p className="text-muted-foreground">
                Common terms explained in simple language
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid gap-3">
                {glossaryTerms.map((item) => (
                  <div 
                    key={item.term}
                    className="p-4 rounded-xl bg-card border border-border hover:border-[var(--color-lavender)] transition-colors"
                  >
                    <h3 className="font-[var(--font-heading)] font-semibold text-[var(--color-rose)] mb-1">
                      {item.term}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-[var(--font-heading)] font-bold mb-2">
                Support Resources
              </h2>
              <p className="text-muted-foreground">
                Helplines and organizations ready to support you
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {supportResources.map((resource) => (
                <Card key={resource.name} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg font-[var(--font-heading)]">
                        {resource.name}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs bg-[var(--color-mint)]/30">
                        {resource.category}
                      </Badge>
                    </div>
                    <CardDescription>
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {resource.phone && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-[var(--color-sage)]" />
                        <a 
                          href={`tel:${resource.phone.replace(/-/g, '')}`}
                          className="text-[var(--color-rose)] hover:underline font-medium"
                        >
                          {resource.phone}
                        </a>
                      </div>
                    )}
                    {resource.website && (
                      <div className="flex items-center gap-2 text-sm">
                        <ExternalLink className="w-4 h-4 text-[var(--color-sage)]" />
                        <a 
                          href={resource.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-rose)] hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Trusted Sources Section */}
        <section className="mt-16 py-12 border-t border-border">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-[var(--color-sage)]" />
              <span className="text-sm font-medium text-[var(--color-sage)]">
                Evidence-Based Information
              </span>
            </div>
            <h2 className="text-2xl font-[var(--font-heading)] font-bold mb-2">
              Our Trusted Sources
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All information on Lunebloom is researched and verified using these 
              authoritative medical and scientific organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustedSources.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-card border border-border hover:border-[var(--color-rose)] hover:shadow-md transition-all text-center"
              >
                <div className="font-[var(--font-heading)] font-bold text-lg text-[var(--color-rose)] mb-1">
                  {source.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {source.fullName}
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
