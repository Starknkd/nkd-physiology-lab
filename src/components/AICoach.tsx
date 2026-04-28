const prompts = [
  "I freeze before presentations.",
  "I can't sleep when I'm under pressure.",
  "My breathing feels wrong but I don't know why.",
  "I want to recover faster after hard sessions.",
];

const AICoach = () => {
  return (
    <section id="coach" className="texture-bg py-24 md:py-36 px-5 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <p className="label-eyebrow mb-8">AI Coach — Coming soon</p>
        <h2 className="font-bold leading-[0.95] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-10 md:mb-14">
          Ask the lab.<br />
          <span className="text-periwinkle">Get a real answer.</span>
        </h2>

        <p className="max-w-2xl text-white/85 font-light text-base md:text-lg leading-relaxed mb-12 md:mb-16">
          Trained on the same physiology we teach in the lab. No fluff. No wellness-speak. Just what's happening in your body — and what to do about it.
        </p>

        {/* Suggested prompts — non-functional buttons */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-10 md:mb-12">
          {prompts.map((p) => (
            <button
              key={p}
              type="button"
              disabled
              aria-disabled="true"
              tabIndex={-1}
              className="text-left text-sm md:text-base font-light text-white/85 border border-border px-5 py-4 cursor-not-allowed hover:border-periwinkle/60 transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Restrained response container */}
        <div className="border-l-2 border-periwinkle pl-6 md:pl-8 max-w-3xl">
          <p className="label-eyebrow mb-4">Response</p>
          <p className="text-white/60 font-light italic text-base md:text-lg leading-relaxed">
            The AI coach is in development. Join the lab to be first to access it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AICoach;
