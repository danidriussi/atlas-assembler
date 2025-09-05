import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: boolean;
}

export function FeatureCard({ icon, title, description, gradient = false }: FeatureCardProps) {
  return (
    <Card className={`group hover:shadow-float transition-all duration-300 hover:-translate-y-1 ${
      gradient ? 'bg-gradient-primary text-white border-0' : 'bg-card hover:bg-card-hover'
    }`}>
      <CardContent className="p-6 text-center space-y-4">
        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
          gradient 
            ? 'bg-white/20 text-white' 
            : 'bg-primary-light text-primary group-hover:bg-primary group-hover:text-white'
        } transition-colors`}>
          {icon}
        </div>
        
        <h3 className={`text-xl font-semibold ${
          gradient ? 'text-white' : 'text-foreground'
        }`}>
          {title}
        </h3>
        
        <p className={`leading-relaxed ${
          gradient ? 'text-white/90' : 'text-muted-foreground'
        }`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}