import {
    GraduationCap,
    MessagesSquare,
    Sparkles,
    Briefcase,
    ShieldCheck,
    Server,
    Terminal,
    Code2,
    Cloud,
    ArrowUpRight,
    Clock,
    CheckCircle2,
    BookOpen,
    Sigma,
    FlaskConical,
} from "lucide-react";
import { COURSE_GROUPS, UPCOMING_IT_COURSES } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

const ICONS = {
    GraduationCap,
    MessagesSquare,
    Sparkles,
    Briefcase,
    ShieldCheck,
    Server,
    Terminal,
    Code2,
    Cloud,
    BookOpen,
    Sigma,
    FlaskConical,
};

function AcademicCard({ group, index }) {
    const ref = useReveal();
    const Icon = ICONS[group.icon] || GraduationCap;
    return (
        <article
            ref={ref}
            style={{ transitionDelay: `${index * 90}ms` }}
            data-testid={`course-group-${group.id}`}
            className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--asa-surface)] p-8 hover:border-[color:var(--asa-gold)]/45 hover:-translate-y-1 transition-[transform,border-color] duration-300"
        >
            <div className="flex items-start justify-between mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--asa-gold)]/10 border border-[color:var(--asa-gold)]/25">
                    <Icon className="h-7 w-7 text-[color:var(--asa-gold)]" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)]">
                    {group.subtitle}
                </span>
            </div>

            <h3 className="font-heading text-3xl md:text-[2rem] text-white leading-tight">
                {group.title}
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)] mb-3">
                        Boards
                    </p>
                    <ul className="space-y-2">
                        {group.boards.map((b) => (
                            <li
                                key={b}
                                className="flex items-center gap-2 text-sm text-white/90"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--asa-gold)]" />
                                {b}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)] mb-3">
                        Subjects
                    </p>
                    <ul className="space-y-2">
                        {group.subjects.map((s) => (
                            <li
                                key={s}
                                className="flex items-center gap-2 text-sm text-white/90"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--asa-gold)]" />
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {group.note && (
                <p className="mt-6 text-xs text-[color:var(--asa-text-muted)] leading-relaxed">
                    {group.note}
                </p>
            )}

            <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--asa-gold)] hover:gap-2.5 transition-[gap]"
            >
                Enquire
                <ArrowUpRight className="h-4 w-4" />
            </a>
        </article>
    );
}

function ListCard({ group, index, badgeText }) {
    const ref = useReveal();
    const Icon = ICONS[group.icon] || Sparkles;
    return (
        <article
            ref={ref}
            style={{ transitionDelay: `${index * 90}ms` }}
            data-testid={`course-group-${group.id}`}
            className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--asa-surface)] p-8 hover:border-[color:var(--asa-gold)]/45 hover:-translate-y-1 transition-[transform,border-color] duration-300 flex flex-col"
        >
            <div className="flex items-start justify-between mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--asa-gold)]/10 border border-[color:var(--asa-gold)]/25">
                    <Icon className="h-7 w-7 text-[color:var(--asa-gold)]" />
                </div>
                {badgeText && (
                    <span
                        data-testid={`course-badge-${group.id}`}
                        className="rounded-full border border-[color:var(--asa-gold)]/40 bg-[color:var(--asa-gold)]/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-gold)]"
                    >
                        {badgeText}
                    </span>
                )}
            </div>

            <h3 className="font-heading text-3xl md:text-[2rem] text-white leading-tight">
                {group.title}
            </h3>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--asa-text-muted)]">
                {group.subtitle}
            </p>

            {group.highlight && (
                <div className="mt-5 rounded-xl border border-[color:var(--asa-gold)]/25 bg-[color:var(--asa-gold)]/5 px-4 py-3">
                    <p className="text-xs text-[color:var(--asa-gold)] leading-relaxed">
                        {group.highlight}
                    </p>
                </div>
            )}

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 flex-1">
                {group.items.map((it) => (
                    <li
                        key={it}
                        className="flex items-start gap-2 text-sm text-white/90"
                    >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--asa-gold)]" />
                        <span>{it}</span>
                    </li>
                ))}
            </ul>

            <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--asa-gold)] hover:gap-2.5 transition-[gap]"
            >
                Enquire
                <ArrowUpRight className="h-4 w-4" />
            </a>
        </article>
    );
}

function UpcomingCard({ course, index }) {
    const ref = useReveal();
    const Icon = ICONS[course.icon] || Sparkles;
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${index * 60}ms` }}
            data-testid={`upcoming-course-${index}`}
            className="reveal relative flex items-center gap-4 rounded-2xl border border-white/10 bg-[color:var(--asa-secondary)]/60 p-5 hover:border-[color:var(--asa-gold)]/45 transition-colors overflow-hidden"
        >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--asa-gold)]/10 border border-[color:var(--asa-gold)]/25">
                <Icon className="h-5 w-5 text-[color:var(--asa-gold)]" />
            </div>
            <div className="flex-1">
                <p className="text-white font-medium">{course.title}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)]">
                    IT Track
                </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-[color:var(--asa-gold)]/40 bg-[color:var(--asa-gold)]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--asa-gold)]">
                <Clock className="h-3 w-3" />
                Soon
            </span>
        </div>
    );
}

export default function Courses() {
    const [academic, ...rest] = COURSE_GROUPS;

    return (
        <section
            id="courses"
            data-testid="courses-section"
            className="relative py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--asa-gold)]">
                            ✦ Our Programs
                        </p>
                        <h2 className="font-heading mt-4 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
                            Courses that build{" "}
                            <span className="italic text-[color:var(--asa-gold)]">
                                real
                            </span>{" "}
                            confidence.
                        </h2>
                    </div>
                    <p className="max-w-md text-[color:var(--asa-text-muted)]">
                        Long-term, outcome-driven programmes across academics,
                        communication and career readiness — with an IT track on
                        the horizon.
                    </p>
                </div>

                {/* Row 1: Academic + Spoken English */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <AcademicCard group={academic} index={0} />
                    <ListCard group={rest[0]} index={1} />
                </div>

                {/* Row 2: Personality + Career */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <ListCard group={rest[1]} index={2} />
                    <ListCard group={rest[2]} index={3} />
                </div>

                {/* Upcoming IT Courses */}
                <div
                    id="upcoming-it"
                    data-testid="upcoming-it-block"
                    className="mt-14 rounded-3xl border border-white/10 bg-[color:var(--asa-secondary)]/40 p-8 md:p-10"
                >
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--asa-gold)]">
                                ✦ Coming Soon
                            </p>
                            <h3 className="font-heading mt-3 text-3xl sm:text-4xl text-white leading-tight">
                                Upcoming{" "}
                                <span className="italic text-[color:var(--asa-gold)]">
                                    IT Courses
                                </span>
                            </h3>
                        </div>
                        <p className="max-w-md text-sm text-[color:var(--asa-text-muted)]">
                            Enterprise-grade IT tracks designed by our founder —
                            launching soon at AmbaShree Skills Academy.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {UPCOMING_IT_COURSES.map((c, i) => (
                            <UpcomingCard key={c.title} course={c} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
