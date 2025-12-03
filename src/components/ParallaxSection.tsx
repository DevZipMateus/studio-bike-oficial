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
      className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${images[variant]})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-secondary/60" />
      
      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8">
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
        rounded-2xl 
        p-8 md:p-12 
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
