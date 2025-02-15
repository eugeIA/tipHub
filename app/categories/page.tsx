import { Card } from "@/components/ui/card"
import { ChefHat, Code, Dumbbell, Briefcase, Wrench } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Cuisine",
    slug: "cooking",
    icon: ChefHat,
    description: "Astuces culinaires, recettes et techniques de cuisine",
    count: 42
  },
  {
    name: "Technologie",
    slug: "technology",
    icon: Code,
    description: "Conseils tech, programmation et outils numériques",
    count: 38
  },
  {
    name: "Fitness",
    slug: "fitness",
    icon: Dumbbell,
    description: "Exercices, nutrition et bien-être",
    count: 35
  },
  {
    name: "Carrière",
    slug: "career",
    icon: Briefcase,
    description: "Développement professionnel et conseils de carrière",
    count: 29
  },
  {
    name: "Bricolage",
    slug: "diy",
    icon: Wrench,
    description: "Projets DIY, réparations et artisanat",
    count: 31
  }
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Catégories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{category.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {category.description}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        {category.count} conseils
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}