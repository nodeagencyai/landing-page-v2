"use client"

import React from "react"
import { Database, ArrowRight, Layers } from "lucide-react"

const LeadScraperVisualizer: React.FC = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center p-6 bg-transparent" role="img" aria-label="Lead Scraper Pipeline">

            <div className="flex items-center gap-6 w-full max-w-sm justify-center">

                {/* 1. Sources Grid */}
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <SourceBox domain="linkedin.com" label="LinkedIn" />
                        <SourceBox domain="apollo.io" label="Apollo" />
                    </div>
                    <div className="flex gap-2">
                        <SourceBox domain="x.com" label="X (Twitter)" />
                        <SourceBox domain="google.com" label="Google" />
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center text-muted-foreground/30">
                    <div className="w-4 h-[1px] bg-white/20" />
                    <ArrowRight className="w-4 h-4 ml-[-2px]" />
                </div>

                {/* 2. Processing */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 bg-card border border-white/10 rounded-xl flex items-center justify-center relative shadow-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 rounded-xl" />
                        <Layers className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">Enrich</span>
                </div>

                {/* Arrow */}
                <div className="flex items-center text-muted-foreground/30">
                    <div className="w-4 h-[1px] bg-white/20" />
                    <ArrowRight className="w-4 h-4 ml-[-2px]" />
                </div>

                {/* 3. Output */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 bg-card/60 border border-white/10 rounded-xl flex items-center justify-center relative shadow-sm">
                        <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent opacity-50 rounded-xl" />
                        <Database className="w-6 h-6 text-foreground/80" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-foreground/10 rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
                        </div>
                    </div>
                    <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">Leads</span>
                </div>

            </div>
        </div>
    )
}

const SourceBox = ({ domain, label }: { domain: string, label: string }) => (
    <div className="w-10 h-10 bg-card border border-white/10 rounded-lg flex items-center justify-center group hover:border-white/20 transition-colors relative overflow-hidden" title={label}>
        <div className="w-5 h-5 relative filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
                alt={`${label} logo`}
                className="w-full h-full object-contain"
                width={20}
                height={20}
            />
        </div>
    </div>
)

export default LeadScraperVisualizer
