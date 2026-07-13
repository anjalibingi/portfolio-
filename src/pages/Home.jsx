import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles, Mail, Database, ShieldAlert, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-grid pt-16 flex flex-col items-center">
      {/* Decorative ambient glowing background elements */}
      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] radial-glow opacity-60 pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] radial-glow-cyan opacity-40 pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      {/* Hero Section - Above Fold */}
      <section className="relative w-full max-w-4xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center justify-center flex-grow min-h-[calc(100vh-4rem)]">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs sm:text-sm font-mono mb-6 animate-pulse-slow">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Open for Summer & Full-time 2027 Roles</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-indigo-200 to-brand-cyan leading-tight">
          Anjali Bingi
        </h1>

        <p className="max-w-2xl text-xl sm:text-2xl text-slate-300 font-medium tracking-tight mb-8 leading-relaxed">
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-brand-cyan font-bold">full-stack AI products</span>, not just prototypes.
        </p>

        {/* Proof Statement & Honest Reason */}
        <div className="max-w-3xl text-left text-slate-350 text-sm sm:text-base leading-relaxed mb-10 p-5 sm:p-6 rounded-2xl border border-slate-800/80 bg-slate-900/10 backdrop-blur-md">
          <p className="mb-4 text-slate-300 font-light">
            I can build full-stack AI features end-to-end — not prototype them, ship them. <strong className="text-slate-100 font-semibold font-mono">InboxIQ</strong> is the proof: a Gmail-connected dashboard where I built the OAuth flow, the Gmail API integration, and an LLM-based classification layer (Groq/Mixtral) that actually sorts real email into real categories, live and working, not a mockup. If you're hiring for an Applied AI Engineer or GenAI Developer role and want someone who can take an AI idea from spec to a working product without a team behind them, <span className="text-indigo-400 font-semibold">email me</span> — I'll walk you through exactly how InboxIQ works and what I'd build next.
          </p>
          <div className="pt-3.5 border-t border-slate-900 font-mono text-xs flex flex-col sm:flex-row items-start gap-1">
            <span className="text-indigo-400 font-bold flex-shrink-0">&gt;_ Why this matters:</span>
            <span className="text-slate-400 italic">
              "A CV can say &quot;MERN + AI/DS&quot; as two bullet points, but it can't prove I can wire the two together into something that actually runs — InboxIQ can."
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-sm sm:max-w-none">
          <Link
            to="/projects"
            className="group flex items-center justify-center gap-2 px-6 py-3.5 w-full sm:w-auto rounded-xl font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 border border-indigo-400/30 hover:border-indigo-400/50 shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>See my work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 px-6 py-3.5 w-full sm:w-auto rounded-xl font-medium text-slate-300 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact me</span>
          </Link>
        </div>
      </section>

      {/* Bottom section (Below Fold) */}
      <section className="w-full bg-slate-950/40 border-t border-slate-900/80 backdrop-blur-sm py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Divider */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] bg-slate-800 flex-grow"></div>
            <div className="text-slate-500 font-mono text-xs uppercase tracking-widest">// proof of execution</div>
            <div className="h-[1px] bg-slate-800 flex-grow"></div>
          </div>

          {/* Proof Line */}
          <div className="text-center mb-16">
            <p className="text-lg sm:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              "I've built an AI email classifier with OAuth and LLM integration (<span className="text-indigo-400 font-semibold font-mono">InboxIQ</span>). I've also shipped four features solo — including a RAG-based Q&A assistant — on a live student platform used by real users (<span className="text-brand-cyan font-semibold font-mono">Samagama</span>)."
            </p>
          </div>

          {/* Project Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* InboxIQ Card */}
            <div className="group glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">AI Classifier</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors mb-2">
                  InboxIQ
                </h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  Automatically surfaces urgent emails like interview invites and application deadlines from raw Gmail volume using customized LLM classifications.
                </p>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Groq/Mixtral', 'OAuth 2.0', 'Gmail API', 'React'].map((tag) => (
                    <span key={tag} className="text-slate-500 bg-slate-900/80 px-2 py-0.5 rounded text-xs font-mono border border-slate-900">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/projects?tab=inboxiq"
                className="inline-flex items-center gap-1.5 text-indigo-400 font-medium text-sm group-hover:text-indigo-300 transition-colors self-start"
              >
                <span>View case study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Samagama Card */}
            <div className="group glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                    <Database className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">RAG Platform</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-brand-cyan transition-colors mb-2">
                  Samagama
                </h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  Interactive multi-tier student dashboard featuring Yaksha, a production-grade RAG assistant helping 3,000 students navigate program milestones.
                </p>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['RAG Engine', 'Vector DB', 'Auth Guard', 'Groq Mixtral', 'SVGs'].map((tag) => (
                    <span key={tag} className="text-slate-500 bg-slate-900/80 px-2 py-0.5 rounded text-xs font-mono border border-slate-900">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/projects?tab=samagama"
                className="inline-flex items-center gap-1.5 text-brand-cyan font-medium text-sm group-hover:text-brand-cyan/80 transition-colors self-start"
              >
                <span>View case study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
