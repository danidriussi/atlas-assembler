import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { label: "Início", href: "/" },
    { label: "Como Funciona", href: "/#how-it-works" },
    { label: "Exemplos", href: "/#examples" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border shadow-soft">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">AG Viagens</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" onClick={() => navigate('/login')}>
            Entrar
          </Button>
          <Button onClick={() => navigate('/editor')} className="bg-primary hover:bg-primary-hover">
            Criar Roteiro
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => {
                    navigate('/login');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Entrar
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary-hover justify-start"
                  onClick={() => {
                    navigate('/editor');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Criar Roteiro
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}