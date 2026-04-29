const BookSession = () => {
  return (
    <section id="book" className="bg-ink py-24 md:py-36 px-5 md:px-10 lg:px-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="label-eyebrow mb-8">Book your session</p>
        <h2 className="font-bold leading-[0.95] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-10 md:mb-14">
          One session.
          <br />
          20 minutes.
          <br />
          <span className="text-sunset">Everything changes.</span>
        </h2>

        <div className="max-w-2xl space-y-3 text-white/85 font-light text-base md:text-lg leading-relaxed mb-12 md:mb-16">
          <p>NKD Breathing Lab — Central London.</p>
          <p>Limited slots. For people ready to see what their body is doing when it matters.</p>
        </div>

        {/* Tally embed placeholder */}
        <div
          className="w-full min-h-[520px] md:min-h-[640px] border border-border flex items-center justify-center bg-ink"
          aria-label="Booking form"
        >
          <p className="label-eyebrow text-center px-6">TALLY FORM EMBED GOES HERE</p>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
