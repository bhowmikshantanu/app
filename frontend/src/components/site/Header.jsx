import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

const Logo = () => (
  <a
    href="#hero"
    data-testid="site-logo"
    aria-label="AmbaShree Skills Academy home"
    className="group flex shrink-0 items-center gap-3"
  >
    <div
      className="
        relative flex h-[68px] w-[68px] shrink-0 items-center justify-center
        rounded-full bg-white p-1
        shadow-[0_0_22px_rgba(249,115,22,0.42)]
        transition-all duration-300
        group-hover:scale-105
        group-hover:shadow-[0_0_30px_rgba(249,115,22,0.65)]
        sm:h-[74px] sm:w-[74px]
      "
    >
      <img
        src="/ambashree-logo.png"
        alt="AmbaShree Skills Academy"
        className="h-full w-full rounded-full object-contain"
      />
    </div>

    <div className="hidden flex-col leading-none sm:flex">
      <div className="flex items-baseline">
        <span
          className="
            font-heading text-[25px] font-black tracking-[-0.02em]
            text-white
            drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]
          "
        >
          Amba
        </span>

        <span
          className="
            font-heading text-[25px] font-black tracking-[-0.02em]
            text-[#F97316]
            drop-shadow-[0_0_10px_rgba(249,115,22,0.55)]
          "
        >
          Shree
        </span>
      </div>

      <span
        className="
          mt-1 text-[10px] font-extrabold uppercase
          tracking-[0.28em] text-white/75
        "
      >
        Skills Academy
      </span>
    </div>
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
            ? "border-white/10 bg-[#190D2E]/95 shadow-[0_10px_35px_rgba(30,10,50,0.24)] backdrop-blur-xl"
            : "border-white/10 bg-gradient-to-r from-[#28113F] via-[#3A174F] to-[#4A241B]"
        }
      `}
    >
      <div
        className="
          mx-auto flex h-[92px] max-w-7xl
          items-center justify-between
          px-5 sm:px-8
        "
      >
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-${link.label
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="
                relative py-3
                text-[15px] font-extrabold
                text-white/90
                transition-colors duration-300
                after:absolute after:bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-[#F97316]
                after:transition-all after:duration-300
                hover:text-white
                hover:after:w-full
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="header-apply-btn"
            className="
              hidden items-center justify-center
              rounded-full
              bg-gradient-to-r from-[#F97316] to-[#EA580C]
              px-6 py-3
              text-sm font-black text-white
              shadow-[0_10px_25px_rgba(249,115,22,0.32)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_14px_30px_rgba(249,115,22,0.48)]
              md:inline-flex
            "
          >
            Apply Now
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((current) => !current)}
            className="
              inline-flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/20
              bg-white/5 text-white
              transition-all duration-300
              hover:border-[#F97316]
              hover:bg-[#F97316]
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
          bg-[#241137]/98 backdrop-blur-xl
          transition-all duration-300
          lg:hidden
          ${
            open
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="flex flex-col gap-1 px-5 py-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              data-testid={`mobile-nav-${link.label
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="
                border-b border-white/10
                py-3 text-base font-bold
                text-white/90
                transition-colors
                hover:text-[#F97316]
              "
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            data-testid="mobile-apply-btn"
            className="
              mt-4 inline-flex items-center justify-center
              rounded-full
              bg-gradient-to-r from-[#F97316] to-[#EA580C]
              px-5 py-3
              text-sm font-black text-white
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
