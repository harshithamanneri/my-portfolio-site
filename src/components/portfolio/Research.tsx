"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sparkles, CheckCircle2 } from 'lucide-react';

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
                Ongoing Research Work
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-bold">
                Facial Emotion Recognition for <span className="text-accent">Enhancing Mental Wellness</span>
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Authoring a research paper focused on applying deep learning models, including Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs), for facial emotion classification. The research aims to enable early detection of stress, anxiety, and depression through intelligent computer vision techniques and real-time emotion analysis.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Designing and training deep learning architectures for multi-class emotion recognition.',
                  'Implementing computer vision pipelines for facial feature extraction and analysis.',
                  'Exploring early psychological risk detection using AI-driven insights.',
                  'Evaluating model performance and generalization across varied datasets.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
