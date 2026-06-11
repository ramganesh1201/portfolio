import { useEffect, useState, useRef } from 'react';

const gifs = [
  "https://cdn.pixabay.com/animation/2024/05/07/06/57/06-57-07-12_512.gif",
  "https://static.wixstatic.com/media/611c35_9ae11d8c51084cc38670f71a316d3143~mv2.gif",
  "https://scitechdaily.com/images/AI-Technology-Creation-Concept.gif",
  "https://img.magnific.com/premium-vector/futuristic-electronic-software-circuit-board-lock-hight-technology-design_185386-591.jpg?semt=ais_hybrid&w=740&q=80",
  "https://hub.author.envato.com/wp-content/uploads/ezgif.com-optimize-29-2.gif",
  "https://media.licdn.com/dms/image/v2/D4D12AQFLgvgs2WvyJQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683923173203?e=2147483647&v=beta&t=FbqletnRfD3wQi5lWwTbbE94fVYbEWMRxft6K_Kc5WQ",
  "https://media.licdn.com/dms/image/v2/D5610AQEYAgpSWMugcQ/image-shrink_1280/image-shrink_1280/0/1691773260632?e=2147483647&v=beta&t=Ce6LYa7r5B_7jXSFvJ3ejr6I71xfmuHxjQDiuIgEnfA",
  "https://static.wixstatic.com/media/5cfe14_30977ca5f4d04cc2a8977a980baf19a9~mv2.gif",
  "https://media.licdn.com/dms/image/v2/D5610AQEYAgpSWMugcQ/image-shrink_1280/image-shrink_1280/0/1691773260632?e=2147483647&v=beta&t=Ce6LYa7r5B_7jXSFvJ3ejr6I71xfmuHxjQDiuIgEnfA",
  "https://static.wixstatic.com/media/5cfe14_30977ca5f4d04cc2a8977a980baf19a9~mv2.gif",
  "https://media.licdn.com/dms/image/v2/D5610AQEYAgpSWMugcQ/image-shrink_1280/image-shrink_1280/0/1691773260632?e=2147483647&v=beta&t=Ce6LYa7r5B_7jXSFvJ3ejr6I71xfmuHxjQDiuIgEnfA",
  "https://wallpaperaccess.com/full/4442372.gif",
  "https://wallpaperaccess.com/full/4442372.gif",
  "https://wallpaperaccess.com/full/4442372.gif",
  "https://media.licdn.com/dms/image/v2/D5610AQEYAgpSWMugcQ/image-shrink_1280/image-shrink_1280/0/1691773260632?e=2147483647&v=beta&t=Ce6LYa7r5B_7jXSFvJ3ejr6I71xfmuHxjQDiuIgEnfA",
  "https://cdn.myportfolio.com/03fb13c64084a4ecb1180901ecedad0d/8f9d8852-df6f-4193-a8d9-30bebf8af270_rw_600.gif?h=13747f5bc7138e4336b63ca65cbe0a13",
  "https://static.wixstatic.com/media/5cfe14_30977ca5f4d04cc2a8977a980baf19a9~mv2.gif",
  "https://cdn.pixabay.com/animation/2024/05/07/06/57/06-57-07-12_512.gif",
  "https://cdn.myportfolio.com/03fb13c64084a4ecb1180901ecedad0d/8f9d8852-df6f-4193-a8d9-30bebf8af270_rw_600.gif?h=13747f5bc7138e4336b63ca65cbe0a13",
  "https://cdn.pixabay.com/animation/2024/05/07/06/57/06-57-07-12_512.gif",
  "https://cdn.pixabay.com/animation/2024/05/07/06/57/06-57-07-12_512.gif",
  "https://wallpaperaccess.com/full/4442372.gif",
  "https://wallpaperaccess.com/full/4910984.gif",
  "https://cdn.pixabay.com/animation/2024/05/07/06/57/06-57-07-12_512.gif",
  "https://wallpaperaccess.com/full/4910984.gif",
  "https://wallpaperaccess.com/full/4910984.gif",
  "https://wallpaperaccess.com/full/4910984.gif",
  "https://wallpaperaccess.com/full/4442372.gif",
];

const row1 = gifs.slice(0, 11);
const row2 = gifs.slice(11);

// Tripled for infinite scrolling effect
const row1Tripled = [...row1, ...row1, ...row1];
const row2Tripled = [...row2, ...row2, ...row2];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const calc = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calc);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Make the start position further left so it doesn't show gaps
  const startOffset = -2000;

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full">
      <div className="flex flex-col gap-3">
        <div 
          className="flex gap-3 will-change-transform w-max"
          style={{ transform: `translateX(${startOffset + (offset - 200)}px)` }}
        >
          {row1Tripled.map((src, i) => (
            <img key={i} src={src} alt="Marquee item" loading="lazy" className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" />
          ))}
        </div>
        <div 
          className="flex gap-3 will-change-transform w-max"
          style={{ transform: `translateX(${startOffset - (offset - 200)}px)` }}
        >
          {row2Tripled.map((src, i) => (
            <img key={i} src={src} alt="Marquee item" loading="lazy" className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" />
          ))}
        </div>
      </div>
    </section>
  );
}
