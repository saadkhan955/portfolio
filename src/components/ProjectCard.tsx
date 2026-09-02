import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between h-full group relative border border-slate-800/80 bg-slate-900/60">
      
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider bg-slate-800 text-cyan-400 border border-slate-700/60">
            {project.category.replace('-', ' ')}
          </span>
          <span className="text-[11px] font-medium text-slate-400">
            {project.timeframe}
          </span>
        </div>

        {project.clientOrOrg && (
          <div className="text-xs font-semibold text-sky-400 mb-1">
            {project.clientOrOrg}
          </div>
        )}

        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-1.5">
          {project.title}
        </h3>

        <p className="text-xs font-medium text-slate-400 mb-3">
          {project.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-5 pt-3 border-t border-slate-800/80">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx} className="p-2 bg-slate-950/50 rounded-lg border border-slate-800/60">
                <div className="text-[10px] text-slate-400">{m.label}</div>
                <div className="text-xs font-bold text-white mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-800/80 text-slate-300">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-800/50 text-slate-400">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
          <button
            onClick={() => onSelect(project)}
            className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/btn cursor-pointer"
          >
            <span>View Details & Tickets</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repo"
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Site"
                className="p-1.5 text-slate-400 hover:text-cyan-300 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};
