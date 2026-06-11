
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen relative px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden w-full">
      
      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon icon" className="w-full h-auto" />
      </FadeIn>
      
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D object" className="w-full h-auto" />
      </FadeIn>
      
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego icon" className="w-full h-auto" />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" className="w-full h-auto" />
      </FadeIn>

      <div className="flex flex-col items-center z-10 w-full relative">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>
        
        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col items-center w-full px-4">
          <FadeIn delay={0.1} y={20}>
             <p className="text-[#D7E2EA] text-center font-bold uppercase tracking-widest text-sm md:text-xl mb-6 max-w-2xl">
               I design and build immersive, performance-focused web experiences.
             </p>
          </FadeIn>
          <AnimatedText 
            text="I'm a 2nd Year B.Tech student focused on frontend architecture, motion design, and interactive UI systems. I combine clean engineering with refined visual execution."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[660px] text-[clamp(1rem,2vw,1.35rem)]"
          />
          
          <FadeIn delay={0.2} y={20} className="w-full mt-12 md:mt-16 border-t border-[rgba(215,226,234,0.1)] pt-10">
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-black text-white">2+</span>
                <span className="text-[#D7E2EA] uppercase text-xs md:text-sm tracking-widest mt-2 opacity-70">Years Learning</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-black text-white">10+</span>
                <span className="text-[#D7E2EA] uppercase text-xs md:text-sm tracking-widest mt-2 opacity-70">Projects Built</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-black text-white">100%</span>
                <span className="text-[#D7E2EA] uppercase text-xs md:text-sm tracking-widest mt-2 opacity-70">Performance Focus</span>
              </div>
            </div>
          </FadeIn>

          <div className="mt-16 sm:mt-20 md:mt-24">
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  );
}
