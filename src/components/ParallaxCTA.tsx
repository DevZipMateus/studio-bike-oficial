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
        <h2 className="font-display text-3xl md:text-5xl text-secondary-foreground mb-4">
          Sua bike merece o <span className="text-gradient">melhor</span>
        </h2>
        <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Com mais de 10 anos de experiência, oferecemos serviços de alta qualidade para você pedalar com segurança e performance.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 backdrop-blur-sm"
            >
              <feature.icon className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-display text-lg text-secondary-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-secondary-foreground/60 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/5599999999999"
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
        >
          Agendar manutenção
        </a>
      </GlassCard>
    </ParallaxSection>
  );
}
