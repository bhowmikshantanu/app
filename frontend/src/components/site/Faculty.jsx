import {
  BadgeCheck,
  Camera,
  ShieldCheck,
} from "lucide-react";

import { FACULTY } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

function FacultyCard({ f, index }) {
  const ref = useReveal();

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      data-testid={`faculty-card-${index}`}
      className="
        reveal group relative overflow-hidden
        rounded-[1.75rem]
        border border-[#E4D1C1]
        bg-[#FAF3EA]
        shadow-[0_16px_45px_rgba(70,42,29,0.09)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-purple-300
        hover:shadow-[0_26px_65px_rgba(70,42,29,0.16)]
      "
    >
      <div className="absolute left-0 top-0 z-20 h-1.5 w-full bg-gradient-to-r from-[#5A2A20] via-purple-700 to-[#F97316]" />

      <div
        className={`relative h-[300px] overflow-hidden sm:h-[320px] ${
          f.photoTransparent
            ? "bg-gradient-to-br from-[#F2E4D8] via-purple-100 to-orange-50"
            : "bg-[#EAD8C8]"
        }`}
      >
        <img
          src={f.photo}
          alt={f.name}
          className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
            f.photoTransparent
              ? "object-contain object-bottom drop-shadow-[0_15px_30px_rgba(57,28,20,0.25)]"
              : "object-cover object-top"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#321A2D]/95 via-[#321A2D]/20 to-transparent" />

        <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl" />

        {f.photoPlaceholder && (
          <span
            data-testid={`faculty-photo-placeholder-${index}`}
            className="
              absolute right-4 top-4
              inline-flex items-center gap-1.5
              rounded-full border border-orange-300/50
              bg-[#321A2D]/80 px-2.5 py-1
              text-[10px] font-bold uppercase
              tracking-[0.16em] text-orange-300
              backdrop-blur
            "
          >
            <Camera className="h-3 w-3" />
            Photo placeholder
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-orange-300">
            {f.role}
          </p>

          <h3 className="mt-1 font-heading text-[2rem] font-extrabold leading-none text-white">
            {f.name}
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-3.5 p-5 text-[14px]">
        <div className="rounded-xl border border-[#EADFD3] bg-[#FFFCF8] px-4 py-3">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#8A6C5E]">
            Qualification
          </p>

          <p className="mt-1 text-[15px] font-bold leading-6 text-[#38241D]">
            {f.qualification}
          </p>
        </div>

        {f.designation && (
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-purple-700">
              Designation
            </p>

            <p className="mt-1 text-[15px] font-bold leading-6 text-[#38241D]">
              {f.designation}
            </p>
          </div>
        )}

        {f.experience && (
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#8A6C5E]">
              Experience
            </p>

            <p className="mt-1 text-[14px] font-semibold leading-6 text-[#6A5147]">
              {f.experience}
            </p>
          </div>
        )}

        <div>
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#8A6C5E]">
            Roles
          </p>

          <ul className="grid gap-1.5">
            {f.roles.map((r) => (
              <li
                key={r}
                className="flex items-start gap-2 text-[14px] font-semibold leading-5 text-[#49362F]"
              >
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {f.certifications && f.certifications.length > 0 && (
          <div
            data-testid={`faculty-certifications-${index}`}
            className="
              rounded-2xl
              border border-purple-200
              bg-gradient-to-r from-purple-50 to-orange-50
              p-4
            "
          >
            <div className="mb-2.5 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-purple-700" />

              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-700">
                Professional Certifications
              </p>
            </div>

            <ul className="space-y-1.5">
              {f.certifications.map((c) => (
                <li
                  key={c}
                  data-testid={`faculty-cert-${index}-${c
                    .slice(0, 20)
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "-")}`}
                  className="text-[13px] font-semibold leading-5 text-[#49362F]"
                >
                  <span className="font-black text-[#F97316]">
                    ✦
                  </span>{" "}
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="border-t border-[#E4D1C1] pt-3.5">
          <p className="mb-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-[#8A6C5E]">
            Professional Badges
          </p>

          <div className="flex flex-wrap gap-2">
            {f.badges.map((b) => (
              <span
                key={b}
                data-testid={`faculty-badge-${index}-${b
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, "-")}`}
                className="
                  inline-flex items-center rounded-full
                  border border-orange-200
                  bg-orange-50
                  px-3 py-1
                  text-[11px] font-bold text-[#D95F0B]
                "
              >
                {b}
              </span>
            ))}
          </div>
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
      className="
        relative overflow-hidden
        bg-[#FFF9F3]
        py-20 lg:py-28
      "
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 grid items-end gap-7 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#F97316]">
              ✦ Meet Our Faculty
            </p>

            <h2 className="mt-4 font-heading text-[2.7rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#2D1B16] sm:text-5xl lg:text-6xl">
              Certified mentors.{" "}
              <span className="italic text-purple-700">
                Industry-grade
              </span>{" "}
              teaching.
            </h2>
          </div>

          <p className="text-[16px] font-semibold leading-7 text-[#6A5147] lg:col-span-4">
            A close-knit team of qualified educators who have taught, mentored
            and worked at scale—dedicated to your growth.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACULTY.map((f, i) => (
            <FacultyCard
              key={f.name}
              f={f}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
