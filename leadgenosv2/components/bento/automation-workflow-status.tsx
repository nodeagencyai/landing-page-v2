import React from "react"
import { Database, Loader2, PlayCircle, FolderSearch, RefreshCw } from "lucide-react"

const AutomationWorkflowStatus: React.FC = () => {
    const jobs = [
        {
            id: 1,
            name: "Apollo Lead Scraping",
            type: "Scraping",
            progress: 45,
            total: 100,
            status: "running",
            icon: FolderSearch,
            color: "text-foreground/70",
            bgColor: "bg-foreground/5",
            borderColor: "border-foreground/10"
        },
        {
            id: 2,
            name: "Data Enrichment",
            type: "Processing",
            progress: 12,
            total: 45,
            status: "running",
            icon: RefreshCw,
            color: "text-foreground/70",
            bgColor: "bg-foreground/5",
            borderColor: "border-foreground/10"
        },
        {
            id: 3,
            name: "Sync to Supabase",
            type: "Database",
            progress: 0,
            total: 100,
            status: "waiting",
            icon: Database,
            color: "text-foreground/70",
            bgColor: "bg-foreground/5",
            borderColor: "border-foreground/10"
        }
    ]

    return (
        <div className="w-full h-full relative bg-transparent" role="img" aria-label="Automation Workflow Status">
            <div className="absolute inset-4 flex flex-col gap-3">
                {/* Header */}
                <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-foreground/60 animate-pulse" />
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Live Workflows</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground font-mono">2 Active</span>
                </div>

                {/* Job List */}
                <div className="flex flex-col gap-2.5">
                    {jobs.map((job, idx) => (
                        <div
                            key={job.id}
                            className="group bg-card/30 backdrop-blur-md rounded-lg border border-white/5 p-3 relative overflow-hidden hover:border-white/10 transition-colors"
                        >
                            {/* Animated Progress Bar Background */}
                            {job.status === 'running' && (
                                <div
                                    className="absolute bottom-0 left-0 h-[2px] bg-foreground/30 transition-all duration-1000 ease-out"
                                    style={{ width: `${(job.progress / job.total) * 100}%` }}
                                />
                            )}

                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-md ${job.bgColor} ${job.borderColor} border flex items-center justify-center`}>
                                        <job.icon className={`w-4 h-4 ${job.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-medium text-foreground">{job.name}</h4>
                                        <span className="text-[10px] text-muted-foreground">{job.type} • ID: #829{idx}</span>
                                    </div>
                                </div>
                                {job.status === 'running' ? (
                                    <Loader2 className="w-3.5 h-3.5 text-foreground/60 animate-spin" />
                                ) : (
                                    <div className="w-3.5 h-3.5 rounded-full border border-white/20 flex items-center justify-center">
                                        <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                                    </div>
                                )}
                            </div>

                            {/* Progress Info */}
                            <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground/80 pl-11">
                                <span>{job.progress}/{job.total} records</span>
                                <span>{Math.round((job.progress / job.total) * 100)}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AutomationWorkflowStatus
