import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

const Logo = () => (
  <a
    href="#hero"
    data-testid="site-logo"
    className="group flex items-center gap-3"
    aria-label="AmbaShree Skills Academy home"
  >
    <span
      className="
        relative inline-flex h-12 w-12 items-center justify-center
        rounded-xl border border-orange-400/30
        bg-gradient-to-br from-[#24113D] via-[#35135B] to-[#102B57]
        shadow-[0_8px_25px_rgba(88,28,135,0.25)]
        transition-all duration-300
        group-hover:-translate-y-0.5 group-hover:border-orange-400/60
      "
    >
      <span className="font-heading text-2xl font-bold leading-none text-[#F97316]">
        A
      </span>

      <span className="font-heading absolute -bottom-0.5 -right-0.5 text-xs font-semibold leading-none text-white">
        Sa
      </span>
    </span>

    <span className="hidden flex-col leading-tight sm:flex">
      <span className="font-heading text-xl font-bold tracking-tight text-white">
        Amba
        <span className="text-[#F97316]">Shree</span>
      </span>

      <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
        Skills Academy
      </span>
    </span>
  </a>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-testid="site-header"
      className={`
        fixed inset-x-0 top-0 z-50
        border-b
        transition-all duration-300
        ${
          scrolled
            ? "border-white/10 bg-[#0B1028]/95 shadow-[0_10px_35px_rgba(15,23,42,0.22)] backdrop-blur-xl"
            : "border-white/5 bg-gradient-to-r from-[#0B1028]/95 via-[#24113D]/95 to-[#102B57]/95 backdrop-blur-lg"
        }
      `}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-24 h-52 w-52 rounded-full bg-purple-600/10 blur-[80px]" />

        <div className="absolute right-1/4 -top-24 h-48 w-48 rounded-full bg-orange-500/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="
                group/nav relative py-2
                text-[15px] font-bold tracking-[0.01em]
                text-white/90
                transition-colors duration-300
                hover:text-white
              "
            >
              {l.label}

              <span
                className="
                  absolute bottom-0 left-1/2 h-0.5 w-0
                  -translate-x-1/2 rounded-full
                  bg-gradient-to-r from-[#A855F7] to-[#F97316]
                  transition-all duration-300
                  group-hover/nav:w-full
                "
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="header-apply-btn"
            className="
              hidden items-center rounded-full
              bg-gradient-to-r from-[#F97316] to-[#FB923C]
              px-6 py-2.5
              text-sm font-bold text-white
              shadow-[0_8px_25px_rgba(249,115,22,0.28)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_12px_30px_rgba(249,115,22,0.38)]
              md:inline-flex
            "
          >
            Apply Now
          </a>

          <button
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((o) => !o)}
            className="
              inline-flex h-10 w-10 items-center justify-center
              rounded-full border border-white/20
              bg-white/5 text-white
              transition-all duration-300
              hover:border-orange-400/60
              hover:bg-white/10
              lg:hidden
            "
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        data-testid="mobile-nav"
        className={`
          overflow-hidden border-b border-white/10
          bg-[#0B1028]/98 backdrop-blur-xl
          transition-[max-height,opacity] duration-300
          lg:hidden
          ${
            open
              ? "max-h-[520px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="flex flex-col gap-1 px-5 py-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              data-testid={`mobile-nav-${l.label
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="
                border-b border-white/5 py-3
                text-base font-semibold text-white/90
                transition-all duration-300
                hover:pl-2 hover:text-[#F97316]
              "
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            data-testid="mobile-apply-btn"
            className="
              mt-5 inline-flex items-center justify-center
              rounded-full
              bg-gradient-to-r from-[#F97316] to-[#FB923C]
              px-5 py-3
              text-sm font-bold text-white
              shadow-lg
            "
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}
