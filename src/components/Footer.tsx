import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Studio Bike logo" className="h-12 w-auto" />
            <div>
              <span className="font-display text-xl">Studio Bike</span>
              <p className="text-secondary-foreground/60 text-sm">
                A sua melhor experiência sobre 2 rodas
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-secondary-foreground/60 text-sm">
              CNPJ: 23.451.181/0001-78
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} Studio Bike. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
