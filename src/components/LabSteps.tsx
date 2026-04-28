const BASE = "https://raw.githubusercontent.com/Starknkd/starknkdjourneys/main/public/";

const steps = [
  {
    label: "Step 1 — Baseline",
    img: BASE + "Climber.png",
    alt: "Lino-cut climber illustration",
    body: "We measure your breathing waveform using clinical-grade capnometry. You see your CO2 levels in real time. Most people are surprised by what they find.",
  },
  {
    label: "Step 2 — Pressure",
    img: BASE + "Hiker%20and%20VR.png",
    alt: "Lino-cut hiker with VR headset",
    body: "You put on a VR headset and go somewhere your nervous system finds interesting. Your body responds exactly as it would under real pressure. You watch it happen.",
  },
  {
    label: "Step 3 — Recovery",
    img: BASE + "Surfer.png",
    alt: "Lino-cut surfer illustration",
    body: "We guide you back. You feel the shift. You understand — for the first time — what regulation actually means in your body.",
  },
];

const LabSteps = () => {
  return (
    <section id="lab" className="bg-ink py-24 md:py-36 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <p className="label-eyebrow mb-8">What happens in the lab</p>
        <h2 className="font-bold leading-[0.95] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-16 md:mb-24">
          20 minutes.<br />
          Your breathing.<br />
          <span className="text-periwinkle">Laid bare.</span>
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 list-none">
          {steps.map((s) => (
            <li key={s.label} className="flex flex-col">
              <div className="aspect-[4/5] w-full bg-ink overflow-hidden mb-6 border border-border">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <p className="label-eyebrow mb-4">{s.label}</p>
              <p className="text-white/85 font-light text-base md:text-lg leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-16 md:mt-24 italic text-periwinkle text-xl md:text-2xl font-light max-w-2xl leading-snug">
          “Once you've seen it, you can't unsee it.”
        </p>
      </div>
    </section>
  );
};

export default LabSteps;
