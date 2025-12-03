import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Gilvan Souza Costa",
    text: "Excelente! Sabe cuidar das nossas bikes, tem químico bom e produtos de primeira qualidade.",
    rating: 5,
  },
  {
    name: "Milana Caires",
    text: "Trabalho de extrema competência. Sem dúvidas o melhor da região!",
    rating: 5,
  },
  {
    name: "Luciano Tanure",
    text: "Ótimo lugar para dar aquele upgrade na bike! Nossa região merece um local assim!",
    rating: 5,
  },
  {
    name: "Rodrigo Gonçalves",
    text: "Serviço impecável, profissionalismo e dedicação. Recomendo a todos os ciclistas!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mt-2 mb-3 sm:mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A satisfação dos nossos clientes é o nosso maior orgulho. Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elevated p-5 sm:p-6 md:p-8 relative overflow-hidden"
            >
              <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 text-accent/10" />
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-highlight text-highlight"
                  />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 sm:mb-6 relative z-10 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-semibold text-sm sm:text-base">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-semibold text-foreground text-sm sm:text-base">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
