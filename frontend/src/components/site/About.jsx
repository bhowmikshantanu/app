import {
    Sparkles,
    Target,
    Rocket,
    HeartHandshake,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const pillars = [
    {
        icon: Target,
        title: "Quality Education",
        desc: "Structured, concept-first learning across CBSE, ICSE and State Board syllabi.",
    },
    {
        icon: Rocket,
        title: "Practical Learning",
        desc: "Hands-on assignments, live labs and industry-relevant workshops.",
    },
    {
        icon: HeartHandshake,
        title: "Personal Mentoring",
        desc: "1:1 mentoring for spoken English, personality development and career growth.",
    },
    {
        icon: Sparkles,
        title: "Corporate Readiness",
        desc: "Microsoft Intune training, interview prep and job-ready soft skills.",
    },
];

export default function About() {
    const ref = useReveal();
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-6" ref={ref}>
                        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--asa-gold)]">
                            ✦ About Us
                        </p>
                        <h2 className="font-heading mt-4 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
                            A modern institute built for{" "}
                            <span className="italic text-[color:var(--asa-gold)]">
                                real
                            </span>{" "}
                            outcomes.
                        </h2>
                        <div className="mt-8 space-y-5 text-[color:var(--asa-text-muted)] leading-relaxed">
                            <p>
                                <span className="text-white font-medium">
                                    AmbaShree Skills Academy &amp; Institute
                                </span>{" "}
                                is a premium learning destination built on a
                                simple belief — education must go beyond
                                textbooks. We combine{" "}
                                <span className="text-white">
                                    academic excellence
                                </span>{" "}
                                for Classes 7–10 (CBSE, ICSE &amp; State Board)
                                with future-ready skills the world genuinely
                                rewards.
                            </p>
                            <p>
                                Our programmes span{" "}
                                <span className="text-white">
                                    Professional Spoken English, Personality
                                    Development, Interview Preparation and
                                    Career Guidance
                                </span>{" "}
                                — delivered by qualified educators with real
                                industry experience. This is not a short 3-month
                                English course; it is a long-term, mentor-led
                                journey.
                            </p>
                            <p>
                                Small batches, individual attention and a
                                career-first mindset — that&apos;s the
                                AmbaShree way.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
                            {[
                                "Small Batches",
                                "Certified Faculty",
                                "Career-First",
                                "Modern Teaching",
                            ].map((p) => (
                                <span
                                    key={p}
                                    className="inline-flex items-center rounded-full border border-[color:var(--asa-gold)]/30 bg-[color:var(--asa-gold)]/5 px-3.5 py-1.5 text-xs font-medium text-[color:var(--asa-gold)]"
                                >
                                    {p}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
                        {pillars.map((p, i) => (
                            <PillarCard key={p.title} p={p} i={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function PillarCard({ p, i }) {
    const ref = useReveal();
    const Icon = p.icon;
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${i * 90}ms` }}
            data-testid={`about-pillar-${i}`}
            className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--asa-surface)] p-6 hover:border-[color:var(--asa-gold)]/40 hover:-translate-y-1 transition-[transform,border-color] duration-300"
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--asa-gold)]/10 border border-[color:var(--asa-gold)]/25 mb-5">
                <Icon className="h-6 w-6 text-[color:var(--asa-gold)]" />
            </div>
            <h3 className="font-heading text-2xl text-white leading-tight">
                {p.title}
            </h3>
            <p className="mt-2 text-sm text-[color:var(--asa-text-muted)] leading-relaxed">
                {p.desc}
            </p>
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-14 -right-14 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                    background:
                        "radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%)",
                }}
            />
        </div>
    );
}
