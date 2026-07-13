import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Inbox, ShieldCheck, HelpCircle, Send, CheckCircle2, 
  Terminal, Sparkles, Database, Layers, ArrowRight, 
  Settings, Zap, AlertTriangle, Play, RefreshCw, Copy, Check
} from 'lucide-react';

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') === 'samagama' ? 'samagama' : 'inboxiq';
  const [activeTab, setActiveTab] = useState(initialTab);

  // Sync state with query parameters
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'samagama' || tab === 'inboxiq') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // --- InboxIQ Simulator State ---
  const [emailInput, setEmailInput] = useState('');
  const [isClassifying, setIsClassifying] = useState(false);
  const [classificationResult, setClassificationResult] = useState(null);
  const [copiedText, setCopiedText] = useState(false);

  const mockEmails = [
    {
      subject: "Invitation to Interview: Google Software Engineering Internship",
      body: "Hi Anjali, We reviewed your application and would like to invite you to the first round of interviews. Please use the following link to select a slot...",
      expected: "Internship/Interview Call",
      priority: "HIGH PRIORITY"
    },
    {
      subject: "MIETW CSE-A: Assignment 3 submission deadline extended",
      body: "Dear students, The deadline for submitting Assignment 3 (Data Science Pipelines) has been extended to Friday, 11:59 PM. Please upload your notebooks to portal.",
      expected: "Course Update",
      priority: "MEDIUM"
    },
    {
      subject: "Summer Mega Sale: Up to 70% off developer courses!",
      body: "Unlock your full potential! Buy React, Python, and GenAI courses today at massive discounts. Offer expires in 24 hours.",
      expected: "Promotional Content",
      priority: "LOW (Auto-Archive candidate)"
    },
  ];

  const handleClassify = (email) => {
    setIsClassifying(true);
    setEmailInput(email.body);
    setClassificationResult(null);
    setTimeout(() => {
      setIsClassifying(false);
      setClassificationResult({
        category: email.expected,
        priority: email.priority,
        latency: "128ms",
        confidence: "98.4%",
        provider: "Groq (Mixtral-8x7b-32768)"
      });
    }, 900);
  };

  // --- Samagama Journey Tracker State ---
  const [selectedMilestone, setSelectedMilestone] = useState('bronze');
  const milestones = {
    bronze: {
      title: "Bronze Milestone",
      reqs: "Complete onboarding, pass initial coding standards quiz, and set up your local development workspace.",
      perks: "Access to student dashboard, entry to baseline community forums, and standard newsletter updates.",
      status: "Completed (Avg. 1 week)"
    },
    silver: {
      title: "Silver Milestone",
      reqs: "Submit first code review, write unit tests for a core module, and participate in peer-review circles.",
      perks: "Group mentoring sessions, direct coordinator review channels, and eligibility for regional group hackathons.",
      status: "Completed (Avg. 4 weeks)"
    },
    gold: {
      title: "Gold Milestone",
      reqs: "Own a single core feature deployment, document API changes, and optimize database queries for scale.",
      perks: "One-on-one coordinator evaluation, mock technical interview sessions, and priority internship referrals.",
      status: "Completed (Avg. 8 weeks)"
    },
    platinum: {
      title: "Platinum Milestone",
      reqs: "Deploy RAG FAQ system to production, solve database performance load bottleneck, and document runbooks.",
      perks: "Vicharanashala Excellence Certificate, direct corporate partner matching, and scholarship endorsement.",
      status: "Completed (Graduation Milestone)"
    }
  };

  // --- Samagama Yaksha RAG Chat State ---
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: "Hello! I am Yaksha, the FAQ Assistant powered by Groq's Mixtral model. Ask me anything about NOC processes, stipends, or milestone progression." }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeFAQPrompt, setActiveFAQPrompt] = useState(null);

  const quickPrompts = [
    { label: "NOC Process", text: "How do I request a No Objection Certificate (NOC) for my internship?" },
    { label: "Stipend Schedule", text: "When are monthly stipends disbursed and what is the bank validation process?" },
    { label: "Silver Progression", text: "What are the exact requirements to progress from Bronze to Silver milestone?" },
    { label: "Admin Alerts", text: "How does the notification system alert students about coordinator updates?" },
    { label: "Yaksha Stack", text: "What is Yaksha's retrieval model and prompt rendering format?" },
    { label: "JWT Route Guards", text: "How are student route protections enforced client-side vs server-side?" }
  ];

  const handleFAQClick = (text, label) => {
    setActiveFAQPrompt(label);
    const newMessages = [...chatMessages, { role: 'user', content: text }];
    setChatMessages(newMessages);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";
      if (text.includes("NOC")) {
        botResponse = "Students must submit their coordinator-approved request through the /noc tab. A digital PDF is generated and pushed to your email within 48 hours of coordinator approval.";
      } else if (text.includes("stipend")) {
        botResponse = "Stipends are disbursed on the 5th of each month. Ensure your bank details are verified in your profile. Non-verified account structures delay processing by 5 days.";
      } else if (text.includes("Silver")) {
        botResponse = "To progress to Silver, you must complete the base orientation modules, achieve 80% on the Git workflow quiz, and submit your first staging deployment request.";
      } else if (text.includes("notification")) {
        botResponse = "We use an admin-push model. Infrequent updates are loaded directly into your notifications feed upon application load. No background polling or WebSocket overhead.";
      } else if (text.includes("Yaksha")) {
        botResponse = "Yaksha utilizes Groq's Mixtral-8x7b-32768 model. It pulls relevant policy contexts, maps them using in-memory retrieval, and displays responses as plain selectable text for copy-pasting.";
      } else {
        botResponse = "Authentication is validated via React Context (AuthContext) and localStorage flags. Routes checking student roles redirect unauthenticated sessions directly to /login.";
      }

      setChatMessages([...newMessages, { role: 'assistant', content: botResponse }]);
      setIsTyping(false);
    }, 850);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-grid pt-24 pb-16 px-6">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] radial-glow opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] radial-glow-cyan opacity-25 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-indigo-200">
            Case Studies
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto font-mono text-sm">
            // Full breakdowns of products shipped live to real users.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800/80 mb-12">
          <button
            onClick={() => handleTabChange('inboxiq')}
            className={`flex-1 py-4 text-center font-mono font-bold text-sm tracking-wider border-b-2 transition-all ${
              activeTab === 'inboxiq'
                ? 'text-indigo-400 border-indigo-500 bg-indigo-500/5'
                : 'text-slate-500 border-transparent hover:text-slate-300 hover:bg-slate-900/30'
            }`}
          >
            01. InboxIQ (AI Classifier)
          </button>
          <button
            onClick={() => handleTabChange('samagama')}
            className={`flex-1 py-4 text-center font-mono font-bold text-sm tracking-wider border-b-2 transition-all ${
              activeTab === 'samagama'
                ? 'text-brand-cyan border-brand-cyan bg-brand-cyan/5'
                : 'text-slate-500 border-transparent hover:text-slate-300 hover:bg-slate-900/30'
            }`}
          >
            02. Samagama (Student Portal)
          </button>
        </div>

        {/* CASE STUDY 1: INBOXIQ */}
        {activeTab === 'inboxiq' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Intro Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center gap-2">
                  InboxIQ <span className="text-sm font-mono font-normal text-indigo-400 bg-indigo-950/40 border border-indigo-900/60 px-2 py-0.5 rounded">Live Production</span>
                </h2>
                <p className="text-slate-400 text-sm mt-1">An intelligent email engine that acts on what matters.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Groq Cloud', 'Mixtral-8x7b', 'Gmail API', 'OAuth 2.0'].map((tag) => (
                  <span key={tag} className="text-xs font-mono bg-slate-950 text-slate-400 border border-slate-800 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Case Study Text */}
              <div className="space-y-8">
                {/* Problem */}
                <div className="glass-panel p-6 rounded-xl border border-slate-800/60">
                  <h3 className="font-mono text-sm text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>01. The Problem</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    As a student juggling internship applications, course communications, and general inbox traffic, important emails — deadlines, interview calls, offer updates — routinely got buried under volume. Built InboxIQ to solve this: an inbox that automatically surfaces what matters instead of relying on manual scanning.
                  </p>
                </div>

                {/* Key Decisions */}
                <div className="glass-panel p-6 rounded-xl border border-slate-800/60">
                  <h3 className="font-mono text-sm text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Settings className="w-4 h-4" />
                    <span>02. Key Decisions</span>
                  </h3>
                  <ul className="space-y-4 text-slate-300 text-sm">
                    <li>
                      <strong className="text-slate-200">Model Choice (Groq/Mixtral):</strong> Chose Groq/Mixtral over OpenAI. Already knew Groq's latency/reliability from Samagama's RAG assistant. Groq is also significantly faster and cheaper than alternatives — meaningful for a tool repeatedly classifying inbox volume.
                    </li>
                    <li>
                      <strong className="text-slate-200">OAuth Scoping (Full Access):</strong> Chose full Gmail access over read-only, since classification wasn't the end goal — plans include acting on emails directly (archiving, labeling), so scoping down early would've meant re-authenticating users later.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Interactive Demo & Core Engineering details */}
              <div className="space-y-8">
                {/* A Hard Part */}
                <div className="glass-panel p-6 rounded-xl border border-slate-800/60">
                  <h3 className="font-mono text-sm text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    <span>03. A Hard Part</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    First classification attempt dumped nearly everything into one or two broad categories, making the tool useless. Fixed by redefining categories to be more specific and distinct (e.g., separating internship/interview communications from course updates and promotional content), giving the model clearer boundaries to classify against.
                  </p>
                </div>

                {/* Outcome */}
                <div className="glass-panel p-6 rounded-xl border border-slate-800/60">
                  <h3 className="font-mono text-sm text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>04. Outcome / Current State</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    In daily use for about a month, processing 20-30 emails/day including promotional and social mail. Email content is currently stored to support classification history; encrypting this at rest is on the roadmap before opening to other users. Next: scaling beyond single-user, and building a "Promise Ledger" feature to detect commitments made in sent emails.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Section: InboxIQ Classifier Simulator */}
            <div className="border border-indigo-900/40 bg-indigo-950/10 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-indigo-400" />
                    <span>Interactive Classifier Simulator</span>
                  </h3>
                  <p className="text-slate-400 text-xs font-mono mt-1">Select a sample email to simulate Groq's classification pipeline.</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  <Zap className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Avg. latency: ~130ms</span>
                </div>
              </div>

              {/* Sample Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {mockEmails.map((email, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleClassify(email)}
                    className="p-3 text-left rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/40 transition-all text-xs"
                  >
                    <div className="font-bold text-slate-300 truncate mb-1">{email.subject}</div>
                    <div className="text-slate-500 truncate">{email.body}</div>
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <div className="space-y-4">
                <textarea
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Paste an email body here or select a quick-sample above..."
                  className="w-full h-24 p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-300 focus:outline-none focus:border-indigo-500 font-mono"
                />

                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 font-mono">// inputs are classified using structured prompts</span>
                  <button
                    disabled={isClassifying || !emailInput.trim()}
                    onClick={() => handleClassify({ body: emailInput, expected: "Ad-hoc User Query", priority: "MEDIUM" })}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-850 disabled:text-slate-500 disabled:border-transparent transition-all border border-indigo-400/20"
                  >
                    {isClassifying ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Classifying...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span>Classify Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Classification Result Display */}
              {classificationResult && (
                <div className="mt-6 border-t border-slate-800/80 pt-6 animate-fadeIn">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-850 font-mono text-xs">
                    <div>
                      <div className="text-slate-500 mb-1">CLASSIFICATION:</div>
                      <div className="font-bold text-indigo-400 uppercase">{classificationResult.category}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 mb-1">PRIORITY ASSIGNMENT:</div>
                      <div className={`font-bold uppercase ${classificationResult.priority.includes('HIGH') ? 'text-red-400' : 'text-slate-300'}`}>
                        {classificationResult.priority}
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-500 mb-1">MODEL LATENCY:</div>
                      <div className="font-bold text-brand-emerald">{classificationResult.latency}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 mb-1">CONFIDENCE SCORE:</div>
                      <div className="font-bold text-brand-cyan">{classificationResult.confidence}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CASE STUDY 2: SAMAGAMA */}
        {activeTab === 'samagama' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Intro Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center gap-2">
                  Samagama <span className="text-sm font-mono font-normal text-brand-cyan bg-cyan-950/40 border border-cyan-900/60 px-2 py-0.5 rounded">Live Platform</span>
                </h2>
                <p className="text-slate-400 text-sm mt-1">Student internship milestone tracker & QA portal used at IIT Ropar.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React Context', 'Auth guards', 'SVG Roadmap', 'Groq Mixtral RAG'].map((tag) => (
                  <span key={tag} className="text-xs font-mono bg-slate-950 text-slate-400 border border-slate-800 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Problem & Key Decisions */}
              <div className="space-y-8">
                {/* Problem */}
                <div className="glass-panel p-6 rounded-xl border border-slate-800/60">
                  <h3 className="font-mono text-sm text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>01. The Problem</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Samagama needed a way for students to navigate a multi-tier internship programme (Bronze → Platinum), get quick answers to common questions (NOC, stipends, interviews), and stay updated on admin actions — without feeling like a static, scroll-heavy portal.
                  </p>
                </div>

                {/* Key Decisions */}
                <div className="glass-panel p-6 rounded-xl border border-slate-800/60">
                  <h3 className="font-mono text-sm text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Settings className="w-4 h-4" />
                    <span>02. Key Decisions</span>
                  </h3>
                  <ul className="space-y-4 text-slate-300 text-sm">
                    <li>
                      <strong className="text-slate-200">Authentication:</strong> React Context (AuthContext) with session state in localStorage, and route guards redirecting unauthenticated users to /login and non-admins away from /admin, supporting three tiers (Public, Student, Admin).
                    </li>
                    <li>
                      <strong className="text-slate-200">Notification Bell:</strong> Admin-push model (not real-time polling or websockets) — fits the actual use case of infrequent, coordinator-driven updates rather than high-frequency events.
                    </li>
                    <li>
                      <strong className="text-slate-200">SVG Journey Tracker:</strong> An SVG visually connects four milestone cards (Bronze, Silver, Gold, Platinum) into one continuous roadmap. Clicking a milestone reveals details inline, preventing scrolling fatigue.
                    </li>
                    <li>
                      <strong className="text-slate-200">RAG FAQ Assistant (Yaksha):</strong> Built API endpoints and prompt logic connecting to Yaksha (Groq's Mixtral-8x7b-32768), integrating with retrieval setup. Responses render as plain, selectable text with no markdown, so students can copy-paste directly. Added 6 quick-prompt buttons and persistent chat history.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Hard Part, Outcome, and Interactive widgets */}
              <div className="space-y-8">
                {/* A Hard Part */}
                <div className="glass-panel p-6 rounded-xl border border-slate-800/60">
                  <h3 className="font-mono text-sm text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    <span>03. A Hard Part</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    As usage grew to around 2,000-3,000 students, the site initially struggled with slow load times. Addressed this with caching, restoring acceptable performance at that scale. Long-term, this means moving off the current in-memory data setup to a persistent, properly indexed database.
                  </p>
                </div>

                {/* Outcome */}
                <div className="glass-panel p-6 rounded-xl border border-slate-800/60">
                  <h3 className="font-mono text-sm text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>04. Outcome / Current State</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Live and actively used, currently serving around 2,000-3,000 students in the Vicharanashala programme at IIT Ropar.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Section 1: SVG Journey Tracker Demo */}
            <div className="border border-cyan-900/40 bg-cyan-950/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-100 mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-cyan" />
                <span>Interactive SVG Journey Tracker</span>
              </h3>
              <p className="text-slate-400 text-xs font-mono mb-6">// Click each milestone on the map to display requirement specifications inline.</p>

              {/* SVG Roadmap Visual */}
              <div className="relative p-6 bg-slate-950 rounded-xl border border-slate-900 overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 min-h-[160px]">
                {/* SVG Connecting Path - Desktop horizontal */}
                <svg className="absolute hidden md:block inset-x-0 top-1/2 -translate-y-1/2 w-full h-10 pointer-events-none z-0 px-12">
                  <path
                    d="M 50,20 C 150,20 250,20 350,20 C 450,20 550,20 650,20"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M 50,20 C 150,20 250,20 350,20 C 450,20 550,20 650,20"
                    stroke="url(#svg-gradient)"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                    fill="none"
                    className="animate-[dash_20s_linear_infinite]"
                  />
                  <defs>
                    <linearGradient id="svg-gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* SVG Connecting Path - Mobile vertical */}
                <svg className="absolute block md:hidden inset-y-0 left-1/2 -translate-x-1/2 w-10 h-full pointer-events-none z-0 py-8">
                  <line x1="20" y1="10" x2="20" y2="350" stroke="#1e293b" strokeWidth="3" />
                  <line x1="20" y1="10" x2="20" y2="350" stroke="url(#svg-gradient-v)" strokeWidth="3" strokeDasharray="6 4" />
                  <defs>
                    <linearGradient id="svg-gradient-v" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Nodes */}
                {Object.keys(milestones).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedMilestone(key)}
                    className={`relative z-10 w-32 px-2 py-3.5 rounded-xl text-center border font-mono transition-all duration-300 hover:scale-105 active:scale-95 ${
                      selectedMilestone === key
                        ? 'bg-gradient-to-br from-indigo-950 to-cyan-950 border-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.25)] text-cyan-200'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs uppercase font-extrabold">{key}</div>
                    <div className="text-[10px] text-slate-500 mt-1">Milestone</div>
                  </button>
                ))}
              </div>

              {/* Milestone Details Card */}
              {selectedMilestone && (
                <div className="mt-4 p-5 rounded-xl border border-slate-900 bg-slate-950/80 animate-fadeIn text-sm">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-slate-200">{milestones[selectedMilestone].title}</h4>
                    <span className="text-xs text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/25 px-2.5 py-0.5 rounded-full font-mono">
                      {milestones[selectedMilestone].status}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-slate-400">
                      <strong className="text-slate-300">Requirements:</strong> {milestones[selectedMilestone].reqs}
                    </p>
                    <p className="text-slate-400">
                      <strong className="text-slate-300">Perks & Resources:</strong> {milestones[selectedMilestone].perks}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Section 2: Yaksha RAG QA Chat Simulator */}
            <div className="border border-slate-800 bg-slate-900/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-brand-cyan" />
                  <span className="font-bold text-slate-200">Yaksha FAQ Agent (QA Assistant)</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-900 text-[10px] text-slate-500 font-mono border border-slate-850">
                  <Database className="w-3 h-3 text-cyan-500" />
                  <span>Mixtral 8x7b-32768</span>
                </div>
              </div>

              {/* Chat Screen */}
              <div className="h-56 overflow-y-auto p-4 rounded-xl bg-slate-950 border border-slate-900 flex flex-col gap-3 font-mono text-xs">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <span className="text-[10px] text-slate-600 mb-1">{msg.role === 'user' ? 'STUDENT_QUERY' : 'YAKSHA_AGENT'}</span>
                    <div
                      className={`max-w-[85%] p-3 rounded-lg select-text ${
                        msg.role === 'user'
                          ? 'bg-slate-900 text-slate-200 border border-slate-800'
                          : 'bg-indigo-950/20 text-slate-300 border border-indigo-950/50'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="text-slate-600 animate-pulse">// retrieving policy text / executing generation query...</div>
                )}
              </div>

              {/* Quick FAQ Selector */}
              <div className="mt-4">
                <div className="text-xs text-slate-500 font-mono mb-2">// Select a quick-prompt button:</div>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((faq) => (
                    <button
                      key={faq.label}
                      disabled={isTyping}
                      onClick={() => handleFAQClick(faq.text, faq.label)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                        activeFAQPrompt === faq.label
                          ? 'bg-brand-cyan/15 text-brand-cyan border-brand-cyan/40 shadow-sm'
                          : 'bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      {faq.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Copying response guideline */}
              <div className="mt-4 flex justify-between items-center text-xs text-slate-500 font-mono">
                <div className="flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Responses are plain text with no markdown for direct copy-pasting.</span>
                </div>
                {chatMessages.length > 1 && (
                  <button
                    onClick={() => copyToClipboard(chatMessages[chatMessages.length - 1].content)}
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedText ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-brand-emerald" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Response</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
