import React, { useState } from 'react';
import { Mail, Copy, Check, FileText, ArrowUpRight, Send, MessageSquare, User, Tag, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

interface ApiContactResponse {
  success?: boolean;
  error?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Drupal 10/11 Architecture & Upgrades',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a message or project outline.';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // SAFETY: Response JSON is parsed into our structured ApiContactResponse interface for status and error fields
      const result = (await response.json().catch(() => ({}))) as Partial<ApiContactResponse>;

      if (response.ok && Boolean(result.success)) {
        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        const errorMsg = result.error ?? `Submission failed with status ${response.status}.`;
        console.warn('API submission failed, falling back to direct email:', errorMsg);
        setSubmitError(errorMsg);
        setIsSubmitting(false);
      }
    } catch (err: unknown) {
      console.warn('Network error during contact submission:', err);
      setSubmitError('Unable to connect to contact server. You can still email directly below.');
      setIsSubmitting(false);
    }
  };

  const handleDirectMailFallback = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.projectType} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Saad,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n\n---\nSent from saadkhan.dev portfolio`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError(null);
    setFormData({
      name: '',
      email: '',
      projectType: 'Drupal 10/11 Architecture & Upgrades',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-2xl relative overflow-hidden">
          
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto">
            
            {/* Top Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-xs font-bold text-cyan-400 mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                Let's Build Something Exceptional
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
                Have an upcoming Drupal project, React web application, or custom backend requirement? Leave a message below to reach my inbox directly.
              </p>
            </div>

            {/* Split Content: Grid with stretch items to match heights exactly */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Interactive Contact Form (7 cols) */}
              <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4 my-auto">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-950/50">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Message Sent Directly to Saad's Inbox!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your message has been received at <strong>{PERSONAL_INFO.email}</strong>. I will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs font-bold rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer mt-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-4">
                    
                    <div className="space-y-4">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Your Name <span className="text-cyan-400">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="e.g. Sarah Jenkins"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full pl-10 pr-4 py-2.5 text-xs bg-slate-900 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors ${
                              errors.name ? 'border-rose-500/80' : 'border-slate-800'
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Your Email <span className="text-cyan-400">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="e.g. sarah@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full pl-10 pr-4 py-2.5 text-xs bg-slate-900 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors ${
                              errors.email ? 'border-rose-500/80' : 'border-slate-800'
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Project / Inquiry Type */}
                      <div>
                        <label htmlFor="contact-type" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Area of Interest
                        </label>
                        <div className="relative">
                          <Tag className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <select
                            id="contact-type"
                            name="projectType"
                            autoComplete="off"
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full pl-10 pr-8 py-2.5 text-xs bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer"
                          >
                            <option value="Drupal 10/11 Architecture & Upgrades">Drupal 10/11 Architecture & Core Upgrades</option>
                            <option value="Custom Module & Backend PHP Development">Custom Module & Backend PHP 8.3 Development</option>
                            <option value="React & TypeScript Development">React & TypeScript Web Application</option>
                            <option value="Search API & Performance Optimization">Search API & Core Web Vitals Optimization</option>
                            <option value="General Technical Consultation / Hiring">General Technical Consultation / Hiring</option>
                          </select>
                        </div>
                      </div>

                      {/* Message Area */}
                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Message Details <span className="text-cyan-400">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          placeholder="Tell me a bit about your project, goals, or timeline..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`w-full p-3.5 text-xs bg-slate-900 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none ${
                            errors.message ? 'border-rose-500/80' : 'border-slate-800'
                          }`}
                        />
                        {errors.message && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Server Error Notification with Fallback Link */}
                      {submitError && (
                        <div className="p-3 bg-amber-950/60 border border-amber-800/80 rounded-xl text-xs text-amber-200 flex flex-col gap-2">
                          <div className="flex items-center gap-1.5 font-semibold">
                            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>{submitError}</span>
                          </div>
                          <button
                            type="button"
                            onClick={handleDirectMailFallback}
                            className="text-left text-cyan-300 hover:text-cyan-200 underline font-medium text-[11px] cursor-pointer"
                          >
                            Click here to open email directly with pre-filled inquiry ➔
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message Directly</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>

              {/* Direct Info & Actions on Right (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4 h-full">
                
                {/* Email Copy Card */}
                <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 group flex-1">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] text-slate-400 font-medium">Direct Email Inbox</div>
                      <div className="text-xs sm:text-sm font-bold text-white truncate">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy Email"
                    className="p-2.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors shrink-0 cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub Profile Card */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 group transition-colors flex-1"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">GitHub Repository Profile</div>
                      <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">github.com/saadkhan955</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                {/* Resume Download Card */}
                <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between flex-1">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">Verified Resume</div>
                      <div className="text-xs sm:text-sm font-bold text-white">Saad Khan (PDF)</div>
                    </div>
                  </div>

                  <button
                    onClick={onOpenResume}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Preview & Download Full Resume</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
