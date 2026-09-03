import React, { useState, useMemo } from 'react';
import { Search, Layers, Code, Globe, Terminal, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllCatalogue, setShowAllCatalogue] = useState(false);

  const categories: { id: ProjectCategory; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'enterprise-drupal', label: 'Enterprise Drupal', icon: Globe },
    { id: 'react-fullstack', label: 'React & Full-Stack', icon: Code },
    { id: 'chrome-extensions', label: 'Chrome Extensions', icon: Terminal },
    { id: 'tools-oss', label: 'Tools & Utilities', icon: Sparkles },
  ];

  // Top Flagship Case Studies to prioritize
  const featuredCaseStudies = useMemo(() => {
    return PROJECTS.filter((p) => p.featured).slice(0, 6);
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.clientOrOrg && p.clientOrOrg.toLowerCase().includes(q)) ||
        p.techStack.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-xs font-bold text-cyan-400 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Selected Production Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Case Studies &amp; Architectures
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              High-traffic Drupal 10/11 platforms, custom PHP modules, search optimization, and modern React/TypeScript architectures.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAllCatalogue(!showAllCatalogue)}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>{showAllCatalogue ? 'Show Featured Only' : 'Search All Projects (15+)'}</span>
              {showAllCatalogue ? <ChevronUp className="w-3.5 h-3.5 text-cyan-400" /> : <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />}
            </button>
          </div>
        </div>

        {/* Top Flagship Featured Grid (When not in full search mode) */}
        {!showAllCatalogue && searchQuery === '' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredCaseStudies.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        )}

        {/* Expandable / Searchable Full Catalogue */}
        {(showAllCatalogue || searchQuery !== '') && (
          <div className="space-y-8 animate-fadeIn">
            {/* Filter bar & Search */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const active = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                        active
                          ? 'bg-cyan-400 text-slate-950 font-bold shadow-sm shadow-cyan-500/20'
                          : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Icon className={`w-3 h-3 ${active ? 'text-slate-950' : 'text-slate-400'}`} />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="project-search-input"
                  name="projectSearch"
                  type="search"
                  aria-label="Filter projects by technology, framework, or client"
                  autoComplete="off"
                  placeholder="Filter by tech or client..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            {/* Filtered Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={(p) => setSelectedProject(p)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-slate-800/60">
                <p className="text-sm text-slate-400">No matching projects found for &ldquo;{searchQuery}&rdquo;.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-3 px-4 py-2 text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 rounded-xl hover:bg-cyan-900/60 transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* View All Toggle Footer */}
        {!showAllCatalogue && searchQuery === '' && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllCatalogue(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span>View All 15+ Enterprise Deliveries &amp; Side Projects</span>
              <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        )}

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
