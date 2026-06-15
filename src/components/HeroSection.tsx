
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

      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center text-[#D7E2EA] font-medium uppercase tracking-wider text-[11px] sm:text-xs md:text-sm lg:text-base px-6 md:px-10 pt-6 md:pt-8 relative z-20 w-full gap-2 sm:gap-4 md:gap-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
        <a href="#profile" className="hover:opacity-70 transition-opacity duration-200 py-3 px-2 -mx-2">Profile</a>
        <a href="#about" className="hover:opacity-70 transition-opacity duration-200 py-3 px-2 -mx-2">About</a>
        <a href="#experience" className="hover:opacity-70 transition-opacity duration-200 py-3 px-2 -mx-2">Experience</a>
        <a href="#projects" className="hover:opacity-70 transition-opacity duration-200 py-3 px-2 -mx-2">Projects</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity duration-200 py-3 px-2 -mx-2">Contact</a>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center overflow-hidden w-full relative z-20">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 text-center">
            Hi, i&apos;m ram
          </h1>
        </FadeIn>
        <h2 className="sr-only">
  Vemula Ram Ganesh Frontend Developer Portfolio
</h2>
        <FadeIn delay={0.25} y={40} className="w-full mt-4 flex justify-center text-center px-4">
          <p className="text-[#D7E2EA] font-medium text-[clamp(1rem,2vw,1.5rem)] tracking-widest uppercase opacity-80">
            Frontend Developer | UI Animator | React Developer
          </p>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20 w-full">
        <FadeIn delay={0.35} y={20} className="max-w-[180px] sm:max-w-[260px] md:max-w-[320px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.9rem,1.4vw,1.5rem)]">
            I am Vemula Ram Ganesh,a Frontend Developer and B.Tech Computer Science student passionate about building modern web applications using React, TypeScript, JavaScript and Tailwind CSS.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
