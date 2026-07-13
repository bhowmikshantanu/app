import {
  BadgeIndianRupee,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { CONTACT } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

const academicFees = [
  {
    classes: "Classes 1–7",
    fee: "₹600",
    period: "per month",
    icon: BookOpen,
    description: "Foundation learning and regular academic support.",
  },
  {
    classes: "Classes 8–10",
    fee: "₹1,000",
    period: "per month",
    icon: GraduationCap,
    description: "Focused academic coaching with concept clarity.",
    featured: true,
  },
  {
    classes: "Classes 11–12",
    fee: "₹1,500",
    period: "per month",
    icon: Sparkles,
    description: "Maths and Science coaching for senior classes.",
  },
];

const skillPackages = [
  {
    title: "Spoken English",
    fee: "₹5,500",
    period: "Complete Package",
    points: [
      "Grammar in conversation",
      "Vocabulary building",
      "Public speaking",
      "Confidence building",
    ],
  },
  {
    title: "Complete Career Package",
    fee: "₹3,500",
    period: "Complete Package",
    points: [
      "Personality Development",
      "Career Guidance",
      "Interview Preparation",
      "Communication & confidence",
    ],
  },
];

function AcademicFeeCard({ item, index }) {
  const ref = useReveal();
  const Icon = item.icon;

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className={`
        reveal group relative overflow-hidden rounded-[1.75rem]
        border bg-[#FAF3EA] p-6
        shadow-[0_16px_45px_rgba(70,42,29,0.08)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_26px_65px_rgba(70,42,29,0.15)]
        ${
          item.featured
            ? "border-orange-300 ring-2 ring-orange-100"
            : "border-[#E4D1C1] hover:border-purple-300"
        }
      `}
    >
      <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#4A241B] via-purple-700 to-[#F97316]" />

      {item.featured && (
        <span className="absolute right-5 top-5 rounded-full bg-[#F97316] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
          Popular
        </span>
      )}

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-[#F97316]">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mt-6 font-heading text-[2rem] font-extrabold text-[#2D1B16]">
        {item.classes}
      </h3>

      <div className="mt-5 flex items-end gap-2">
        <span className="text-4xl font-black text-[#F97316]">
          {item.fee}
        </span>

        <span className="pb-1 text-sm font-bold text-[#7A6257]">
          {item.period}
        </span>
      </div>

      <p className="mt-4 text-[15px] font-medium leading-7 text-[#6A5147]">
        {item.description}
      </p>
    </article>
  );
}

function SkillPackageCard({ item, index }) {
  const ref = useReveal();

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className="
        reveal relative overflow-hidden rounded-[1.75rem]
        border border-purple-200
        bg-gradient-to-br from-[#FFF9F3] via-purple-50 to-orange-50
        p-6 shadow-[0_16px_45px_rgba(70,42,29,0.08)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_26px_65px_rgba(70,42,29,0.15)]
      "
    >
      <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-purple-500/15 blur-3xl" />

      <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-700">
        Skills Package
      </p>

      <h3 className="mt-3 font-heading text-[2rem] font-extrabold leading-tight text-[#2D1B16]">
        {item.title}
      </h3>

      <div className="mt-5">
        <span className="text-4xl font-black text-[#F97316]">
          {item.fee}
        </span>

        <p className="mt-1 text-sm font-bold text-[#7A6257]">
          {item.period}
        </p>
      </div>

      <ul className="mt-6 grid gap-3">
        {item.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-[15px] font-semibold text-[#49362F]"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function FeeStructure() {
  return (
    <section
      id="fees"
      data-testid="fee-structure-section"
      className="relative overflow-hidden bg-[#FFF9F3] py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-36 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#F97316]">
            ✦ Affordable Learning
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl font-heading text-[2.7rem] font-extrabold leading-[1.05] text-[#2D1B16] sm:text-5xl lg:text-6xl">
            Simple and transparent{" "}
            <span className="italic text-purple-700">
              fee structure.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[17px] font-semibold leading-8 text-[#6A5147]">
            Quality education and practical skill development at fees designed
            to remain accessible for local families and learners.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {academicFees.map((item, index) => (
            <AcademicFeeCard
              key={item.classes}
              item={item}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {skillPackages.map((item, index) => (
            <SkillPackageCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        <div
          className="
            mt-8 grid gap-5 rounded-[1.75rem]
            bg-gradient-to-r from-[#4A241B] via-[#4A205F] to-[#28113F]
            p-6 text-white
            shadow-[0_22px_65px_rgba(49,25,19,0.25)]
            md:grid-cols-3 md:items-center
          "
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <BadgeIndianRupee className="h-6 w-6 text-orange-300" />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-300">
                Registration
              </p>

              <p className="mt-1 text-xl font-black">
                ₹100 only
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Clock className="h-6 w-6 text-orange-300" />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-300">
                Free Demo
              </p>

              <p className="mt-1 text-xl font-black">
                2 Days
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${CONTACT.whatsappRaw}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-[#EA580C]"
          >
            <MessageCircle className="h-5 w-5" />
            Enquire on WhatsApp
          </a>
        </div>

        <p className="mt-5 text-center text-sm font-semibold text-[#7A6257]">
          Fees may be revised for special batches, additional subjects or
          customised learning requirements.
        </p>
      </div>
    </section>
  );
}
