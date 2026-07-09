import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
    const [i, setI] = useState(0);
    const total = TESTIMONIALS.length;

    useEffect(() => {
        const id = setInterval(() => setI((p) => (p + 1) % total), 6500);
        return () => clearInterval(id);
    }, [total]);

    const prev = () => setI((p) => (p - 1 + total) % total);
    const next = () => setI((p) => (p + 1) % total);
    const active = TESTIMONIALS[i];

    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="relative py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--asa-gold)]">
                            ✦ Student Stories
                        </p>
                        <h2 className="font-heading mt-4 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
                            What our{" "}
                            <span className="italic text-[color:var(--asa-gold)]">
                                learners
                            </span>{" "}
                            say.
                        </h2>
                        <p className="mt-6 text-[color:var(--asa-text-muted)] max-w-md">
                            Real feedback from students and professionals who
                            have grown with AmbaShree Skills Academy.
                        </p>

                        <div className="mt-8 flex items-center gap-3">
                            <button
                                type="button"
                                onClick={prev}
                                data-testid="testimonial-prev"
                                aria-label="Previous testimonial"
                                className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-[color:var(--asa-gold)]/60 hover:text-[color:var(--asa-gold)] transition-colors"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                type="button"
                                onClick={next}
                                data-testid="testimonial-next"
                                aria-label="Next testimonial"
                                className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-[color:var(--asa-gold)]/60 hover:text-[color:var(--asa-gold)] transition-colors"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                            <span className="ml-2 text-sm text-[color:var(--asa-text-muted)]">
                                {String(i + 1).padStart(2, "0")}
                                <span className="mx-1 text-white/30">/</span>
                                {String(total).padStart(2, "0")}
                            </span>
                        </div>
                    </div>

                    <div className="lg:col-span-7 relative">
                        <div
                            data-testid="testimonial-card"
                            className="relative rounded-3xl border border-white/10 bg-[color:var(--asa-surface)] p-8 md:p-10 overflow-hidden"
                        >
                            <Quote className="absolute top-6 right-6 h-16 w-16 text-[color:var(--asa-gold)]/10" />
                            <div className="flex items-center gap-1 text-[color:var(--asa-gold)]">
                                {Array.from({ length: 5 }).map((_, s) => (
                                    <Star
                                        key={s}
                                        className="h-4 w-4 fill-current"
                                    />
                                ))}
                            </div>
                            <p className="mt-6 font-heading text-2xl md:text-3xl leading-snug text-white">
                                “{active.quote}”
                            </p>
                            <div className="mt-8 flex items-center gap-4">
                                <img
                                    src={active.avatar}
                                    alt={active.name}
                                    className="h-14 w-14 rounded-full object-cover border-2 border-[color:var(--asa-gold)]/50"
                                />
                                <div>
                                    <p className="text-white font-semibold">
                                        {active.name}
                                    </p>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--asa-text-muted)]">
                                        {active.role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="mt-6 flex gap-2 justify-end">
                            {TESTIMONIALS.map((_, d) => (
                                <button
                                    key={d}
                                    onClick={() => setI(d)}
                                    aria-label={`Show testimonial ${d + 1}`}
                                    data-testid={`testimonial-dot-${d}`}
                                    className={`h-1.5 rounded-full transition-all ${
                                        d === i
                                            ? "w-8 bg-[color:var(--asa-gold)]"
                                            : "w-3 bg-white/20 hover:bg-white/40"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
