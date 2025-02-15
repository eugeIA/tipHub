import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { ChefHat, Code, Dumbbell, Briefcase, Wrench, ThumbsUp, MessageSquare } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"

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

export const metadata: Metadata = {
  title: "Détails du conseil | TipHub",
  description: "Découvrez ce conseil en détail sur TipHub",
}

export async function generateStaticParams() {
  const supabase = createClient()
  const { data: tips } = await supabase
    .from("tips")
    .select("id")
    .eq("published", true)

  return (tips ?? []).map((tip) => ({
    id: tip.id,
  }))
}

export default async function TipPage({
  params
}: {
  params: { id: string }
}) {
  const supabase = createClient()
  const { data: tip } = await supabase
    .from("tips")
    .select(`
      *,
      user:users(username, avatar_url),
      category_id,
      votes(count),
      comments(count)
    `)
    .eq("id", params.id)
    .eq("published", true)
    .single()

  if (!tip) {
    notFound()
  }

  const Icon = categoryIcons[tip.category_id as keyof typeof categoryIcons] || ChefHat
  const categoryName = categoryNames[tip.category_id as keyof typeof categoryNames] || "Autre"

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Card className="p-6 md:p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-bold">{tip.title}</h1>
              </div>
              <div className="flex items-center space-x-2 mt-2 text-sm text-muted-foreground">
                <span>Par {tip.user.username}</span>
                <span>•</span>
                <span>{new Date(tip.created_at).toLocaleDateString("fr-FR")}</span>
                <span>•</span>
                <span>{categoryName}</span>
              </div>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="whitespace-pre-wrap">{tip.content}</p>
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground border-t pt-6">
            <div className="flex items-center space-x-2">
              <ThumbsUp className="w-4 h-4" />
              <span>{tip.votes?.[0]?.count || 0} votes</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>{tip.comments?.[0]?.count || 0} commentaires</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}