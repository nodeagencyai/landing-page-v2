"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PricingSection() {
  const pricingPlans = [
    {
      name: "Starter",
      description: "For solo founders testing outbound.",
      features: [
        "Single platform scraping",
        "Basic AI enrichment",
        "Instantly.ai integration",
        "Lead database with export",
        "1 email sequence setup",
        "Dashboard access",
        "Email support",
      ],
      buttonText: "Book a Call",
      buttonClass:
        "bg-zinc-300 shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] outline outline-0.5 outline-[#1e29391f] outline-offset-[-0.5px] !text-black hover:bg-zinc-400",
    },
    {
      name: "Growth",
      description: "For teams ready to scale outreach.",
      features: [
        "Multi-platform scraping",
        "Full AI personalization",
        "Unlimited campaigns",
        "HeyReach + Instantly integrations",
        "Real-time analytics dashboard",
        "Weekly optimization calls",
        "Priority support + Slack",
        "A/B testing included",
      ],
      buttonText: "Book a Call",
      buttonClass:
        "bg-primary-foreground shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-primary text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-primary-foreground/90",
      popular: true,
    },
    {
      name: "Scale",
      description: "For agencies and high-volume teams.",
      features: [
        "All platforms + custom sources",
        "Priority AI processing",
        "Custom integrations",
        "Cost tracking dashboard",
        "Multi-user access",
        "Dedicated account manager",
        "White-label ready",
        "Onboarding for your team",
        "SLA guarantee",
      ],
      buttonText: "Book a Call",
      buttonClass:
        "bg-secondary shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-secondary-foreground text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-secondary/90",
    },
  ]

  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px]">
            Built For You. Tailored To Your Goals.
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-tight">
            Custom implementation based on your outreach volume and tech stack. Let's talk.
          </p>
        </div>
      </div>
      <div className="self-stretch px-5 flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 mt-10 max-w-[1100px] mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 p-4 overflow-hidden rounded-xl flex flex-col justify-start items-start gap-6 ${plan.popular ? "bg-primary shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]" : "bg-gradient-to-b from-gray-50/5 to-gray-50/0"}`}
            style={plan.popular ? {} : { outline: "1px solid hsl(var(--border))", outlineOffset: "-1px" }}
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div
                  className={`w-full text-lg font-semibold leading-tight ${plan.popular ? "text-primary-foreground" : "text-zinc-200"}`}
                >
                  {plan.name}
                  {plan.popular && (
                    <span className="ml-2 px-2 overflow-hidden rounded-full justify-center items-center gap-2.5 inline-flex py-0.5 bg-gradient-to-b from-primary-light/50 to-primary-light bg-white">
                      <span className="text-center text-primary-foreground text-xs font-normal leading-tight break-words">
                        Popular
                      </span>
                    </span>
                  )}
                </div>
                <div
                  className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"}`}
                >
                  {plan.description}
                </div>
              </div>
              <Link href="https://cal.com/node-ai/leadgenos-demo" target="_blank" rel="noopener noreferrer" className="self-stretch">
                <Button
                  className={`w-full px-5 py-2 rounded-[40px] flex justify-center items-center ${plan.buttonClass}`}
                >
                  <span className="text-center text-sm font-medium leading-tight">
                    {plan.buttonText}
                  </span>
                </Button>
              </Link>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div
                className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                What's included:
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="self-stretch flex justify-start items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Check
                        className={`w-full h-full ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                        strokeWidth={2}
                      />
                    </div>
                    <div
                      className={`leading-tight font-normal text-sm text-left ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                    >
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
