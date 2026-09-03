import React from 'react';
import { ArrowRight, Download, FileText, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-38 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[420px] h-[320px] bg-sky-600/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/90 text-xs font-medium text-slate-300 mb-6 backdrop-blur-sm shadow-sm hover:border-slate-700 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Currently engineering enterprise Drupal platforms at <strong>ThisGainIndia (GAIN)</strong></span>
          </div>

          {/* Primary Recruiter-Clear Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
            <span className="block text-2xl sm:text-3xl font-bold text-slate-400 mb-2 font-mono">Saad Khan</span>
            Drupal &amp; Full-Stack Engineer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              building enterprise web platforms
            </span>
          </h1>

          {/* Clear, High-Confidence Summary */}
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
            I engineer scalable Drupal 10/11 platforms, custom PHP backend systems, and modern React applications with a strict focus on maintainability, performance, and production reliability.
          </p>

          {/* Key Proof Metrics Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-2.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 text-xs sm:text-sm font-semibold text-slate-200 mb-8 backdrop-blur-md shadow-inner">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>5+ Years</strong> Experience</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span><strong>15+</strong> Enterprise Platforms</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>350+</strong> Production Commits</span>
            </div>
          </div>

          {/* Core Technology Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs text-slate-400 font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Drupal 10/11</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">PHP 8.3</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">React 19 &amp; TypeScript</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Search API</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Core Web Vitals</span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Selected Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Direct Resume Download */}
            <a
              href="/Saad-Khan-Drupal-Full-Stack-Engineer-Resume.pdf"
              download="Saad-Khan-Drupal-Full-Stack-Engineer-Resume.pdf"
              className="flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all shadow-sm cursor-pointer"
              title="Download official PDF resume"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume (PDF)</span>
            </a>

            {/* Preview Resume Secondary Modal */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Preview</span>
            </button>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile (saadkhan955)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
