import React from 'react';
import { ArrowRight, FileText, Layers, Code2, ShieldCheck, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-sky-600/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/90 text-xs font-medium text-slate-300 mb-8 backdrop-blur-sm shadow-sm hover:border-slate-700 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Currently engineering enterprise Drupal at <strong>ThisGainIndia (GAIN)</strong></span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
            Engineering Resilient{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Enterprise Drupal & Web Systems
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            Senior Drupal Developer & Full-Stack Web Engineer with <strong>5+ years</strong> delivering custom PHP 8.3 modules, Drupal 10/11 core migrations, Search API pipelines, and modern React applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5"
            >
              <span>Explore Verified Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Resume (PDF)</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4 text-slate-200" />
              <span className="hidden sm:inline">saadkhan955</span>
            </a>
          </div>

          <div className="pt-8 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3">
              <Layers className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Drupal 10 & 11</div>
                <div className="text-[11px] text-slate-400">Custom Modules & Core Migrations</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3">
              <Code2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Search API & PHP 8.3</div>
                <div className="text-[11px] text-slate-400">Tokenizer Tuning & DB Search</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3">
              <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">React 19 & Full-Stack</div>
                <div className="text-[11px] text-slate-400">TypeScript, TanStack & SPAs</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Performance & CWV</div>
                <div className="text-[11px] text-slate-400">Sub-second LCP & Zero CLS</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
