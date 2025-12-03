import { Header } from "@/components/Header";
import { useEffect } from "react";

const Vitrine = () => {
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
      {/* Header fixo - 80px */}
      <div className="h-20 flex-shrink-0">
        <Header />
      </div>

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
