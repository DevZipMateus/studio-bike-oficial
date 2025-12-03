import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/#inicio", anchor: "#inicio", label: "Início" },
  { href: "/#sobre", anchor: "#sobre", label: "Sobre" },
  { href: "/#servicos", anchor: "#servicos", label: "Serviços" },
  { href: "/#depoimentos", anchor: "#depoimentos", label: "Depoimentos" },
  { href: "/#contato", anchor: "#contato", label: "Contato" },
  { href: "/vitrine", anchor: null, label: "Vitrine" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (link: typeof navLinks[0]) => {
    // Se estamos na home e o link tem âncora, usa só a âncora
    if (isHomePage && link.anchor) {
      return link.anchor;
    }
    // Senão, usa o href completo
    return link.href;
  };

  const isActive = (link: typeof navLinks[0]) => {
    if (link.href === "/vitrine") {
      return location.pathname === "/vitrine";
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-secondary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-20 px-4 md:px-8">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Studio Bike logo" className="h-14 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={getHref(link)}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link)
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
        <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-border/20">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={getHref(link)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-6 py-3 font-medium transition-colors ${
                    isActive(link)
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
  );
}
