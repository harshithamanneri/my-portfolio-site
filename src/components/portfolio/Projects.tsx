"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const featuredProjects = [
  {
    id: 'project-ai',
    title: 'AI Neural Assistant',
    description: 'A deep learning powered assistant focused on real-time task automation and cognitive data analysis.',
    tags: ['Python', 'PyTorch', 'FastAPI'],
    link: '#',
    github: '#'
  },
  {
    id: 'project-fullstack',
    title: 'Enterprise Scalable CRM',
    description: 'Cloud-integrated full-stack application built for high-performance data management and visualization.',
    tags: ['Next.js', 'GCP', 'Node.js'],
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => {
            const imgData = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <div key={project.id} className="group glass-card rounded-3xl overflow-hidden">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  {imgData && (
                    <Image
                      src={imgData.imageUrl}
                      alt={imgData.description}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      data-ai-hint={imgData.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/10 backdrop-blur-md border-white/10 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-2xl font-headline font-bold">{project.title}</h4>
                    <div className="flex gap-3">
                      <a href={project.github} className="p-2 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.link} className="p-2 rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
