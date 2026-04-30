const testimonials = [
  {
    name: "Kate",
    role: "Agency Director",
    quote:
      "I used to experience anxiety and panic before important presentations — heart racing, a feeling of losing control. I thought something was wrong with my heart. Stark NKD helped me understand what was actually happening: my breathing habits were disrupting my CO2 balance, making it harder for my brain to work clearly under pressure. Once I understood what was happening on the inside, there was less to be afraid of. I now know exactly what to do in those moments. This knowledge has changed everything.",
  },
  {
    name: "Bridget",
    role: "Financial Analyst",
    quote:
      "I always thought deep breathing was the right thing to do when I felt stressed. Stark NKD taught me that breathing isn't one size fits all — for people like me, deep breathing actually makes things worse. Now I understand why I was getting so tired and mentally foggy, especially after a demanding day. Simple to understand, genuinely life-changing. How is it that we're only learning about this now?",
  },
  {
    name: "Stephen",
    role: "Tech Founder",
    quote:
      "I spent years training at a high level and thought I understood my breathing. I didn't. Stark NKD showed me that performance breathing isn't about breathing more — it's about breathing smarter. The shift in my recovery and mental clarity has been significant. Wish I'd had this during my competitive years.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-ink py-24 md:py-36 px-5 md:px-10 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="label-eyebrow mb-8">Testimonials</p>
        <h2 className="font-bold leading-[0.95] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-16 md:mb-24">
          Real people.<br />
          Real pressure.<br />
          <span className="text-sunset">Real shift.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col bg-ink border border-border p-8 md:p-9"
            >
              <blockquote className="text-white/85 font-light text-base leading-relaxed flex-1">
                <span className="text-sunset text-3xl leading-none mr-1 align-top">“</span>
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <p className="text-white font-medium tracking-wide">{t.name}</p>
                <p className="label-eyebrow mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 md:mt-28 flex justify-center">
          <a href="#book" className="btn-primary">Reserve my slot →</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
