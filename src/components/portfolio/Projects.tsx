"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const featuredProjects = [
  {
    id: 'project-diarization',
    title: 'Target Speaker Diarization System',
    description: 'Developed a system to isolate a specific speaker from multi-speaker audio recordings using speaker embeddings and similarity-based scoring. Improved performance through advanced audio preprocessing and model optimization.',
    tags: ['Python', 'Deep Learning', 'Audio Processing'],
    link: '#',
    github: '#'
  },
  {
    id: 'project-stylehub',
    title: 'StyleHub – Fashion Recommendation',
    description: 'Built a full-stack fashion recommendation platform enabling personalized style exploration. Designed responsive UI components with React.js and implemented backend APIs for user preference handling.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    id: 'project-log-analysis',
    title: 'AI-Powered Log Analysis System',
    description: 'Developed an AI-driven system to automatically process large-scale log files. Implemented intelligent summarization to detect failures and root causes, generating structured timelines with actionable insights.',
    tags: ['Python', 'NLP', 'AIOps', 'DevOps'],
    link: '#',
    github: '#'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold">Showcase</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold">Featured <span className="text-primary">Projects</span></h3>
          </div>
          <p className="text-muted-foreground max-w-md">
            A selection of my recent works ranging from complex AI integration to polished full-stack products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => {
            const imgData = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <div key={project.id} className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full border-white/5 hover:border-primary/40 transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  {imgData && (
                    <Image
                      src={imgData.imageUrl}
                      alt={imgData.description}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      data-ai-hint={imgData.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-black/40 backdrop-blur-md border-white/10 text-[10px] py-0 px-2 font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-xl font-headline font-bold text-white group-hover:text-primary transition-colors">{project.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  <div className="pt-4 mt-auto flex gap-3">
                    <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all text-xs font-bold uppercase tracking-wider">
                      <Github className="w-4 h-4" />
                      Repo
                    </a>
                    <a href={project.link} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-primary/20 text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all text-xs font-bold uppercase tracking-wider">
                      <ArrowUpRight className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};