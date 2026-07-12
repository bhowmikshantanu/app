import { Camera, Star, CheckCircle2, Sparkles } from "lucide-react";
import { FEATURED_STUDENT } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

export default function FeaturedStudent() {
    const ref = useReveal();
    return (
        <section
            id="featured-student"
            data-testid="featured-student-section"
            className="relative py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div
                    ref={ref}
                    className="reveal relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch rounded-3xl border border-white/10 bg-[color:var(--asa-surface)] overflow-hidden"
                >
                    {/* Photo */}
                    <div className="lg:col-span-5 relative aspect-[4/5] lg:aspect-auto min-h-[420px] overflow-hidden">
                        <img
                            src={FEATURED_STUDENT.photo}
                            alt="Featured student placeholder"
                            className="h-full w-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--asa-bg)]/80 via-[color:var(--asa-bg)]/30 to-transparent" />
                        {FEATURED_STUDENT.photoPlaceholder && (
                            <span
                                data-testid="featured-student-placeholder-badge"
                                className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--asa-bg)]/80 backdrop-blur border border-[color:var(--asa-gold)]/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-gold)]"
                            >
                                <Camera className="h-3 w-3" />
                                Reserved photo slot
                            </span>
                        )}
                        <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2 rounded-2xl glass px-4 py-3">
                            <Star className="h-4 w-4 text-[color:var(--asa-gold)] fill-current" />
                            <p className="text-xs text-white/90">
                                {FEATURED_STUDENT.tagline}
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--asa-gold)]">
                            ✦ Students in Action
                        </p>
                        <h2 className="font-heading mt-4 text-4xl sm:text-5xl text-white leading-[1.05]">
                            Meet our{" "}
                            <span className="italic text-[color:var(--asa-gold)]">
                                featured
                            </span>{" "}
                            success story.
                        </h2>
                        <p className="mt-6 text-[color:var(--asa-text-muted)] leading-relaxed max-w-xl">
                            {FEATURED_STUDENT.story}
                        </p>

                        <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                            {FEATURED_STUDENT.highlights.map((h) => (
                                <li
                                    key={h}
                                    className="flex items-start gap-2.5 text-sm text-white/90"
                                >
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--asa-gold)]" />
                                    <span>{h}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--asa-gold)]/40 bg-[color:var(--asa-gold)]/10 px-4 py-2 text-xs text-[color:var(--asa-gold)]">
                                <Sparkles className="h-3.5 w-3.5" />
                                Learning • Growing • Succeeding    
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
