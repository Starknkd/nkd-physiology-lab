const Workshop = () => {
  const points = [
    "Weekly practice — 60 minutes, live in Central London.",
    "Built around the same physiology taught in the lab.",
    "For people who want to keep the work going.",
  ];

  return (
    <section id="weekly" className="texture-bg py-24 md:py-36 px-5 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <p className="label-eyebrow mb-12">Calm Under Pressure — Workshop</p>

        <p className="label-eyebrow mb-4 text-white/80">Train with Anna — Human Performance Specialist</p>

        <h2 className="font-bold leading-[0.9] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-12 md:mb-16">
          A weekly practice
          <br />
          to get out of
          <br />
          <span className="text-sunset">your own way.</span>
        </h2>

        <ul className="space-y-6 md:space-y-8 list-none mb-14 md:mb-18 max-w-3xl">
          {points.map((t, i) => (
            <li
              key={i}
              className="text-white/90 font-light text-lg md:text-2xl leading-snug border-l-2 border-periwinkle pl-6 md:pl-8"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-center">
          <a href="#book" className="btn-primary w-full sm:w-auto">
            Join the workshop →
          </a>
          <a
            href="#book"
            className="text-sm uppercase tracking-[0.12em] text-white/80 hover:text-white border-b border-white/40 hover:border-white pb-1 self-start sm:self-auto"
          >
            Or book a lab session →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
