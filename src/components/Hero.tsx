import { ChevronRight, ShoppingBag } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary/90" />

      <div className="container-custom relative z-10 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-secondary-foreground mb-6">
            Studio <span className="text-gradient">Bike</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary-foreground/80 font-light mb-8 max-w-2xl mx-auto">
            A sua melhor experiência sobre 2 rodas. Serviços especializados em manutenção e suspensões de alta performance.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/5599999999999"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Agendar serviço
              <ChevronRight size={20} />
            </a>
            <a
              href="/vitrine"
              className="inline-flex items-center justify-center gap-2 bg-highlight hover:bg-highlight/90 text-highlight-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <ShoppingBag size={20} />
              Ver vitrine
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 text-secondary-foreground border border-secondary-foreground/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Nossos serviços
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
