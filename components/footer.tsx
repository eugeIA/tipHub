import Link from "next/link"
import { Lightbulb, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 md:h-6 md:w-6" />
              <span className="font-bold text-sm md:text-base">TipHub</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              Partagez et découvrez des conseils utiles dans divers domaines.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/explore" className="text-xs md:text-sm text-muted-foreground hover:text-primary">
                  Explorer
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-xs md:text-sm text-muted-foreground hover:text-primary">
                  Catégories
                </Link>
              </li>
              <li>
                <Link href="/tips/new" className="text-xs md:text-sm text-muted-foreground hover:text-primary">
                  Nouveau conseil
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Catégories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/cooking" className="text-xs md:text-sm text-muted-foreground hover:text-primary">
                  Cuisine
                </Link>
              </li>
              <li>
                <Link href="/categories/technology" className="text-xs md:text-sm text-muted-foreground hover:text-primary">
                  Technologie
                </Link>
              </li>
              <li>
                <Link href="/categories/fitness" className="text-xs md:text-sm text-muted-foreground hover:text-primary">
                  Fitness
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} TipHub. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}