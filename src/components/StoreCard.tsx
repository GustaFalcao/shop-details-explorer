import { Store } from "@/types/store";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface StoreCardProps {
  store: Store;
}

export const StoreCard = ({ store }: StoreCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-card-hover group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={store.images[0]}
          alt={store.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur">
            {store.category}
          </Badge>
          <Badge
            variant={store.isOpen ? "default" : "destructive"}
            className={store.isOpen ? "bg-success" : ""}
          >
            {store.isOpen ? "Aberto" : "Fechado"}
          </Badge>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{store.name}</h3>
          <div className="flex items-center gap-1 text-sm mb-3">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="font-semibold">{store.rating}</span>
            <span className="text-muted-foreground">({store.reviewCount})</span>
          </div>
          <p className="text-muted-foreground line-clamp-2">{store.description}</p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="line-clamp-1">{store.address}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4 shrink-0" />
            <span>{store.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4 shrink-0" />
            <span>{store.hours}</span>
          </div>
        </div>

        <Link to={`/store/${store.id}`}>
          <Button className="w-full">Ver Detalhes</Button>
        </Link>
      </div>
    </Card>
  );
};
