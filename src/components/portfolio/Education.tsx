"use client"

import React from 'react';
import { GraduationCap, Book, School, Star } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'KL University, Guntur',
    duration: '2023 – Present',
    cgpa: '9.37',
    icon: <GraduationCap className="w-7 h-7 text-primary" />,
    level: 'primary'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya College, Telangana',
    duration: '2021 – 2023',
    cgpa: '7.50',
    icon: <Book className="w-7 h-7 text-accent" />,
    level: 'accent'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Sri Chaitanya School, Andhra Pradesh',
    duration: '2020 – 2021',
    cgpa: '9.9',
    icon: <School className="w-7 h-7 text-primary" />,
    level: 'primary'
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background glow decorations */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-[0.5em] text-[10px]">
            <Star className="w-3 h-3 fill-primary animate-pulse-glow" />
            Education
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tight">
            Academic <span className="gradient-text-purple">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium text-lg">
            My Academic Journey & Performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, idx) => (
            <div 
              key={idx}
              className="glass-card p-10 rounded-[3rem] group hover:-translate-y-3 transition-all duration-700 relative overflow-hidden flex flex-col h-full border-white/5"
            >
              {/* Hover highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative mb-12">
                <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-all duration-700 group-hover:scale-110 shadow-2xl relative z-10">
                  {edu.icon}
                </div>
                {/* Dynamic radial glow behind icon */}
                <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10 rounded-full ${edu.level === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
              </div>

              <div className="space-y-6 flex-1 relative z-10">
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white leading-[1.2] group-hover:text-primary transition-colors duration-500">
                  {edu.degree}
                </h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-lg font-semibold tracking-tight">{edu.institution}</p>
                  <p className="text-[11px] font-black text-accent uppercase tracking-[0.3em] bg-accent/5 inline-block px-3 py-1 rounded-full border border-accent/10">
                    {edu.duration}
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/10 flex items-end justify-between relative z-10">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-black block">Achievement</span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full animate-pulse-glow ${edu.level === 'primary' ? 'bg-primary shadow-[0_0_10px_var(--primary)]' : 'bg-accent shadow-[0_0_10px_var(--accent)]'}`} />
                    <span className="text-xs font-bold text-white/50 tracking-wider">OFFICIAL RECORD</span>
                  </div>
                </div>
                
                <div className="relative group/badge">
                  <div className={`absolute -inset-4 blur-2xl opacity-0 group-hover/badge:opacity-30 transition-opacity rounded-full duration-500 ${edu.level === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                  <div className="bg-black/60 backdrop-blur-2xl px-8 py-4 rounded-[2rem] border border-white/10 group-hover:border-primary/40 transition-all duration-500 shadow-2xl flex flex-col items-center">
                    <span className={`text-3xl font-black tracking-tighter ${edu.level === 'primary' ? 'gradient-text-purple' : 'gradient-text-cyan'}`}>
                      {edu.cgpa}
                    </span>
                    <span className="text-[9px] text-muted-foreground font-black tracking-[0.2em] uppercase mt-1">CGPA</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
