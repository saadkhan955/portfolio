import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-xs font-bold text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Proven history of delivering web applications across UK, European, Middle Eastern, and Indian clients.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, idx) => {
            return (
              <div key={idx} className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all">
                
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60 uppercase tracking-wider">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {exp.projectsSummary && (
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 mb-4 text-xs">
                    <strong className="text-slate-300">Client Engagements:</strong>{' '}
                    <span className="text-slate-400">{exp.projectsSummary}</span>
                  </div>
                )}

                <div className="space-y-2 mb-5">
                  {exp.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {exp.technologies.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
