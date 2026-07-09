import {
    Award,
    Wrench,
    Monitor,
    Compass,
    BadgeIndianRupee,
    Users,
    UserCheck,
    Handshake,
    Briefcase,
} from "lucide-react";
import { WHY_CHOOSE } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

const ICONS = {
    Award,
    Wrench,
    Monitor,
    Compass,
    BadgeIndianRupee,
    Users,
    UserCheck,
    Handshake,
    Briefcase,
};

function BentoCard({ item, index, className = "" }) {
    const ref = useReveal();
    const Icon = ICONS[item.icon] || Award;
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${index * 70}ms` }}
            data-testid={`why-card-${index}`}
            className={`reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--asa-surface)] p-8 hover:border-[color:var(--asa-gold)]/40 hover:-translate-y-1 transition-[transform,border-color] duration-300 ${className}`}
        >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--asa-secondary)] border border-white/10 mb-6">
                <Icon className="h-7 w-7 text-[color:var(--asa-gold)]" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl text-white">
                {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--asa-text-muted)] max-w-md">
                {item.desc}
            </p>

            <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity"
                style={{
                    background:
                        "radial-gradient(circle, rgba(212,175,55,0.12), transparent 70%)",
                }}
            />
        </div>
    );
}

export default function WhyChooseUs() {
    // 8 cards — clean 4-column grid on desktop, symmetric.
    const layout = [
        "md:col-span-1 lg:col-span-1",
        "md:col-span-1 lg:col-span-1",
        "md:col-span-1 lg:col-span-1",
        "md:col-span-1 lg:col-span-1",
        "md:col-span-1 lg:col-span-1",
        "md:col-span-1 lg:col-span-1",
        "md:col-span-1 lg:col-span-1",
        "md:col-span-1 lg:col-span-1",
    ];

    return (
        <section
            id="why"
            data-testid="why-section"
            className="relative py-24 lg:py-32 bg-[color:var(--asa-secondary)]/30 border-y border-white/5"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="max-w-3xl mb-14">
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--asa-gold)]">
                        ✦ Why AmbaShree
                    </p>
                    <h2 className="font-heading mt-4 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
                        Eight reasons students &amp; parents{" "}
                        <span className="italic text-[color:var(--asa-gold)]">
                            trust
                        </span>{" "}
                        us.
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {WHY_CHOOSE.map((w, i) => (
                        <BentoCard
                            key={w.title}
                            item={w}
                            index={i}
                            className={layout[i]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
