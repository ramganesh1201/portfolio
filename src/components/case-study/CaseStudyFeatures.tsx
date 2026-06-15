import { FadeIn } from '../FadeIn';
import type { CaseStudyData } from '../../data/caseStudies';
import { CheckCircle2 } from 'lucide-react';

export function CaseStudyFeatures({ project }: { project: CaseStudyData }) {
  return (
    <section className="py-16 px-6 md:px-10 relative z-20 w-full max-w-5xl mx-auto border-t border-white/[0.05]">
      <FadeIn y={20}>
        <h2 className="text-[#D7E2EA] font-bold text-3xl md:text-4xl uppercase tracking-wider mb-12">Key Features</h2>
      </FadeIn>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {project.keyFeatures.map((feature, index) => (
          <FadeIn key={index} delay={index * 0.1} y={20}>
            <div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
              <CheckCircle2 className="text-[#D7E2EA] w-6 h-6 shrink-0 opacity-80" />
              <span className="text-[#D7E2EA] font-medium text-lg">{feature}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
