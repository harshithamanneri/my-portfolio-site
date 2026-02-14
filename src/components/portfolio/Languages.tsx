"use client"

import React from 'react';
import { Globe, Languages as LangIcon } from 'lucide-react';

const languages = [
  { name: 'English', proficiency: 'Professional Proficiency', level: 'primary' },
  { name: 'Telugu', proficiency: 'Native', level: 'accent' },
  { name: 'Hindi', proficiency: 'Professional Working Proficiency', level: 'primary' }
];

export const Languages = () => {
  return (
    <section id="languages" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.4em] text-[10px]">
            <Globe className="w-3 h-3" />
            Communication
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
            My <span className="gradient-text-purple">Languages</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-medium">
            Clear communication across diverse environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {languages.map((lang, idx) => (
            <div 
              key={idx}
              className="glass-card p-8 rounded-3xl group hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(160,32,240,0.3)] transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 blur-[60px] opacity-20 -z-10 ${lang.level === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
              
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <LangIcon className={`w-5 h-5 ${lang.level === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <div className={`w-2 h-2 rounded-full animate-pulse-glow ${lang.level === 'primary' ? 'bg-primary shadow-[0_0_10px_var(--primary)]' : 'bg-accent shadow-[0_0_10px_var(--accent)]'}`} />
              </div>
              
              <h4 className="text-xl font-headline font-bold text-white mb-2">{lang.name}</h4>
              <p className="text-sm text-muted-foreground font-medium group-hover:text-white/80 transition-colors">
                {lang.proficiency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
