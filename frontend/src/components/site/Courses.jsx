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

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      data-testid={`course-group-${group.id}`}
      className={`
        reveal group relative overflow-hidden rounded-[2rem]
        border border-slate-200/80 bg-white
        p-7 md:p-8
        shadow-[0_15px_50px_rgba(15,23,42,0.07)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)]
        ${featured ? "lg:scale-[1.01]" : ""}
      `}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red-500/10 blur-3xl transition-all duration-500 group-hover:bg-red-500/20" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-700/10 blur-3xl transition-all duration-500 group-hover:bg-blue-700/20" />

      <div className="relative z-10">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div
            className="
              flex h-14 w-14 items-center justify-center rounded-2xl
              border border-red-100 bg-red-50
              text-red-500
              shadow-sm
              transition-all duration-500
              group-hover:rotate-3 group-hover:scale-110
            "
          >
            <Icon className="h-7 w-7" />
          </div>

          {featured && (
            <span className="rounded-full bg-slate-950 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
              Popular
            </span>
          )}
        </div>

        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-red-500">
          {group.subtitle}
        </p>

        <h3 className="font-heading text-3xl font-bold leading-tight text-slate-950 md:text-[2rem]">
          {group.title}
        </h3>

        {group.highlight && (
          <div className="mt-5 rounded-2xl border border-red-100 bg-red-50/70 px-4 py-3">
            <p className="text-sm leading-relaxed text-slate-700">
              {group.highlight}
            </p>
          </div>
        )}

        {group.boards && group.subjects ? (
          <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-5">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Boards
              </p>

              <ul className="space-y-2.5">
                {group.boards.map((board) => (
                  <li
                    key={board}
                    className="flex items-center gap-2 text-sm font-medium text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    {board}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Subjects
              </p>

              <ul className="space-y-2.5">
                {group.subjects.map((subject) => (
                  <li
                    key={subject}
                    className="flex items-center gap-2 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-red-500" />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {group.items?.map((item) => (
              <li
                key={item}
                className="
                  flex items-start gap-2.5 rounded-xl
                  border border-slate-100 bg-slate-50/70
                  px-3 py-3
                  text-sm font-medium text-slate-700
                  transition-all duration-300
                  hover:border-red-100 hover:bg-red-50/50
                "
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {group.note && (
          <p className="mt-6 border-l-2 border-red-400 pl-4 text-sm leading-relaxed text-slate-500">
            {group.note}
          </p>
        )}

        <a
          href="#contact"
          className="
            mt-8 inline-flex items-center gap-2
            text-sm font-bold text-slate-950
            transition-all duration-300
            hover:gap-3 hover:text-red-500
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
        reveal group relative overflow-hidden
        rounded-2xl border border-slate-200
        bg-white p-5
        shadow-sm
        transition-all duration-400
        hover:-translate-y-1
        hover:border-red-200
        hover:shadow-xl
      "
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-500/10 blur-2xl transition-all group-hover:bg-red-500/20" />

      <div className="relative flex items-center gap-4">
        <div
          className="
            flex h-12 w-12 shrink-0 items-center justify-center
            rounded-xl bg-slate-950 text-white
            transition-all duration-300
            group-hover:scale-110 group-hover:bg-red-500
          "
        >
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-bold text-slate-950">{course.title}</p>

          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
            IT Track
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-red-500">
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
      className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-900/5 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-red-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              ✦ Our Programs
            </p>

            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.05] text-slate-950 sm:text-5xl lg:text-6xl">
              Courses that build{" "}
              <span className="italic text-red-500">real confidence.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-slate-600">
            School academics, communication skills, personality development,
            interview preparation and career readiness — designed for practical
            progress.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <CourseCard group={academic} index={0} />

          {rest[0] && (
            <CourseCard
              group={rest[0]}
              index={1}
              featured
            />
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {rest[1] && <CourseCard group={rest[1]} index={2} />}
          {rest[2] && <CourseCard group={rest[2]} index={3} />}
        </div>

        <div
          id="upcoming-it"
          data-testid="upcoming-it-block"
          className="
            relative mt-16 overflow-hidden rounded-[2rem]
            border border-slate-200
            bg-slate-950
            p-7 md:p-10
            shadow-[0_25px_80px_rgba(15,23,42,0.2)]
          "
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-500/20 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />

          <div className="relative">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">
                  ✦ Coming Soon
                </p>

                <h3 className="mt-3 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Upcoming{" "}
                  <span className="italic text-red-400">IT Courses</span>
                </h3>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-slate-400">
                Enterprise-grade IT tracks designed by our founder — launching
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
