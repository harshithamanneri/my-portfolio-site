"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse-glow" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="relative inline-block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20 p-1 bg-background">
            {profileImg && (
              <Image
                src={profileImg.imageUrl}
                alt={profileImg.description}
                width={160}
                height={160}
                className="rounded-full grayscale hover:grayscale-0 transition-all duration-700 object-cover"
                data-ai-hint={profileImg.imageHint}
              />
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-accent font-headline font-semibold tracking-wider text-sm md:text-base uppercase animate-in fade-in slide-in-from-bottom duration-700">
            Hi, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-100">
            Harshitha <span className="gradient-text-cyan">Manneri</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            AI Systems Engineer | Full-Stack Developer
          </p>
        </div>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground/80 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
          Computer Science undergraduate <span className="text-accent font-semibold">(CGPA 9.37)</span> specializing in AI-driven systems and scalable software solutions. Experienced in deep learning, full-stack development, and cloud-integrated applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground group">
            <Download className="mr-2 w-4 h-4" />
            Download Resume
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-white/10 hover:border-accent hover:text-accent group">
            View Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
