import { FadeIn } from "./FadeIn";

const highlights = [
  {
    value: "Build",
    title: "Build Products",
    description:
      "Turning concepts into functional, responsive web applications built for real-world usage.",
  },
  {
    value: "Engineer",
    title: "Engineer Experiences",
    description:
      "Crafting polished, accessible interfaces backed by state management and clean application architecture.",
  },
  {
    value: "Connect",
    title: "Connect Systems",
    description:
      "Integrating backend APIs, authentication, databases, and third-party services end-to-end.",
  },
  {
    value: "Intelligence",
    title: "Add Intelligence",
    description:
      "Integrating AI capabilities to solve concrete user problems and deliver smart product features.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="experience"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 relative z-10 w-full"
    >
      <FadeIn delay={0} y={30}>
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-[#0C0C0C] font-black uppercase text-[clamp(2.5rem,8vw,7rem)] tracking-tight leading-none">
            Professional Highlights
          </h2>

          <p className="mt-6 text-[#0C0C0C]/60 max-w-2xl mx-auto text-base md:text-lg">
            Bringing ideas to life through product thinking, clean frontend engineering, robust backend logic, and AI integrations.
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
                p-6
                sm:p-8
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