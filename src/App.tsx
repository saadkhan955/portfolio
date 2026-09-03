import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ProjectSection } from './components/ProjectSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ArchitectureHighlights } from './components/ArchitectureHighlights';
import { ExtensionsShowcase } from './components/ExtensionsShowcase';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Lazy load non-critical modal component for optimal initial payload
const ResumeModal = lazy(() => import('./components/ResumeModal').then((module) => ({ default: module.ResumeModal })));

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <StatsBar />
        <ProjectSection />
        <ExperienceTimeline />
        <ArchitectureHighlights />
        <ExtensionsShowcase />
        <SkillsSection />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      <Footer />
      
      <Suspense fallback={null}>
        {resumeOpen && <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />}
      </Suspense>
    </div>
  );
};

export default App;
