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
        <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--asa-border)] bg-[color:var(--asa-secondary)]">
            <span className="font-heading text-2xl font-semibold leading-none text-[color:var(--asa-gold)]">
                A
            </span>
            <span className="font-heading absolute -bottom-0.5 -right-0.5 text-xs font-semibold leading-none text-white">
                Sa
            </span>
        </span>
        <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-heading text-lg font-semibold tracking-tight text-white">
                AmbaShree
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)]">
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
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header
            data-testid="site-header"
            className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
                scrolled
                    ? "bg-[rgba(10,17,40,0.75)] backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
                <Logo />

                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-sm font-medium text-[color:var(--asa-text-muted)] hover:text-[color:var(--asa-gold)] transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#contact"
                        data-testid="header-apply-btn"
                        className="hidden md:inline-flex items-center rounded-full bg-[color:var(--asa-gold)] px-5 py-2.5 text-sm font-semibold text-[color:var(--asa-bg)] transition-[background-color,transform] hover:bg-[color:var(--asa-gold-hover)] hover:-translate-y-0.5"
                    >
                        Apply Now
                    </a>
                    <button
                        aria-label="Toggle menu"
                        data-testid="mobile-menu-toggle"
                        onClick={() => setOpen((o) => !o)}
                        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white hover:border-[color:var(--asa-gold)]/60 transition-colors"
                    >
                        {open ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <div
                data-testid="mobile-nav"
                className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-[color:var(--asa-bg)]/95 backdrop-blur-xl border-b border-white/10 ${
                    open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-5 py-6 flex flex-col gap-2">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-base font-medium text-white/90 py-2 border-b border-white/5 hover:text-[color:var(--asa-gold)]"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        data-testid="mobile-apply-btn"
                        className="mt-4 inline-flex items-center justify-center rounded-full bg-[color:var(--asa-gold)] px-5 py-3 text-sm font-semibold text-[color:var(--asa-bg)]"
                    >
                        Apply Now
                    </a>
                </div>
            </div>
        </header>
    );
}
