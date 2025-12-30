import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  icon?: LucideIcon;
  iconColor?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function ContentSection({ 
  title, 
  icon: Icon, 
  iconColor = "text-[var(--color-rose)]",
  children,
  className,
  id
}: ContentSectionProps) {
  return (
    <section id={id} className={cn("py-12", className)}>
      <div className="flex items-center gap-3 mb-6">
        {Icon && (
          <div className="p-2 rounded-xl bg-[var(--color-cream)]">
            <Icon className={cn("w-6 h-6", iconColor)} />
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-[var(--font-heading)] font-bold">
          {title}
        </h2>
      </div>
      <div className="prose prose-lg max-w-none text-foreground">
        {children}
      </div>
    </section>
  );
}
