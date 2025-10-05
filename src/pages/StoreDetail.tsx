import { useParams, Link } from "react-router-dom";
import { stores, reviews } from "@/data/stores";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ReviewCard } from "@/components/ReviewCard";
import { ReviewForm } from "@/components/ReviewForm";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Clock,
  Globe,
  Star,
  Navigation,
} from "lucide-react";
import { useState } from "react";

const StoreDetail = () => {
  const { id } = useParams();
  const store = stores.find((s) => s.id === id);
  const storeReviews = reviews.filter((r) => r.storeId === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!store) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loja não encontrada</h1>
          <Link to="/">
            <Button>Voltar para página inicial</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={store.images[selectedImage]}
              alt={`${store.name} - Foto ${selectedImage + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {store.images.slice(1).map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index + 1)}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all ${
                  selectedImage === index + 1
                    ? "ring-2 ring-primary"
                    : "hover:opacity-80"
                }`}
              >
                <img
                  src={image}
                  alt={`${store.name} - Foto ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Store Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">{store.name}</h1>
                    <Badge
                      variant={store.isOpen ? "default" : "destructive"}
                      className={store.isOpen ? "bg-success" : ""}
                    >
                      {store.isOpen ? "Aberto" : "Fechado"}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {store.category}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(store.rating)
                              ? "fill-primary text-primary"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-lg">{store.rating}</span>
                    <span className="text-muted-foreground">
                      ({store.reviewCount} avaliações)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-foreground leading-relaxed">
                {store.description}
              </p>
            </div>

            {/* Reviews Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Avaliações</h2>
              <div className="space-y-4 mb-8">
                {storeReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
              <ReviewForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="bg-card rounded-lg p-6 border space-y-4 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Endereço</p>
                    <p className="text-muted-foreground">{store.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Telefone</p>
                    <a
                      href={`tel:${store.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {store.phone}
                    </a>
                  </div>
                </div>

                {store.website && (
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Website</p>
                      <a
                        href={`https://${store.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {store.website}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Horário de Funcionamento</p>
                    <p className="text-muted-foreground">{store.hours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <Button className="w-full gap-2">
                  <Navigation className="w-4 h-4" />
                  Como Chegar
                </Button>
                <Button variant="outline" className="w-full gap-2" asChild>
                  <a href={`tel:${store.phone}`}>
                    <Phone className="w-4 h-4" />
                    Ligar Agora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoreDetail;
