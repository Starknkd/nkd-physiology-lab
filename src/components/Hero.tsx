
const HERO_IMG = "/Stark_Naked_Image_SPEAKER_FULL_PROFILE.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden"
      style={{ backgroundColor: '#130730' }}
      aria-label="Hero"
    >
      {/* Wing mark top-left */}
      <div className="absolute top-5 left-5 md:top-8 md:left-10 z-10 pt-4 md:pt-6">
        <img src="/Final V2 WHT.png" alt="STARKNKD" className="h-[40px] md:h-[48px] w-auto object-contain" />
      </div>

      {/* Left column: text content */}
      <div className="flex flex-col justify-end md:justify-center px-5 md:px-10 lg:px-20 pb-12 md:pb-20 pt-28 md:pt-0 z-10 w-full md:w-1/2">
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

      {/* Right column: image — full width on mobile, 50% on desktop */}
      <div className="relative w-full h-72 md:w-1/2 md:h-auto flex-shrink-0">
        <img
          src={HERO_IMG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover pointer-events-none"
          style={{ objectPosition: '65% center' }}
          loading="eager"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
        {/* Left-edge fade: blends image seamlessly into Ink background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(19,7,48,1) 0%, rgba(19,7,48,0.6) 40%, rgba(19,7,48,0) 100%)' }}
        />
      </div>

      {/* Bottom fade: smooth transition into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-full pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(19,7,48,0) 60%, rgba(19,7,48,0.6) 80%, rgba(19,7,48,1) 100%)' }}
      />
    </section>
  );
};

export default Hero;
