import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 sm:py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="Studio Bike logo" className="h-10 sm:h-12 w-auto" />
            <div>
              <span className="font-display text-lg sm:text-xl">Studio Bike</span>
              <p className="text-secondary-foreground/60 text-xs sm:text-sm">
                A sua melhor experiência sobre 2 rodas
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-secondary-foreground/60 text-xs sm:text-sm">
              CNPJ: 23.451.181/0001-78
            </p>
            <p className="text-secondary-foreground/60 text-xs sm:text-sm">
              © {new Date().getFullYear()} Studio Bike. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
