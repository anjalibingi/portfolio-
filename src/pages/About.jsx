import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Code, Database, Cpu, Calendar, 
  MapPin, Sparkles, Server, Terminal, ArrowRight 
} from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: "Applied AI",
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      skills: ["LLM Orchestration (Mixtral, Llama 3)", "RAG Systems", "Vector Databases", "Structured Prompt Engineering", "Embeddings Extraction"]
    },
    {
      title: "Full-Stack Development",
      icon: <Code className="w-5 h-5 text-brand-cyan" />,
      skills: ["React & React Router", "Node.js & Express", "React Context State", "Tailwind CSS", "HTML5/CSS3/JavaScript"]
    },
    {
      title: "Infrastructure & Database",
      icon: <Database className="w-5 h-5 text-brand-emerald" />,
      skills: ["PostgreSQL & SQLite", "OAuth 2.0 Integrations", "Session-based Local Storage Caching", "API Gateways & REST APIs", "Git Version Control"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-grid pt-24 pb-16 px-6">
      {/* Ambient glows */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] radial-glow opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] radial-glow-cyan opacity-25 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-indigo-200">
            About Me
          </h1>
          <p className="text-slate-400 font-mono text-sm">// Combining core full-stack engineering with applied AI.</p>
        </div>

        {/* Lead Quote Sentence */}
        <div className="relative border-l-4 border-indigo-500 bg-indigo-950/10 p-6 rounded-r-2xl mb-12 shadow-[0_4px_12px_rgba(99,102,241,0.05)]">
          <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed italic">
            "I'm drawn to this combination because most AI demos stop at a clever prompt, and I want to be the person who ships the OAuth flow, the database schema, and the classification pipeline that make that prompt actually usable by someone."
          </p>
        </div>

        {/* Background / Education Section */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 mb-12">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-100 mb-6 flex items-center gap-2 border-b border-slate-900 pb-3">
            <GraduationCap className="w-6 h-6 text-indigo-400" />
            <span>Education & Background</span>
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                <h3 className="font-extrabold text-slate-200 text-lg">
                  B.Tech in Artificial Intelligence & Data Science
                </h3>
                <span className="text-xs font-mono bg-slate-900 text-slate-400 border border-slate-850 px-2.5 py-1 rounded-full flex items-center gap-1.5 self-start">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Graduating May 2027</span>
                </span>
              </div>
              <p className="text-slate-400 font-medium text-sm flex items-center gap-1.5 mb-3">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Megha Institute of Engineering and Technology for Women</span>
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-mono text-sm font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CGPA: 8.0</span>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed border-t border-slate-900/60 pt-4">
              My coursework and hands-on projects focus on training and deploying neural networks, understanding relational database scaling, and designing user interfaces that communicate seamlessly with AI microservices.
            </p>
          </div>
        </div>

        {/* Technical Toolkit Grid */}
        <div className="space-y-6 mb-16">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-100 flex items-center gap-2 border-b border-slate-900 pb-3">
            <Terminal className="w-6 h-6 text-brand-cyan" />
            <span>Technical Toolkit</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skillCategories.map((category) => (
              <div key={category.title} className="p-5 rounded-xl border border-slate-850 bg-slate-950/60 hover:bg-slate-950 hover:border-slate-800 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  {category.icon}
                  <h3 className="font-bold text-slate-200 text-sm font-mono">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-xs text-slate-400 flex items-start gap-1.5">
                      <span className="text-indigo-500 font-mono mt-0.5">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Nudge */}
        <div className="border border-indigo-900/50 bg-gradient-to-r from-indigo-950/20 to-cyan-950/20 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 radial-glow opacity-30 pointer-events-none"></div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-2">
            Looking for a developer who ships complete AI pipelines?
          </h3>
          <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
            I am currently seeking Applied AI, GenAI Developer, and Full-Stack Engineering roles. Let's discuss how I can add value.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/10"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
