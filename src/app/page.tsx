import { Navbar } from '@/components/portfolio/Navbar';
import { Hero } from '@/components/portfolio/Hero';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Research } from '@/components/portfolio/Research';
import { Accomplishments } from '@/components/portfolio/OtherSections';
import { AIAssistant } from '@/components/portfolio/AIAssistant';
import { Footer } from '@/components/portfolio/Footer';
import { SocialSidebar } from '@/components/portfolio/SocialSidebar';
import Particles from '@/components/portfolio/Particles';

const PORTFOLIO_CONTENT = `
Harshitha Manneri is a Computer Science undergraduate with a CGPA of 9.37.
She specializes in AI Systems Engineer and Full-Stack Development.
Core skills include AI, ML, Deep Learning, PyTorch, TensorFlow, React.js, Next.js, AWS, OCI Gen AI, and Salesforce AI.
Featured projects: AI Neural Assistant (Python, PyTorch), Scalable CRM (Next.js, Node.js).
Research: Facial Emotion Recognition Using AI for Mental Wellness, focusing on high-accuracy real-time detection.
Certifications: AWS Cloud Practitioner, OCI Gen AI, Salesforce AI Associate.
Location: Hyderabad, India. 
Accomplishments: Top 5% of Department, Winner of Regional Hackathons, Dean's List.
Mission: Specialized in AI-driven systems and scalable software solutions.
`;

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Dense High-Performance Cosmic Background */}
      <div className="fixed inset-0 -z-20 pointer-events-none w-full h-full bg-black">
        <Particles
          particleColors={["#ffffff", "#00FFFF", "#A020F0"]}
          particleCount={250}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={160}
          sizeRandomness={2.0}
          moveParticlesOnHover
          particleHoverFactor={0.4}
          alphaParticles={true}
          disableRotation={false}
          pixelRatio={2}
        />
      </div>
      
      <Navbar />
      <SocialSidebar />
      
      <Hero />
      
      <div id="summary" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold">The Vision</h2>
            <p className="text-4xl md:text-6xl font-headline font-bold leading-[1.1] text-white">
              Engineering <span className="gradient-text-cyan">Intelligence</span> for the <span className="gradient-text-purple">Future</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { label: 'Academic Standing', value: '9.37 CGPA' },
              { label: 'Core Projects', value: '15+ Built' },
              { label: 'Industry Credentials', value: '10+ Certs' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-10 rounded-[2rem] border-white/5">
                <p className="text-muted-foreground uppercase text-[9px] font-bold tracking-[0.2em] mb-3">{stat.label}</p>
                <p className="text-4xl font-headline font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Skills />
      
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <Projects />
      </div>
      
      <Research />
      
      <AIAssistant portfolioContent={PORTFOLIO_CONTENT} />
      
      <Accomplishments />
      
      <Footer />
    </main>
  );
}