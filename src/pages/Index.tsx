import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/ui/hero-section";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SampleItineraries } from "@/components/sections/sample-itineraries";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/bariloche-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        title="Crie Roteiros de Viagem Perfeitos"
        subtitle="Monte itinerários detalhados com IA, controle de custos em tempo real e compartilhamento profissional. Planeje sua próxima aventura em minutos."
        backgroundImage={heroImage}
        onCTAClick={() => navigate('/editor')}
      />
      
      <HowItWorks />
      <SampleItineraries />
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold mb-3">É gratuito para usar?</h3>
              <p className="text-muted-foreground">
                Sim! Você pode criar e compartilhar roteiros gratuitamente. Recursos premium como exportação em PDF e branding personalizado estão disponíveis em nossos planos pagos.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold mb-3">Como funciona a sugestão de lugares?</h3>
              <p className="text-muted-foreground">
                Nossa IA analisa milhares de avaliações, horários de funcionamento e dados de turismo para sugerir os melhores lugares baseados no seu perfil de viagem e interesses.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold mb-3">Posso usar para viagens de trabalho?</h3>
              <p className="text-muted-foreground">
                Absolutamente! Muitos consultores e agências usam nossa plataforma para criar roteiros profissionais com branding personalizado e exportação detalhada de custos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">AG Viagens</h4>
              <p className="text-background/80">
                Criando experiências de viagem inesquecíveis através de tecnologia inteligente.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Produto</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Exemplos</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Preços</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Suporte</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-background transition-colors">API</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Empresa</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Carreiras</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/80">
            <p>&copy; 2024 AG Viagens. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
