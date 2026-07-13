import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Code } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 group-hover:border-indigo-500/60 group-hover:bg-indigo-500/20 transition-all duration-300">
                <Terminal className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              </div>
              <span className="font-mono font-bold tracking-tight text-lg text-slate-100 group-hover:text-white transition-colors">
                anjali<span className="text-brand-cyan">.bingi</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3.5 py-2 rounded-lg font-mono text-sm tracking-wide transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-indigo-400 bg-indigo-500/5 border-b border-indigo-500/30 shadow-[0_4px_12px_rgba(99,102,241,0.08)]'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40'
                  }`}
                >
                  {isActive(item.href) && <span className="text-indigo-500 mr-1">&gt;</span>}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100 border-b border-slate-800/50' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-bg-darker/90 backdrop-blur-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg font-mono text-base transition-colors ${
                isActive(item.href)
                  ? 'text-indigo-400 bg-indigo-500/5 border-l-2 border-indigo-500'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
