import { FeatureCard } from "@/components/ui/feature-card";
import { Sparkles, MapPin, Share2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "1. Escolha seu Destino",
      description: "Digite sua cidade de destino e deixe nossa IA sugerir os melhores lugares para visitar baseado nas suas preferências.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "2. Monte seu Roteiro",
      description: "Arraste e solte atividades, restaurantes e pontos turísticos. Veja custos em tempo real e otimize sua rota no mapa.",
      gradient: true,
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "3. Compartilhe e Exporte",
      description: "Gere PDFs profissionais com QR codes, compartilhe com amigos ou exporte planilhas com todos os custos organizados.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crie roteiros incríveis em minutos, não em horas. Nossa plataforma torna o planejamento de viagens simples e divertido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <FeatureCard {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}