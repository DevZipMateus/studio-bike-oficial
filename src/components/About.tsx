import { Award, Users, Wrench, Target } from "lucide-react";
import aboutImg from "@/assets/about-mechanic.jpg";

const stats = [
  { icon: Award, value: "10+", label: "Anos de experiência" },
  { icon: Users, value: "1000+", label: "Clientes atendidos" },
  { icon: Wrench, value: "5000+", label: "Serviços realizados" },
  { icon: Target, value: "100%", label: "Satisfação" },
];

export function About() {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
              <img
                src={aboutImg}
                alt="Mecânico trabalhando em bicicleta na oficina Studio Bike"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Sobre nós
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2 mb-6">
              Nossa história
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fundada em 2015 numa região carente de mão de obra especializada, a Studio Bike nasceu da paixão pelo ciclismo. Desde criança, eu já arrumava minha própria bicicleta, e em 2014, montei peça por peça minha primeira bike para prática esportiva.
              </p>
              <p>
                Incentivado pelos amigos do esporte, decidi montar uma oficina. Mas não seria qualquer oficina: eu decidi me especializar. Em outubro de 2015, fiz meu primeiro treinamento na escola Park Tool e nasceu a Studio Bike.
              </p>
              <p className="font-medium text-foreground">
                Nossa missão é prestar serviços especializados, visando eficiência e segurança nos equipamentos, respeitando as normas de cada fabricante para proporcionar a melhor experiência ao ciclista amador e profissional.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-muted rounded-lg"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <div className="font-display text-2xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
