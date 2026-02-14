"use client"

import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { StarBackground } from './StarBackground';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.4em] text-[10px]">
            <Sparkles className="w-3 h-3" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
            Let's <span className="gradient-text-cyan">Connect</span>
          </h2>
          <p className="text-muted-foreground font-medium">
            Have a project in mind or want to discuss AI systems? Drop a message.
          </p>
        </div>

        <div className="glass-card bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-[0_20px_50px_-20px_rgba(124,58,237,0.3)] relative group">
          {/* Subtle gradient border effect */}
          <div className="absolute inset-0 rounded-[2rem] border border-gradient-to-r from-primary/20 to-accent/20 pointer-events-none opacity-50" />
          
          <form className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2 group/input">
                <Label htmlFor="name" className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase ml-1 transition-colors group-focus-within/input:text-primary">
                  Your Name
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="h-14 pl-12 bg-black/40 border-white/5 focus:border-primary/50 focus:ring-primary/20 rounded-2xl transition-all duration-300 hover:bg-black/60 group-focus-within/input:scale-[1.01] group-focus-within/input:shadow-[0_0_20px_-5px_rgba(124,58,237,0.3)]"
                  />
                </div>
              </div>

              <div className="space-y-2 group/input">
                <Label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase ml-1 transition-colors group-focus-within/input:text-accent">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within/input:text-accent transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="h-14 pl-12 bg-black/40 border-white/5 focus:border-accent/50 focus:ring-accent/20 rounded-2xl transition-all duration-300 hover:bg-black/60 group-focus-within/input:scale-[1.01] group-focus-within/input:shadow-[0_0_20px_-5px_rgba(0,255,255,0.2)]"
                  />
                </div>
              </div>

              <div className="space-y-2 group/input">
                <Label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase ml-1 transition-colors group-focus-within/input:text-primary">
                  Message
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[150px] pl-12 pt-5 bg-black/40 border-white/5 focus:border-primary/50 focus:ring-primary/20 rounded-[1.5rem] transition-all duration-300 hover:bg-black/60 group-focus-within/input:scale-[1.01] group-focus-within/input:shadow-[0_0_20px_-5px_rgba(124,58,237,0.3)]"
                  />
                </div>
              </div>
            </div>

            <Button className="w-full h-14 rounded-2xl bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-500 text-white font-bold text-lg group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(124,58,237,0.6)] active:scale-95">
              Send Message
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};