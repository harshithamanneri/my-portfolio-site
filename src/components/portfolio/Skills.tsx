"use client"

import React from 'react';
import { Brain, Server, Layout, Cloud, Database, Cpu } from 'lucide-react';

const skills = [
  {
    category: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6 text-primary" />,
    items: ['Deep Learning (CNNs, RNNs)', 'Computer Vision', 'NLP Systems', 'Audio & Image Processing', 'PyTorch', 'TensorFlow']
  },
  {
    category: 'Backend Development',
    icon: <Server className="w-6 h-6 text-blue-400" />,
    items: ['Java', 'Spring Boot', 'RESTful APIs', 'JWT Authentication', 'Node.js']
  },
  {
    category: 'Full-Stack Development',
    icon: <Layout className="w-6 h-6 text-accent" />,
    items: ['React.js', 'Next.js', 'TypeScript', 'HTML5 & CSS3', 'Tailwind CSS']
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6 text-indigo-400" />,
    items: ['AWS (EC2, S3, Lambda)', 'CloudWatch', 'Docker', 'CI/CD Pipelines']
  },
  {
    category: 'Databases',
    icon: <Database className="w-6 h-6 text-green-400" />,
    items: ['MySQL', 'MongoDB', 'PostgreSQL']
  },
  {
    category: 'Core Computer Science',
    icon: <Cpu className="w-6 h-6 text-amber-400" />,
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-2">
            Professional Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
            Technical <span className="gradient-text-purple">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            AI Systems, Backend Engineering, and Scalable Software Development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              className="glass-card p-8 rounded-[2rem] group hover:scale-[1.02] transition-all duration-300 border-white/5 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary/50 transition-colors shadow-inner">
                {skill.icon}
              </div>
              <h4 className="text-xl font-headline font-bold mb-5 text-white">{skill.category}</h4>
              <ul className="space-y-3 flex-1">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
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
