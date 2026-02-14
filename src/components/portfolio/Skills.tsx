"use client"

import React from 'react';
import { Brain, Code2, Cloud, Database } from 'lucide-react';

const skills = [
  {
    category: 'AI & Intelligent Systems',
    icon: <Brain className="w-6 h-6 text-primary" />,
    items: ['Deep Learning', 'Deep Neural Architectures', 'NLP Systems', 'Computer Vision', 'PyTorch', 'TensorFlow']
  },
  {
    category: 'Cloud & Infrastructure',
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    items: ['AWS', 'Google Cloud', 'OCI Gen AI', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    category: 'Full-Stack Engineering',
    icon: <Code2 className="w-6 h-6 text-accent" />,
    items: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Redux']
  },
  {
    category: 'Data & Engineering Tools',
    icon: <Database className="w-6 h-6 text-green-400" />,
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'GraphQL', 'Git/GitHub', 'Agile Methodologies']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">Technical <span className="text-primary">Expertise</span></h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Designing scalable AI systems powered by Deep Learning and production-grade engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              className="glass-card p-8 rounded-2xl group hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary/50 transition-colors">
                {skill.icon}
              </div>
              <h4 className="text-xl font-headline font-bold mb-4">{skill.category}</h4>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
