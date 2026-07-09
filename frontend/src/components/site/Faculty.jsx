import { CheckCircle2 } from "lucide-react";
import { FACULTY } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

function FacultyCard({ f, index }) {
    const ref = useReveal();
    return (
        <article
            ref={ref}
            style={{ transitionDelay: `${index * 100}ms` }}
            data-testid={`faculty-card-${index}`}
            className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--asa-surface)] hover:border-[color:var(--asa-gold)]/40 hover:-translate-y-1 transition-[transform,border-color] duration-300"
        >
            <div className="relative aspect-[4/5] overflow-hidden">
                <img
                    src={f.photo}
                    alt={`${f.name} portrait`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--asa-bg)] via-[color:var(--asa-bg)]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--asa-gold)]">
                        {f.role}
                    </p>
                    <h3 className="font-heading mt-1 text-3xl text-white">
                        {f.name}
                    </h3>
                </div>
            </div>
            <div className="p-6 space-y-3">
                {f.highlights.map((h) => (
                    <div
                        key={h}
                        className="flex items-start gap-3 text-sm text-white/85"
                    >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--asa-gold)]" />
                        <span>{h}</span>
                    </div>
                ))}
                <div className="pt-4 mt-4 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)] mb-2">
                        Specialisation
                    </p>
                    <p className="text-sm text-[color:var(--asa-text-muted)]">
                        {f.specialization}
                    </p>
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
                            ✦ Meet the Faculty
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
                        Every session is designed and delivered by qualified
                        educators who have taught, mentored and worked at scale.
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
