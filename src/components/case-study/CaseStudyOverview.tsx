import { FadeIn } from '../FadeIn';
import type { CaseStudyData } from '../../data/caseStudies';

export function CaseStudyOverview({ project }: { project: CaseStudyData }) {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 relative z-20 w-full max-w-5xl mx-auto border-t border-white/[0.05]">
      <FadeIn y={20}>
        <h2 className="text-[#D7E2EA] font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider mb-8 sm:mb-12">Project Overview</h2>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        <FadeIn delay={0.1} y={20} className="flex flex-col gap-3">
          <h3 className="text-[#D7E2EA]/50 text-sm font-semibold uppercase tracking-widest">What it does</h3>
          <p className="text-[#D7E2EA]/90 leading-relaxed">{project.overview.whatItDoes}</p>
        </FadeIn>
        
        <FadeIn delay={0.2} y={20} className="flex flex-col gap-3">
          <h3 className="text-[#D7E2EA]/50 text-sm font-semibold uppercase tracking-widest">Purpose</h3>
          <p className="text-[#D7E2EA]/90 leading-relaxed">{project.overview.purpose}</p>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="flex flex-col gap-3">
          <h3 className="text-[#D7E2EA]/50 text-sm font-semibold uppercase tracking-widest">Target Users</h3>
          <p className="text-[#D7E2EA]/90 leading-relaxed">{project.overview.targetUsers}</p>
        </FadeIn>
      </div>

      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-white/[0.02] border border-white/[0.05] rounded-[30px] p-6 sm:p-8 md:p-12 backdrop-blur-sm">
        <FadeIn delay={0.4} y={20}>
          <h3 className="text-[#D7E2EA] font-semibold text-2xl uppercase tracking-wider mb-6">Problem Statement</h3>
          <p className="text-[#D7E2EA]/80 leading-relaxed text-lg">{project.problemStatement}</p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <h3 className="text-[#D7E2EA] font-semibold text-2xl uppercase tracking-wider mb-6">Goals</h3>
          <ul className="space-y-4">
            {project.goals.map((goal, index) => (
              <li key={index} className="flex items-start gap-3 text-[#D7E2EA]/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="leading-relaxed">{goal}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
