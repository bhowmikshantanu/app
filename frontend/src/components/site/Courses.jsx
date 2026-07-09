import {
    GraduationCap,
    BookOpen,
    School,
    Sigma,
    FlaskConical,
    MessagesSquare,
    Sparkles,
    Briefcase,
    Compass,
    ShieldCheck,
    ArrowUpRight,
} from "lucide-react";
import { COURSES } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

const ICONS = {
    GraduationCap,
    BookOpen,
    School,
    Sigma,
    FlaskConical,
    MessagesSquare,
    Sparkles,
    Briefcase,
    Compass,
    ShieldCheck,
};

function CourseCard({ course, index }) {
    const ref = useReveal();
    const Icon = ICONS[course.icon] || GraduationCap;
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${(index % 3) * 80}ms` }}
            data-testid={`course-card-${index}`}
            className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--asa-surface)] p-6 hover:border-[color:var(--asa-gold)]/50 hover:-translate-y-1 transition-[transform,border-color] duration-300"
        >
            <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--asa-gold)]/10 border border-[color:var(--asa-gold)]/25">
                    <Icon className="h-6 w-6 text-[color:var(--asa-gold)]" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)]">
                    {course.tag}
                </span>
            </div>
            <h3 className="font-heading mt-6 text-2xl text-white leading-tight">
                {course.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--asa-text-muted)]">
                {course.desc}
            </p>
            <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--asa-gold)] hover:gap-2.5 transition-[gap]"
            >
                Enquire
                <ArrowUpRight className="h-4 w-4" />
            </a>
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                    background:
                        "radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%)",
                }}
            />
        </div>
    );
}

export default function Courses() {
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
                        From school academics to enterprise Microsoft Intune
                        training — pick a track and grow with focused mentoring.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {COURSES.map((c, i) => (
                        <CourseCard key={c.title} course={c} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
