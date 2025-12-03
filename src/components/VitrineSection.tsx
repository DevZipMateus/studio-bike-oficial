import { ShoppingBag, ExternalLink, Package, Tag, Truck } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Peças de qualidade",
    description: "Componentes originais das melhores marcas",
  },
  {
    icon: Tag,
    title: "Preços competitivos",
    description: "Ofertas especiais para nossos clientes",
  },
  {
    icon: Truck,
    title: "Entrega rápida",
    description: "Receba seus produtos com agilidade",
  },
];

export function VitrineSection() {
  return (
    <section id="vitrine" className="section-padding bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Loja online
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mt-2 mb-4 sm:mb-6">
              Nossa vitrine
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Explore nossa seleção de peças, acessórios e equipamentos para ciclistas. 
              Produtos de alta qualidade das melhores marcas do mercado, selecionados 
              especialmente para você que busca performance e segurança.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-row sm:flex-col items-center sm:text-center p-3 sm:p-4 bg-background rounded-xl gap-3 sm:gap-0"
                >
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent sm:mb-2 flex-shrink-0" />
                  <div className="sm:text-center">
                    <h3 className="font-semibold text-foreground text-sm mb-0 sm:mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="/vitrine"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105"
              >
                <ShoppingBag size={18} className="sm:w-5 sm:h-5" />
                Acessar vitrine
              </a>
              <a
                href="https://wa.me/5599999999999"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300"
              >
                Falar com vendedor
              </a>
            </div>
          </div>

          {/* Preview Card */}
          <div className="relative hidden sm:block">
            <div className="card-elevated p-2 rounded-xl sm:rounded-2xl bg-background">
              {/* Browser mockup header */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-border">
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-accent/60" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-highlight/60" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 mx-2 sm:mx-4">
                  <div className="bg-muted rounded-md px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs text-muted-foreground truncate">
                    studiobike.egestor.com.br/vitrine
                  </div>
                </div>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
              </div>

              {/* Preview iframe */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-b-xl">
                <iframe
                  src="https://studiobike.egestor.com.br/vitrine/"
                  title="Preview da Vitrine Studio Bike"
                  className="w-full h-full border-0 pointer-events-none"
                  style={{ 
                    transform: "scale(1)", 
                    transformOrigin: "top left",
                  }}
                />
                {/* Overlay to make it clickable */}
                <a
                  href="/vitrine"
                  className="absolute inset-0 bg-transparent hover:bg-accent/5 transition-colors flex items-center justify-center group"
                >
                  <span className="bg-accent text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Abrir vitrine completa
                  </span>
                </a>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-highlight/20 rounded-xl -z-10" />
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
