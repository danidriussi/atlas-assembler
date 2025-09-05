import { ItineraryCard } from "@/components/ui/itinerary-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/bariloche-hero.jpg";
import rioImage from "@/assets/rio-sample.jpg";
import buenosAiresImage from "@/assets/buenos-aires-sample.jpg";

export function SampleItineraries() {
  const sampleItineraries = [
    {
      title: "Bariloche Inverno Completo",
      location: "Bariloche, Argentina",
      duration: "5 dias",
      price: "R$ 2.800",
      imageUrl: heroImage,
      author: "Maria Silva",
      tags: ["Inverno", "Aventura", "Romântico"],
      onView: () => console.log("View itinerary 1"),
    },
    {
      title: "Rio de Janeiro Essencial",
      location: "Rio de Janeiro, Brasil",
      duration: "4 dias",
      price: "R$ 1.200",
      imageUrl: rioImage,
      author: "João Santos",
      tags: ["Praia", "Cultura", "Gastronômico"],
      onView: () => console.log("View itinerary 2"),
    },
    {
      title: "Buenos Aires Cultural",
      location: "Buenos Aires, Argentina",
      duration: "3 dias",
      price: "R$ 900",
      imageUrl: buenosAiresImage,
      author: "Ana Costa",
      tags: ["Cidade", "Tango", "História"],
      onView: () => console.log("View itinerary 3"),
    },
  ];

  return (
    <section id="examples" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Roteiros Inspiradores
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra roteiros criados por nossa comunidade de viajantes e consultores especializados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleItineraries.map((itinerary, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ItineraryCard {...itinerary} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="text-lg px-8 py-4">
            Ver Mais Roteiros
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}