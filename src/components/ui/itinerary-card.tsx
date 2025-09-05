import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Eye } from "lucide-react";

interface ItineraryCardProps {
  title: string;
  location: string;
  duration: string;
  price: string;
  imageUrl: string;
  author: string;
  tags: string[];
  onView: () => void;
}

export function ItineraryCard({ 
  title, 
  location, 
  duration, 
  price, 
  imageUrl, 
  author, 
  tags, 
  onView 
}: ItineraryCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-float transition-all duration-300 hover:-translate-y-1 bg-card">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/90 text-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground line-clamp-2">
            {title}
          </h3>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
            <span className="mx-2">•</span>
            <span>por {author}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>{price}</span>
          </div>
        </div>

        <Button 
          onClick={onView}
          className="w-full bg-primary hover:bg-primary-hover"
        >
          <Eye className="h-4 w-4 mr-2" />
          Ver Roteiro
        </Button>
      </CardContent>
    </Card>
  );
}