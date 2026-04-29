import { useEffect, useState } from "react";

const prompts = [
  "I freeze before presentations.",
  "I can't sleep when I'm under pressure.",
  "My breathing feels wrong but I don't know why.",
  "I want to recover faster after hard sessions.",
];

const placeholders = [
  "Ask your question...",
  "Why do I hold my breath under stress?",
  "How do I reset my nervous system fast?",
];

const AICoach = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPlaceholderIndex((i) => (i + 1) % placeholders.length);
        setFade(true);
      }, 300);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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

        {/* Suggested prompts — visible, hoverable, non-functional */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          {prompts.map((p) => (
            <button
              key={p}
              type="button"
              tabIndex={-1}
              className="text-left text-sm md:text-base font-light border border-border bg-white/5 text-white/85 px-5 py-4 transition-all duration-200 hover:bg-sunset hover:text-ink hover:border-sunset cursor-default"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input bar — static, suggestive */}
        <div className="mt-8 border border-border px-4 py-3 text-white/50 flex items-center justify-between max-w-3xl">
          <span className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
            {placeholders[placeholderIndex]}
          </span>
          <span className="text-sunset">→</span>
        </div>

        {/* Response */}
        <div className="mt-6 border-l border-border pl-4 max-w-3xl">
          <p className="text-white/70 italic font-light">
            All your questions answered. Watch this space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AICoach;
