import { ParallaxSection, GlassCard } from "./ParallaxSection";

const stats = [
  { value: "2015", label: "Fundação" },
  { value: "5000+", label: "Serviços realizados" },
  { value: "100%", label: "Clientes satisfeitos" },
  { value: "Park Tool", label: "Certificação" },
];

export function ParallaxStats() {
  return (
    <ParallaxSection variant="shop">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-secondary-foreground mb-2">
            Números que <span className="text-gradient">falam por si</span>
          </h2>
          <p className="text-secondary-foreground/70">
            Resultados que refletem nossa dedicação ao ciclismo
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <GlassCard key={index} className="p-6 text-center">
              <div className="font-display text-3xl md:text-4xl text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-secondary-foreground/70 text-sm">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
