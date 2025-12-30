import { cn } from "@/lib/utils";

interface LunebloomMascotProps {
  variant?: "hero" | "meditation" | "belly" | "bloom" | "rest" | "skincare" | "exercise" | "nutrition";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "w-24 h-24",
  md: "w-40 h-40",
  lg: "w-64 h-64",
  xl: "w-96 h-96",
};

export default function LunebloomMascot({ 
  variant = "hero", 
  className,
  size = "lg" 
}: LunebloomMascotProps) {
  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {/* Base ethereal glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-lavender)]/40 via-[var(--color-blush)]/30 to-[var(--color-peach)]/40 blur-2xl animate-glow" />
      
      {/* Main mascot illustration */}
      <svg
        viewBox="0 0 200 200"
        className="relative w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background moon glow */}
        <defs>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF8E7" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#E8D5F2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFD4D4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D5F2" />
            <stop offset="50%" stopColor="#FFD4D4" />
            <stop offset="100%" stopColor="#FFDAB9" />
          </linearGradient>
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF5EE" />
            <stop offset="100%" stopColor="#FFE4D6" />
          </linearGradient>
          <linearGradient id="dressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D5F2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4F4DD" stopOpacity="0.6" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Moon background */}
        <circle cx="100" cy="100" r="90" fill="url(#moonGlow)" />
        
        {/* Crescent moon */}
        <path
          d="M140 40 C160 60, 160 140, 140 160 C100 140, 100 60, 140 40"
          fill="#FFF8E7"
          stroke="#E8D5F2"
          strokeWidth="1"
          filter="url(#softGlow)"
          className="animate-float-delayed"
        />

        {/* Stars */}
        <g className="animate-pulse">
          <circle cx="50" cy="35" r="2" fill="#FFD4D4" />
          <circle cx="160" cy="50" r="1.5" fill="#E8D5F2" />
          <circle cx="45" cy="80" r="1" fill="#FFDAB9" />
          <circle cx="170" cy="120" r="2" fill="#D4F4DD" />
          <circle cx="35" cy="140" r="1.5" fill="#FFD4D4" />
        </g>

        {/* Flowing hair - organic Loish-style curves */}
        <path
          d="M70 70 Q50 90, 55 120 Q60 150, 45 170 Q70 160, 80 140 Q85 120, 75 100 Q70 85, 70 70"
          fill="url(#hairGradient)"
          opacity="0.9"
        />
        <path
          d="M130 70 Q150 90, 145 120 Q140 150, 155 170 Q130 160, 120 140 Q115 120, 125 100 Q130 85, 130 70"
          fill="url(#hairGradient)"
          opacity="0.9"
        />
        <path
          d="M75 65 Q100 50, 125 65 Q135 75, 130 90 Q100 80, 70 90 Q65 75, 75 65"
          fill="url(#hairGradient)"
        />

        {/* Face */}
        <ellipse cx="100" cy="95" rx="28" ry="32" fill="url(#skinGradient)" />
        
        {/* Eyes - large and expressive */}
        <ellipse cx="88" cy="92" rx="6" ry="7" fill="#4A3728" />
        <ellipse cx="112" cy="92" rx="6" ry="7" fill="#4A3728" />
        <circle cx="86" cy="90" r="2" fill="white" />
        <circle cx="110" cy="90" r="2" fill="white" />
        
        {/* Soft blush */}
        <ellipse cx="78" cy="100" rx="6" ry="4" fill="#FFD4D4" opacity="0.5" />
        <ellipse cx="122" cy="100" rx="6" ry="4" fill="#FFD4D4" opacity="0.5" />
        
        {/* Gentle smile */}
        <path
          d="M92 105 Q100 112, 108 105"
          stroke="#C4A484"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Body/Dress - flowing ethereal fabric */}
        <path
          d="M72 125 Q65 150, 60 180 Q100 190, 140 180 Q135 150, 128 125 Q100 135, 72 125"
          fill="url(#dressGradient)"
          stroke="#E8D5F2"
          strokeWidth="0.5"
        />

        {/* Arms */}
        <path
          d="M72 130 Q55 140, 50 155"
          stroke="url(#skinGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M128 130 Q145 140, 150 155"
          stroke="url(#skinGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Flowers in hair */}
        <g filter="url(#softGlow)">
          <circle cx="65" cy="72" r="5" fill="#FFD4D4" />
          <circle cx="62" cy="69" r="3" fill="#FFDAB9" />
          <circle cx="68" cy="69" r="3" fill="#E8D5F2" />
          
          <circle cx="135" cy="72" r="5" fill="#D4F4DD" />
          <circle cx="132" cy="69" r="3" fill="#E8D5F2" />
          <circle cx="138" cy="69" r="3" fill="#FFD4D4" />
          
          <circle cx="100" cy="58" r="4" fill="#FFDAB9" />
          <circle cx="97" cy="55" r="2.5" fill="#FFD4D4" />
          <circle cx="103" cy="55" r="2.5" fill="#E8D5F2" />
        </g>

        {/* Floating flower petals */}
        <g className="animate-float">
          <ellipse cx="35" cy="100" rx="4" ry="2" fill="#FFD4D4" opacity="0.7" transform="rotate(-30 35 100)" />
          <ellipse cx="165" cy="85" rx="3" ry="1.5" fill="#E8D5F2" opacity="0.7" transform="rotate(20 165 85)" />
          <ellipse cx="40" cy="160" rx="3" ry="1.5" fill="#D4F4DD" opacity="0.7" transform="rotate(-15 40 160)" />
        </g>

        {/* Variant-specific elements */}
        {variant === "meditation" && (
          <g>
            <circle cx="100" cy="165" r="20" fill="#E8D5F2" opacity="0.3" />
            <path d="M80 160 Q100 175, 120 160" stroke="#D4F4DD" strokeWidth="2" fill="none" />
          </g>
        )}
        
        {variant === "belly" && (
          <ellipse cx="100" cy="155" rx="18" ry="15" fill="url(#skinGradient)" stroke="#FFD4D4" strokeWidth="1" />
        )}

        {variant === "bloom" && (
          <g filter="url(#softGlow)">
            <circle cx="55" cy="85" r="6" fill="#FFD4D4" />
            <circle cx="145" cy="85" r="6" fill="#D4F4DD" />
            <circle cx="50" cy="110" r="5" fill="#E8D5F2" />
            <circle cx="150" cy="110" r="5" fill="#FFDAB9" />
          </g>
        )}
      </svg>
    </div>
  );
}
