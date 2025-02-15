import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { ChefHat, Code, Dumbbell, Briefcase, Wrench } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"

const categoryIcons = {
  cooking: ChefHat,
  technology: Code,
  fitness: Dumbbell,
  career: Briefcase,
  diy: Wrench,
} as const

const categoryNames = {
  cooking: "Cuisine",
  technology: "Technologie",
  fitness: "Fitness",
  career: "Carrière",
  diy: "Bricolage",
} as const

type CategorySlug = keyof typeof categoryNames

type Tip = {
  id: string
  title: string
  content: string
  created_at: string
  user: {
    username: string
  }
}

export async function generateStaticParams(): Promise<{ slug: CategorySlug }[]> {
  return Object.keys(categoryNames).map((slug) => ({
    slug: slug as CategorySlug,
  }))
}

export const metadata: Metadata = {
  title: "Catégorie | TipHub",
  description: "Découvrez les meilleurs conseils par catégorie sur TipHub",
}

export default async function CategoryPage({
  params
}: {
  params: { slug: CategorySlug }
}) {
  const supabase = createClient()
  const { data: tips } = await supabase
    .from("tips")
    .select(`
      id,
      title,
      content,
      created_at,
      user:users(username)
    `)
    .eq("category_id", params.slug)
    .eq("published", true)
    .order("created_at", { ascending: false })
  
  const Icon = categoryIcons[params.slug] || ChefHat

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">{categoryNames[params.slug]}</h1>
            <p className="text-muted-foreground mt-2">
              Découvrez les meilleurs conseils de la catégorie {categoryNames[params.slug].toLowerCase()}
            </p>
          </div>
        </div>

        {(!tips || tips.length === 0) ? (
          <Card className="p-6 text-center">
            <p className="text-muted-foreground">
              Aucun conseil n'a encore été publié dans cette catégorie.
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <Link key={tip.id} href={`/tips/${tip.id}`}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {tip.content}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>Par {tip.user.username} • {new Date(tip.created_at).toLocaleDateString("fr-FR")}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}