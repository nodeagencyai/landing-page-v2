"use client";

import { motion } from "framer-motion";

const DashboardPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative w-full max-w-2xl mx-auto perspective-1000"
    >
      {/* Glow effect behind */}
      <div className="absolute -inset-4 bg-gradient-to-b from-foreground/10 to-transparent blur-2xl rounded-3xl" />

      {/* Floating animation wrapper */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Notion page mockup */}
        <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
          {/* Window controls */}
          <div className="flex items-center px-4 py-3 border-b border-border bg-secondary/50">
            {/* Left spacer - window controls */}
            <div className="flex gap-1.5 w-14">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            </div>
            {/* Center - URL bar */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-background/50 text-xs text-muted-foreground">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                notion.so
              </div>
            </div>
            {/* Right spacer - matches left for true center */}
            <div className="w-14" />
          </div>

          {/* Page content */}
          <div className="p-6 md:p-8 space-y-5">
            {/* Page icon and title */}
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Building AI Agents with Claude Code</h3>
                <p className="text-sm text-muted-foreground">A Complete Guide • 8 min read</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Introduction */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Introduction</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Claude Code is Anthropic&apos;s agentic coding tool that lives in your terminal. It understands your codebase, executes commands, and helps you build faster with AI-powered assistance.
              </p>
            </div>

            {/* Key Concepts section */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Key Concepts</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm font-medium text-foreground">Tools</p>
                  <p className="text-xs text-muted-foreground">Read, Edit, Bash, Search</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm font-medium text-foreground">Context</p>
                  <p className="text-xs text-muted-foreground">CLAUDE.md files</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm font-medium text-foreground">Agents</p>
                  <p className="text-xs text-muted-foreground">Autonomous task execution</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm font-medium text-foreground">MCP</p>
                  <p className="text-xs text-muted-foreground">External integrations</p>
                </div>
              </div>
            </div>

            {/* Faded content */}
            <div className="relative">
              <div className="space-y-3 opacity-40">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Implementation</h4>
                <p className="text-sm text-muted-foreground">Start by installing the required dependencies...</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card" />
            </div>

            {/* Continue reading indicator */}
            <div className="text-center pt-2">
              <span className="text-xs text-muted-foreground">+ 5 more sections</span>
            </div>
          </div>
        </div>

        {/* Shadow underneath */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/20 blur-xl rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export { DashboardPreview };
