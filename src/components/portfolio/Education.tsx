"use client"

import React from 'react';
import { GraduationCap, Book, School, Star } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'KL University, Guntur',
    duration: '2023 – Present',
    cgpa: '9.37',
    icon: <GraduationCap className="w-5 h-5 text-primary" />,
    level: 'primary'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya College, Telangana',
    duration: '2021 – 2023',
    cgpa: '7.50',
    icon: <Book className="w-5 h-5 text-accent" />,
    level: 'accent'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Sri Chaitanya School, Andhra Pradesh',
    duration: '2020 – 2021',
    cgpa: '9.9',
    icon: <School className="w-5 h-5 text-primary" />,
    level: 'primary'
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-16 px-6 relative overflow-hidden border-b border-white/5">
      {/* Subtle background glow decorations */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.4em] text-[9px]">
              <Star className="w-3 h-3 fill-primary" />
              Education
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tight">
              Academic <span className="gradient-text-purple">Records</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md font-medium text-sm">
            Institutional background and performance metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 rounded-[1.5rem] group hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden flex flex-col h-full border-white/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-all duration-500 relative z-10">
                  {edu.icon}
                </div>
                <div className="bg-black/40 backdrop-blur-xl px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                  <span className={`text-xs font-bold ${edu.level === 'primary' ? 'text-primary' : 'text-accent'}`}>
                    {edu.cgpa}
                  </span>
                  <span className="text-[8px] text-muted-foreground font-bold tracking-widest uppercase">CGPA</span>
                </div>
              </div>

              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-headline font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
                  {edu.degree}
                </h3>
                <div className="space-y-1">
                  <p className="text-muted-foreground text-sm font-medium">{edu.institution}</p>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-wider">
                    {edu.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
