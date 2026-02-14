"use client"

import React from 'react';
import { Mail, Linkedin, Github, Twitter, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 px-6 border-t border-white/5 relative bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <h3 className="text-5xl font-headline font-bold tracking-tight">Let's <span className="gradient-text-purple">Collaborate</span></h3>
            <p className="text-muted-foreground text-lg max-w-md">
              I'm always open to discussing new AI projects, internship opportunities, or creative partnerships. Reach out and let's build something exceptional.
            </p>
            <div className="space-y-4">
              <a href="mailto:harshitha.manneri@email.com" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span>harshitha.manneri@email.com</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Hyderabad, India (Available Worldwide)</span>
              </div>
            </div>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin />, href: '#' },
                { icon: <Github />, href: '#' },
                { icon: <Twitter />, href: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all hover:-translate-y-1"
                >
                  {React.cloneElement(social.icon as React.ReactElement, { size: 20 })}
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem]">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground ml-2">Your Name</label>
                <Input placeholder="John Doe" className="bg-white/5 border-white/10 rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground ml-2">Email Address</label>
                <Input placeholder="john@example.com" type="email" className="bg-white/5 border-white/10 rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground ml-2">Message</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  placeholder="How can I help you?"
                />
              </div>
              <Button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-lg group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-muted-foreground text-sm">
            © 2024 Harshitha Manneri. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground/50 font-medium tracking-widest uppercase">
            Designed for 2026 Standards • Placement Ready
          </p>
        </div>
      </div>
    </footer>
  );
};
