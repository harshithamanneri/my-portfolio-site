"use client"

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Summary', href: '#summary' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Elite Branding Pill */}
        <a href="#" className="group relative">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:bg-black/60 group-hover:shadow-primary/10">
            <span className="text-primary font-mono font-bold text-xs md:text-sm tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity">
              &lt;/&gt;
            </span>
            <span className="font-headline font-bold text-[10px] md:text-xs tracking-[0.25em] text-white/90 uppercase whitespace-nowrap">
              Harshitha Manneri
            </span>
            <span className="text-primary font-mono font-bold text-xs md:text-sm tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity">
              &lt;/&gt;
            </span>
          </div>
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 md:hidden p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
