import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Download, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.documentElement.classList.remove('modal-open');
        document.body.classList.remove('modal-open');
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/95 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      style={{ backgroundColor: 'rgba(2, 6, 23, 0.95)' }}
    >
      <div 
        className="relative w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl shadow-black flex flex-col text-slate-100 border border-slate-700/80 overflow-hidden my-auto"
        style={{ backgroundColor: '#0f172a' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-base font-bold text-white">Saad Khan — Verified Resume</h3>
              <p className="text-xs text-slate-400">Drupal &amp; Full-Stack Engineer (PDF Document)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Saad-Khan-Drupal-Full-Stack-Engineer-Resume.pdf"
              download="Saad-Khan-Drupal-Full-Stack-Engineer-Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-slate-950 relative">
          <iframe
            src="/Saad-Khan-Drupal-Full-Stack-Engineer-Resume.pdf"
            className="w-full h-full border-0"
            title="Saad Khan Resume"
          />
        </div>

        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-5">
          <span>Direct Contact: contact@khansaad.dev</span>
          <span>Mumbai, India</span>
        </div>
      </div>
    </div>,
    document.body
  );
};
