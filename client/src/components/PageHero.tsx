import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import LunebloomMascot from "./LunebloomMascot";
import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  mascotVariant?: "hero" | "meditation" | "belly" | "bloom" | "rest" | "skincare" | "exercise" | "nutrition";
  weeks?: string;
}

export default function PageHero({
  title,
  subtitle,
  description,
  icon: Icon,
  gradient,
  mascotVariant = "hero",
  weeks,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className={cn("absolute inset-0", gradient)} />
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="container relative py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge 
              variant="secondary" 
              className="mb-4 bg-white/50 text-foreground border-0"
            >
              <Icon className="w-3 h-3 mr-1" />
              {subtitle}
            </Badge>
            
            {weeks && (
              <p className="text-sm text-muted-foreground mb-2 font-medium">
                {weeks}
              </p>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-heading)] font-bold leading-tight mb-6">
              {title}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
          </div>
          
          {/* Mascot */}
          <div className="flex justify-center">
            <LunebloomMascot variant={mascotVariant} size="lg" className="animate-float" />
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
        </svg>
      </div>
    </section>
  );
}
