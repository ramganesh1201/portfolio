import { FadeIn } from '../FadeIn';
import type { CaseStudyData } from '../../data/caseStudies';

export function CaseStudyProcess({ project }: { project: CaseStudyData }) {
  return (
    <section className="py-16 px-6 md:px-10 relative z-20 w-full max-w-5xl mx-auto border-t border-white/[0.05]">
      <FadeIn y={20}>
        <h2 className="text-[#D7E2EA] font-bold text-3xl md:text-4xl uppercase tracking-wider mb-12">Development Process</h2>
      </FadeIn>
      
      <div className="relative border-l border-white/[0.1] ml-4 md:ml-6 space-y-12 pb-8">
        {project.developmentProcess.map((step, index) => (
          <FadeIn key={index} delay={index * 0.1} y={20}>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-4 h-4 rounded-full bg-[#D7E2EA] -left-[9px] top-1.5 shadow-[0_0_10px_rgba(215,226,234,0.5)]" />
              <h3 className="text-xl md:text-2xl font-bold text-[#D7E2EA] mb-2">{step.phase}</h3>
              <p className="text-[#D7E2EA]/80 leading-relaxed text-lg">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
