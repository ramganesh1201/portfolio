import { FadeIn } from './FadeIn';

const build = ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'TanStack', 'Vite'];
const connect = ['Node.js', 'Express.js', 'APIs'];
const store = ['Supabase', 'PostgreSQL'];
const ship = ['Git', 'GitHub', 'Vercel'];
const enhance = ['AI Integrations', 'Cloudflare Workers'];

export function TechStackSection() {
  return (
    <section id="tech" className="w-full px-6 py-20 md:px-10 lg:py-32 relative z-10 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <FadeIn y={20}>
          <h2 className="text-[#D7E2EA] font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Tech Stack
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p className="text-[#D7E2EA]/70 text-lg md:text-xl font-medium tracking-wide uppercase max-w-2xl mb-12">
            Technologies I use to build, connect, store, ship, and enhance digital products.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <FadeIn delay={0.2} y={20} className="space-y-3">
            <h3 className="text-sm text-[#D7E2EA]/50 uppercase tracking-widest">Build</h3>
            <div className="flex flex-wrap gap-2">
              {build.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[#D7E2EA] text-sm font-medium">{t}</span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.25} y={20} className="space-y-3">
            <h3 className="text-sm text-[#D7E2EA]/50 uppercase tracking-widest">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {connect.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[#D7E2EA] text-sm font-medium">{t}</span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={20} className="space-y-3">
            <h3 className="text-sm text-[#D7E2EA]/50 uppercase tracking-widest">Store</h3>
            <div className="flex flex-wrap gap-2">
              {store.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[#D7E2EA] text-sm font-medium">{t}</span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.35} y={20} className="space-y-3">
            <h3 className="text-sm text-[#D7E2EA]/50 uppercase tracking-widest">Ship</h3>
            <div className="flex flex-wrap gap-2">
              {ship.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[#D7E2EA] text-sm font-medium">{t}</span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4} y={20} className="space-y-3">
            <h3 className="text-sm text-[#D7E2EA]/50 uppercase tracking-widest">Enhance</h3>
            <div className="flex flex-wrap gap-2">
              {enhance.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[#D7E2EA] text-sm font-medium">{t}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
