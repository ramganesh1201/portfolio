import { FadeIn } from './FadeIn';
import { Download, ExternalLink } from 'lucide-react';

const technologies = [
  'React', 'TypeScript', 'JavaScript', 'Tailwind CSS',
  'HTML5', 'CSS3', 'Node.js', 'Supabase', 'Git', 'GitHub', 'Vercel'
];

export function ProfessionalProfileSection() {
  return (
    <section id="profile" className="w-full px-6 py-20 md:px-10 lg:py-32 relative z-10 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <FadeIn y={20}>
          <h2 className="text-[#D7E2EA] font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
            Professional Profile
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1} y={20}>
          <p className="text-[#D7E2EA]/70 text-lg md:text-xl font-medium tracking-wide uppercase max-w-2xl mb-12">
            Frontend Developer focused on building modern, responsive, and high-performance web experiences.
          </p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Profile Info Card */}
          <FadeIn delay={0.2} y={20} className="flex-1">
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 backdrop-blur-md shadow-2xl hover:bg-white/[0.03] transition-colors duration-500 h-full flex flex-col justify-between group relative overflow-hidden">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div>
                  <h3 className="text-sm text-[#D7E2EA]/50 uppercase tracking-widest mb-1">Name</h3>
                  <p className="text-xl md:text-2xl font-semibold text-[#D7E2EA]">Ram Ganesh</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-[#D7E2EA]/50 uppercase tracking-widest mb-1">Role</h3>
                  <p className="text-xl md:text-2xl font-semibold text-[#D7E2EA]">Frontend Developer</p>
                </div>

                <div>
                  <h3 className="text-sm text-[#D7E2EA]/50 uppercase tracking-widest mb-1">Education</h3>
                  <p className="text-lg md:text-xl text-[#D7E2EA]">B.Tech Computer Science Engineering</p>
                  <p className="text-[#D7E2EA]/70 mt-1">Seshadri Rao Gudlavalleru Engineering College</p>
                </div>

                <div>
                  <h3 className="text-sm text-[#D7E2EA]/50 uppercase tracking-widest mb-1">Specialization</h3>
                  <p className="text-lg md:text-xl text-[#D7E2EA]">React • TypeScript • Tailwind CSS</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/[0.05] grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                 <div>
                   <h3 className="text-sm text-[#D7E2EA]/50 uppercase tracking-widest mb-1">Availability</h3>
                   <p className="text-[#D7E2EA] font-medium leading-snug">Open for Internships & Freelance Opportunities</p>
                 </div>
                 <div>
                   <h3 className="text-sm text-[#D7E2EA]/50 uppercase tracking-widest mb-1">Projects Built</h3>
                   <p className="text-2xl font-bold text-[#D7E2EA]">10+ Projects</p>
                 </div>
              </div>
            </div>
          </FadeIn>

          {/* Tech & Resume Actions Card */}
          <div className="flex-1 flex flex-col gap-8">
            <FadeIn delay={0.3} y={20} className="flex-1">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 backdrop-blur-md shadow-2xl hover:bg-white/[0.03] transition-colors duration-500 h-full relative overflow-hidden group">
                 {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  <h3 className="text-sm text-[#D7E2EA]/50 uppercase tracking-widest mb-6">Tech Highlights</h3>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech, index) => (
                      <div 
                        key={tech} 
                        className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-[#D7E2EA]/90 text-sm font-medium hover:bg-white/[0.1] hover:-translate-y-1 hover:text-white hover:border-white/[0.2] transition-all duration-300 cursor-default"
                        style={{ transitionDelay: `${index * 15}ms` }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} y={20}>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 backdrop-blur-md shadow-2xl flex flex-col sm:flex-row gap-4 items-center">
                <a 
                  href="/resume.pdf" 
                  download="Vemula-Ram-Ganesh-Resume.pdf"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-[#D7E2EA] text-[#0C0C0C] px-6 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  aria-label="Download Resume"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-transparent border border-white/[0.1] text-[#D7E2EA] px-6 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-white/[0.05] hover:border-white/[0.2] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  aria-label="View Resume in new tab"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Resume</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
