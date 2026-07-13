import React from 'react';
import { Mail, Cpu, Heart } from 'lucide-react';

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:anjalibingi.work@gmail.com',
      colorClass: 'hover:text-brand-cyan hover:border-brand-cyan/40 hover:bg-brand-cyan/5',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: 'https://linkedin.com/in/anjali-bingi',
      colorClass: 'hover:text-brand-indigo hover:border-brand-indigo/40 hover:bg-brand-indigo/5',
    },
    {
      name: 'GitHub',
      icon: <GithubIcon className="w-5 h-5" />,
      href: 'https://github.com/anjali-bingi',
      colorClass: 'hover:text-white hover:border-slate-500/40 hover:bg-slate-500/5',
    },
  ];

  return (
    <footer className="relative mt-auto border-t border-slate-900 bg-bg-darker/60 backdrop-blur-md">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 radial-glow opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo or Copyright */}
          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-slate-400">
              // <span className="text-indigo-400">Anjali Bingi</span>.shipped_prod_ready
            </p>
            <p className="text-xs text-slate-500 mt-1.5 flex items-center justify-center md:justify-start gap-1">
              <span>© {currentYear}</span>
              <span>•</span>
              <span>Full-Stack AI Engineer</span>
              <span>•</span>
              <span className="flex items-center gap-0.5">
                with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> & React
              </span>
            </p>
          </div>

          {/* Social Icons & Links */}
          <div className="flex items-center gap-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg border border-slate-800 text-slate-400 bg-slate-900/45 transition-all duration-300 ${link.colorClass}`}
                title={link.name}
                aria-label={`Visit Anjali Bingi on ${link.name}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
