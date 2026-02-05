"use client"

import { Linkedin, Globe } from "lucide-react"
import Link from "next/link"

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full">
        <rect width="100%" height="100%" fill="transparent" />
        <g transform="translate(-95, 16)">
          <polygon points="479.33 92.23 479.33 387.15 351.41 313.29 351.41 239.69 415.14 276.49 415.14 129.29 479.33 92.23" fill="currentColor" className="text-foreground" />
          <polygon points="351.41 166.09 351.41 239.69 287.67 202.89 287.49 350.2 222.58 387.67 222.58 91.71 351.41 166.09" fill="currentColor" className="text-foreground" />
        </g>
      </svg>
    </div>
    <span className="text-foreground text-lg font-semibold">LeadGenOS</span>
  </div>
)

const SocialLinks = () => (
  <div className="flex items-center gap-4">
    <a
      href="https://www.nodeagency.ai"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-full"
      aria-label="Node Agency Website"
    >
      <Globe className="w-5 h-5" />
    </a>
    <a
      href="https://www.linkedin.com/in/cristoforo-perrone-nodeagencyai/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-full"
      aria-label="LinkedIn Profile"
    >
      <Linkedin className="w-5 h-5" />
    </a>
  </div>
)

const NavLinks = () => (
  <>
    <Link href="#features-section" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
    <Link href="#pricing-section" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
    <Link href="#faq-section" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
  </>
)

export function FooterSection() {
  return (
    <footer className="w-full py-10 bg-background">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 p-6 rounded-2xl bg-secondary/5 border border-border/10">
          {/* Left: Logo */}
          <div className="justify-self-center md:justify-self-start">
            <Logo />
          </div>

          {/* Middle: Navigation */}
          <nav className="flex items-center gap-6 justify-self-center">
            <NavLinks />
          </nav>

          {/* Right: Socials */}
          <div className="justify-self-center md:justify-self-end">
            <SocialLinks />
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-xs">© 2026 Node AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
