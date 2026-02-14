"use client"

import React from 'react';
import { Award, CheckCircle2, ExternalLink, Users } from 'lucide-react';

const certifications = [
  { 
    name: 'Multicloud Network Associate', 
    issuer: 'Aviatrix',
    link: '#'
  },
  { 
    name: 'Salesforce Certified AI Associate', 
    issuer: 'Salesforce',
    link: '#'
  },
  { 
    name: 'Automation Anywhere Certified Essentials RPA Professional', 
    issuer: 'Automation Anywhere',
    link: '#'
  },
  { 
    name: 'Oracle Cloud Infrastructure Generative AI Professional', 
    issuer: 'Oracle',
    link: '#'
  },
  { 
    name: 'AWS Academy Cloud Foundations', 
    issuer: 'AWS Academy',
    link: '#'
  }
];

const practices = [
  'Collaborated effectively across frontend, backend, and data-focused project teams.',
  'Practiced clean coding, documentation, and version-controlled workflows.',
  'Demonstrated adaptability and rapid learning across diverse technical domains.'
];

export const Accomplishments = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Certifications Section */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.3em] text-[10px]">
                <Award className="w-4 h-4" />
                Professional Credentials
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
                Certifications
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm font-medium">
              Industry-recognized validations of technical proficiency and specialized expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className="glass-card p-6 rounded-2xl flex justify-between items-center group hover:border-primary/30 transition-all duration-300"
              >
                <div className="space-y-1">
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors text-lg">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium">
                    {cert.issuer}
                  </p>
                </div>
                <a 
                  href={cert.link}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all"
                  aria-label="View Certificate"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration & Practices Section */}
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-[0.3em] text-[10px]">
              <Users className="w-4 h-4" />
              Professional Standards
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
              Collaboration & <span className="text-accent">Practices</span>
            </h2>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden">
            {/* Subtle accent glow */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 gap-8 relative z-10">
              {practices.map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent group-hover:text-black transition-colors" />
                  </div>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium group-hover:text-white transition-colors duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};