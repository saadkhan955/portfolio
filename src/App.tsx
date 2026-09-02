import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ProjectSection } from './components/ProjectSection';
import { ArchitectureHighlights } from './components/ArchitectureHighlights';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <StatsBar />
        <ProjectSection />
        <ArchitectureHighlights />
        <ExperienceTimeline />
        <SkillsSection />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      <Footer />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
};

export default App;
