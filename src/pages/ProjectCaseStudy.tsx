import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { CaseStudyHero } from '../components/case-study/CaseStudyHero';
import { CaseStudyOverview } from '../components/case-study/CaseStudyOverview';
import { CaseStudyFeatures } from '../components/case-study/CaseStudyFeatures';
import { CaseStudyChallenges } from '../components/case-study/CaseStudyChallenges';
import { CaseStudyProcess } from '../components/case-study/CaseStudyProcess';
import { CaseStudyCTA } from '../components/case-study/CaseStudyCTA';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export function ProjectCaseStudy() {
  const { id } = useParams();
  const project = caseStudies.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0C0C0C] flex flex-col items-center justify-center text-[#D7E2EA]">
        <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
        <Link to="/" className="flex items-center gap-2 text-[#D7E2EA]/70 hover:text-[#D7E2EA]">
          <ArrowLeft size={20} />
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="main-wrapper font-sans antialiased text-[#D7E2EA] bg-[#0C0C0C] selection:bg-[#BE4C00] selection:text-white w-full flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full p-6 md:p-10 z-50 pointer-events-none">
        <Link to="/" className="inline-flex items-center gap-2 text-[#D7E2EA]/70 hover:text-[#D7E2EA] font-medium uppercase tracking-wider transition-colors pointer-events-auto bg-[#0C0C0C]/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/[0.05]">
          <ArrowLeft size={16} />
          Home
        </Link>
      </div>
      
      <CaseStudyHero project={project} />
      <CaseStudyOverview project={project} />
      <CaseStudyFeatures project={project} />
      <CaseStudyChallenges project={project} />
      <CaseStudyProcess project={project} />
      <CaseStudyCTA project={project} />
    </div>
  );
}
