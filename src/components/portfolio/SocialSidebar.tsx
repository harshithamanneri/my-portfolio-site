"use client"

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SocialSidebar = () => {
  const socials = [
    { 
      icon: <Linkedin size={20} />, 
      href: 'https://linkedin.com/in/harshithamanneri', 
      label: 'LinkedIn',
      color: 'hover:text-[#0077B5] hover:shadow-[0_0_15px_rgba(0,119,181,0.5)]',
      bgColor: 'hover:bg-[#0077B5]/10'
    },
    { 
      icon: <Github size={20} />, 
      href: 'https://github.com/harshitha-manneri', 
      label: 'GitHub',
      color: 'hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]',
      bgColor: 'hover:bg-white/10'
    },
    { 
      icon: <Mail size={20} />, 
      href: 'mailto:harshitha.manneri@email.com', 
      label: 'Email',
      color: 'hover:text-accent hover:shadow-[0_0_15px_rgba(180,100,50,0.5)]',
      bgColor: 'hover:bg-accent/10'
    },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 fade-in-up">
      {socials.map((social, i) => (
        <a
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group relative flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1",
            social.color,
            social.bgColor
          )}
          aria-label={social.label}
        >
          <div className="text-muted-foreground transition-all duration-300">
            {social.icon}
          </div>
          
          {/* Label Tooltip */}
          <span className="absolute left-16 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
};