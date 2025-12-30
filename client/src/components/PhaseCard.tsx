import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PhaseCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  gradient: string;
  delay?: number;
}

export default function PhaseCard({ 
  title, 
  description, 
  href, 
  icon: Icon,
  gradient,
  delay = 0 
}: PhaseCardProps) {
  return (
    <Link href={href}>
      <Card 
        className={cn(
          "group relative overflow-hidden border-0 shadow-md card-hover cursor-pointer",
          "bg-card/80 backdrop-blur-sm"
        )}
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Gradient background on hover */}
        <div 
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            gradient
          )} 
        />
        
        {/* Decorative blob */}
        <div 
          className={cn(
            "absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 transition-opacity",
            gradient
          )}
        />
        
        <CardContent className="relative p-6">
          <div className="flex items-start gap-4">
            {/* Icon container */}
            <div className={cn(
              "p-3 rounded-xl transition-all duration-300",
              "bg-[var(--color-cream)] group-hover:scale-110",
              gradient.includes("blush") && "group-hover:bg-[var(--color-blush)]/50",
              gradient.includes("lavender") && "group-hover:bg-[var(--color-lavender)]/50",
              gradient.includes("peach") && "group-hover:bg-[var(--color-peach)]/50",
              gradient.includes("mint") && "group-hover:bg-[var(--color-mint)]/50"
            )}>
              <Icon className="w-6 h-6 text-[var(--color-rose)] group-hover:text-[var(--color-rose)]" />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="font-[var(--font-heading)] font-semibold text-lg mb-1 group-hover:text-[var(--color-rose)] transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          
          {/* Arrow indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <svg className="w-5 h-5 text-[var(--color-rose)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
