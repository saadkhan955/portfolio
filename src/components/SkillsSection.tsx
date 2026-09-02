import React from 'react';
import { Layers, Code, Zap, Terminal, Cpu } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers': return Layers;
      case 'Code': return Code;
      case 'Zap': return Zap;
      case 'Terminal': return Terminal;
      default: return Cpu;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-900/30 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-xs font-bold text-cyan-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Full-stack mastery grounded in modern architecture, code quality, and strict WCAG accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = getIcon(group.iconName);
            return (
              <div key={idx} className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 bg-slate-900/70">
                
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{group.name}</h3>
                    <p className="text-xs text-slate-400">{group.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-6 mt-4 border-t border-slate-800/80">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 text-xs ${
                        skill.highlight
                          ? 'bg-slate-950/80 border-cyan-900/50 text-white'
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-300'
                      }`}
                    >
                      <span className="font-semibold truncate">{skill.name}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        skill.level === 'Expert'
                          ? 'bg-cyan-950 text-cyan-300'
                          : skill.level === 'Advanced'
                          ? 'bg-sky-950 text-sky-300'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
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
