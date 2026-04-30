import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is this for?",
    a: "Founders, executives, performers, athletes, and clinicians — anyone whose body works against them under pressure and who wants to understand why.",
  },
  {
    q: "Is this meditation or breathwork?",
    a: "No. This is clinical-grade capnometry and physiology training. We measure what's actually happening in your nervous system — then teach you to change it.",
  },
  {
    q: "How long is a session?",
    a: "One hour at the NKD Breathing Lab in Central London. 20 minutes of measurement, the rest is interpretation, training, and protocol.",
  },
  {
    q: "Do I need to prepare?",
    a: "No. Come as you are. Wear something you can breathe in.",
  },
  {
    q: "Will I get something to take away?",
    a: "Yes. A personal breathing profile and a protocol built around what your body actually does under pressure — not generic advice.",
  },
  {
    q: "Is there a weekly practice option?",
    a: "Yes. The Calm Under Pressure workshop runs weekly. Details below.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-ink py-24 md:py-36 px-5 md:px-10 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="label-eyebrow mb-8">FAQ</p>
        <h2 className="font-bold leading-[0.95] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-16 md:mb-20">
          Questions,<br />
          <span className="text-periwinkle">answered plainly.</span>
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="text-left text-white font-medium text-lg md:text-xl py-6 md:py-7 hover:no-underline hover:text-sunset">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/80 font-light text-base md:text-lg leading-relaxed pb-6 md:pb-8 pr-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
