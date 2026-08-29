import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LiveProjectButton } from './LiveProjectButton';
import { caseStudies } from '../data/caseStudies';
import homeImage from '../assets/home.png';
import smallImage1 from '../assets/s1.png';
import smallImage2 from '../assets/s2.png';
import homeImage1 from '../assets/home1.png';
import smallImage111 from '../assets/sss1.png';
import smallImage222 from '../assets/sss2.png';
import h1 from '../assets/h1.png';
import small from '../assets/ss1.png';
import small2 from '../assets/ss2.png';
import len from '../assets/l1.png';
import len2 from '../assets/l2.png';
import len3 from '../assets/l3.png';
import sy1 from '../assets/sy1.png';
import sy2 from '../assets/ss22.png';
import ss12 from '../assets/ss33.png';

const projects = [
  {
    id: "shopease",
    num: "01",
    label: "Client",
    name: "Shopease",
    url: "https://shopeasec.netlify.app/",
    images: {
      col1_1: smallImage1,
      col1_2: smallImage2,
      col2: homeImage
    }
  },
  {
    id: "insurance-chat",
    num: "02",
    label: "Personal",
    name: "insurance chat",
    url: "https://insurance-chat.ramsr3741.workers.dev/",
    images: {
      col1_1: small,
      col1_2: small2,
      col2: h1
    }
  },
  {
    id: "nutrivigil-advisor",
    num: "03",
    label: "Client",
    name: "nutrivigil advisor",
    url: "https://elaborate-cupcake-a346d5.netlify.app/",
    images: {
      col1_1: smallImage111,
      col1_2: smallImage222,
      col2: homeImage1
    }
  },
  {
    id: "Lenoraa",
    num: "04",
    label: "Client",
    name: "Lenoraa",
    url: "https://leno-raa-zeta.vercel.app/",
    images: {
      col1_1: len2,
      col1_2: len3,
      col2: len
    }
  },
  {
    id: "syncrole",
    num: "05",
    label: "personal",
    name: "syncrole",
    url: "https://syncrole.vercel.app/",
    images: {
      col1_1: sy2,
      col1_2: ss12,
      col2: sy1
    }
  }
];

const ProjectCard = ({ project, index, progress, targetScale }: { project: any, index: number, progress: MotionValue<number>, targetScale: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use progress to scale down cards
  const scale = useTransform(progress, [index * 0.33, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85dvh] flex items-center justify-center sticky top-[6rem] md:top-[8rem]" style={{ paddingTop: `${index * 28}px` }}>
      <motion.div
        style={{ scale, transformOrigin: 'top' }}
        className="w-full max-w-7xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 shadow-2xl h-[calc(85dvh-2rem)] overflow-hidden"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <span className="text-white font-black text-[clamp(2rem,6vw,80px)] leading-none tracking-tighter">{project.num}</span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] opacity-60 text-xs sm:text-sm uppercase tracking-widest">{project.label}</span>
              <span className="text-white font-medium uppercase text-[clamp(1.2rem,3vw,2.5rem)] leading-tight">{project.name}</span>
              {/* Tech stack & quick features (sourced from caseStudies when available) */}
              {(() => {
                const study = caseStudies.find(s => s.id === project.id);
                if (!study) return null;
                return (
                  <div className="mt-2 hidden sm:flex sm:flex-wrap sm:gap-2">
                    {study.techStack.slice(0, 6).map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/[0.03] border border-white/[0.04] text-[#D7E2EA]">{t}</span>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <Link to={`/projects/${project.id}`} className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/[0.2] text-[#D7E2EA] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/[0.1] transition-colors whitespace-nowrap inline-flex items-center justify-center min-h-[44px]">
              View Case Study
            </Link>
            <LiveProjectButton url={project.url} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 h-full flex-1 overflow-hidden">
          <div className="hidden sm:flex flex-col gap-4 sm:gap-6 w-full sm:w-[40%] h-full shrink-0">
            <img src={project.images.col1_1} alt="Project image" className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]" style={{ height: 'clamp(130px, 16vw, 230px)' }} />
            <img src={project.images.col1_2} alt="Project image" className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] flex-1 min-h-0" />
          </div>
          <div className="w-full sm:w-[60%] h-full shrink-0">
            <img src={project.images.col2} alt="Project image main" className="w-full h-full object-cover rounded-[24px] sm:rounded-[40px] md:rounded-[50px]" />
            {/* Small features summary */}
            <div className="mt-3 hidden md:block">
              {(() => {
                const study = caseStudies.find(s => s.id === project.id);
                if (!study) return null;
                return (
                  <p className="text-sm text-[#D7E2EA]/80">
                    {study.keyFeatures.slice(0,2).join(' • ')} • {study.techStack.slice(0,3).join(', ')}
                  </p>
                );
              })()}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 w-full pt-20 pb-[15dvh]">
      <div className="px-5 sm:px-8 md:px-10 mb-10 md:mb-16">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
          Project
        </h2>
      </div>

      <div ref={container} className="px-5 sm:px-8 md:px-10 relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <ProjectCard
              key={i}
              index={i}
              project={project}
              progress={scrollYProgress}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
