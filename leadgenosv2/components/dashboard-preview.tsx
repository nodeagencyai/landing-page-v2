"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, Target, TrendingUp, Mail, MessageSquare } from "lucide-react";

const DashboardPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative w-full max-w-4xl mx-auto perspective-1000"
    >
      {/* Glow effect behind */}
      <div className="absolute -inset-4 bg-gradient-to-b from-foreground/5 to-transparent blur-2xl rounded-3xl" />

      {/* Floating animation wrapper */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Dashboard mockup container */}
        <div
          className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10"
          style={{ backgroundColor: '#080808' }}
        >
          {/* Browser chrome */}
          <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex gap-1.5 w-20">
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 text-xs text-white/40">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                app.leadgenos.io
              </div>
            </div>
            <div className="w-20" />
          </div>

          {/* Dashboard content */}
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Dashboard</h3>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded-md bg-white/10 text-xs text-white/70 border border-white/10">Refresh</div>
                <div className="px-3 py-1.5 rounded-md bg-white/5 text-xs text-white/50 border border-white/10">Instantly</div>
              </div>
            </div>

            {/* Lead Analytics Section */}
            <div>
              <h4 className="text-sm font-medium text-white/70 mb-4">Lead Analytics</h4>
              <div className="grid grid-cols-3 gap-4">
                {/* Total Leads Card */}
                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/50">Total Leads</span>
                    <Users className="w-4 h-4 text-white/30" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">12,847</div>
                  <div className="text-xs text-white/40">All time</div>
                </div>

                {/* Profile Coverage Card */}
                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/50">Profile Coverage</span>
                    <CheckCircle className="w-4 h-4 text-white/30" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">94%</div>
                  <div className="text-xs text-white/40">12,076 of 12,847 leads</div>
                </div>

                {/* Personalization Rate Card */}
                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/50">Personalization Rate</span>
                    <Target className="w-4 h-4 text-white/30" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">87%</div>
                  <div className="text-xs text-white/40">11,177 with hooks</div>
                </div>
              </div>
            </div>

            {/* Key Metrics Section */}
            <div>
              <h4 className="text-sm font-medium text-white/70 mb-4">Email Campaign Metrics</h4>
              <div className="grid grid-cols-5 gap-3">
                {[
                  { title: 'Emails Sent', value: '8,432' },
                  { title: 'Emails Opened', value: '3,247' },
                  { title: 'Email Replies', value: '892' },
                  { title: 'Open Rate', value: '38.5%' },
                  { title: 'Bounce Rate', value: '2.1%' },
                ].map((metric, i) => (
                  <div key={i} className="p-3 rounded-lg border border-white/10 bg-white/5">
                    <div className="text-xs text-white/50 mb-1">{metric.title}</div>
                    <div className="text-lg font-semibold text-white">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Charts Section */}
            <div>
              <h4 className="text-sm font-medium text-white/70 mb-4">Performance Trends</h4>

              {/* Time period tabs */}
              <div className="flex space-x-1 mb-4 p-1 w-fit rounded-lg border border-white/10 bg-white/5">
                {['Last 7 Days', 'Last 30 Days', 'Last 90 Days'].map((label, i) => (
                  <div
                    key={i}
                    className={`px-3 py-1.5 text-xs rounded ${i === 1 ? 'bg-white/10 text-white border border-white/10' : 'text-white/40'}`}
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-white/70">Email Delivery Rate</span>
                    <span className="text-lg font-bold text-white">97.9%</span>
                  </div>
                  {/* Chart bars */}
                  <div className="flex items-end gap-1 h-24">
                    {[65, 78, 82, 75, 88, 92, 85, 90, 95, 97, 96, 98].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-white/20"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-white/70">Response Rate</span>
                    <span className="text-lg font-bold text-white">10.6%</span>
                  </div>
                  {/* Chart bars */}
                  <div className="flex items-end gap-1 h-24">
                    {[45, 52, 48, 58, 62, 55, 68, 72, 65, 78, 82, 85].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-white/10"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Campaigns Overview */}
            <div>
              <h4 className="text-sm font-medium text-white/70 mb-4">Campaigns Overview</h4>
              <div className="rounded-lg border border-white/10 bg-white/5 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      {['Campaign Name', 'Sent', 'Opened', 'Replies', 'Rate'].map((h, i) => (
                        <th key={i} className="text-left p-3 text-xs font-medium text-white/40">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Q1 Outreach', sent: '3,240', opened: '1,298', replies: '342', rate: '40.1%', color: '#22c55e' },
                      { name: 'Product Launch', sent: '2,156', opened: '789', replies: '198', rate: '36.6%', color: '#3b82f6' },
                      { name: 'Follow-up Seq', sent: '1,890', opened: '567', replies: '89', rate: '30.0%', color: '#f59e0b' },
                    ].map((campaign, i) => (
                      <tr key={i} className="border-t border-white/5">
                        <td className="p-3 text-sm text-white">
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: campaign.color }} />
                            {campaign.name}
                          </div>
                        </td>
                        <td className="p-3 text-sm text-white/60">{campaign.sent}</td>
                        <td className="p-3 text-sm text-white/60">{campaign.opened}</td>
                        <td className="p-3 text-sm text-white/60">{campaign.replies}</td>
                        <td className="p-3 text-sm text-emerald-400">{campaign.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-xs text-white/20 pt-2">
              Powered by Node AI
            </div>
          </div>
        </div>

        {/* Shadow underneath */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/40 blur-xl rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export { DashboardPreview };
