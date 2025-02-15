"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

interface UserResponse {
  id: string
  username: string
  email: string
}

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   username: ""
  // })


  // Vérifier l'existence d'une session au montage
  useEffect(() => {
    const session = localStorage.getItem("userSession")
    if (session) {
      router.push("/")
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    console.log(username, email, password)

    try {
      // 1. Création de l'utilisateur
      const { data: userData, error: userError } = await supabase.rpc<UserResponse>('create_user', {
        username: username,
        email: email,
        password: password,
      });
      // const { data: userData, error: userError } = await supabase
      //   .from("users")
      //   .insert([{
      //     username: username,
      //     email: email,
      //     password: password,
      //   }])
      //   .select()

      if (userError) {
        console.log(userError)
        throw userError}

      // 2. Génération du token JWT
      // const token = await generateJWT(userData[0].id)

      // 3. Stockage sécurisé dans localStorage
      console.log(userData)
      const sessionData = {
        id: userData?.id,
        username: userData?.username,
        email: userData?.email,
      }

      localStorage.setItem("userSession", JSON.stringify(sessionData))

      // 4. Redirection
      router.push("/")

    } catch (err: any) {
      setError(err?.message || "Erreur lors de l'inscription")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-muted/50">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Créer un compte</h1>
          <p className="text-muted-foreground mt-2">
            Rejoignez TipHub et commencez à partager vos conseils !
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Nom d{"'"}utilisateur</Label>
            <Input
              id="username"
              type="text"
              placeholder="votre_pseudo"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="vous@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <Button type="submit" className="w-full">
            {loading ? 'Inscription en cours' : "S'inscrire"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-muted-foreground">
            Déjà un compte ?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}