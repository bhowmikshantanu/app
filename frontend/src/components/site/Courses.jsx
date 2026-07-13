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

function CourseCard({ group, index, featured = false }) {
  const ref = useReveal();
  const Icon = ICONS[group.icon] || GraduationCap;

  const hasAcademicDetails =
    Array.isArray(group.boards) &&
    group.boards.length > 0 &&
    Array.isArray(group.subjects) &&
    group.subjects.length > 0;

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      data-testid={`course-group-${group.id}`}
      className={`
        reveal group relative flex h-full flex-col overflow-hidden
        rounded-[1.75rem] border bg-white p-6
        shadow-[0_14px_45px_rgba(15,23,42,0.07)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_24px_65px_rgba(15,23,42,0.14)]
        md:p-7
        ${
          featured
            ? "border-orange-200 ring-1 ring-orange-100"
            : "border-slate-200/80 hover:border-orange-200"
        }
      `}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#102B57]/10 blur-3xl transition-all duration-500 group-hover:bg-[#102B57]/15" />

      {featured && (
        <div className="absolute right-5 top-5 z-20 rounded-full bg-[#102B57] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white shadow-md">
          Popular
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5">
          <div
            className={`
              flex h-14 w-14 items-center justify-center rounded-2xl
              shadow-sm transition-all duration-500
              group-hover:rotate-3 group-hover:scale-110
              ${
                featured
                  ? "bg-[#F97316] text-white"
                  : "border border-orange-100 bg-orange-50 text-[#F97316]"
              }
            `}
          >
            <Icon className="h-7 w-7" />
          </div>
        </div>

        {group.subtitle && (
          <p className="mb-2 pr-20 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#F97316]">
            {group.subtitle}
          </p>
        )}

        <h3 className="font-heading text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 md:text-[2rem]">
          {group.title}
        </h3>

        {group.highlight && (
          <div className="mt-4 rounded-2xl border border-orange-100 bg-orange-50/80 px-4 py-3">
            <p className="text-sm font-medium leading-6 text-slate-700">
              {group.highlight}
            </p>
          </div>
        )}

        {hasAcademicDetails ? (
          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5">
            <div>
              <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-slate-400">
                Boards
              </p>

              <ul className="space-y-2.5">
                {group.boards.map((board) => (
                  <li
                    key={board}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
                    {board}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-slate-400">
                Subjects
              </p>

              <ul className="space-y-2.5">
                {group.subjects.map((subject) => (
                  <li
                    key={subject}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F97316]" />
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
                className="
                  flex items-start gap-2.5 rounded-xl
                  border border-slate-100 bg-slate-50/70
                  px-3 py-2.5
                  text-sm font-medium leading-5 text-slate-700
                  transition-all duration-300
                  hover:border-orange-200 hover:bg-orange-50/70
                "
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {group.note && (
          <p className="mt-5 border-l-2 border-[#F97316] pl-4 text-sm leading-6 text-slate-500">
            {group.note}
          </p>
        )}

        <a
          href="#contact"
          className="
            mt-auto inline-flex items-center gap-2 pt-7
            text-sm font-extrabold text-[#102B57]
            transition-all duration-300
            hover:gap-3 hover:text-[#F97316]
          "
        >
          Enquire Now
          <ArrowUpRight className="h-4 w-4" />
        </a>
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
        border border-white/10 bg-white p-4
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl
        sm:p-5
      "
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl transition-all duration-300 group-hover:bg-orange-500/20" />

      <div className="relative flex items-center gap-3">
        <div
          className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-xl bg-[#102B57] text-white
            transition-all duration-300
            group-hover:scale-110 group-hover:bg-[#F97316]
          "
        >
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-bold leading-tight text-slate-950">
            {course.title}
          </p>

          <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
            IT Track
          </p>
        </div>

        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-orange-100 bg-orange-50 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-[#F97316]">
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
      className="relative overflow-hidden bg-[#F8FAFC] py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-[#102B57]/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-orange-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#F97316]">
              ✦ Our Programs
            </p>

            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
              Courses that build{" "}
              <span className="italic text-[#F97316]">
                real confidence.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-600">
            School academics, communication skills, personality development,
            interview preparation and career readiness—designed for practical
            progress.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {academic && (
            <CourseCard
              group={academic}
              index={0}
            />
          )}

          {rest[0] && (
            <CourseCard
              group={rest[0]}
              index={1}
              featured
            />
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {rest[1] && (
            <CourseCard
              group={rest[1]}
              index={2}
            />
          )}

          {rest[2] && (
            <CourseCard
              group={rest[2]}
              index={3}
            />
          )}
        </div>

        <div
          id="upcoming-it"
          data-testid="upcoming-it-block"
          className="
            relative mt-14 overflow-hidden rounded-[2rem]
            border border-slate-800 bg-slate-950
            p-6 shadow-[0_25px_80px_rgba(15,23,42,0.22)]
            md:p-9
          "
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />

          <div className="relative">
            <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-orange-300">
                  ✦ Coming Soon
                </p>

                <h3 className="mt-3 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Upcoming{" "}
                  <span className="italic text-orange-300">
                    IT Courses
                  </span>
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-400">
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
