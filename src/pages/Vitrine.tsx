import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#contato", label: "Contato" },
  { href: "/vitrine", label: "Vitrine" },
];

const Vitrine = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Remove scroll da página principal
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      // Restaura scroll quando sair da página
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header fixo - 80px com fundo sólido */}
      <header className="h-20 flex-shrink-0 bg-secondary shadow-lg z-50">
        <nav className="container-custom flex items-center justify-between h-full px-4 md:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Studio Bike logo" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-medium transition-colors duration-200 ${
                    link.href === "/vitrine"
                      ? "text-accent"
                      : "text-secondary-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-secondary-foreground p-2"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-border/20 absolute top-20 left-0 right-0 z-50">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-3 font-medium transition-colors ${
                      link.href === "/vitrine"
                        ? "text-accent bg-accent/10"
                        : "text-secondary-foreground hover:bg-accent/10 hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Iframe - altura dinâmica: 100vh - 80px (header) - 63px (badge) */}
      <div className="flex-1 w-full" style={{ height: "calc(100vh - 80px - 63px)" }}>
        <iframe
          src="https://studiobike.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine - Studio Bike"
          className="w-full h-full border-0"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default Vitrine;
