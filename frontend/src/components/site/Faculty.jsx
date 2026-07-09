import { BadgeCheck, Camera, ShieldCheck } from "lucide-react";
import { FACULTY } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

function FacultyCard({ f, index }) {
    const ref = useReveal();
    return (
        <article
            ref={ref}
            style={{ transitionDelay: `${index * 100}ms` }}
            data-testid={`faculty-card-${index}`}
            className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--asa-surface)] hover:border-[color:var(--asa-gold)]/40 hover:-translate-y-1 transition-[transform,border-color] duration-300 flex flex-col"
        >
            <div
                className={`relative aspect-[4/5] overflow-hidden ${
                    f.photoTransparent
                        ? "bg-gradient-to-br from-[color:var(--asa-secondary)] via-[color:var(--asa-accent)]/40 to-[color:var(--asa-bg)]"
                        : ""
                }`}
            >
                <img
                    src={f.photo}
                    alt={f.name}
                    className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                        f.photoTransparent
                            ? "object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]"
                            : "object-cover"
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--asa-bg)] via-[color:var(--asa-bg)]/40 to-transparent" />
                {f.photoPlaceholder && (
                    <span
                        data-testid={`faculty-photo-placeholder-${index}`}
                        className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--asa-bg)]/80 backdrop-blur border border-[color:var(--asa-gold)]/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--asa-gold)]"
                    >
                        <Camera className="h-3 w-3" />
                        Photo placeholder
                    </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--asa-gold)]">
                        {f.role}
                    </p>
                    <h3 className="font-heading mt-1 text-3xl text-white">
                        {f.name}
                    </h3>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col gap-5">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)]">
                        Qualification
                    </p>
                    <p className="mt-1 text-sm text-white">{f.qualification}</p>
                </div>

                {f.designation && (
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)]">
                            Designation
                        </p>
                        <p className="mt-1 text-sm text-white">{f.designation}</p>
                    </div>
                )}

                {f.experience && (
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)]">
                            Experience
                        </p>
                        <p className="mt-1 text-sm text-[color:var(--asa-text-muted)]">
                            {f.experience}
                        </p>
                    </div>
                )}

                <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)] mb-2">
                        Roles
                    </p>
                    <ul className="space-y-1.5">
                        {f.roles.map((r) => (
                            <li
                                key={r}
                                className="flex items-start gap-2 text-sm text-white/85"
                            >
                                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--asa-gold)]" />
                                <span>{r}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {f.certifications && f.certifications.length > 0 && (
                    <div
                        data-testid={`faculty-certifications-${index}`}
                        className="rounded-2xl border border-[color:var(--asa-gold)]/25 bg-[color:var(--asa-gold)]/5 p-4"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <ShieldCheck className="h-4 w-4 text-[color:var(--asa-gold)]" />
                            <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-gold)]">
                                Professional Certifications
                            </p>
                        </div>
                        <ul className="space-y-2">
                            {f.certifications.map((c) => (
                                <li
                                    key={c}
                                    data-testid={`faculty-cert-${index}-${c.slice(0, 20).toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                                    className="text-sm text-white/90 leading-snug"
                                >
                                    <span className="font-semibold text-[color:var(--asa-gold)]">
                                        ✦
                                    </span>{" "}
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="pt-4 mt-auto border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)] mb-3">
                        Professional Badges
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {f.badges.map((b) => (
                            <span
                                key={b}
                                data-testid={`faculty-badge-${index}-${b.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                                className="inline-flex items-center rounded-full border border-[color:var(--asa-gold)]/30 bg-[color:var(--asa-gold)]/8 px-3 py-1 text-[11px] font-medium text-[color:var(--asa-gold)]"
                            >
                                {b}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function Faculty() {
    return (
        <section
            id="faculty"
            data-testid="faculty-section"
            className="relative py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
                    <div className="lg:col-span-8">
                        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--asa-gold)]">
                            ✦ Meet Our Faculty
                        </p>
                        <h2 className="font-heading mt-4 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
                            Certified mentors.{" "}
                            <span className="italic text-[color:var(--asa-gold)]">
                                Industry-grade
                            </span>{" "}
                            teaching.
                        </h2>
                    </div>
                    <p className="lg:col-span-4 text-[color:var(--asa-text-muted)]">
                        A close-knit team of qualified educators who have taught,
                        mentored and worked at scale — dedicated to your growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FACULTY.map((f, i) => (
                        <FacultyCard key={f.name} f={f} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
