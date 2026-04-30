const HERO_IMG = "/Stark_Naked_Image_SPEAKER_FULL_PROFILE.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden"
      style={{ backgroundColor: "#130730" }}
      aria-label="Hero"
    >
      {/* Left column: text content */}
      <div className="flex flex-col justify-end md:justify-center w-full md:w-1/2 z-10">
        <div className="w-full px-5 md:px-10 lg:px-20 py-10 md:py-0">
          <div className="max-w-xl">
            <img
              src="/Final_V2_WHT.png"
              alt="STARKNKD"
              className="block h-[56px] md:h-[64px] w-auto object-contain max-w-none self-start mb-5 min-h-[56px]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <p className="label-eyebrow mb-6 md:mb-8">NKD Breathing Lab — Central London</p>

            <h1 className="font-bold leading-[0.95] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              See your nervous system
              <br />
              respond to pressure.
              <br />
              <span className="text-sunset">In real time.</span>
            </h1>

            <div className="mt-8 md:mt-10 space-y-3 text-white/85 font-light text-base md:text-lg leading-relaxed">
              <p>You've been told to take a deep breath.</p>
              <p>We're going to show you why that's not enough.</p>
              <p className="italic text-periwinkle pt-2">Come ready to play.</p>
            </div>

            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-baseline">
              <a href="#book" className="btn-primary w-full sm:w-auto">
                Reserve my slot →
              </a>

              <a
                href="#weekly"
                className="text-sm uppercase tracking-[0.12em] text-white/80 hover:text-white border-b border-white/40 hover:border-white pb-1 w-full sm:w-auto"
              >
                Want a weekly practice instead? →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right column: image — full width on mobile, 50% on desktop */}
      <div className="relative w-full h-[460px] md:w-1/2 md:h-auto flex-shrink-0">
        <img
          src={HERO_IMG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover pointer-events-none"
          style={{ objectPosition: "65% center" }}
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Desktop edge blends: left + right soft fade into Ink */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(19,7,48,1) 0%, rgba(19,7,48,0.18) 28%, rgba(19,7,48,0) 55%), linear-gradient(to left, rgba(19,7,48,0.35) 0%, rgba(19,7,48,0) 18%)",
          }}
        />
        {/* Mobile left fade only (very minimal, edge only) */}
        <div
          className="md:hidden absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(19,7,48,0.45) 0%, rgba(19,7,48,0.08) 14%, rgba(19,7,48,0) 28%)",
          }}
        />

        {/* Bottom fade — mobile (edge only, does not obscure subject) */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none h-20 md:hidden"
          style={{
            background: "linear-gradient(to bottom, rgba(19,7,48,0) 0%, rgba(19,7,48,0.5) 60%, rgba(19,7,48,1) 100%)",
          }}
        />

        {/* Bottom fade — desktop (smooth, gradual) */}
        <div
          className="hidden md:block absolute inset-x-0 bottom-0 h-full pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(19,7,48,0) 72%, rgba(19,7,48,0.4) 88%, rgba(19,7,48,1) 100%)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
