import { ParallaxSection, GlassCard } from "./ParallaxSection";
import { Bike, Shield, Award } from "lucide-react";

const features = [
  {
    icon: Bike,
    title: "Especialistas em bikes",
    description: "Conhecimento profundo em todas as modalidades do ciclismo",
  },
  {
    icon: Shield,
    title: "Garantia de qualidade",
    description: "Utilizamos apenas peças originais e insumos premium",
  },
  {
    icon: Award,
    title: "Certificação Park Tool",
    description: "Equipe treinada pela maior escola de mecânica do mundo",
  },
];

export function ParallaxCTA() {
  return (
    <ParallaxSection variant="action">
      <GlassCard className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mb-3 sm:mb-4">
          Sua bike merece o <span className="text-gradient">melhor</span>
        </h2>
        <p className="text-secondary-foreground/80 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
          Com mais de 10 anos de experiência, oferecemos serviços de alta qualidade para você pedalar com segurança e performance.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 backdrop-blur-sm flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0"
            >
              <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent sm:mx-auto sm:mb-3 flex-shrink-0" />
              <div className="text-left sm:text-center">
                <h3 className="font-display text-base sm:text-lg text-secondary-foreground mb-0 sm:mb-1">
                  {feature.title}
                </h3>
                <p className="text-secondary-foreground/60 text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/5599999999999"
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
        >
          Agendar manutenção
        </a>
      </GlassCard>
    </ParallaxSection>
  );
}
