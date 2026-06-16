import { FadeIn } from "./FadeIn";

const highlights = [
  {
    value: "10+",
    title: "Projects Built",
    description:
      "Developed multiple React and TypeScript applications with responsive design and modern frontend architecture.",
  },
  {
    value: "React",
    title: "Frontend Specialization",
    description:
      "Focused on React, TypeScript, reusable components, accessibility, and scalable UI development.",
  },
  {
    value: "95+",
    title: "Performance Focus",
    description:
      "Optimized user experiences through responsive layouts, efficient rendering, and modern best practices.",
  },
  {
    value: "Open",
    title: "Availability",
    description:
      "Available for internships, freelance projects, and entry-level frontend development opportunities.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="experience"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 w-full"
    >
      <FadeIn delay={0} y={30}>
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-[#0C0C0C] font-black uppercase text-[clamp(2.5rem,8vw,7rem)] tracking-tight leading-none">
            Professional Highlights
          </h2>

          <p className="mt-6 text-[#0C0C0C]/60 max-w-2xl mx-auto text-base md:text-lg">
            Building modern, high-performance web experiences with a strong
            focus on usability, scalability, and clean frontend architecture.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {highlights.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1} y={20}>
            <div
              className="
                group
                h-full
                rounded-[28px]
                border
                border-black/10
                bg-gradient-to-br
                from-white
                to-gray-50
                p-8
                md:p-10
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
            >
              <div className="mb-6">
                <span
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    text-white
                    px-5
                    py-2
                    text-sm
                    font-medium
                    tracking-wide
                  "
                >
                  {item.value}
                </span>
              </div>

              <h3
                className="
                  text-[#0C0C0C]
                  text-2xl
                  md:text-3xl
                  font-bold
                  mb-4
                  tracking-tight
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-[#0C0C0C]/65
                  leading-relaxed
                  text-base
                  md:text-lg
                "
              >
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}