
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const Research = () => {
  const researchImg = PlaceHolderImages.find(img => img.id === 'research-facial');

  return (
    <section id="research" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto glass-card rounded-[3rem] p-8 md:p-16 border-primary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Special Spotlight
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-bold">Research & <span className="text-accent">Innovation</span></h3>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-2xl font-headline font-semibold text-white/90">Facial Emotion Recognition Using AI for Mental Wellness</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Development of a high-accuracy neural network model designed to detect subtle emotional cues in real-time. This research aims to provide assistive technologies for mental health monitoring and emotional intelligence training.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Achieved 95%+ accuracy in controlled environment testing.',
                  'Implemented edge-computing optimization for low-latency detection.',
                  'Collaborated with healthcare professionals for semantic validation.',
                  'Presented findings at leading technology symposiums.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
              <BookOpen className="w-5 h-5" />
              Read Full Research Paper
            </a>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video lg:aspect-square">
              {researchImg && (
                <Image
                  src={researchImg.imageUrl}
                  alt={researchImg.description}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  data-ai-hint={researchImg.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
