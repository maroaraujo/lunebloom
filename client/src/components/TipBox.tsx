import { cn } from "@/lib/utils";
import { LucideIcon, Lightbulb, AlertTriangle, Heart, Info } from "lucide-react";
import { ReactNode } from "react";

interface TipBoxProps {
  type?: "tip" | "warning" | "love" | "info";
  title?: string;
  children: ReactNode;
  className?: string;
}

const typeConfig = {
  tip: {
    icon: Lightbulb,
    bg: "bg-[var(--color-mint)]/20",
    border: "border-[var(--color-mint)]",
    iconColor: "text-[var(--color-sage)]",
    titleColor: "text-[var(--color-sage)]",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-[var(--color-peach)]/20",
    border: "border-[var(--color-peach)]",
    iconColor: "text-orange-600",
    titleColor: "text-orange-700",
  },
  love: {
    icon: Heart,
    bg: "bg-[var(--color-blush)]/20",
    border: "border-[var(--color-blush)]",
    iconColor: "text-[var(--color-rose)]",
    titleColor: "text-[var(--color-rose)]",
  },
  info: {
    icon: Info,
    bg: "bg-[var(--color-lavender)]/20",
    border: "border-[var(--color-lavender)]",
    iconColor: "text-purple-600",
    titleColor: "text-purple-700",
  },
};

export default function TipBox({ 
  type = "tip", 
  title,
  children,
  className 
}: TipBoxProps) {
  const config = typeConfig[type];
  const Icon = config.icon;
  
  return (
    <div className={cn(
      "rounded-xl border-l-4 p-4 my-6",
      config.bg,
      config.border,
      className
    )}>
      <div className="flex gap-3">
        <Icon className={cn("w-5 h-5 mt-0.5 flex-shrink-0", config.iconColor)} />
        <div>
          {title && (
            <h4 className={cn("font-[var(--font-heading)] font-semibold mb-1", config.titleColor)}>
              {title}
            </h4>
          )}
          <div className="text-sm text-foreground/80 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
