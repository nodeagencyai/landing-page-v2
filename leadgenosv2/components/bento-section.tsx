import React from "react"
import AILeadEnrichment from "./bento/ai-lead-enrichment"
import CampaignAnalytics from "./bento/campaign-analytics"
import MultiChannelIntegrations from "./bento/multi-channel-integrations"
import AutomationWorkflowStatus from "./bento/automation-workflow-status"
import LeadScraperVisualizer from "./bento/lead-scraper-visualizer"
import CostControlCenter from "./bento/cost-control-center"

interface BentoCardProps {
  title: string
  description: string
  Component: React.FC
}

const BentoCard: React.FC<BentoCardProps> = ({ title, description, Component }) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative group hover:border-white/40 transition-colors duration-500">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-normal leading-7">
          {title} <br />
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </div>
    <div className="self-stretch h-72 relative -mt-0.5 z-10 filter grayscale transition-all duration-500">
      <Component />
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "AI-Powered Enrichment",
      description: "Generate personalized hooks and icebreakers automatically.",
      Component: AILeadEnrichment,
    },
    {
      title: "Real-Time Analytics",
      description: "Track reply rates, meetings booked, and campaign ROI instantly.",
      Component: CampaignAnalytics,
    },
    {
      title: "Unified Integrations",
      description: "Connect Instantly, HeyReach, and Apollo in one seamless workflow.",
      Component: MultiChannelIntegrations,
    },
    {
      title: "Smart Automations",
      description: "Monitor scraping and enrichment jobs executing in the background.",
      Component: AutomationWorkflowStatus,
    },
    {
      title: "Multi-Source Scraping",
      description: "Aggregate high-quality leads from LinkedIn and Apollo simultaneously.",
      Component: LeadScraperVisualizer,
    },
    {
      title: "Cost & Budget Control",
      description: "Track OpenRouter spend and manage campaign budgets in real-time.",
      Component: CostControlCenter,
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Empower Your Workflow with AI
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insights to
              streamline your operations.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
