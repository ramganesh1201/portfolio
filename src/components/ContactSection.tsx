import { useState } from "react";
import emailjs from "@emailjs/browser";
import { supabase } from "../lib/supabase";
import { FadeIn } from "./FadeIn";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);

  const formData = new FormData(e.currentTarget);

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const details = formData.get("details") as string;

  // Save to Supabase
  const { error } = await supabase
    .from("contacts")
    .insert([
      {
        name,
        email,
        details,
      },
    ]);

  if (error) {
    setLoading(false);
    alert("Failed to send message.");
    console.error(error);
    return;
  }

  // Send email notification
  try {
    await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name,
    email,
    details,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

    alert("Message sent successfully!");
    e.currentTarget.reset();
  } catch (err) {
    console.error(err);
    alert("Saved in database but email notification failed.");
  }

  setLoading(false);
};
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 w-full"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(190,76,0,0.22)_0%,rgba(190,76,0,0)_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(215,226,234,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(215,226,234,0.05)_1px,transparent_1px)] bg-[size:96px_96px] opacity-[0.28]" />
      </div>

      {/* Only one main container */}
      <div className="max-w-[1400px] mx-auto relative">
        {/* SECTION 1 */}
        <div>
          <FadeIn delay={0} y={20}>
            <h2 className="text-center font-black uppercase tracking-tight text-white text-[clamp(2.4rem,5.6vw,4.4rem)] leading-[1.02]">
              LET&apos;S BUILD SOMETHING AMAZING
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} y={20}>
            <p className="mx-auto mt-6 text-center text-[#D7E2EA] opacity-80 text-[clamp(1rem,1.7vw,1.35rem)] leading-relaxed max-w-3xl">
              Have a project, idea, or collaboration in mind?
              <br />
              Let&apos;s create something memorable together.
            </p>
          </FadeIn>
        </div>

        {/* SECTION 2 */}
        <FadeIn delay={0.3} y={30}>
          <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-16 items-start">
            {/* LEFT */}
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center rounded-full border border-[rgba(215,226,234,0.18)] bg-[rgba(12,12,12,0.6)] px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-[#BE4C00] shadow-[0_0_20px_rgba(190,76,0,0.55)] mr-3" />
                  <span className="text-[#D7E2EA] uppercase tracking-widest text-[0.75rem] sm:text-xs font-medium">
                    Available for freelance
                  </span>
                </div>
              </div>

              <div className="space-y-7">
                <div>
                  <div className="text-[#BE4C00] uppercase tracking-widest text-xs font-semibold">Location</div>
                  <div className="mt-2 text-white font-medium text-[1.05rem]">India</div>
                </div>

                <div>
                  <div className="text-[#BE4C00] uppercase tracking-widest text-xs font-semibold">Email</div>
                  <a
                    href="mailto:your@email.com"
                    className="mt-2 inline-flex items-center gap-2 text-[#D7E2EA] hover:text-white transition-colors font-medium"
                  >
                    sample@email.com
                    <span aria-hidden className="text-[#BE4C00]">↗</span>
                  </a>
                </div>

                <div>
                  <div className="text-[#BE4C00] uppercase tracking-widest text-xs font-semibold">Phone</div>
                  <a
                    href="tel:+91XXXXXXXXX"
                    className="mt-2 inline-flex items-center gap-2 text-[#D7E2EA] hover:text-white transition-colors font-medium"
                  >
                    +91 XXXXX XXXXX
                    <span aria-hidden className="text-[#BE4C00]">↗</span>
                  </a>
                </div>

                <div>
                  <div className="text-[#BE4C00] uppercase tracking-widest text-xs font-semibold">Response time</div>
                  <div className="mt-2 text-[#D7E2EA] opacity-90 font-medium">Within 24 hours</div>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div>
              <form
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="contact-name" className="block text-[#D7E2EA] uppercase tracking-widest text-xs font-semibold">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="mt-3 w-full rounded-xl bg-[#0C0C0C] border border-[rgba(215,226,234,0.16)] px-4 py-3 text-white placeholder:text-[rgba(215,226,234,0.45)] focus:outline-none focus:ring-2 focus:ring-[#BE4C00] focus:border-transparent transition"
                    placeholder=" name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[#D7E2EA] uppercase tracking-widest text-xs font-semibold">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-3 w-full rounded-xl bg-[#0C0C0C] border border-[rgba(215,226,234,0.16)] px-4 py-3 text-white placeholder:text-[rgba(215,226,234,0.45)] focus:outline-none focus:ring-2 focus:ring-[#BE4C00] focus:border-transparent transition"
                    placeholder="sample@domain.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-details" className="block text-[#D7E2EA] uppercase tracking-widest text-xs font-semibold">
                    Project Details
                  </label>
                  <textarea
                    id="contact-details"
                    name="details"
                    required
                    rows={6}
                    className="mt-3 w-full resize-none rounded-xl bg-[#0C0C0C] border border-[rgba(215,226,234,0.16)] px-4 py-3 text-white placeholder:text-[rgba(215,226,234,0.45)] focus:outline-none focus:ring-2 focus:ring-[#BE4C00] focus:border-transparent transition"
                    placeholder="Tell me what you&apos;re building..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white px-8 py-4 text-sm relative overflow-hidden group"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                    outline: '2px solid white',
                    outlineOffset: '-3px'
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <span aria-hidden className="ml-3 text-[#BE4C00] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        'radial-gradient(700px circle at var(--x,50%) var(--y,50%), rgba(190,76,0,0.35), rgba(190,76,0,0) 45%)'
                    }}
                  />
                </button>
              </form>
            </div>
          </div>
        </FadeIn>

        {/* SECTION 3 */}
        <FadeIn delay={0.5} y={20}>
          <div className="mt-18 sm:mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-[#D7E2EA] uppercase tracking-widest text-xs font-semibold">
                Social
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
                <a
                  href="https://github.com/dragon143-crypto"
                  className="group relative text-white/90 hover:text-white transition-colors font-medium"
                >
                  <span className="block">GitHub</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#BE4C00] group-hover:w-full transition-[width] duration-300" />
                  <span aria-hidden className="absolute -right-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-[#BE4C00]">
                    ↗
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ram-ganesh-vemula-b13b512b9/"
                  className="group relative text-white/90 hover:text-white transition-colors font-medium"
                >
                  <span className="block">LinkedIn</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#BE4C00] group-hover:w-full transition-[width] duration-300" />
                  <span aria-hidden className="absolute -right-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-[#BE4C00]">
                    ↗
                  </span>
                </a>
                <a
                  href="#"
                  className="group relative text-white/90 hover:text-white transition-colors font-medium"
                >
                  <span className="block">Instagram</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#BE4C00] group-hover:w-full transition-[width] duration-300" />
                  <span aria-hidden className="absolute -right-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-[#BE4C00]">
                    ↗
                  </span>
                </a>
                <a
                  href="#"
                  className="group relative text-white/90 hover:text-white transition-colors font-medium"
                >
                  <span className="block">Twitter</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#BE4C00] group-hover:w-full transition-[width] duration-300" />
                  <span aria-hidden className="absolute -right-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-[#BE4C00]">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

