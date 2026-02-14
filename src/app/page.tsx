import { StarBackground } from '@/components/portfolio/StarBackground';
import { Navbar } from '@/components/portfolio/Navbar';
import { Hero } from '@/components/portfolio/Hero';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Research } from '@/components/portfolio/Research';
import { Accomplishments } from '@/components/portfolio/OtherSections';
import { AIAssistant } from '@/components/portfolio/AIAssistant';
import { Footer } from '@/components/portfolio/Footer';

// This would ideally be fetched or imported from a central config
const PORTFOLIO_CONTENT = `
Harshitha Manneri is a Computer Science undergraduate with a CGPA of 9.37.
She specializes in AI Systems Engineer and Full-Stack Development.
Core skills include AI, ML, Deep Learning, PyTorch, TensorFlow, React.js, Next.js, AWS, OCI Gen AI, and Salesforce AI.
Featured projects: AI Neural Assistant (Python, PyTorch), Scalable CRM (Next.js, Node.js).
Research: Facial Emotion Recognition Using AI for Mental Wellness, focusing on high-accuracy real-time detection.
Certifications: AWS Cloud Practitioner, OCI Gen AI, Salesforce AI Associate.
Location: Hyderabad, India. 
Accomplishments: Top 5% of Department, Winner of Regional Hackathons, Dean's List.
Volunteer work: Mentoring 50+ students in basic Python and ML.
Mission: Specialized in AI-driven systems and scalable software solutions.
`;

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarBackground />
      <Navbar />
      
      <Hero />
      
      <div id="summary" className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Mission Statement</h2>
            <p className="text-3xl md:text-5xl font-headline font-medium italic text-white/90 leading-tight">
              "To bridge the frontier of <span className="text-accent">Artificial Intelligence</span> with robust engineering, creating systems that solve real-world complexities with <span className="text-primary">elegance and scale</span>."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              { label: 'CGPA', value: '9.37' },
              { label: 'Projects', value: '15+' },
              { label: 'Certifications', value: '10+' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border-primary/10">
                <p className="text-muted-foreground uppercase text-xs font-bold tracking-widest mb-2">{stat.label}</p>
                <p className="text-4xl font-headline font-bold text-accent">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Skills />
      
      <Projects />
      
      <Research />
      
      <AIAssistant portfolioContent={PORTFOLIO_CONTENT} />
      
      <Accomplishments />
      
      <Footer />
    </main>
  );
}
