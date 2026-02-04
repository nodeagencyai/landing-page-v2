import React from "react"
import { DollarSign, ShieldCheck, Database, Zap } from "lucide-react"

const CostControlCenter: React.FC = () => {
    return (
        <div className="w-full h-full relative flex flex-col justify-end p-5" role="img" aria-label="Cost Control Center">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/5 rounded-2xl" />

            {/* Main Budget Card */}
            <div className="w-full bg-card/40 backdrop-blur-md border border-white/10 rounded-xl p-4 space-y-4 relative z-10 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div>
                        <h4 className="text-xs font-medium text-muted-foreground">Monthly Spend</h4>
                        <div className="text-2xl font-semibold text-foreground mt-0.5">$342.50</div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-foreground/5 border border-foreground/10 flex items-center gap-1.5">
                        <ShieldCheck className="w-3 h-3 text-foreground/70" />
                        <span className="text-[10px] font-medium text-foreground/70">Budget Safe</span>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Cost Per Lead */}
                    <div className="bg-white/5 rounded-lg p-2.5 border border-white/5 flex flex-col gap-1 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                            <DollarSign className="w-3 h-3" />
                            <span className="text-[10px] uppercase tracking-wide">CPL</span>
                        </div>
                        <span className="text-lg font-medium text-foreground">$0.45</span>
                    </div>

                    {/* AI Spend */}
                    <div className="bg-white/5 rounded-lg p-2.5 border border-white/5 flex flex-col gap-1 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Zap className="w-3 h-3 text-foreground/70" />
                            <span className="text-[10px] uppercase tracking-wide">AI Usage</span>
                        </div>
                        <span className="text-lg font-medium text-foreground">$12.50</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] text-muted-foreground">
                        <span>Platform Limit</span>
                        <span>68% Used</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-foreground/40 to-foreground/60 w-[68%] rounded-full" />
                    </div>
                </div>
            </div>

            {/* Floating Decor */}
            <div className="absolute top-8 right-6 w-16 h-16 bg-foreground/10 blur-[40px] rounded-full pointer-events-none" />

        </div>
    )
}

export default CostControlCenter
