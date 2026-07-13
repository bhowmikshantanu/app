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

function CourseCard({
  group,
  index,
  featured = false,
  accent = "orange",
}) {
  const ref = useReveal();
  const Icon = ICONS[group.icon] || GraduationCap;

  const hasAcademicDetails =
    Array.isArray(group.boards) &&
    group.boards.length > 0 &&
    Array.isArray(group.subjects) &&
    group.subjects.length > 0;

  const accentClasses =
    accent === "purple"
      ? {
          glow: "bg-purple-500/15 group-hover:bg-purple-500/25",
          icon: "border-purple-200 bg-purple-50 text-purple-700",
          label: "text-purple-700",
          border: "hover:border-purple-300",
          itemHover:
            "hover:border-purple-200 hover:bg-purple-50/80",
          dot: "bg-purple-700",
          check: "text-purple-700",
          note: "border-purple-600",
          link: "hover:text-purple-700",
        }
      : {
          glow: "bg-orange-500/15 group-hover:bg-orange-500/25",
          icon:
            "border-orange-200 bg-orange-50 text-[#F97316]",
          label: "text-[#E9650B]",
          border: "hover:border-orange-300",
          itemHover:
            "hover:border-orange-200 hover:bg-orange-50/80",
          dot: "bg-[#F97316]",
          check: "text-[#F97316]",
          note: "border-[#F97316]",
          link: "hover:text-[#F97316]",
        };

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      data-testid={`course-group-${group.id}`}
      className={`
        reveal group relative overflow-hidden rounded-[1.75rem]
        border border-[#E5D4C2] bg-[#FAF3EA] p-6
        shadow-[0_16px_48px_rgba(74,44,24,0.09)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_28px_75px_rgba(74,44,24,0.16)]
        md:p-7
        ${accentClasses.border}
        ${featured ? "ring-1 ring-orange-200" : ""}
      `}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-all duration-500 ${accentClasses.glow}`}
      />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#5B2A1D]/10 blur-3xl transition-all duration-500 group-hover:bg-purple-900/15" />

      <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#4A241B] via-purple-700 to-[#F97316]" />

      {featured && (
        <div className="absolute right-5 top-5 z-20 rounded-full bg-gradient-to-r from-[#4A241B] via-[#35135B] to-[#102B57] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-md">
          Popular
        </div>
      )}

      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div
            className={`
              flex h-14 w-14 items-center justify-center rounded-2xl
              border shadow-sm transition-all duration-500
              group-hover:rotate-3 group-hover:scale-110
              ${
                featured
                  ? "border-orange-400 bg-[#F97316] text-white"
                  : accentClasses.icon
              }
            `}
          >
            <Icon className="h-7 w-7" />
          </div>

          <span className="text-5xl font-black leading-none text-[#E8D8C8] transition-colors duration-300 group-hover:text-purple-200">
            0{index + 1}
          </span>
        </div>

        {group.subtitle && (
          <p
            className={`mb-2 pr-20 text-[11px] font-black uppercase tracking-[0.24em] ${accentClasses.label}`}
          >
            {group.subtitle}
          </p>
        )}

        <h3 className="max-w-xl font-heading text-[2rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#281B17] md:text-[2.2rem]">
          {group.title}
        </h3>

        {group.highlight && (
          <div className="mt-4 rounded-2xl border border-[#E8D8C8] bg-gradient-to-r from-[#FFF8EF] via-orange-50 to-purple-50/70 px-4 py-3">
            <p className="text-[15px] font-semibold leading-6 text-[#4A352D]">
              {group.highlight}
            </p>
          </div>
        )}

        {hasAcademicDetails ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#EADFD3] bg-[#FFFCF8] p-4 shadow-sm">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#7A6257]">
                Boards
              </p>

              <ul className="space-y-2.5">
                {group.boards.map((board) => (
                  <li
                    key={board}
                    className="flex items-center gap-2 text-[15px] font-bold leading-6 text-[#49362F]"
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${accentClasses.dot}`}
                    />
                    {board}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#EADFD3] bg-[#FFFCF8] p-4 shadow-sm">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#7A6257]">
                Subjects
              </p>

              <ul className="space-y-2.5">
                {group.subjects.map((subject) => (
                  <li
                    key={subject}
                    className="flex items-center gap-2 text-[15px] font-bold leading-6 text-[#49362F]"
                  >
                    <CheckCircle2
                      className={`h-4 w-4 shrink-0 ${accentClasses.check}`}
                    />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {group.items?.map((item) => (
              <li
                key={item}
                className={`
                  flex items-start gap-2.5 rounded-xl
                  border border-[#EADFD3] bg-[#FFFCF8]
                  px-3.5 py-3
                  text-[15px] font-semibold leading-6 text-[#49362F]
                  shadow-sm
                  transition-all duration-300
                  ${accentClasses.itemHover}
                `}
              >
                <CheckCircle2
                  className={`mt-1 h-4 w-4 shrink-0 ${accentClasses.check}`}
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {group.note && (
          <p
            className={`mt-5 border-l-2 pl-4 text-[15px] font-medium leading-6 text-[#6A5147] ${accentClasses.note}`}
          >
            {group.note}
          </p>
        )}

        <div className="mt-7 border-t border-[#E5D4C2] pt-5">
          <a
            href="#contact"
            className={`
              inline-flex items-center gap-2
              text-[15px] font-black text-[#3F241C]
              transition-all duration-300
              hover:gap-3
              ${accentClasses.link}
            `}
          >
            Enquire Now
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
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
      className="
        reveal group relative overflow-hidden rounded-2xl
        border border-[#EADFD3] bg-[#FFFCF8] p-4
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl
        sm:p-5
      "
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-300 group-hover:bg-orange-500/20" />

      <div className="relative flex items-center gap-3">
        <div
          className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-xl bg-gradient-to-br from-[#4A241B] via-[#35135B] to-[#102B57]
            text-white transition-all duration-300
            group-hover:scale-110
            group-hover:from-purple-700
            group-hover:to-[#F97316]
          "
        >
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[16px] font-extrabold leading-tight text-[#281B17]">
            {course.title}
          </p>

          <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#7A6257]">
            IT Track
          </p>
        </div>

        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-[#F97316]">
          <Clock className="h-3 w-3" />
          Soon
        </span>
      </div>
    </div>
  );
}

export default function Courses() {
  const [academic, ...rest] = COURSE_GROUPS;

  return (
    <section
      id="courses"
      data-testid="courses-section"
      className="relative overflow-hidden bg-[#FFF9F3] py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#F97316]">
              ✦ Our Programs
            </p>

            <h2 className="mt-4 max-w-3xl font-heading text-[2.7rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#281B17] sm:text-5xl lg:text-6xl">
              Courses that build{" "}
              <span className="italic text-[#F97316]">
                real confidence.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[17px] font-semibold leading-8 text-[#6A5147]">
            School academics, communication skills, personality development,
            interview preparation and career readiness—designed for practical
            progress.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          {academic && (
            <CourseCard
              group={academic}
              index={0}
              accent="orange"
            />
          )}

          {rest[0] && (
            <CourseCard
              group={rest[0]}
              index={1}
              featured
              accent="orange"
            />
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          {rest[1] && (
            <CourseCard
              group={rest[1]}
              index={2}
              accent="purple"
            />
          )}

          {rest[2] && (
            <CourseCard
              group={rest[2]}
              index={3}
              accent="purple"
            />
          )}
        </div>

        <div
          id="upcoming-it"
          data-testid="upcoming-it-block"
          className="
            relative mt-14 overflow-hidden rounded-[2rem]
            border border-purple-950/50
            bg-gradient-to-br from-[#2E1712] via-[#35135B] to-[#102B57]
            p-6 shadow-[0_25px_80px_rgba(49,25,19,0.28)]
            md:p-9
          "
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/25 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-purple-600/30 blur-[100px]" />

          <div className="relative">
            <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-300">
                  ✦ Coming Soon
                </p>

                <h3 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  Upcoming{" "}
                  <span className="italic text-orange-300">
                    IT Courses
                  </span>
                </h3>
              </div>

              <p className="max-w-md text-[15px] font-semibold leading-7 text-white/75">
                Enterprise-grade IT tracks designed by our founder—launching
                soon at AmbaShree Skills Academy.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {UPCOMING_IT_COURSES.map((course, index) => (
                <UpcomingCard
                  key={course.title}
                  course={course}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
