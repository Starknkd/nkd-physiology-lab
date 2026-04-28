const WING = "https://raw.githubusercontent.com/Starknkd/starknkdjourneys/main/public/White%20wing.png";
const HERO_IMG = "https://raw.githubusercontent.com/Starknkd/starknkdjourneys/main/public/Female%20exec%20mosh.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="texture-bg relative min-h-screen w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* Wing mark top-left */}
      <div className="absolute top-5 left-5 md:top-8 md:left-10 z-10">
        <img
          src={WING}
          alt="STARKNKD wing mark"
          className="h-8 md:h-10 w-auto"
          style={{ minWidth: 32 }}
        />
      </div>

      {/* Optional supporting image — right side desktop only */}
      <img
        src={HERO_IMG}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute right-0 top-0 h-full w-[55%] object-cover object-center opacity-40 mix-blend-screen pointer-events-none"
        loading="eager"
      />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent pointer-events-none" />

      <div className="relative z-10 min-h-screen flex flex-col justify-end md:justify-center px-5 md:px-10 lg:px-20 pb-20 md:pb-0 pt-28 md:pt-0 max-w-7xl mx-auto">
        <p className="label-eyebrow mb-6 md:mb-8">NKD Breathing Lab — Central London</p>

        <h1 className="font-bold leading-[0.95] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl">
          See your nervous system<br />
          respond to pressure.<br />
          <span className="text-sunset">In real time.</span>
        </h1>

        <div className="mt-8 md:mt-10 max-w-xl space-y-3 text-white/85 font-light text-base md:text-lg leading-relaxed">
          <p>You've been told to take a deep breath.</p>
          <p>We're going to show you why that's not enough.</p>
          <p className="italic text-periwinkle pt-2">Come ready to play.</p>
        </div>

        <div id="reserve" className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-center">
          <a href="#book" className="btn-primary w-full sm:w-auto">Reserve my slot →</a>
          <a href="#weekly" className="text-sm uppercase tracking-[0.12em] text-white/80 hover:text-white border-b border-white/40 hover:border-white pb-1 self-start sm:self-auto">
            Want a weekly practice instead? →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
