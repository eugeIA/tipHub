import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Lightbulb, TrendingUp, Users, ChefHat, Code, Dumbbell } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Section Héro */}
      <header className="container mx-auto px-4 py-8 md:py-16 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
          Partagez Votre Savoir,<br className="hidden sm:block" />
          <span className="text-primary">Aidez les Autres à Progresser</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          Rejoignez notre communauté d'experts et d'enthousiastes partageant des conseils précieux dans divers domaines.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/signup">Commencer</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <Link href="/explore">Explorer</Link>
          </Button>
        </div>
      </header>

      {/* Section Fonctionnalités */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="p-6">
            <div className="mb-4">
              <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Partagez Votre Expertise</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Créez et partagez des conseils détaillés avec la communauté. Ajoutez des images et catégorisez votre contenu.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4">
              <Users className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Échangez & Connectez</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Interagissez avec d'autres membres via les commentaires et les likes. Construisez votre réputation.
            </p>
          </Card>

          <Card className="p-6 sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Découvrez les Tendances</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Explorez les conseils tendance et les catégories populaires. Restez à jour avec les dernières astuces.
            </p>
          </Card>
        </div>
      </section>

      {/* Section Conseils Populaires */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Conseils Populaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Link href="/tips/1">
            <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-primary/10 p-2 md:p-3 rounded-lg shrink-0">
                  <ChefHat className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Cuisine Zéro Déchet</h3>
                  <p className="text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-3">
                    Découvrez comment utiliser les épluchures de légumes pour créer des bouillons savoureux.
                  </p>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Cuisine • 42 likes
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/tips/2">
            <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-primary/10 p-2 md:p-3 rounded-lg shrink-0">
                  <Code className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Déboguer comme un Pro</h3>
                  <p className="text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-3">
                    Les meilleures pratiques pour identifier et résoudre rapidement les bugs en développement.
                  </p>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Technologie • 38 likes
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/tips/3">
            <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-primary/10 p-2 md:p-3 rounded-lg shrink-0">
                  <Dumbbell className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Routine Morning Boost</h3>
                  <p className="text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-3">
                    Une routine matinale de 15 minutes pour commencer la journée en pleine forme.
                  </p>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Fitness • 35 likes
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}