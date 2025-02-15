"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Lightbulb, Plus, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const pathname = usePathname()

  const NavLinks = () => (
    <>
      <Link
        href="/explore"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/explore"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Explorer
      </Link>
      <Link
        href="/categories"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/categories"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Catégories
      </Link>
    </>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Lightbulb className="h-5 w-5 md:h-6 md:w-6" />
          <span className="font-bold text-sm md:text-base">TipHub</span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center space-x-6 ml-6">
          <NavLinks />
        </nav>

        {/* Boutons desktop */}
        <div className="ml-auto hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild>
            <Link href="/tips/new">
              <Plus className="h-4 w-4 mr-2" />
              Nouveau conseil
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Connexion</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">S'inscrire</Link>
          </Button>
        </div>

        {/* Menu mobile */}
        <div className="ml-auto md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="px-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <NavLinks />
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Button asChild>
                    <Link href="/tips/new">
                      <Plus className="h-4 w-4 mr-2" />
                      Nouveau conseil
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/login">Connexion</Link>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href="/signup">S'inscrire</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}