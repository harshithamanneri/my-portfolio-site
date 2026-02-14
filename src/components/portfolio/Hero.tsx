"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Sparkles } from 'lucide-react';

const ROLES = [
  "AI Systems Engineer",
  "Machine Learning Specialist",
  "Full-Stack Developer"
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile');

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % ROLES.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Column: Text & CTAs */}
        <div className="space-y-10 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] animate-in fade-in slide-in-from-bottom duration-700">
              <Sparkles className="w-3 h-3" />
              Available for Opportunities
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9] animate-in fade-in slide-in-from-left duration-1000">
              Harshitha <br />
              <span className="text-white/40">Manneri</span>
            </h1>
            <div className="h-8 md:h-10 flex items-center justify-center lg:justify-start">
              <p className="text-xl md:text-2xl font-headline font-medium text-accent typing-cursor">
                {displayText}
              </p>
            </div>
          </div>

          <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Architecting the future with <span className="text-white font-semibold">AI-driven systems</span> and scalable cloud solutions. Bridging deep research with production-grade engineering to solve complex real-world challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <Button size="lg" className="rounded-full px-10 h-14 bg-primary hover:bg-primary/90 text-white font-bold group shadow-[0_10px_30px_-10px_rgba(124,58,237,0.5)]">
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 border-white/10 hover:border-accent hover:text-accent font-bold group">
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000 delay-100">
          <div className="relative">
            {/* Glowing Ring Container */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-accent to-primary rounded-full glow-ring animate-spin-slow opacity-60" style={{ animationDuration: '15s' }}></div>
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-8 border-background p-1 bg-background">
              {profileImg && (
                <Image
                  src={profileImg.imageUrl}
                  alt="Harshitha Manneri"
                  fill
                  priority
                  className="rounded-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="professional headshot"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};