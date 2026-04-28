import { useEffect, useState, useRef } from "react";

const WING = "https://raw.githubusercontent.com/Starknkd/starknkdjourneys/main/public/White%20wing.png";

const StickyNav = () => {
  const [visible, setVisible] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const heroPassed = y > window.innerHeight * 0.6;
      if (!heroPassed) {
        setVisible(false);
      } else if (y > lastY.current) {
        setVisible(true); // scrolling down
      } else {
        setVisible(false); // scrolling up
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 h-14 max-h-14 bg-ink/95 backdrop-blur border-b border-border transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="h-full max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
        <a href="#hero" aria-label="STARKNKD home" className="flex items-center">
          <img src={WING} alt="STARKNKD wing mark" className="h-7 w-auto" />
        </a>
        <a
          href="#reserve"
          className="text-xs uppercase tracking-[0.12em] font-medium bg-sunset text-white px-4 py-2 hover:bg-sunset/90 transition-colors"
        >
          Reserve my slot →
        </a>
      </div>
    </nav>
  );
};

export default StickyNav;
