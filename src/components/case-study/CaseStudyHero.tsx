import { FadeIn } from '../FadeIn';
import { ExternalLink, Code } from 'lucide-react';
import type { CaseStudyData } from '../../data/caseStudies';

export function CaseStudyHero({ project }: { project: CaseStudyData }) {
  return (
    <section className="pt-32 pb-16 px-6 md:px-10 relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
      <FadeIn y={20}>
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-5xl md:text-7xl lg:text-8xl mb-6">
          {project.name}
        </h1>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/80 text-xl md:text-2xl font-medium tracking-wide max-w-3xl mb-10">
          {project.shortDescription}
        </p>
      </FadeIn>
      <FadeIn delay={0.2} y={20}>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-[#D7E2EA] text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.3} y={20}>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#D7E2EA] text-[#0C0C0C] px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300">
            <ExternalLink size={20} />
            Live Demo
          </a>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-transparent border border-white/[0.2] text-[#D7E2EA] px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/[0.1] hover:scale-105 transition-all duration-300">
              <Code size={20} />
              GitHub
            </a>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
