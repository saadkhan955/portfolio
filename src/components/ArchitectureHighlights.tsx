import React, { useState } from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { ARCHITECTURE_CASE_STUDIES } from '../data/portfolioData';

export const ArchitectureHighlights: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeStudy = ARCHITECTURE_CASE_STUDIES[activeTab];

  return (
    <section id="architecture" className="py-20 relative bg-slate-900/30 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-xs font-bold text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Architectural Case Studies
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Deep dives into specific engineering problems solved across performance, regulatory compliance, and backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {ARCHITECTURE_CASE_STUDIES.map((study, idx) => {
            const active = activeTab === idx;
            return (
              <button
                key={study.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                  active
                    ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
                  {study.category}
                </div>
                <div className="text-sm font-bold text-white line-clamp-1">
                  {study.title}
                </div>
              </button>
            );
          })}
        </div>

        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-slate-800 bg-slate-900/80 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            
            <div className="flex-1 space-y-5">
              <div>
                <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-cyan-950 text-cyan-400 border border-cyan-800/60 uppercase tracking-wider">
                  {activeStudy.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                  {activeStudy.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeStudy.summary}
              </p>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                  Measured Impact
                </div>
                <div className="text-sm font-semibold text-white">
                  {activeStudy.impact}
                </div>
              </div>
            </div>

            <div className="flex-1 p-6 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Key Technical Implementations
              </div>
              <ul className="space-y-3.5">
                {activeStudy.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
