import { StoreCard } from "@/components/StoreCard";
import { stores } from "@/data/stores";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Store, Users, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnpNNiAzOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descubra e Conecte-se com Lojas Locais
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              A plataforma que une empreendedores e clientes. Avalie, localize e
              apoie negócios da sua região.
            </p>
            <div className="flex gap-2 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar lojas, serviços..."
                  className="pl-10 bg-background text-foreground"
                />
              </div>
              <Button size="lg" variant="secondary">
                Buscar
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Store className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-1">+5,000</div>
              <div className="text-primary-foreground/90">
                Empresas cadastradas
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-1">+15,000</div>
              <div className="text-primary-foreground/90">Avaliações reais</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-1">150+</div>
              <div className="text-primary-foreground/90">Cidades cobertas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Empresas em Destaque</h2>
            <p className="text-xl text-muted-foreground">
              Conheça alguns dos melhores negócios avaliados pela nossa comunidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
