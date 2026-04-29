const BookSession = () => {
  return (
    <section id="book" className="bg-ink py-24 md:py-36 px-5 md:px-10 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="label-eyebrow mb-8">Book your session</p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="font-bold leading-[0.95] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-10 md:mb-14">
              One session.<br />
              One hour.<br />
              <span className="text-sunset">Everything changes.</span>
            </h2>

            <div className="max-w-xl space-y-3 text-white/85 font-light text-base md:text-lg leading-relaxed mb-10 md:mb-12">
              <p>NKD Breathing Lab — Central London.</p>
              <p>Limited slots. Reserved for people who are ready to see what's actually happening.</p>
            </div>

            {/* Tally embed placeholder */}
            <div
              className="w-full min-h-[520px] md:min-h-[640px] border border-border flex items-center justify-center bg-ink"
              aria-label="Booking form"
            >
              <p className="label-eyebrow text-center px-6">TALLY FORM EMBED GOES HERE</p>
            </div>
          </div>

          {/* RIGHT COLUMN — desktop only */}
          <div className="hidden md:block relative min-h-[640px] bg-ink border border-border self-stretch">
            <div className="absolute inset-0 bg-ink/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="label-eyebrow text-center px-6 text-white/60">
                IMAGE: Founder demonstrating physiology training in VR environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
