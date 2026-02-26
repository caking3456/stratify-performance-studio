import { motion } from 'motion/react';
import {
  Activity,
  ArrowRight,
  BarChart2,
  Bot,
  Brain,
  Calendar,
  CheckCircle,
  ChevronRight,
  GitMerge,
  Mail,
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
            Clinical · Operations · Analytics
          </span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#who"      className="text-[11px] uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">Who I Help</a>
          <a href="#services" className="text-[11px] uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">Services</a>
          <a href="#process"  className="text-[11px] uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">Process</a>
          <a href="#about"    className="text-[11px] uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">About</a>
          <a
            href="mailto:chris.king@stratify-performance.com"
            className="px-5 py-2 bg-brand-accent text-white rounded-full text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-brand-accent/80 transition-all"
          >
            Book a Consult
          </a>
        </div>
        {/* Mobile CTA */}
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
        {/* Faint background photo */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.span
            className="font-mono text-xs uppercase tracking-[0.35em] text-brand-accent mb-8 block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Stratify Performance – Clinical, Operations &amp; Analytics
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif italic leading-[1.05] mb-8 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Workflow &amp; AI Playbooks for Clinics and Lean Healthcare Teams
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            I help small clinics and digital health teams fix messy workflows, clean up reporting,
            and safely plug in AI so staff save time and patients get better care.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="mailto:chris.king@stratify-performance.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-brand-accent/80 transition-all"
            >
              Book a 20-Minute Consult <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-all"
            >
              See Example AI Playbooks
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
              Built for lean clinical teams.
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              Stratify Performance works with:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Users className="w-5 h-5" />,
                label: 'Outpatient Clinics',
                text: 'Small PT, rehab, and specialty practices navigating scheduling, prior auth, and ops pressure.',
              },
              {
                icon: <Brain className="w-5 h-5" />,
                label: 'UM & Care Management',
                text: 'Utilization management and care management teams buried in manual reviews and disconnected data.',
              },
              {
                icon: <Zap className="w-5 h-5" />,
                label: 'Digital Health Teams',
                text: 'Digital health startups and lean ops teams who need better workflows without enterprise overhead.',
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
            This is about operations, workflows, and AI — not generic consulting.
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
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">You know something's off.</h2>
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
                  'Staff drowning in manual tasks and messaging',
                  'Reports nobody trusts or understands',
                  'Interest in AI, but no clear, safe way to start',
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
                  'Workflows grew organically and were never redesigned',
                  'Data lives in different systems with no clear owner',
                  'AI tools are generic and not mapped to your actual processes',
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
          4. What I Do in 4–6 Weeks
      ───────────────────────────────────────────────────────── */}
      <section id="services" className="py-28 px-6 border-t border-brand-line bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">
              What I Do in 4–6 Weeks
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4 leading-tight">
              Three focused deliverables.
            </h2>
            <p className="text-xl text-gray-500 max-w-xl">
              Everything is customized to your clinic or team, not a generic template.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                icon: <GitMerge className="w-6 h-6" />,
                title: 'Workflow Redesign',
                description:
                  'Map 2–3 of your highest-friction processes and simplify them so staff know exactly who does what, when.',
              },
              {
                num: '02',
                icon: <BarChart2 className="w-6 h-6" />,
                title: 'Clean Reporting',
                description:
                  'Build 1–2 practical views (Excel/Sheets/BI) so you can see no-shows, throughput, PA turnaround times, and key KPIs at a glance.',
              },
              {
                num: '03',
                icon: <Bot className="w-6 h-6" />,
                title: 'AI Playbooks',
                description:
                  'Create 2–3 step-by-step AI playbooks for your team—message triage, documentation, prior auth letters, monthly ops reviews—using your existing tools.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-8 border border-gray-200 rounded-2xl hover:border-brand-accent hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-300 mb-6 block">
                  {card.num}
                </span>
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-gray-500 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-serif italic mb-4">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="mailto:chris.king@stratify-performance.com?subject=Sample%20Playbook%20Request"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-sm uppercase tracking-widest text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all"
            >
              Download Sample Playbook <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. How It Works
      ───────────────────────────────────────────────────────── */}
      <section id="process" className="py-28 px-6 border-t border-brand-line">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent mb-4 block">How It Works</span>
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">Four steps. Six weeks.</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-5 top-5 h-[calc(100%-80px)] w-px bg-gradient-to-b from-brand-accent/40 via-brand-accent/20 to-transparent" />

            <div className="space-y-0">
              {[
                {
                  week: 'Week 1',
                  step: 'Discovery',
                  description: '2–3 short interviews, current-state maps, and a small set of target metrics.',
                },
                {
                  week: 'Weeks 2–3',
                  step: 'Redesign',
                  description: 'Future-state workflows, quick wins, and AI-assisted steps identified.',
                },
                {
                  week: 'Weeks 3–4',
                  step: 'Build',
                  description: 'Dashboards/reports + 2–3 AI playbooks tailored to your tools.',
                },
                {
                  week: 'Weeks 5–6',
                  step: 'Pilot & Handover',
                  description: 'Staff pilot, refine, and train; you keep the assets and process.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-8 pb-14 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-brand-bg border border-brand-accent/40 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="font-mono text-brand-accent text-xs font-bold">{i + 1}</span>
                  </div>
                  <div className="pt-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-1 block">
                      {item.week}
                    </span>
                    <h3 className="text-2xl font-serif italic mb-2">{item.step}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="mailto:chris.king@stratify-performance.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white rounded-full text-sm uppercase tracking-widest hover:bg-brand-accent/80 transition-all"
            >
              See if your clinic is a fit — Book a call <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. Why Work With Me
      ───────────────────────────────────────────────────────── */}
      <section id="about" className="py-28 px-6 border-t border-brand-line bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">

            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">
                  Why Work With Me
                </span>
                <h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-tight">
                  Clinical credibility. Operational expertise.
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
                    'Licensed Physical Therapist (DPT) with 8+ years in clinical operations, utilization management, and performance improvement.',
                    'Experience in revenue cycle, reporting, and healthcare analytics (SQL, Power BI).',
                    'Hands-on work with AI tools for documentation, analysis, and workflow support.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
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
                "Stratify Performance exists to help humans and systems perform better—whether
                that's a clinician in the gym or a clinic team in the real world."
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
                  DPT · Clinical Operations · Analytics
                </p>
                <p className="text-2xl font-serif italic">Chris King</p>
              </div>
            </motion.div>
          </div>

          {/* Coaching offer */}
          <motion.div
            className="mt-20 pt-12 border-t border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 block">
              Also from Stratify Performance
            </span>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 border border-gray-100 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h4 className="text-lg font-serif italic mb-1">Stratify Performance – Coaching</h4>
                  <p className="text-gray-500 text-sm">
                    1:1 and small-group strength coaching for clinicians and busy professionals who
                    want to perform better in and out of the clinic.
                  </p>
                </div>
              </div>
              <a
                href="mailto:chris.king@stratify-performance.com?subject=Coaching%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full text-sm uppercase tracking-widest text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all whitespace-nowrap"
              >
                Learn more about coaching <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. Next Steps / Contact
      ───────────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6 border-t border-brand-line">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent mb-4 block">Next Steps</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight">
              Ready to explore a 4–6 week workflow + AI project?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              If there isn't a clear ROI in the first conversation, I'll tell you that directly.
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
              className="flex flex-col items-center p-10 border border-brand-line rounded-2xl hover:bg-white hover:text-black transition-all group"
            >
              <Mail className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs uppercase tracking-widest mb-2">Email Me</span>
              <span className="text-sm font-bold text-center break-all">
                chris.king@stratify-performance.com
              </span>
            </a>
            <a
              href="https://calendly.com/stratify"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-10 border border-brand-line rounded-2xl hover:bg-white hover:text-black transition-all group"
            >
              <Calendar className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs uppercase tracking-widest mb-2">Book a Call</span>
              <span className="text-sm font-bold">Schedule via Calendly</span>
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
              Clinical, Operations &amp; Analytics · © 2026
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
