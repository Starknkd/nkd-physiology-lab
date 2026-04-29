const BookSession = () => {
  return (
    <section id="book" className="bg-ink py-24 md:py-36 px-5 md:px-10 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="label-eyebrow mb-8">Book your session</p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* LEFT COLUMN */}
          <div className="flex flex-col h-full">
            <h2 className="font-bold leading-[0.95] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-10 md:mb-14">
              One session.
              <br />
              20 minutes.
              <br />
              <span className="text-sunset">Everything changes.</span>
            </h2>

            <div className="max-w-xl space-y-3 text-white/85 font-light text-base md:text-lg leading-relaxed mb-10 md:mb-12">
              <p>NKD Breathing Lab — Central London.</p>
              <p>20 minutes. Limited sessions. For people ready to see what their body is doing when it matters.</p>
            </div>

            {/* FORM */}
            <div className="mt-auto">
              <div className="w-full min-h-[520px] flex items-center justify-center">
                <p className="text-white/40 text-sm tracking-wide">TALLY FORM EMBED GOES HERE</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="hidden md:block relative h-full min-h-[640px] overflow-hidden">
            <img
              src="/Anna_founder_image_VR.png"
              alt="Founder demonstrating physiology training in VR environment"
              className="absolute inset-0 w-full h-full object-cover object-[center_right] opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-ink/40 to-ink"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
