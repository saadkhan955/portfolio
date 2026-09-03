import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, SaadKhanLogoEmblem } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Selected Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Open Source', href: '#extensions' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="shrink-0 group-hover:scale-105 transition-transform">
              <SaadKhanLogoEmblem className="w-9 h-9 shadow-md shadow-cyan-500/15" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-extrabold tracking-tight text-sm leading-none">
                <span className="text-white group-hover:text-slate-200 transition-colors">SAAD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400/50" />
                <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent font-black">KHAN</span>
              </div>
              <span className="text-[10px] tracking-wider text-slate-400 font-semibold uppercase mt-1 font-mono">
                Drupal &bull; Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile (saadkhan955)"
              className="p-2 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors cursor-pointer"
              title="Preview Resume"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-sm shadow-cyan-500/20"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg text-xs font-semibold flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-6 space-y-4 backdrop-blur-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:text-white"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1 px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 rounded-lg"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
