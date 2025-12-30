import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GlassWater } from "lucide-react";

interface MocktailCardProps {
  name: string;
  description: string;
  ingredients: string[];
  instructions: string;
  benefits?: string[];
  color?: string;
  className?: string;
}

export default function MocktailCard({
  name,
  description,
  ingredients,
  instructions,
  benefits,
  color = "var(--color-blush)",
  className,
}: MocktailCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow",
      className
    )}>
      {/* Decorative header */}
      <div 
        className="h-24 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color} 0%, var(--color-cream) 100%)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <GlassWater className="w-12 h-12 text-white/80" />
        </div>
        {/* Decorative bubbles */}
        <div className="absolute top-4 left-6 w-3 h-3 rounded-full bg-white/30 animate-float" />
        <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-white/40 animate-float-delayed" />
        <div className="absolute bottom-4 left-1/3 w-2 h-2 rounded-full bg-white/30 animate-float" />
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="font-[var(--font-heading)] text-lg">
          {name}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Ingredients */}
        <div>
          <h4 className="text-sm font-semibold mb-2 text-[var(--color-sage)]">Ingredients</h4>
          <ul className="text-sm space-y-1">
            {ingredients.map((ing, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)] mt-2 flex-shrink-0" />
                {ing}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Instructions */}
        <div>
          <h4 className="text-sm font-semibold mb-2 text-[var(--color-sage)]">Instructions</h4>
          <p className="text-sm text-muted-foreground">{instructions}</p>
        </div>
        
        {/* Benefits */}
        {benefits && benefits.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {benefits.map((benefit, idx) => (
              <Badge 
                key={idx} 
                variant="secondary"
                className="bg-[var(--color-mint)]/30 text-[var(--color-sage)] border-0 text-xs"
              >
                {benefit}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
