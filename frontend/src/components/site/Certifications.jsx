import { Award, Upload } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

function CertCard({ c, i }) {
    const ref = useReveal();
    return (
        <article
            ref={ref}
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            data-testid={`certification-card-${i}`}
            className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--asa-surface)] hover:border-[color:var(--asa-gold)]/50 hover:-translate-y-1 transition-[transform,border-color] duration-300"
        >
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={c.placeholderPhoto}
                    alt={`${c.title} certificate placeholder`}
                    className="h-full w-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--asa-bg)]/40 to-[color:var(--asa-bg)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--asa-gold)]/15 border border-[color:var(--asa-gold)]/40">
                        <Award className="h-7 w-7 text-[color:var(--asa-gold)]" />
                    </div>
                    <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[color:var(--asa-gold)]">
                        {c.short}
                    </p>
                    <h3 className="font-heading mt-2 text-2xl md:text-[1.6rem] text-white leading-tight">
                        {c.title}
                    </h3>
                </div>

                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--asa-bg)]/80 backdrop-blur border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80">
                    <Upload className="h-3 w-3" />
                    Placeholder
                </span>
            </div>
            <div className="p-5 border-t border-white/5">
                <p className="text-xs text-[color:var(--asa-text-muted)]">
                    {c.issuer}
                </p>
            </div>
        </article>
    );
}

export default function Certifications() {
    return (
        <section
            id="certifications"
            data-testid="certifications-section"
            className="relative py-24 lg:py-32 bg-[color:var(--asa-secondary)]/30 border-y border-white/5"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                    <div className="max-w-2xl">
                        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--asa-gold)]">
                            ✦ Professional Certifications
                        </p>
                        <h2 className="font-heading mt-4 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
                            Credentials that{" "}
                            <span className="italic text-[color:var(--asa-gold)]">
                                back
                            </span>{" "}
                            every session.
                        </h2>
                        <p className="mt-5 text-[color:var(--asa-text-muted)]">
                            Our faculty carries formal degrees and industry
                            certifications. Real certificate scans will replace
                            these placeholders as soon as they&apos;re
                            uploaded.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CERTIFICATIONS.map((c, i) => (
                        <CertCard key={c.title} c={c} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
