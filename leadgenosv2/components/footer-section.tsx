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
    <footer className="w-full border-t border-border/40 py-14 bg-background">
      <div className="max-w-[1320px] mx-auto px-5 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-6 flex flex-col items-start gap-4">
          <Logo />
          <p className="text-muted-foreground text-sm max-w-xs">
            Scale your outbound without scaling your headcount.
          </p>
          <div className="pt-2">
            <SocialLinks />
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-semibold text-foreground mb-4">Product</h4>
          <nav className="flex flex-col gap-3">
            <NavLinks />
          </nav>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-semibold text-foreground mb-4">Legal</h4>
          <nav className="flex flex-col gap-3">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </nav>
        </div>
      </div>
      <div className="max-w-[1320px] mx-auto px-5 mt-12 pt-8 border-t border-border/20 text-center">
        <p className="text-muted-foreground text-xs">© 2026 Node AI. All rights reserved.</p>
      </div>
    </footer>
  )
}
