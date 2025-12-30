import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sparkles } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/trying-to-conceive", label: "Trying to Conceive" },
  { href: "/first-trimester", label: "First Trimester" },
  { href: "/second-trimester", label: "Second Trimester" },
  { href: "/third-trimester", label: "Third Trimester" },
  { href: "/postpartum", label: "Postpartum" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Moon className="h-8 w-8 text-[var(--color-lavender)] group-hover:text-[var(--color-rose)] transition-colors" />
            <Sparkles className="h-4 w-4 text-[var(--color-peach)] absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="text-xl font-[var(--font-heading)] font-bold text-gradient">
            Lunebloom
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={location === link.href ? "secondary" : "ghost"}
                size="sm"
                className={`text-sm font-medium transition-all ${
                  location === link.href
                    ? "bg-[var(--color-blush)]/50 text-[var(--color-rose)]"
                    : "hover:bg-[var(--color-lavender)]/30"
                }`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background">
            <div className="flex flex-col gap-4 mt-8">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Moon className="h-6 w-6 text-[var(--color-lavender)]" />
                <span className="text-lg font-[var(--font-heading)] font-bold text-gradient">
                  Lunebloom
                </span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    location === link.href
                      ? "bg-[var(--color-blush)]/50 text-[var(--color-rose)]"
                      : "hover:bg-[var(--color-lavender)]/30"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
