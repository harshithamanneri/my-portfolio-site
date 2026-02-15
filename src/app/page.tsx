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
