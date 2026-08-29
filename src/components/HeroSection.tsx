
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { MeshGradientBackground } from './backgrounds/MeshGradientBackground';
import { ParticleBackground } from './backgrounds/ParticleBackground';
import { CursorSpotlight } from './backgrounds/CursorSpotlight';

export function HeroSection() {
  return (
    <section className="min-h-[100dvh] h-[100dvh] flex flex-col overflow-x-clip relative w-full bg-[#0C0C0C]">
      {/* Premium Background System */}
      <MeshGradientBackground />
      <ParticleBackground />
      <CursorSpotlight />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />

      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center text-[#D7E2EA] font-medium uppercase tracking-wider text-[11px] sm:text-xs md:text-sm lg:text-base px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8 relative z-20 w-full gap-2 sm:gap-4 md:gap-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
        <a href="#profile" className="hover:opacity-70 transition-opacity duration-200 py-3 px-2 -mx-2">Profile</a>
        <a href="#about" className="hover:opacity-70 transition-opacity duration-200 py-3 px-2 -mx-2">About</a>
        <a href="#experience" className="hover:opacity-70 transition-opacity duration-200 py-3 px-2 -mx-2">Experience</a>
        <a href="#projects" className="hover:opacity-70 transition-opacity duration-200 py-3 px-2 -mx-2">Projects</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity duration-200 py-3 px-2 -mx-2">Contact</a>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center items-center overflow-hidden w-full relative z-20">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none break-words w-full text-[13vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 text-center">
            Hi, I&apos;m Ram
          </h1>
        </FadeIn>
        <h2 className="sr-only">Vemula Ram Ganesh — Digital Product Builder</h2>

        <FadeIn delay={0.22} y={40} className="w-full mt-2 flex justify-center text-center px-4">
          <div className="flex flex-col items-center gap-3">
            <p className="text-[#D7E2EA] font-semibold text-[clamp(0.85rem,1.6vw,1.25rem)] tracking-widest uppercase opacity-90">
              Digital Product Builder — Full-Stack · Frontend · AI Products
            </p>
          </div>
        </FadeIn>
      </div>
      <div className="flex justify-center md:justify-between items-end pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10 relative z-20 w-full">
        <FadeIn
  delay={0.35}
  y={20}
  className="hidden md:flex flex-col gap-5"
>
  <div>
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-[#D7E2EA] uppercase tracking-wider">
      Open for Internships
    </span>
  </div>

  <div className="flex items-center gap-10">
    <div>
      <p className="text-[#D7E2EA]/40 uppercase tracking-[0.2em] text-xs mb-2">
        Education
      </p>
      <p className="text-[#D7E2EA] text-base font-medium">
        B.Tech CSE
      </p>
    </div>

    <div className="w-px h-10 bg-white/10" />

    <div>
      <p className="text-[#D7E2EA]/40 uppercase tracking-[0.2em] text-xs mb-2">
        Projects
      </p>
      <p className="text-[#D7E2EA] text-base font-medium">
        10+ Completed
      </p>
    </div>

    <div className="w-px h-10 bg-white/10" />

    <div>
      <p className="text-[#D7E2EA]/40 uppercase tracking-[0.2em] text-xs mb-2">
        Location
      </p>
      <p className="text-[#D7E2EA] text-base font-medium">
        Andhra Pradesh, India
      </p>
    </div>
  </div>
</FadeIn>
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap w-full md:w-auto">
          <FadeIn delay={0.55} y={20}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-3.5 sm:px-4 py-2 rounded-full border border-white/[0.1] text-[#D7E2EA] text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-white/[0.03] transition-all whitespace-nowrap">View Resume</a>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
