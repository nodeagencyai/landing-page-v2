import React from "react"
import { TrendingUp, Users, Mail, MousePointerClick } from "lucide-react"

const CampaignAnalytics: React.FC = () => {
    return (
        <div className="w-full h-full relative" role="img" aria-label="Campaign Analytics Dashboard">
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                }}
            />

            {/* Main Chart Card */}
            <div className="absolute inset-x-6 top-8 bottom-6 flex flex-col gap-3">
                {/* Stats Row */}
                <div className="flex gap-3">
                    <div className="flex-1 bg-card/40 backdrop-blur-md border border-white/10 rounded-xl p-3 flex flex-col justify-between group hover:border-white/20 transition-colors">
                        <div className="flex items-center justify-between">
                            <div className="p-1.5 rounded-md bg-foreground/5 text-foreground/70">
                                <Mail className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-[10px] text-foreground/60 font-medium">+12%</span>
                        </div>
                        <div>
                            <div className="text-xl font-semibold text-foreground mt-1">1.2k</div>
                            <div className="text-[10px] text-muted-foreground font-medium">Sent</div>
                        </div>
                    </div>

                    <div className="flex-1 bg-card/40 backdrop-blur-md border border-white/10 rounded-xl p-3 flex flex-col justify-between group hover:border-white/20 transition-colors">
                        <div className="flex items-center justify-between">
                            <div className="p-1.5 rounded-md bg-foreground/5 text-foreground/70">
                                <MousePointerClick className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-[10px] text-foreground/60 font-medium">+5%</span>
                        </div>
                        <div>
                            <div className="text-xl font-semibold text-foreground mt-1">45%</div>
                            <div className="text-[10px] text-muted-foreground font-medium">Open Rate</div>
                        </div>
                    </div>

                    <div className="flex-1 bg-card/40 backdrop-blur-md border border-white/10 rounded-xl p-3 flex flex-col justify-between group hover:border-white/20 transition-colors">
                        <div className="flex items-center justify-between">
                            <div className="p-1.5 rounded-md bg-foreground/5 text-foreground/70">
                                <Users className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-[10px] text-foreground/60 font-medium">+8%</span>
                        </div>
                        <div>
                            <div className="text-xl font-semibold text-foreground mt-1">12</div>
                            <div className="text-[10px] text-muted-foreground font-medium">Meetings</div>
                        </div>
                    </div>
                </div>

                {/* Chart Area */}
                <div className="flex-1 bg-card/40 backdrop-blur-md border border-white/10 rounded-xl p-4 relative overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-muted-foreground" />
                            <span className="text-xs font-medium text-foreground">Campaign Performance</span>
                        </div>
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-foreground/60" />
                            <div className="w-2 h-2 rounded-full bg-foreground/20" />
                        </div>
                    </div>

                    {/* Simulated Chart */}
                    <div className="flex-1 flex items-end justify-between gap-2 px-1 pb-1">
                        {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                            <div key={i} className="w-full bg-white/5 rounded-t-sm relative group h-full flex items-end">
                                <div
                                    className="w-full bg-gradient-to-t from-foreground/10 to-foreground/40 rounded-t-sm transition-all duration-500 group-hover:to-foreground/60"
                                    style={{ height: `${h}%` }}
                                />
                                {/* Secondary bar behind */}
                                <div
                                    className="absolute bottom-0 w-full bg-foreground/5 rounded-t-sm -z-10"
                                    style={{ height: `${Math.max(20, h - 20)}%` }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* X-Axis */}
                    <div className="flex justify-between mt-2 text-[9px] text-muted-foreground font-mono uppercase">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignAnalytics
