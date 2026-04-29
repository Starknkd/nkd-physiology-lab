const Science = () => {
  const statements = [
    "Stress starts with breathing behaviour.",
    "Breathing drives your CO2 levels. CO2 regulates how much oxygen your brain actually receives.",
    "Disrupt it — even slightly — and clear thinking, emotional control, and access to everything you know becomes significantly harder.",
  ];
  return (
    <section id="science" className="relative min-h-[820px] texture-bg py-24 md:py-36 px-5 md:px-10 lg:px-20">

      {/* TEXT */}
      <div className="max-w-xl relative z-10">
        <p className="label-eyebrow mb-8">The science</p>
        <h2 className="font-bold leading-[0.95] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-16 md:mb-20">
          This is not mindset.<br />
          <span className="text-periwinkle">It's physiology.</span>
        </h2>

        <ul className="space-y-8 md:space-y-10 list-none">
          {statements.map((t, i) => (
            <li
              key={i}
              className="text-white/90 font-light text-lg md:text-2xl leading-snug border-l-2 border-sunset pl-6 md:pl-8"
            >
              {t}
            </li>
          ))}
        </ul>

        <p className="mt-16 md:mt-24 text-sunset text-lg md:text-2xl font-light leading-snug max-w-3xl">
          The same science used to train special forces operators and medics. Now available to anyone whose body works against them under pressure.
        </p>
      </div>

      {/* DESKTOP DIAGRAM */}
      <img
        src="/Lungs_and_brain_diagram_landing_page.png"
        alt="Diagram showing the relationship between lungs, CO2, and brain function"
        className="hidden md:block absolute right-0 bottom-0 w-[65%] h-auto object-contain pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* MOBILE DIAGRAM */}
      <img
        src="/Lungs_and_brain_diagram_landing_page.png"
        alt="Diagram showing the relationship between lungs, CO2, and brain function"
        className="block md:hidden mt-10 w-full h-auto object-contain"
        style={{ mixBlendMode: 'screen' }}
      />

    </section>
  );
};

export default Science;
