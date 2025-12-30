import { Link } from "wouter";
import { Moon, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border/40 bg-[var(--color-cream)]">
      {/* Decorative wave top */}
      <div className="absolute -top-12 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 fill-[var(--color-cream)]"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Moon className="h-7 w-7 text-[var(--color-lavender)]" />
                <Sparkles className="h-3 w-3 text-[var(--color-peach)] absolute -top-1 -right-1" />
              </div>
              <span className="text-lg font-[var(--font-heading)] font-bold text-gradient">
                Lunebloom
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your gentle guide through the beautiful journey of motherhood, from conception to postpartum.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-heading)] font-semibold mb-4 text-[var(--color-rose)]">
              Journey Phases
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/trying-to-conceive" className="text-muted-foreground hover:text-[var(--color-rose)] transition-colors">
                  Trying to Conceive
                </Link>
              </li>
              <li>
                <Link href="/first-trimester" className="text-muted-foreground hover:text-[var(--color-rose)] transition-colors">
                  First Trimester
                </Link>
              </li>
              <li>
                <Link href="/second-trimester" className="text-muted-foreground hover:text-[var(--color-rose)] transition-colors">
                  Second Trimester
                </Link>
              </li>
              <li>
                <Link href="/third-trimester" className="text-muted-foreground hover:text-[var(--color-rose)] transition-colors">
                  Third Trimester
                </Link>
              </li>
              <li>
                <Link href="/postpartum" className="text-muted-foreground hover:text-[var(--color-rose)] transition-colors">
                  Postpartum
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-[var(--font-heading)] font-semibold mb-4 text-[var(--color-rose)]">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources#guides" className="text-muted-foreground hover:text-[var(--color-rose)] transition-colors">
                  Downloadable Guides
                </Link>
              </li>
              <li>
                <Link href="/resources#glossary" className="text-muted-foreground hover:text-[var(--color-rose)] transition-colors">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/resources#support" className="text-muted-foreground hover:text-[var(--color-rose)] transition-colors">
                  Support Links
                </Link>
              </li>
              <li>
                <Link href="/resources#references" className="text-muted-foreground hover:text-[var(--color-rose)] transition-colors">
                  Scientific References
                </Link>
              </li>
            </ul>
          </div>

          {/* Trusted Sources */}
          <div>
            <h4 className="font-[var(--font-heading)] font-semibold mb-4 text-[var(--color-rose)]">
              Trusted Sources
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>ACOG</li>
              <li>WHO</li>
              <li>NIH</li>
              <li>CDC</li>
              <li>FDA</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-border/40">
          <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
            <strong>Medical Disclaimer:</strong> The information provided on Lunebloom is for educational purposes only and is not intended as medical advice. 
            Always consult with your healthcare provider for personalized guidance regarding your pregnancy and health.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-[var(--color-rose)] fill-[var(--color-rose)]" />
          <span>by Lunebloom © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
