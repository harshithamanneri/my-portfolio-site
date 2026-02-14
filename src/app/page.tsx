import { Navbar } from '@/components/portfolio/Navbar';
import { Hero } from '@/components/portfolio/Hero';
import { Education } from '@/components/portfolio/Education';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Research } from '@/components/portfolio/Research';
import { Accomplishments } from '@/components/portfolio/OtherSections';
import { ContactForm } from '@/components/portfolio/ContactForm';
import { Footer } from '@/components/portfolio/Footer';
import { SocialSidebar } from '@/components/portfolio/SocialSidebar';
import { Languages } from '@/components/portfolio/Languages';
import Particles from '@/components/portfolio/Particles';

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
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-headline font-bold leading-[1.1] text-white">
                Designing Intelligent <span className="gradient-text-cyan">AI Systems</span> for <span className="gradient-text-purple">Real-World Impact</span>.
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
                AI Systems Engineer specializing in Deep Learning, Intelligent Systems, and Scalable Software Architectures.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { label: 'Academic Excellence', value: '9.37 / 10 CGPA' },
              { label: 'AI & Software Projects', value: '15+ Production-Ready Builds' },
              { label: 'Certifications & Research', value: '10+ Industry Credentials' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-10 rounded-[2rem] border-white/5">
                <p className="text-muted-foreground uppercase text-[9px] font-bold tracking-[0.2em] mb-3">{stat.label}</p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-white whitespace-normal">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Education />

      <Languages />

      <Skills />
      
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <Projects />
      </div>
      
      <Research />
      
      <Accomplishments />

      <ContactForm />
      
      <Footer />
    </main>
  );
}