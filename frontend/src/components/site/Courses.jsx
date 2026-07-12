import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock,
  Cloud,
  Code2,
  FlaskConical,
  GraduationCap,
  MessagesSquare,
  Server,
  ShieldCheck,
  Sigma,
  Sparkles,
  Terminal,
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
      className="reveal group relative overflow-hidden rounded-[2rem] border border-[#102B57]/10 bg-white p-6 shadow-[0_20px_55px_rgba(16,43,87,0.09)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(16,43,87,0.16)] sm:p-8"
    >
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-100/70 transition duration-500 group-hover:scale-125" />

      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102B57] text-white shadow-lg">
            <Icon className="h-7 w-7" />
          </div>

          {group.subtitle && (
            <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#F97316]">
              {group.subtitle}
            </span>
          )}
        </div>

        <h3 className="text-3xl font-black leading-tight tracking-[-0.03em] text-[#102B57]">
          {group.title}
        </h3>

        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          {group.boards?.length > 0 && (
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">
                Boards
              </p>

              <ul className="space-y-2">
                {group.boards.map((board) => (
                  <li
                    key={board}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
                    {board}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {group.subjects?.length > 0 && (
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">
                Subjects
              </p>

              <ul className="space-y-2">
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
          )}
        </div>

        {group.note && (
          <p className="mt-6 rounded-2xl border border-[#102B57]/10 bg-[#FFF8EC] px-4 py-3 text-sm leading-6 text-slate-600">
            {group.note}
          </p>
        )}

        <a
          href="#contact"
          className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#F97316] transition hover:gap-3"
        >
          Enquire Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
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
      className="reveal group relative overflow-hidden rounded-[2rem] border border-[#102B57]/10 bg-white p-6 shadow-[0_20px_55px_rgba(16,43,87,0.08)] transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_28px_70px_rgba(16,43,87,0.15)] sm:p-8"
    >
      <div className="absolute bottom-0 right-0 h-28 w-28 rounded-tl-full bg-orange-50 transition duration-500 group-hover:bg-orange-100" />

      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-[#F97316]">
            <Icon className="h-7 w-7" />
          </div>

          {badgeText && (
            <span className="rounded-full bg-[#102B57] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
              {badgeText}
            </span>
          )}
        </div>

        <h3 className="text-3xl font-black leading-tight tracking-[-0.03em] text-[#102B57]">
          {group.title}
        </h3>

        {group.subtitle && (
          <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-[#F97316]">
            {group.subtitle}
          </p>
        )}

        {group.highlight && (
          <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3">
            <p className="text-sm font-semibold leading-6 text-[#9A4B0D]">
              {group.highlight}
            </p>
          </div>
        )}

        {group.items?.length > 0 && (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm font-semibold leading-6 text-slate-700"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#F97316]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <a
          href="#contact"
          className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#F97316] transition hover:gap-3"
        >
          Enquire Now
          <ArrowRight className="h-4 w-4" />
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
      className="reveal flex items-center gap-4 rounded-2xl border border-[#102B57]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102B57] text-white">
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-black text-[#102B57]">{course.title}</p>
        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          IT Track
        </p>
      </div>

      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-[#F97316]">
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
      className="relative overflow-hidden bg-[#FFF8EC] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange-200/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-sky-200/30 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F97316]">
              Our Programs
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[#102B57] sm:text-5xl lg:text-6xl">
              Courses that build{" "}
              <span className="text-[#F97316]">real confidence.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-600">
            School academics, communication skills, personality development,
            interview preparation and career readiness—designed for practical
            progress.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AcademicCard group={academic} index={0} />
          <ListCard group={rest[0]} index={1} badgeText="Popular" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ListCard group={rest[1]} index={2} />
          <ListCard group={rest[2]} index={3} />
        </div>

        <div
          id="upcoming-it"
          data-testid="upcoming-it-block"
          className="mt-14 rounded-[2rem] bg-[#102B57] p-6 shadow-[0_30px_75px_rgba(16,43,87,0.24)] sm:p-8 lg:p-10"
        >
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-300">
                Coming Soon
              </p>

              <h3 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Upcoming{" "}
                <span className="text-orange-300">IT Courses</span>
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-300">
              Enterprise-grade IT learning tracks planned for AmbaShree Skills
              Academy, with practical and career-focused training.
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
    </section>
  );
}
