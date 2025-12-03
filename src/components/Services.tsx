import { Wrench, Settings, Cog, Shield, Package, Sparkles } from "lucide-react";
import suspensionFront from "@/assets/suspension-front.jpg";
import suspensionRear from "@/assets/suspension-rear.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import maintenanceImg from "@/assets/maintenance.jpg";
import partsImg from "@/assets/parts.jpg";
import cleaningImg from "@/assets/cleaning.jpg";

const services = [
  {
    icon: Wrench,
    title: "Manutenção completa",
    description: "Revisão geral da bicicleta com verificação de todos os componentes para garantir segurança e performance.",
    image: maintenanceImg,
  },
  {
    icon: Settings,
    title: "Suspensão dianteira",
    description: "Serviços especializados em suspensões dianteiras das principais marcas de renome mundial.",
    image: suspensionFront,
  },
  {
    icon: Cog,
    title: "Suspensão traseira",
    description: "Manutenção e regulagem de amortecedores traseiros de alta performance para todas as modalidades.",
    image: suspensionRear,
  },
  {
    icon: Shield,
    title: "Peças originais",
    description: "Utilizamos sempre os melhores insumos e peças de reposição originais dos fabricantes.",
    image: partsImg,
  },
  {
    icon: Package,
    title: "Acessórios",
    description: "Venda de acessórios e equipamentos para ciclistas de todos os níveis.",
    image: accessoriesImg,
  },
  {
    icon: Sparkles,
    title: "Limpeza especializada",
    description: "Higienização profunda com produtos específicos para preservar sua bike.",
    image: cleaningImg,
  },
];

export function Services() {
  return (
    <section id="servicos" className="section-padding" style={{ background: "var(--gradient-dark)" }}>
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            O que fazemos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-secondary-foreground mt-2 mb-4">
            Nossos serviços
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Oferecemos serviços especializados respeitando as normas de cada fabricante para garantir a melhor experiência sobre duas rodas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} - Studio Bike`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
              </div>
              <div className="p-6 pt-4">
                <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 -mt-10 relative z-10">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl text-secondary-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5599999999999"
            className="inline-flex items-center justify-center gap-2 bg-highlight hover:bg-highlight/90 text-highlight-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
