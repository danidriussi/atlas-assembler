import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Plus, 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar, 
  Save,
  Share,
  Download,
  Grip,
  Trash2,
  Map
} from "lucide-react";

interface ItineraryBlock {
  id: string;
  type: 'attraction' | 'restaurant' | 'transfer' | 'note';
  title: string;
  description: string;
  duration: string;
  price: string;
  time: string;
  mapLink?: string;
}

interface Day {
  id: string;
  name: string;
  date: string;
  blocks: ItineraryBlock[];
}

const Editor = () => {
  const [itinerary, setItinerary] = useState({
    title: "Bariloche Inverno Mágico",
    city: "Bariloche, Argentina",
    startDate: "2024-07-15",
    endDate: "2024-07-18",
    description: "Uma experiência inesquecível nas montanhas nevadas da Patagônia."
  });

  const [days, setDays] = useState<Day[]>([
    {
      id: "day-1",
      name: "Dia 1 - Chegada e Centro",
      date: "2024-07-15",
      blocks: [
        {
          id: "block-1",
          type: 'transfer',
          title: "Chegada ao Aeroporto",
          description: "Transfer do aeroporto para o hotel no centro de Bariloche",
          duration: "45 min",
          price: "ARS 3.500",
          time: "14:00",
        },
        {
          id: "block-2",
          type: 'attraction',
          title: "Centro Cívico",
          description: "Passeio pelo famoso centro de Bariloche com arquitetura alpina",
          duration: "2 horas",
          price: "Gratuito",
          time: "16:00",
          mapLink: "https://maps.google.com/?q=Centro+Cívico+Bariloche"
        },
        {
          id: "block-3",
          type: 'restaurant',
          title: "Jantar no Butterfly",
          description: "Restaurante com vista para o lago e pratos da patagônia",
          duration: "2 horas",
          price: "ARS 8.500",
          time: "20:00",
        }
      ]
    },
    {
      id: "day-2",
      name: "Dia 2 - Cerro Catedral",
      date: "2024-07-16",
      blocks: [
        {
          id: "block-4",
          type: 'attraction',
          title: "Cerro Catedral",
          description: "Esqui e snowboard na principal estação de esqui da Argentina",
          duration: "6 horas",
          price: "ARS 12.000",
          time: "09:00",
          mapLink: "https://maps.google.com/?q=Cerro+Catedral+Bariloche"
        }
      ]
    }
  ]);

  const [selectedBlock, setSelectedBlock] = useState<ItineraryBlock | null>(null);

  const getBlockTypeColor = (type: ItineraryBlock['type']) => {
    switch (type) {
      case 'attraction': return 'bg-primary text-primary-foreground';
      case 'restaurant': return 'bg-success text-success-foreground';
      case 'transfer': return 'bg-warning text-warning-foreground';
      case 'note': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getBlockTypeLabel = (type: ItineraryBlock['type']) => {
    switch (type) {
      case 'attraction': return 'Atração';
      case 'restaurant': return 'Restaurante';
      case 'transfer': return 'Transfer';
      case 'note': return 'Nota';
      default: return 'Item';
    }
  };

  const addNewBlock = (dayId: string) => {
    const newBlock: ItineraryBlock = {
      id: `block-${Date.now()}`,
      type: 'attraction',
      title: 'Nova Atividade',
      description: 'Adicione uma descrição...',
      duration: '1 hora',
      price: 'ARS 0',
      time: '10:00',
    };

    setDays(days.map(day => 
      day.id === dayId 
        ? { ...day, blocks: [...day.blocks, newBlock] }
        : day
    ));
  };

  const removeBlock = (dayId: string, blockId: string) => {
    setDays(days.map(day => 
      day.id === dayId 
        ? { ...day, blocks: day.blocks.filter(block => block.id !== blockId) }
        : day
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div className="space-y-2">
              <Input 
                value={itinerary.title}
                onChange={(e) => setItinerary({...itinerary, title: e.target.value})}
                className="text-2xl font-bold border-none px-0 focus-visible:ring-0"
              />
              <div className="flex items-center text-muted-foreground gap-2">
                <MapPin className="h-4 w-4" />
                <Input 
                  value={itinerary.city}
                  onChange={(e) => setItinerary({...itinerary, city: e.target.value})}
                  className="border-none px-0 focus-visible:ring-0"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Salvar
              </Button>
              <Button variant="outline" size="sm">
                <Map className="h-4 w-4 mr-2" />
                Ver Mapa
              </Button>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary-hover">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Days Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-lg">
                    Dias
                    <Button size="sm" variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {days.map((day) => (
                    <div key={day.id} className="p-3 rounded-lg bg-muted hover:bg-muted/70 transition-colors cursor-pointer">
                      <div className="font-medium text-sm">{day.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {day.date}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {day.blocks.length} atividades
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Cost Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resumo de Custos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Dia 1</span>
                    <span>ARS 12.000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Dia 2</span>
                    <span>ARS 12.000</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>ARS 24.000</span>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    ≈ R$ 720 (taxa atual)
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Editor */}
            <div className="lg:col-span-2 space-y-6">
              {days.map((day) => (
                <Card key={day.id} className="shadow-card">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{day.name}</CardTitle>
                      <Button 
                        onClick={() => addNewBlock(day.id)}
                        size="sm" 
                        variant="outline"
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Adicionar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {day.blocks.map((block, index) => (
                      <div 
                        key={block.id}
                        className={`p-4 rounded-lg border-2 transition-all cursor-pointer hover:shadow-md ${
                          selectedBlock?.id === block.id ? 'border-primary' : 'border-border'
                        }`}
                        onClick={() => setSelectedBlock(block)}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-2">
                            <Grip className="h-4 w-4 text-muted-foreground cursor-move" />
                            <Badge className={getBlockTypeColor(block.type)}>
                              {getBlockTypeLabel(block.type)}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{block.time}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeBlock(day.id, block.id);
                              }}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <h4 className="font-semibold mb-2">{block.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{block.description}</p>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {block.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {block.price}
                          </div>
                          {block.mapLink && (
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <a href={block.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                Ver no Mapa
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Inspector Panel */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {selectedBlock ? 'Editar Item' : 'Inspector'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedBlock ? (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Título</label>
                        <Input value={selectedBlock.title} />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Descrição</label>
                        <Textarea value={selectedBlock.description} rows={3} />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Horário</label>
                          <Input value={selectedBlock.time} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Duração</label>
                          <Input value={selectedBlock.duration} />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Preço</label>
                        <Input value={selectedBlock.price} />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Link do Mapa</label>
                        <Input 
                          value={selectedBlock.mapLink || ''} 
                          placeholder="https://maps.google.com/..."
                        />
                      </div>
                      
                      <Button className="w-full bg-primary hover:bg-primary-hover">
                        Salvar Alterações
                      </Button>
                    </>
                  ) : (
                    <div className="text-center text-muted-foreground py-8">
                      <MapPin className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Selecione um item para editar</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;