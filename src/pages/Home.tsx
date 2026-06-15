import { HeroSection } from '../components/HeroSection';
import { ProfessionalProfileSection } from '../components/ProfessionalProfileSection';
import { MarqueeSection } from '../components/MarqueeSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';

export function Home() {
  return (
    <div className="main-wrapper font-sans antialiased text-[#D7E2EA] bg-[#0C0C0C] selection:bg-[#BE4C00] selection:text-white w-full flex flex-col">
      <HeroSection />
      <ProfessionalProfileSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
