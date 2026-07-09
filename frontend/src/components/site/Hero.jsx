import { ArrowRight, MessageCircle, Sparkles, Flower2 } from "lucide-react";
import { CONTACT } from "@/lib/data";
import { GALLERY } from "@/lib/data";

const stats = [
    { value: "16+", label: "Years Corporate Exp." },
    { value: "10+", label: "Specialised Courses" },
    { value: "1:1", label: "Personal Mentoring" },
    { value: "100%", label: "Career Focused" },
];

const pills = [
    "CBSE",
    "ICSE",
    "State Board",
    "Spoken English",
    "Personality Dev",
    "Interview Prep",
    "Career Guidance",
    "Job Assistance",
    "Mathematics",
    "Science",
    "IT Courses · Coming Soon",
];

export default function Hero() {
    return (
        <section
            id="hero"
            data-testid="hero-section"
            className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-28"
        >
            {/* Backgrounds */}
            <div className="absolute inset-0 -z-10">
                <img
                    src={GALLERY[0].url}
                    alt=""
                    className="h-full w-full object-cover object-center opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--asa-bg)]/75 via-[color:var(--asa-bg)]/85 to-[color:var(--asa-bg)]" />
                <div
                    aria-hidden
                    className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full blur-3xl"
                    style={{
                        background:
                            "radial-gradient(circle at center, rgba(212,175,55,0.18), transparent 60%)",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute top-1/3 -left-32 h-[360px] w-[360px] rounded-full blur-3xl"
                    style={{
                        background:
                            "radial-gradient(circle at center, rgba(58,80,107,0.35), transparent 60%)",
                    }}
                />
            </div>

            {/* Laddu Gopal blessing corner — always visible in the upper-right */}
            <div
                data-testid="laddu-gopal-corner"
                className="absolute top-24 right-3 sm:right-5 z-20 flex items-center gap-2 sm:gap-3 rounded-2xl glass px-3 sm:px-4 py-2.5 sm:py-3 border border-[color:var(--asa-gold)]/50 shadow-[0_10px_40px_-10px_rgba(212,175,55,0.55)]"
            >
                <span
                    data-testid="laddu-gopal-photo-slot"
                    className="relative flex h-14 w-14 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-xl bg-[color:var(--asa-secondary)] border-2 border-[color:var(--asa-gold)]/70 overflow-hidden shadow-xl"
                >
                    <img
                        src="/faculty/laddu-gopal.jpg"
                        alt="Laddu Gopal"
                        className="h-full w-full object-cover"
                    />
                </span>
                <div className="leading-tight max-w-[10rem] sm:max-w-none">
                    <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[color:var(--asa-text-muted)]">
                        Blessings
                    </p>
                    <p className="font-heading italic text-sm sm:text-lg text-[color:var(--asa-gold)] leading-snug">
                        With the Grace of{" "}
                        <span className="whitespace-nowrap">Laddu Gopal</span>
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Left copy */}
                <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--asa-gold)]/30 bg-[color:var(--asa-gold)]/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[color:var(--asa-gold)]">
                            <Sparkles className="h-3.5 w-3.5" />
                            Premium Institute
                        </div>
                    </div>

                    <h1
                        data-testid="hero-heading"
                        className="font-heading mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[1.02] tracking-tight text-white"
                    >
                        Learn.{" "}
                        <span className="italic text-[color:var(--asa-gold)]">
                            Speak.
                        </span>{" "}
                        Grow.{" "}
                        <span className="italic text-[color:var(--asa-gold)]">
                            Succeed.
                        </span>
                    </h1>

                    <p
                        data-testid="hero-subtitle"
                        className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[color:var(--asa-text-muted)]"
                    >
                        Academic Coaching (CBSE, ICSE &amp; State Board) ·
                        Professional Spoken English · Personality Development ·
                        Interview Preparation &amp; Career Guidance. Long-term,
                        outcome-driven programmes — with an IT track (Intune,
                        SCCM, PowerShell, Python, AI &amp; Cloud) coming soon.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-3">
                        <a
                            href="#contact"
                            data-testid="hero-apply-btn"
                            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--asa-gold)] px-7 py-3.5 text-sm font-semibold text-[color:var(--asa-bg)] transition-[background-color,transform] hover:bg-[color:var(--asa-gold-hover)] hover:-translate-y-0.5"
                        >
                            Apply Now
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                        <a
                            href="#contact"
                            data-testid="hero-contact-btn"
                            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--asa-gold)]/60 px-7 py-3.5 text-sm font-semibold text-[color:var(--asa-gold)] hover:bg-[color:var(--asa-gold)]/10 transition-colors"
                        >
                            Contact Us
                        </a>
                        <a
                            href={`https://wa.me/${CONTACT.whatsappRaw}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-whatsapp-btn"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[color:var(--asa-secondary)] px-6 py-3.5 text-sm font-semibold text-white hover:border-emerald-400/50 hover:text-emerald-300 transition-colors"
                        >
                            <MessageCircle className="h-4 w-4 text-emerald-400" />
                            WhatsApp
                        </a>
                    </div>

                    {/* Stats */}
                    <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                data-testid={`hero-stat-${s.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                            >
                                <dt className="font-heading text-3xl sm:text-4xl font-semibold text-white">
                                    {s.value}
                                </dt>
                                <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-[color:var(--asa-text-muted)]">
                                    {s.label}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Right feature card */}
                <div className="lg:col-span-5 relative">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 glass p-2 float-slow">
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src={GALLERY[1].url}
                                alt="Classroom in session"
                                className="h-[440px] w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--asa-bg)] via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--asa-gold)]">
                                    Featured
                                </p>
                                <p className="font-heading mt-2 text-2xl text-white">
                                    Small-batch, mentor-led sessions
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Floating chip */}
                    <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 rounded-2xl glass px-5 py-4 shadow-2xl">
                        <div className="h-10 w-10 rounded-full bg-[color:var(--asa-gold)]/15 flex items-center justify-center">
                            <Sparkles className="h-5 w-5 text-[color:var(--asa-gold)]" />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--asa-text-muted)]">
                                Founder
                            </p>
                            <p className="text-sm font-semibold text-white">
                                Microsoft Certified Trainer
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Marquee pills */}
            <div className="relative mt-16 border-y border-white/5 bg-[color:var(--asa-secondary)]/30 overflow-hidden">
                <div className="flex marquee-track whitespace-nowrap py-4">
                    {[...pills, ...pills].map((p, i) => (
                        <span
                            key={i}
                            className="mx-6 text-sm uppercase tracking-[0.3em] text-[color:var(--asa-text-muted)] flex items-center gap-6"
                        >
                            {p}
                            <span className="text-[color:var(--asa-gold)]">
                                ✦
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
