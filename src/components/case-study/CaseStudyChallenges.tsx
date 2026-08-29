import { FadeIn } from '../FadeIn';
import type { CaseStudyData } from '../../data/caseStudies';

export function CaseStudyChallenges({ project }: { project: CaseStudyData }) {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 relative z-20 w-full max-w-5xl mx-auto border-t border-white/[0.05]">
      <FadeIn y={20}>
        <h2 className="text-[#D7E2EA] font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider mb-8 sm:mb-12">Challenges & Solutions</h2>
      </FadeIn>
      
      <div className="space-y-6 sm:space-y-8">
        {project.challenges.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1} y={20}>
            <div className="bg-[#0C0C0C] border border-white/[0.1] p-6 sm:p-8 md:p-10 rounded-[30px] flex flex-col md:flex-row gap-6 sm:gap-8">
              <div className="flex-1">
                <h3 className="text-[#D7E2EA]/50 text-sm font-semibold uppercase tracking-widest mb-3">Challenge</h3>
                <p className="text-[#D7E2EA] text-lg md:text-xl font-medium leading-relaxed">{item.challenge}</p>
              </div>
              <div className="w-px bg-white/[0.1] hidden md:block" />
              <div className="h-px bg-white/[0.1] md:hidden w-full" />
              <div className="flex-1">
                <h3 className="text-emerald-400/70 text-sm font-semibold uppercase tracking-widest mb-3">Solution</h3>
                <p className="text-[#D7E2EA]/80 leading-relaxed text-lg">{item.solution}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
