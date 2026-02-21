"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';

const ROLES = [
  "AI Systems Engineer",
  "Deep Learning Specialist",
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
    }, isDeleting ? 30 : 60);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="summary" className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
        {/* Left Column */}
        <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left fade-in-up">
          <div className="space-y-2">
            <h1 className="text-7xl md:text-[100px] font-headline font-bold tracking-tight leading-[0.9]">
              <span className="text-white">Harshitha</span><br />
              <span className="gradient-text-purple">Manneri</span>
            </h1>
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <p className="text-xl md:text-2xl font-mono font-medium text-accent typing-cursor">
                {displayText}
              </p>
            </div>
          </div>

          <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground leading-relaxed">
            Building intelligent AI systems and scalable software that translate advanced research into impactful real-world solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-2xl px-8 h-14 bg-primary hover:bg-primary/90 text-white font-bold group shadow-[0_10px_30px_-10px_rgba(124,58,237,0.5)] transition-all">
              <a 
                href="https://ik.imagekit.io/cgkpgpdr2/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                download="Harshitha_Manneri_Resume.pdf"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass-button rounded-2xl px-8 h-14 font-bold group">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative animate-float">
            {/* Elegant Subtle Pulse Glow Ring */}
            <div className="absolute -inset-4 rounded-full border border-primary/10 animate-pulse-glow" />
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-primary/10 via-accent/10 to-primary/10 rounded-full blur-sm" />
            
            {/* Profile Image Container */}
            <div className="relative w-64 h-64 md:w-[350px] md:h-[350px] rounded-full border border-white/5 bg-background/40 backdrop-blur-md flex items-center justify-center p-4">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
                {profileImg && (
                  <Image
                    src={profileImg.imageUrl}
                    alt="Harshitha Manneri"
                    fill
                    priority
                    className="object-cover"
                    data-ai-hint="professional headshot"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
