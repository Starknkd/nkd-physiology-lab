const BookSession = () => {
  return (
    <section id="book" className="relative bg-ink py-24 md:py-36 border-t border-border overflow-hidden">
      {/* DESKTOP IMAGE — absolute, bleeds to right edge */}
      <img
        src="/Anna_founder_image_VR.png"
        alt="Founder demonstrating physiology training in VR environment"
        className="hidden md:block absolute top-0 right-0 h-full w-[50vw] object-cover pointer-events-none"
      />
      <div
        className="hidden md:block absolute top-0 right-0 h-full w-[50vw] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(19,7,48,1) 0%, rgba(19,7,48,0) 55%), linear-gradient(to bottom, rgba(19,7,48,0) 70%, rgba(19,7,48,1) 100%)",
        }}
      />

      {/* TEXT — shared container system */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-10 lg:px-20 lg:pl-0">
        <div className="max-w-xl">
          <p className="label-eyebrow mb-8">Book your session</p>

          <h2 className="font-bold leading-[0.95] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-10 md:mb-14">
            One session.
            <br />
            20 minutes.
            <br />
            <span className="text-sunset">Everything changes.</span>
          </h2>

          <div className="space-y-3 text-white/85 font-light text-base md:text-lg leading-relaxed">
            <p>NKD Breathing Lab — Central London.</p>
            <p>20 minutes. Limited sessions. For people ready to see what their body is doing when it matters.</p>
          </div>

          {/* FORM */}
          <div className="w-full mt-10 md:mt-12">
            <iframe
              src="https://tally.so/embed/aQjka2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="NKD Lab Booking"
              className="w-full block rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
