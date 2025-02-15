import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, TrendingUp, Clock } from "lucide-react"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Explorer les Conseils</h1>
        
        <Tabs defaultValue="trending" className="mb-8">
          <TabsList>
            <TabsTrigger value="trending">
              <TrendingUp className="w-4 h-4 mr-2" />
              Tendances
            </TabsTrigger>
            <TabsTrigger value="latest">
              <Clock className="w-4 h-4 mr-2" />
              Récents
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="trending" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Conseil Exemple {i}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Ceci est un conseil temporaire qui sera remplacé par du contenu réel de notre base de données.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>Catégorie • Il y a 5 min</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="latest" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Dernier Conseil {i}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Ceci est un conseil temporaire qui sera remplacé par du contenu réel de notre base de données.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>Catégorie • À l'instant</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}