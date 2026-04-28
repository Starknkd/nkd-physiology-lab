const WING = "https://raw.githubusercontent.com/Starknkd/starknkdjourneys/main/public/White%20wing.png";

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-border px-5 md:px-10 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-8">
          <div className="flex flex-col gap-5 max-w-sm">
            <img src={WING} alt="STARKNKD" className="h-8 w-auto" />
            <p className="text-white/70 font-light text-sm leading-relaxed">
              NKD Breathing Lab. Science-led human performance. Central London.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-14">
            <div className="flex flex-col gap-3">
              <p className="label-eyebrow mb-1">Lab</p>
              <a href="#lab" className="text-white/85 hover:text-sunset font-light text-sm transition-colors">What happens</a>
              <a href="#science" className="text-white/85 hover:text-sunset font-light text-sm transition-colors">The science</a>
              <a href="#book" className="text-white/85 hover:text-sunset font-light text-sm transition-colors">Book a session</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="label-eyebrow mb-1">Practice</p>
              <a href="#weekly" className="text-white/85 hover:text-sunset font-light text-sm transition-colors">Workshop</a>
              <a href="#coach" className="text-white/85 hover:text-sunset font-light text-sm transition-colors">AI Coach</a>
              <a href="#faq" className="text-white/85 hover:text-sunset font-light text-sm transition-colors">FAQ</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="label-eyebrow mb-1">Contact</p>
              <a href="mailto:hello@starknkd.com" className="text-white/85 hover:text-sunset font-light text-sm transition-colors">hello@starknkd.com</a>
              <a href="https://www.instagram.com/" className="text-white/85 hover:text-sunset font-light text-sm transition-colors">Instagram</a>
            </div>
          </nav>
        </div>

        <div className="mt-16 md:mt-20 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/50 font-light text-xs tracking-wide">
            © {new Date().getFullYear()} STARKNKD. All rights reserved.
          </p>
          <p className="text-white/50 font-light text-xs tracking-wide">
            Not medical advice. Performance physiology training.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
