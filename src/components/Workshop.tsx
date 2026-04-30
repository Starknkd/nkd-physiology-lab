const Workshop = () => {
  const points = [
    "Weekly practice — 60 minutes, live in Central London.",
    "Built around the same physiology taught in the lab.",
    "For people who want to feel calmer, clearer, and in control when it matters.",
  ];

  return (
    <section id="workshop" className="texture-bg py-24 md:py-36 px-5 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="label-eyebrow mb-12">Calm Under Pressure — Workshop</p>

        <p className="label-eyebrow mb-6 md:mb-8 text-white/80">Train with Anna — Human Performance Specialist</p>

        <h2 className="font-bold leading-[1.0] md:leading-[0.95] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-10 md:mb-14">
          A weekly practice
          <br />
          to build
          <br />
          <span className="text-sunset">calm under pressure.</span>
        </h2>

        <ul className="space-y-6 md:space-y-8 list-none mb-12 md:mb-16 max-w-3xl">
          {points.map((t, i) => (
            <li
              key={i}
              className="text-white/95 font-light text-lg md:text-2xl leading-snug border-l-2 border-periwinkle/60 pl-6 md:pl-8"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-center mt-4">
          <a
            href="#"
            data-tally-open="A76N4W"
            className="btn-primary w-full sm:w-auto"
            onClick={(e) => e.preventDefault()}
          >
            Secure my place →
          </a>
          <a
            href="#book"
            className="text-sm uppercase tracking-[0.12em] text-white/80 hover:text-white border-b border-white/40 hover:border-white pb-1 self-start sm:self-auto"
          >
            Or book a lab session →
          </a>
        </div>
    <div className="mt-8">
  <a
    href="https://nkdbreath.com"
    className="text-base text-white/60 hover:text-white transition-colors duration-200"
  >
    Not sure yet? Start with your breathing <span className="text-white/80">blueprint</span> →
  </a>
</div>
      </div>
    </section>
  );
};

export default Workshop;
