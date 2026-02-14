"use client"

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const SocialSidebar = () => {
  const socials = [
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/harshithamanneri', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: 'https://github.com/harshitha-manneri', label: 'GitHub' },
    { icon: <Mail size={20} />, href: 'mailto:harshitha.manneri@email.com', label: 'Email' },
  ];

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-8">
      <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-white/20" />
      {socials.map((social, i) => (
        <a
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
          aria-label={social.label}
        >
          <div className="text-muted-foreground group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(180,100,50,0.8)] transition-all">
            {social.icon}
          </div>
          <span className="absolute left-14 px-2 py-1 bg-background border border-white/10 rounded text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {social.label}
          </span>
        </a>
      ))}
      <div className="w-px h-24 bg-gradient-to-t from-transparent via-white/20 to-white/20" />
    </div>
  );
};