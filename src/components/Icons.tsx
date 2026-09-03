import React from 'react';

export const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.88 0-1.6.72-1.6 1.6a1.6 1.6 0 0 0 1.6 1.6c.89 0 1.6-.72 1.6-1.6a1.6 1.6 0 0 0-1.6-1.6z" />
  </svg>
);

export const ChromeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <path d="M21.17 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M3.95 6.06L8.45 13.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M10.88 21.94L15.38 14.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const SaadKhanLogoEmblem: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg 
    className={className} 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="sk-bg-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0f172a" />
        <stop offset="1" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="sk-cyan-grad" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38bdf8" />
        <stop offset="1" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="sk-border-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38bdf8" stopOpacity="0.7" />
        <stop offset="1" stopColor="#1e293b" />
      </linearGradient>
    </defs>
    
    {/* Outer Rounded Squircle with Subtle Neon Border */}
    <rect width="40" height="40" rx="11" fill="url(#sk-bg-grad)" stroke="url(#sk-border-grad)" strokeWidth="1.5" />
    
    {/* Stylized 'S' Ribbon */}
    <path 
      d="M19 12H13.5C11.567 12 10 13.567 10 15.5C10 17.433 11.567 19 13.5 19H16.5C18.433 19 20 20.567 20 22.5C20 24.433 18.433 26 16.5 26H10" 
      stroke="url(#sk-cyan-grad)" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Stylized 'K' Stem & Chevron */}
    <path 
      d="M24 12V28M30.5 13L24.5 20L31 27" 
      stroke="#38bdf8" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* Precision Accent Node */}
    <circle cx="24.5" cy="20" r="1.5" fill="#f8fafc" />
  </svg>
);
