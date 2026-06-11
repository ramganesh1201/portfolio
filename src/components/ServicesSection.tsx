
import { FadeIn } from './FadeIn';

const services = [
  {
    num: "2026",
    title: "Build an automation workflow",
    desc: "Launched a premium automation workflow website showcasing advanced UI techniques and motion design."
  },
  {
    num: "2025",
    title: "First Interactive UI",
    desc: "Created a dynamic portfolio homepage with custom cursor, scroll animations, and interactive elements."
  },
  {
    num: "2024",
    title: "Frontend Development Journey",
    desc: "Focused on modern UI systems, responsive architecture, motion design, and performance optimization."
  },
  {
    num: "2023",
    title: "Advanced UI Projects",
    desc: "Built interactive web interfaces including portfolio systems and advanced e-commerce UI prototypes."
  },
  {
    num: "2022",
    title: "Started B.Tech",
    desc: "Began academic foundation in Computer Science while exploring frontend development deeply."
  }
];

export function ServicesSection() {
  return (
    <section id="experience" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 w-full">
      <FadeIn delay={0} y={30}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight">
          Experience
        </h2>
      </FadeIn>
      
      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 0.1} y={20} className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 border-b-[1px] border-[rgba(12,12,12,0.15)] last:border-b-0 gap-6 md:gap-12 lg:gap-20">
            <div className="text-[#0C0C0C] font-black text-[clamp(2rem,6vw,90px)] leading-none md:w-[240px] lg:w-[340px] shrink-0 tracking-tighter">
              {s.num}
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="font-medium uppercase text-[clamp(1.1rem,1.8vw,1.8rem)] text-[#0C0C0C]">
                {s.title}
              </h3>
              <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C] opacity-60">
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
