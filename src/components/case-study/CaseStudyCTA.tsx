import { FadeIn } from '../FadeIn';
import type { CaseStudyData } from '../../data/caseStudies';
import { ExternalLink, Code, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CaseStudyCTA({ project }: { project: CaseStudyData }) {
  return (
    <section className="py-24 px-6 md:px-10 relative z-20 w-full max-w-5xl mx-auto border-t border-white/[0.05] flex flex-col items-center text-center">
      <FadeIn y={20}>
        <h2 className="text-[#D7E2EA] font-bold text-4xl md:text-6xl uppercase tracking-tight mb-8">Ready to see more?</h2>
      </FadeIn>
      
      <FadeIn delay={0.1} y={20}>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#D7E2EA] text-[#0C0C0C] px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300">
            <ExternalLink size={20} />
            Live Demo
          </a>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-transparent border border-white/[0.2] text-[#D7E2EA] px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/[0.1] hover:scale-105 transition-all duration-300">
              <Code size={20} />
              Source Code
            </a>
          )}
        </div>
      </FadeIn>

      <FadeIn delay={0.2} y={20}>
        <Link to="/" className="flex items-center gap-2 text-[#D7E2EA]/70 hover:text-[#D7E2EA] font-medium uppercase tracking-wider transition-colors">
          <ArrowLeft size={20} />
          Back To Portfolio
        </Link>
      </FadeIn>
    </section>
  );
}
