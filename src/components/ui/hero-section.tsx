import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  onCTAClick: () => void;
}

export function HeroSection({ title, subtitle, backgroundImage, onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-lg font-medium">AG Viagens</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              onClick={onCTAClick}
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-4 shadow-float"
            >
              Criar Roteiro Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm"
            >
              Ver Exemplos
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}