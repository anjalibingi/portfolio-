import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Sparkles, Send } from 'lucide-react';

// Custom inline SVG icons to support environment-locked Lucide React v1.24
const LinkedinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Contact() {
  const emailAddress = "anjalibingi.work@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedinIcon className="w-5 h-5" />,
      url: "https://linkedin.com/in/anjali-bingi",
      label: "linkedin.com/in/anjali-bingi",
      bgClass: "hover:border-indigo-500/50 hover:bg-indigo-950/15 text-indigo-400"
    },
    {
      name: "GitHub",
      icon: <GithubIcon className="w-5 h-5" />,
      url: "https://github.com/anjali-bingi",
      label: "github.com/anjali-bingi",
      bgClass: "hover:border-slate-500/50 hover:bg-slate-900/40 text-slate-300"
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-grid flex items-center justify-center pt-16 px-6 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] radial-glow opacity-30 pointer-events-none"></div>

      <div className="w-full max-w-2xl mx-auto text-center relative z-10 py-6">
        {/* Decorative badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-brand-cyan text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Active Recruiting Channels</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-indigo-200">
          Get in Touch
        </h1>
        
        {/* Core recruiting message */}
        <p className="text-lg sm:text-xl text-slate-300 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Looking for <span className="text-indigo-400 font-semibold">Applied AI Engineer</span>, <span className="text-brand-cyan font-semibold">GenAI Developer</span>, or <span className="text-slate-100 font-semibold">Full-Stack AI Engineer</span> opportunities — internship or full-time.
        </p>

        {/* Interactive Contact Grid */}
        <div className="space-y-4 max-w-md mx-auto">
          {/* Email Row - Click to Copy */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-xl border border-slate-800 bg-slate-950/60 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left font-mono text-xs sm:text-sm text-slate-300 truncate">
                {emailAddress}
              </div>
            </div>
            <button
              onClick={handleCopy}
              className={`flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold rounded-lg transition-colors border ${
                copied 
                  ? 'bg-brand-emerald/15 text-brand-emerald border-brand-emerald/30' 
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/60 transition-all duration-300 ${link.bgClass}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    {link.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-500 font-mono">{link.name}</div>
                    <div className="text-xs font-mono text-slate-300 mt-0.5 truncate max-w-[130px] sm:max-w-[150px]">
                      {link.name.toLowerCase()}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 hover:text-slate-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-slate-500 font-mono text-xs">
          // responds in less than 24 hours
        </div>
      </div>
    </div>
  );
}
