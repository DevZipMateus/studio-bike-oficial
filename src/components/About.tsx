import { Award, Users, Wrench, Target } from "lucide-react";

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
          {/* Content */}
          <div className="animate-slide-up">
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
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-elevated p-6 text-center group hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-accent group-hover:text-highlight transition-colors" />
                <div className="font-display text-3xl md:text-4xl text-foreground group-hover:text-secondary-foreground mb-1 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-secondary-foreground/70 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
