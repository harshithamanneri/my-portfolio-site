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
      color: 'text-[#0A66C2]',
      glowColor: 'group-hover:shadow-[0_0_20px_-5px_#0A66C2]',
      borderColor: 'group-hover:border-[#0A66C2]/50',
      bgColor: 'group-hover:bg-[#0A66C2]/10'
    },
    { 
      icon: <Github size={20} />, 
      href: 'https://github.com/harshitha-manneri', 
      label: 'GitHub',
      color: 'text-[#E6EDF3]',
      glowColor: 'group-hover:shadow-[0_0_20px_-5px_rgba(230,237,243,0.5)]',
      borderColor: 'group-hover:border-[#E6EDF3]/50',
      bgColor: 'group-hover:bg-[#E6EDF3]/10'
    },
    { 
      icon: <Mail size={20} />, 
      href: 'mailto:harshitha.manneri@email.com', 
      label: 'Email',
      color: 'text-[#22D3EE]',
      glowColor: 'group-hover:shadow-[0_0_20px_-5px_#22D3EE]',
      borderColor: 'group-hover:border-[#22D3EE]/50',
      bgColor: 'group-hover:bg-[#22D3EE]/10'
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
            social.glowColor,
            social.borderColor,
            social.bgColor
          )}
          aria-label={social.label}
        >
          <div className={cn("transition-all duration-300 text-muted-foreground", `group-hover:${social.color}`)}>
            {social.icon}
          </div>
          
          {/* Label Tooltip */}
          <span className="absolute left-16 px-3 py-1.5 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0 text-white">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
};
