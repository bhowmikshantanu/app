import {
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Twitter,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";
import { CONTACT, SOCIAL, NAV_LINKS, COURSES } from "@/lib/data";

const socials = [
    { icon: Facebook, href: SOCIAL.facebook, label: "Facebook" },
    { icon: Instagram, href: SOCIAL.instagram, label: "Instagram" },
    { icon: Linkedin, href: SOCIAL.linkedin, label: "LinkedIn" },
    { icon: Youtube, href: SOCIAL.youtube, label: "YouTube" },
    { icon: Twitter, href: SOCIAL.twitter, label: "Twitter" },
];

export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
            className="relative bg-[color:var(--asa-bg)] pt-20 pb-10 border-t border-white/5"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="grid gap-10 lg:gap-16 lg:grid-cols-12">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <a href="#hero" className="inline-flex items-center gap-3">
                            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--asa-border)] bg-[color:var(--asa-secondary)]">
                                <span className="font-heading text-2xl font-semibold leading-none text-[color:var(--asa-gold)]">
                                    A
                                </span>
                                <span className="font-heading absolute -bottom-0.5 -right-0.5 text-xs font-semibold leading-none text-white">
                                    Sa
                                </span>
                            </span>
                            <span className="flex flex-col leading-tight">
                                <span className="font-heading text-lg font-semibold tracking-tight text-white">
                                    AmbaShree
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)]">
                                    Skills Academy
                                </span>
                            </span>
                        </a>
                        <p className="mt-6 text-sm leading-relaxed text-[color:var(--asa-text-muted)] max-w-sm">
                            A premium coaching &amp; skills institute helping
                            students and professionals learn, speak, grow and
                            succeed — with certified faculty and career-focused
                            programs.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid={`footer-social-${s.label.toLowerCase()}`}
                                    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:text-[color:var(--asa-gold)] hover:border-[color:var(--asa-gold)]/60 transition-colors"
                                >
                                    <s.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--asa-gold)] mb-5">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-sm text-white/80 hover:text-[color:var(--asa-gold)] transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--asa-gold)] mb-5">
                            Courses
                        </h4>
                        <ul className="grid grid-cols-1 gap-3">
                            {COURSES.slice(0, 8).map((c) => (
                                <li key={c.title}>
                                    <a
                                        href="#courses"
                                        className="text-sm text-white/80 hover:text-[color:var(--asa-gold)] transition-colors"
                                    >
                                        {c.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--asa-gold)] mb-5">
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-white/80">
                                <Phone className="h-4 w-4 text-[color:var(--asa-gold)] mt-0.5" />
                                <a href={`tel:${CONTACT.phone}`}>
                                    {CONTACT.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white/80">
                                <Mail className="h-4 w-4 text-[color:var(--asa-gold)] mt-0.5" />
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    className="break-all"
                                >
                                    {CONTACT.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white/80">
                                <MapPin className="h-4 w-4 text-[color:var(--asa-gold)] mt-0.5" />
                                <span>{CONTACT.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-3 items-center justify-between">
                    <p className="text-xs text-[color:var(--asa-text-muted)]">
                        © {new Date().getFullYear()} AmbaShree Skills Academy
                        &amp; Institute. All rights reserved.
                    </p>
                    
                </div>
            </div>
        </footer>
    );
}
