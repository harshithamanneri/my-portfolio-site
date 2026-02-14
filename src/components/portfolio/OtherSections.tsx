"use client"

import React from 'react';
import { Award, GraduationCap, Heart, CheckCircle, ExternalLink } from 'lucide-react';

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: '2024' },
  { name: 'OCI Gen AI Professional', issuer: 'Oracle', date: '2024' },
  { name: 'Salesforce AI Associate', issuer: 'Salesforce', date: '2023' },
  { name: 'Google Cloud Data Engineering', issuer: 'Google', date: '2023' }
];

const achievements = [
  'CGPA: 9.37 - Top 5% of Department',
  'Winner of Regional AI Hackathon 2024',
  'Dean\'s List for 6 Consecutive Semesters',
  'Contributor to 3 Open Source AI Repositories'
];

export const Accomplishments = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Certifications */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-accent" />
            <h3 className="text-3xl font-headline font-bold">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex justify-between items-center group">
                <div>
                  <h4 className="font-bold text-white/90 group-hover:text-accent transition-colors">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-primary">{cert.date}</p>
                  <ExternalLink className="w-4 h-4 text-white/20 mt-2 ml-auto group-hover:text-accent transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accomplishments & Education */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-3xl font-headline font-bold">Achievements</h3>
          </div>
          <div className="glass-card p-8 rounded-3xl space-y-6">
            {achievements.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-3 pt-8">
            <Heart className="w-6 h-6 text-red-400" />
            <h3 className="text-3xl font-headline font-bold">Volunteer Work</h3>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <p className="text-muted-foreground italic">"Mentoring junior undergraduates in Python and Deep Learning concepts, helping over 50+ students bridge their technical gaps."</p>
          </div>
        </div>
      </div>
    </section>
  );
};
