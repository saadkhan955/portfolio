import React from 'react';
import { Code2, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-600 to-sky-400 flex items-center justify-center text-white font-bold">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white">Saad Khan</span> &copy; {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-400 font-medium">Built with React 19, TypeScript, Vite & Tailwind CSS</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
