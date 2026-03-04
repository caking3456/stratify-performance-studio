import { motion } from 'motion/react';
import {
  ArrowRight,
  BarChart2,
  Bot,
  Brain,
  Calendar,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  GitMerge,
  Mail,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 border-b border-brand-line bg-brand-bg/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="font-serif italic text-base tracking-tight">Stratify Performance</span>
          <span className="hidden md:block h-4 w-px bg-white/20" />
          <span className="hidden md:block font-mono text-[9px] uppercase tracking-[0.2em] text-gray-500">
            AI Consulting · Clinical Ops · Healthcare
          </span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#who"      className="text-[11px] uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">Who I Help</a>
          <a href="#model"    className="text-[11px] uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">Operating Model</a>
          <a href="#services" className="text-[11px] uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">Services</a>
          <a href="#about"    className="text-[11px] uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">About</a>
          <a
            href="mailto:chris.king@stratify-performance.com"
            className="px-5 py-2 bg-brand-accent text-white rounded-full text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-brand-accent/80 transition-all"
          >
            Book a Discovery Call
          </a>
        </div>
        <a
          href="mailto:chris.king@stratify-performance.com"
          className="md:hidden px-4 py-2 bg-brand-accent text-white rounded-full text-[10px] uppercase tracking-[0.2em]"
        >
          Contact
        </a>
      </nav>

      {/* ─────────────────────────────────────────────────────────
          1. Hero
      ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.span
            className="font-mono text-xs uppercase tracking-[0.35em] text-brand-accent mb-8 block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Stratify Performance – AI Consulting
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif italic leading-[1.05] mb-8 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The best AI strategy starts with your worst bottleneck.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 leading-relaxed mb-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Stratify Performance helps clinics and small healthcare businesses turn real operational
            bottlenecks into measurable AI wins one project at a time, with a clear before-and-after.
          </motion.p>

          <motion.p
            className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Problem-first · One project at a time · Buy before build · Measure everything
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a
              href="mailto:chris.king@stratify-performance.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-brand-accent/80 transition-all"
            >
              Book a 30-Min Discovery Call <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#model"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-all"
            >
              See the Operating Model
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. Who I Help
      ───────────────────────────────────────────────────────── */}
      <section id="who" className="py-28 px-6 border-t border-brand-line bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">Who I Help</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight">
              Built for lean healthcare teams.
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              If you're feeling AI pressure without a clear path, this is for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Users className="w-5 h-5" />,
                label: 'Outpatient Clinics',
                text: 'PT, OT, rehab, pediatric therapy, and specialty practices navigating scheduling, prior auth, documentation, and ops pressure.',
              },
              {
                icon: <Brain className="w-5 h-5" />,
                label: 'Telehealth & Digital Health',
                text: 'Telehealth platforms and digital health teams who need real operational leverage without enterprise overhead.',
              },
              {
                icon: <Zap className="w-5 h-5" />,
                label: 'Care Management & UM Teams',
                text: 'Utilization management and care management teams buried in manual reviews, disconnected data, and denial rework.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-brand-accent mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="font-mono text-xs uppercase tracking-widest text-gray-400 border-l-2 border-gray-200 pl-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            This is about operations, workflows, and AI — not generic consulting. Not hype.
          </motion.p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. The Problem
      ───────────────────────────────────────────────────────── */}
      <section id="problem" className="py-28 px-6 border-t border-brand-line">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent mb-4 block">The Problem</span>
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
              You know AI matters.<br />But you don't have a path.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="glass-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-8 pb-4 border-b border-white/10">
                What you're feeling
              </h3>
              <ul className="space-y-6">
                {[
                  'Staff drowning in repetitive tasks, documentation, and manual admin',
                  'AI tools bought or tried but not actually mapped to real workflows',
                  'No clear way to measure if any of it is working',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-mono text-brand-accent text-xs mt-1.5 flex-shrink-0">0{i + 1}</span>
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="glass-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-8 pb-4 border-b border-white/10">
                Why it's happening
              </h3>
              <ul className="space-y-6">
                {[
                  'No operating model — AI is being adopted project-by-project with no repeatable process',
                  'Pressure-driven tool purchases with no baseline metrics or defined owner',
                  'Vendors pitch platforms, not workflows — you get demos, not results',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-mono text-gray-600 text-xs mt-1.5 flex-shrink-0">0{i + 1}</span>
                    <span className="text-gray-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. The Operating Model
      ───────────────────────────────────────────────────────── */}
      <section id="model" className="py-28 px-6 border-t border-brand-line bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">
              The Stratify Operating Model
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4 leading-tight">
              Six steps. One problem at a time.
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
              Every engagement runs through the same repeatable framework. No tool tourism.
              No vanity dashboards. Just problems, projects, and proof.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                icon: <ClipboardList className="w-5 h-5" />,
                title: 'Inventory Real Problems',
                description:
                  'We run a structured Problem Inventory — not an AI brainstorm. Output: your top 10–15 operational bottlenecks with clear pain metrics (time, cost, risk, lost revenue).',
              },
              {
                num: '02',
                icon: <Target className="w-5 h-5" />,
                title: 'Score Them Honestly',
                description:
                  'Each problem is scored on data readiness, process stability, error economics, and deployment feasibility. Most ideas will be "not yet" — and that\'s the point.',
              },
              {
                num: '03',
                icon: <GitMerge className="w-5 h-5" />,
                title: 'Start with One Project',
                description:
                  'Pick one problem that is meaningful enough to matter and contained enough to ship in 8–12 weeks. We treat it as an AI-assisted workflow with a clear owner and success criteria.',
              },
              {
                num: '04',
                icon: <Zap className="w-5 h-5" />,
                title: 'Buy Before Build',
                description:
                  'We lean hard on proven tools, integrations, and existing platforms — not custom models — for early projects. Goal: prove value fast before heavier investment.',
              },
              {
                num: '05',
                icon: <TrendingUp className="w-5 h-5" />,
                title: 'Measure Ruthlessly',
                description:
                  'Every project defines success before we start: time saved, errors reduced, throughput gained. You get a real before-and-after — no vanity metrics like "prompts used."',
              },
              {
                num: '06',
                icon: <Shield className="w-5 h-5" />,
                title: 'Build Institutional Knowledge',
                description:
                  'Every project produces a runbook, lessons learned, and a kill-switch plan. Over time, these become your internal AI Playbook and a right-sized Center of Excellence.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-8 border border-gray-200 rounded-2xl hover:border-brand-accent hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-300 mb-4 block">
                  Step {card.num}
                </span>
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-4 text-gray-500 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-serif italic mb-3 leading-snug">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            className="mt-16 border-l-2 border-brand-accent pl-6 italic text-gray-500 text-lg leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            "We won't sell you an AI platform. We'll help you pick one problem, fix it, and build a
            repeatable way to do the next ten."
          </motion.blockquote>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. Services
      ───────────────────────────────────────────────────────── */}
      <section id="services" className="py-28 px-6 border-t border-brand-line">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent mb-4 block">
              How We Work Together
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4 leading-tight">
              Three tiers. Two quick wins.
            </h2>
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Start where you are. Scale only after you've seen proof.
            </p>
          </motion.div>

          {/* Quick Wins */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gray-600 mb-6">— Quick Wins to Get Started —</p>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              {
                badge: '1–2 Weeks',
                title: 'Problem Inventory & AI Reality Check',
                description:
                  'A structured engagement that produces your top 10 scored problems, an honest view of which are AI-ready and which are not, and one recommended first project with a rough 8–12 week plan.',
                highlight: 'Immediately separates you from hype-first vendors.',
              },
              {
                badge: '4–8 Weeks',
                title: 'One-Workflow AI Pilot',
                description:
                  'We implement one AI-assisted workflow — intake triage, patient follow-up, documentation prep — using your existing tools, with before/after metrics and a simple runbook you own.',
                highlight: 'Fast proof of value. No new platforms required.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card border border-brand-accent/20 hover:border-brand-accent/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-brand-accent border border-brand-accent/30 rounded-full px-3 py-1 mb-4">
                  {item.badge}
                </span>
                <h3 className="text-xl font-serif italic mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                <p className="font-mono text-xs text-brand-accent">{item.highlight}</p>
              </motion.div>
            ))}
          </div>

          {/* Three Tiers */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gray-600 mb-6">— Full Engagement Tiers —</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: 'Tier 1',
                badge: '2–4 Weeks',
                icon: <ClipboardList className="w-6 h-6" />,
                title: 'Problem-First Blueprint',
                items: [
                  'Problem inventory workshops',
                  'Honest scoring: data readiness, process stability, feasibility',
                  'Simple AI use policy & role definitions',
                  'Shortlist of 1–3 ready-now AI projects with impact estimates',
                ],
              },
              {
                num: 'Tier 2',
                badge: '8–12 Weeks',
                icon: <Bot className="w-6 h-6" />,
                title: 'Single High-Impact AI Project',
                items: [
                  'Deep dive on one workflow with baseline metrics',
                  'Build vs buy evaluation + hands-on implementation',
                  'Pilot with staff, training, change management',
                  'Before/after ROI snapshot, runbook, kill-switch plan',
                ],
              },
              {
                num: 'Tier 3',
                badge: 'Ongoing Retainer',
                icon: <BarChart2 className="w-6 h-6" />,
                title: 'Fractional AI CoE',
                items: [
                  'Run your AI backlog and roadmap continuously',
                  'Monthly AI council + quarterly roadmap refresh',
                  'One project at a time, every time',
                  'Growing institutional AI playbook',
                ],
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-brand-accent hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{tier.num}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent border border-brand-accent/30 rounded-full px-2 py-0.5">
                    {tier.badge}
                  </span>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-gray-400 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  {tier.icon}
                </div>
                <h3 className="text-xl font-serif italic mb-5 leading-snug text-white">{tier.title}</h3>
                <ul className="space-y-3">
                  {tier.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="mailto:chris.king@stratify-performance.com?subject=Discovery%20Call%20Request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white rounded-full text-sm uppercase tracking-widest hover:bg-brand-accent/80 transition-all"
            >
              Find out which tier fits <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. Governance & Guardrails
      ───────────────────────────────────────────────────────── */}
      <section id="governance" className="py-28 px-6 border-t border-brand-line bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">
              Roles &amp; Governance
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4 leading-tight">
              AI that's safe, owned, and accountable.
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
              Even small teams need clear ownership so AI is reliable; not "someone using ChatGPT on the side."
              Every engagement defines a minimal governance structure from day one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-6">Roles We Define Together</p>
              <ul className="space-y-5">
                {[
                  { role: 'Business Owner', desc: 'Accountable for the business outcome and process changes in their area.' },
                  { role: 'AI Champion', desc: 'Coordinates AI projects, owns the backlog, ensures guardrails are followed.' },
                  { role: 'IT / Data Liaison', desc: 'Manages system access, vendor approvals, and PHI/security constraints.' },
                  { role: 'Domain Experts', desc: 'Front-line clinicians and ops staff who define reality and validate workflows.' },
                  { role: 'Stratify', desc: 'Fractional CAIO + AI product lead: problem framing, architecture, implementation, measurement.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 pb-5 border-b border-gray-100 last:border-0">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent mt-0.5 flex-shrink-0 w-28">{item.role}</span>
                    <span className="text-gray-600 text-sm leading-relaxed">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-6">Risk Tiers &amp; Guardrails</p>
              <div className="space-y-4">
                {[
                  { tier: 'Tier 1 — Admin Only', desc: 'Scheduling, documentation drafts, communication prep. No PHI decisions.' },
                  { tier: 'Tier 2 — Suggestions + Human Review', desc: 'AI recommends; clinician or ops staff reviews and approves. Mandatory sign-off.' },
                  { tier: 'Tier 3 — Decision Support', desc: 'Structured guardrails, audit trail, and strict human-in-the-loop requirements.' },
                ].map((item, i) => (
                  <div key={i} className="p-5 border border-gray-100 rounded-xl hover:border-blue-200 transition-all">
                    <p className="font-semibold text-gray-800 text-sm mb-1">{item.tier}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 mt-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">Operating Cadence</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Monthly AI council check-in · Quarterly roadmap refresh · Runbook and kill-switch on every project</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. About
      ───────────────────────────────────────────────────────── */}
      <section id="about" className="py-28 px-6 border-t border-brand-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent mb-4 block">
                  Why Work With Me
                </span>
                <h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-tight">
                  Clinical credibility meets operational expertise.
                </h2>
              </motion.div>

              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <ul className="space-y-6">
                  {[
                    'Licensed Physical Therapist (DPT) with 8+ years in clinical operations, utilization management, and performance improvement — I understand prior auth, denials, and documentation pain from the inside, not as a vendor.',
                    'Hands-on background in reporting, revenue cycle, and healthcare analytics (SQL, Power BI, Excel). I can design the operating model and get into the weeds to ship real workflows.',
                    'Deep, practical AI experience applied to actual clinical and ops contexts — documentation, analysis, workflow automation, and agent design.',
                    'Clear, narrow niche: "problem-first AI operating model for clinics" is a story most generic AI consultants can\'t match and I won\'t drift from it.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.blockquote
                className="border-l-2 border-brand-accent pl-6 italic text-gray-500 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                "Stratify Performance exists to help humans and systems perform better, whether
                that's a clinic team navigating real-world operations or a small healthcare business
                building durable, measurable advantage with AI."
              </motion.blockquote>
            </div>

            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <img
                src="/headshot.jpg"
                alt="Chris King"
                className="object-cover w-full h-full headshot-position"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-black text-white p-6 rounded-xl">
                <p className="font-mono text-xs uppercase tracking-widest mb-1 text-gray-400">
                  DPT · Clinical Operations · AI Consulting
                </p>
                <p className="text-2xl font-serif italic">Chris King</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mt-1">
                  Stratify Performance
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          8. Contact
      ───────────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6 border-t border-brand-line bg-white text-black">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">Next Steps</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight">
              Ready to find your first real AI problem?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Start with a 30-minute discovery call. If there isn't a clear problem worth solving
              in the first conversation, I'll tell you that directly.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href="mailto:chris.king@stratify-performance.com"
              className="flex flex-col items-center p-10 border border-gray-200 rounded-2xl hover:border-brand-accent hover:shadow-lg transition-all group"
            >
              <Mail className="w-8 h-8 mb-4 text-gray-400 group-hover:text-brand-accent transition-colors" />
              <span className="font-mono text-xs uppercase tracking-widest mb-2 text-gray-500">Email Me</span>
              <span className="text-sm font-bold text-center break-all text-gray-800">
                chris.king@stratify-performance.com
              </span>
            </a>
            <a
              href="https://calendly.com/stratify"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-10 border border-gray-200 rounded-2xl hover:border-brand-accent hover:shadow-lg transition-all group"
            >
              <Calendar className="w-8 h-8 mb-4 text-gray-400 group-hover:text-brand-accent transition-colors" />
              <span className="font-mono text-xs uppercase tracking-widest mb-2 text-gray-500">Book a Call</span>
              <span className="text-sm font-bold text-gray-800">30-Min Discovery via Calendly</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 px-6 border-t border-brand-line">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-serif italic text-lg mb-1">Stratify Performance</p>
            <p className="font-mono text-[9px] uppercase tracking-widest text-gray-600">
              AI Consulting · Clinical Ops · Healthcare · © 2026
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:chris.king@stratify-performance.com"
              className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
