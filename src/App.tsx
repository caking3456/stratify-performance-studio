import { motion } from 'motion/react';
import { Activity, Brain, ChevronRight, Mail, User } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [activeSide, setActiveSide] = useState<'none' | 'ai' | 'strength'>('none');

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 border-b border-brand-line bg-brand-bg/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <img 
            src="https://storage.googleapis.com/generativeai-downloads/images/s_4f2f6a8e3e4b4e4b8e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b.png" 
            alt="Stratify Performance Logo" 
            className="h-8 md:h-10 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#ai" className="text-[11px] uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">AI Consulting</a>
          <a href="#strength" className="text-[11px] uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">Strength Coaching</a>
          <a href="#about" className="text-[11px] uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">About Chris</a>
          <a href="#contact" className="px-4 py-2 border border-white/20 rounded-full text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">Contact</a>
        </div>
      </nav>

      {/* Hero Split Gate */}
      <section className="relative h-screen flex flex-col md:flex-row pt-16">
        {/* AI Side */}
        <motion.div 
          id="ai"
          className={`relative flex-1 flex flex-col justify-center p-12 group cursor-pointer overflow-hidden border-r border-brand-line`}
          onMouseEnter={() => setActiveSide('ai')}
          onMouseLeave={() => setActiveSide('none')}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
          <div className="relative z-10 max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-6 h-6 text-brand-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent">Systems Optimization</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-6 leading-tight">AI Healthcare Consulting</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Stratifying clinical data to eliminate inefficient workflows and elevate organizational performance.
            </p>
            <button className="flex items-center gap-2 group/btn text-sm uppercase tracking-widest font-bold">
              Book a Consultation <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Strength Side */}
        <motion.div 
          id="strength"
          className={`relative flex-1 flex flex-col justify-center p-12 group cursor-pointer overflow-hidden`}
          onMouseEnter={() => setActiveSide('strength')}
          onMouseLeave={() => setActiveSide('none')}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
          <div className="relative z-10 max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-6 h-6 text-brand-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent">Human Performance</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-6 leading-tight">Strength & Performance</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Science-based periodization for executives and athletes who refuse to plateau.
            </p>
            <button className="flex items-center gap-2 group/btn text-sm uppercase tracking-widest font-bold">
              Apply for Coaching <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Center Headline Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none text-center hidden md:block">
          <motion.h1 
            className="text-[12vw] font-bold uppercase leading-[0.8] tracking-tighter opacity-5 select-none"
            animate={{ opacity: activeSide === 'none' ? 0.05 : 0.02 }}
          >
            Stratify
          </motion.h1>
        </div>
      </section>

      {/* The "Why" Section */}
      <section id="about" className="py-32 px-6 border-t border-brand-line bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">The Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
              High-Performance Strategy for Systems and Souls.
            </h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                "Whether I’m optimizing a clinical workflow with a Large Language Model or fine-tuning a client's central nervous system for a 500lb deadlift, the principle remains the same: <span className="font-bold">Stratification</span>."
              </p>
              <p>
                You cannot improve what you do not measure. My approach bridges the gap between high-stakes healthcare technology and the physical discipline required to sustain elite output.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974" 
              alt="Chris King" 
              className="object-cover w-full h-full grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 bg-black text-white p-6 rounded-xl">
              <p className="font-mono text-xs uppercase tracking-widest mb-2">Optimization Expert</p>
              <p className="text-2xl font-serif italic">Chris King</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card group hover:border-brand-accent transition-colors">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-8">
                <Brain className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-3xl font-serif italic mb-4">AI Integration & Strategy</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Tailored solutions for Health Systems and MedTech startups looking to leverage LLMs and predictive analytics to solve messy data problems.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-accent rounded-full" />
                  Workflow Automation Design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-accent rounded-full" />
                  Clinical Data Stratification
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-accent rounded-full" />
                  AI Readiness Assessments
                </li>
              </ul>
            </div>

            <div className="glass-card group hover:border-brand-accent transition-colors">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-8">
                <Activity className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-3xl font-serif italic mb-4">Science-Based Coaching</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Elite strength training for high-performers who need their physical capacity to match their professional ambition.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-accent rounded-full" />
                  Custom Periodization Programming
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-accent rounded-full" />
                  Biometric Data Analysis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-accent rounded-full" />
                  CNS Recovery Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 border-t border-brand-line">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent mb-4 block">Get Started</span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-12">Ready to optimize?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="mailto:chris.king@stratify-performance.com" 
              className="flex flex-col items-center p-8 border border-brand-line rounded-2xl hover:bg-white hover:text-black transition-all group"
            >
              <Mail className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs uppercase tracking-widest mb-2">Email Me</span>
              <span className="text-sm font-bold">chris.king@stratify-performance.com</span>
            </a>
            <div className="flex flex-col items-center p-8 border border-brand-line rounded-2xl hover:bg-white hover:text-black transition-all group cursor-pointer">
              <User className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs uppercase tracking-widest mb-2">Book a Call</span>
              <span className="text-sm font-bold">Calendly.com/stratify</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-brand-line">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img 
              src="https://storage.googleapis.com/generativeai-downloads/images/s_4f2f6a8e3e4b4e4b8e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b.png" 
              alt="Stratify Performance" 
              className="h-6 w-auto opacity-80"
              referrerPolicy="no-referrer"
            />
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-gray-500">© 2026</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
