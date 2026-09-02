import React from 'react';
import { Calendar, Briefcase, GitCommit, Award } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      value: '5+ Years',
      label: 'Professional Experience',
      subtext: 'Across Drupal & React ecosystems'
    },
    {
      icon: Briefcase,
      value: '15+ Projects',
      label: 'Enterprise Deliveries',
      subtext: 'Charities, Health, B2B & Real Estate'
    },
    {
      icon: GitCommit,
      value: '350+ Commits',
      label: 'Verified Codebase Changes',
      subtext: 'Custom modules, refactors & fixes'
    },
    {
      icon: Award,
      value: 'High Performance',
      label: 'Quality & CWV Focus',
      subtext: 'Sub-second LCP & WCAG 2.1 AA'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-20 relative z-20">
      <div className="glass-panel rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 shadow-xl shadow-black/30 border border-slate-800/80">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 shrink-0 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-all">
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-white tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs font-semibold text-slate-200 mt-0.5">
                  {item.label}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5">
                  {item.subtext}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
