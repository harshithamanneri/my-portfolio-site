
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const featuredProjects = [
  {
    id: 'project-diarization',
    title: 'Target Speaker Diarization System',
    description: 'Developed a deep learning–based system to isolate and identify specific speakers from multi-speaker audio recordings using speaker embeddings and similarity-based scoring. Improved diarization accuracy through advanced audio preprocessing and model optimization techniques.',
    tags: ['Python', 'Deep Learning', 'Audio Processing'],
    link: 'https://github.com/harshithamanneri/target-diarization-project'
  },
  {
    id: 'project-stylehub',
    title: 'StyleHub – Fashion Recommendation Platform',
    description: 'Built a full-stack fashion recommendation platform enabling personalized style exploration. Designed responsive UI components using React.js and implemented backend APIs with database integration for user preferences and product data.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    link: 'https://github.com/harshithamanneri/stylehub'
  },
  {
    id: 'project-log-analysis',
    title: 'AI-Powered Log Analysis System',
    description: 'Developed an AI-powered system to automatically process, analyze, and summarize large-scale log files. Implemented intelligent event detection to identify failures, root causes, and generate structured timelines with actionable recommendations.',
    tags: ['Python', 'NLP', 'AIOps', 'DevOps'],
    link: 'https://github.com/kmkvamsi/LogSage-AI146'
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
              <div 
                key={project.id} 
                className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full border-white/5 hover:border-primary/40 hover:scale-[1.02] hover:shadow-[0_0_30px_-10px_rgba(124,58,237,0.3)] transition-all duration-500 relative"
              >
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden">
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
                  
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-black/40 backdrop-blur-md border-white/10 text-[10px] py-0 px-2 font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <h4 className="text-xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  {project.link !== '#' && (
                    <div className="pt-4 mt-auto">
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="w-full rounded-xl bg-white/5 border-white/10 hover:bg-primary hover:border-primary hover:text-white transition-all group/btn"
                      >
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          View Repository
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
