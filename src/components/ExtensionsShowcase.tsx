import React from 'react';
import { Terminal, ShieldCheck, Zap, Sparkles, CheckCircle2, ArrowUpRight, Copy, PlaySquare, Laptop } from 'lucide-react';
import { GithubIcon, ChromeIcon } from './Icons';

export const ExtensionsShowcase: React.FC = () => {
  return (
    <section id="extensions" className="py-20 relative z-10 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-sky-950/80 border border-sky-800/60 text-xs font-bold text-sky-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Browser Extensions & Native Utilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Developer Tools & Chrome Extensions
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Privacy-first Manifest V3 browser extensions and desktop tools engineered for speed, zero external dependencies, and strict CSP compliance.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Manifest V3 Verified</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>100% Offline</span>
            </span>
          </div>
        </div>

        {/* Prominent Extension Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Extension 1: TabFlow */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[90px] rounded-full pointer-events-none" />

            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800/60 flex items-center justify-center text-red-400 shadow-md">
                    <PlaySquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block">
                      Chrome Extension (MV3)
                    </span>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      TabFlow
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live on Chrome Web Store</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Converts all open YouTube tabs into organized, trackable YouTube playlists with one click. Built strictly under Chrome Extension Manifest V3 security rules with zero inline scripts and automatic theme adaptation.
              </p>

              {/* Feature Highlights Mockup Container */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 mb-6 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2 text-[11px]">
                  <span className="flex items-center gap-1.5 font-sans font-semibold text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Feature Highlights
                  </span>
                  <span className="text-emerald-400 font-sans font-bold">100% CSP Compliant</span>
                </div>

                <div className="space-y-2 text-slate-300 font-sans text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Scans active window or all tabs for YouTube video URLs and metadata.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Dynamic dropdown synchronization with instant playlist creation.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Automatic system Dark / Light theme detection with custom CSS variables.</span>
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Chrome MV3', 'JavaScript ES6+', 'Tailwind CSS', 'Cloudflare Pages', 'HTML5'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-800 text-slate-300 border border-slate-700/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions: Live Site, Chrome Web Store, Source Code */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://tfy.khansaad.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>tfy.khansaad.dev</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://chromewebstore.google.com/detail/tabflow-for-youtube/gfdjgilpbpkooldnpghhgpfeacfllebm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400/50 rounded-xl transition-all group/store"
                >
                  <ChromeIcon className="w-3.5 h-3.5 text-cyan-400 group-hover/store:text-cyan-300" />
                  <span>Chrome Web Store</span>
                </a>
              </div>

              <a
                href="https://github.com/saadkhan955/youtube-tabs-to-playlist"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            </div>
          </div>

          {/* Extension 2: Tab URL Copier */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />

            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shadow-md">
                    <Copy className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                      Chrome Extension (MV3)
                    </span>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      Tab URL Copier
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live on Chrome Web Store</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Lightweight developer productivity tool that formats and exports active window or all-window tab URLs into Markdown, HTML, CSV, or Plain Text with customizable delimiters and keyboard shortcuts.
              </p>

              {/* Feature Highlights Mockup Container */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 mb-6 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2 text-[11px]">
                  <span className="flex items-center gap-1.5 font-sans font-semibold text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Feature Highlights
                  </span>
                  <span className="text-cyan-400 font-sans font-bold">&lt; 10ms Execution</span>
                </div>

                <div className="space-y-2 text-slate-300 font-sans text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Exports tab lists formatted as Markdown links, HTML tags, or CSV columns.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Global keyboard shortcuts for instant clipboard capture without opening popup.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Zero background data collection, 100% on-device execution.</span>
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Chrome MV3', 'Clipboard API', 'JavaScript', 'Cloudflare Pages', 'Custom Templates'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-800 text-slate-300 border border-slate-700/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions: Live Site, Chrome Web Store, Source Code */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://tuc.khansaad.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>tuc.khansaad.dev</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://chromewebstore.google.com/detail/tab-url-copier/nbnehobinolaclgihaobabohgghfdlmg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400/50 rounded-xl transition-all group/store"
                >
                  <ChromeIcon className="w-3.5 h-3.5 text-cyan-400 group-hover/store:text-cyan-300" />
                  <span>Chrome Web Store</span>
                </a>
              </div>

              <a
                href="https://github.com/saadkhan955/tab-url-copier"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Banner: Automatic Mouse Mover (macOS Native Utility) */}
        <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 shrink-0">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">macOS Native Utility</span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300">v1.5.0 Release</span>
              </div>
              <h4 className="text-base font-bold text-white mt-0.5">
                Automatic Mouse Mover
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Native macOS menu bar utility built in Objective-C/Swift with Apple Silicon + Intel Universal binaries and zero CPU overhead.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="https://github.com/saadkhan955/automatic-mouse-mover/releases/tag/v1.5.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors group/release"
            >
              <span>Universal Binary (ARM64 & x86_64)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover/release:translate-x-0.5 group-hover/release:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://github.com/saadkhan955/automatic-mouse-mover"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400/50 rounded-lg transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
