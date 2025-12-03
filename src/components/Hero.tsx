import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-secondary-foreground mb-6">
            Studio <span className="text-gradient">Bike</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary-foreground/80 font-light mb-8 max-w-2xl mx-auto">
            A sua melhor experiência sobre 2 rodas. Serviços especializados em manutenção e suspensões de alta performance.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5599999999999"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Agendar serviço
              <ChevronRight size={20} />
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
