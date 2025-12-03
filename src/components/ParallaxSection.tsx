import parallaxAction from "@/assets/parallax-bike-action.jpg";
import parallaxShop from "@/assets/parallax-bike-shop.jpg";

interface ParallaxSectionProps {
  variant: "action" | "shop";
  children: React.ReactNode;
}

const images = {
  action: parallaxAction,
  shop: parallaxShop,
};

export function ParallaxSection({ variant, children }: ParallaxSectionProps) {
  return (
    <section
      className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20"
      style={{
        backgroundImage: `url(${images[variant]})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-secondary/70 md:bg-secondary/60" />
      
      {/* Content */}
      <div className="relative z-10 container-custom">
        {children}
      </div>
    </section>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`
        backdrop-blur-xl 
        bg-secondary-foreground/10 
        border border-secondary-foreground/20 
        rounded-xl sm:rounded-2xl 
        p-5 sm:p-8 md:p-10 lg:p-12 
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
