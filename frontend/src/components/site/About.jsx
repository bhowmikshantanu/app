import {
  Sparkles,
  Target,
  Rocket,
  HeartHandshake,
} from "lucide-react";

import { useReveal } from "@/hooks/useReveal";

const pillars = [
  {
    icon: Target,
    title: "Quality Education",
    desc: "Structured, concept-first learning across CBSE, ICSE and State Board syllabi.",
    accent: "orange",
  },
  {
    icon: Rocket,
    title: "Practical Learning",
    desc: "Hands-on assignments, live labs and industry-relevant workshops.",
    accent: "purple",
  },
  {
    icon: HeartHandshake,
    title: "Personal Mentoring",
    desc: "1:1 mentoring for spoken English, personality development and career growth.",
    accent: "brown",
  },
  {
    icon: Sparkles,
    title: "Corporate Readiness",
    desc: "Microsoft Intune training, interview prep and job-ready soft skills.",
    accent: "orange",
  },
];

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      data-testid="about-section"
      className="
        relative overflow-hidden
        bg-[#FFF8F1]
        py-20 lg:py-28
      "
    >
      <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div
            className="lg:col-span-6"
            ref={ref}
          >
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#F97316]">
              ✦ About Us
            </p>

            <h2
              className="
                mt-4 max-w-2xl
                font-heading
                text-[2.65rem] font-extrabold
                leading-[1.04]
                tracking-[-0.035em]
                text-[#2D1B16]
                sm:text-5xl
                lg:text-6xl
              "
            >
              A modern institute built for{" "}
              <span className="italic text-purple-700">
                real
              </span>{" "}
              outcomes.
            </h2>

            <div className="mt-8 space-y-5 text-[16px] font-medium leading-8 text-[#6A5147]">
              <p>
                <span className="font-extrabold text-[#321E18]">
                  AmbaShree Skills Academy &amp; Institute
                </span>{" "}
                is a premium learning destination built on a simple belief—
                education must go beyond textbooks. We combine{" "}
                <span className="font-bold text-purple-700">
                  academic excellence
                </span>{" "}
                for Classes 7–10 across CBSE, ICSE and State Board with
                future-ready skills the world genuinely rewards.
              </p>

              <p>
                Our programmes include{" "}
                <span className="font-bold text-[#321E18]">
                  Professional Spoken English, Personality Development,
                  Interview Preparation and Career Guidance
                </span>
                —delivered by qualified educators with real industry
                experience. This is not a short three-month English course; it
                is a long-term, mentor-led learning journey.
              </p>

              <p>
                Small batches, individual attention and a career-first
                mindset—that is the AmbaShree way.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "Small Batches",
                "Certified Faculty",
                "Career-First",
                "Modern Teaching",
              ].map((item, index) => (
                <span
                  key={item}
                  className={`
                    inline-flex items-center rounded-full
                    border px-4 py-2
                    text-[13px] font-extrabold
                    shadow-sm
                    ${
                      index % 2 === 0
                        ? "border-orange-200 bg-orange-50 text-[#D95F0B]"
                        : "border-purple-200 bg-purple-50 text-purple-700"
                    }
                  `}
                >
                  {item}
                </span>
              ))}
            </div>

            <div
              className="
                mt-10 overflow-hidden rounded-[1.75rem]
                border border-[#E7D6C7]
                bg-gradient-to-r
                from-[#4A241B]
                via-[#4A205F]
                to-[#28113F]
                p-6
                shadow-[0_20px_55px_rgba(63,30,20,0.18)]
              "
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">
                The AmbaShree Approach
              </p>

              <p className="mt-3 font-heading text-2xl font-bold leading-snug text-white">
                Learn with clarity. Practise with confidence. Grow with
                purpose.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
            {pillars.map((pillar, index) => (
              <PillarCard
                key={pillar.title}
                pillar={pillar}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar, index }) {
  const ref = useReveal();
  const Icon = pillar.icon;

  const styles = {
    orange: {
      icon: "border-orange-200 bg-orange-50 text-[#F97316]",
      glow: "bg-orange-400/15",
      topLine: "from-orange-500 to-orange-300",
      hoverBorder: "hover:border-orange-300",
    },
    purple: {
      icon: "border-purple-200 bg-purple-50 text-purple-700",
      glow: "bg-purple-500/15",
      topLine: "from-purple-700 to-purple-400",
      hoverBorder: "hover:border-purple-300",
    },
    brown: {
      icon: "border-[#D8BFB0] bg-[#F3E6DD] text-[#6B3828]",
      glow: "bg-[#8B4A33]/15",
      topLine: "from-[#6B3828] to-[#B6785F]",
      hoverBorder: "hover:border-[#CDAA98]",
    },
  };

  const currentStyle = styles[pillar.accent] || styles.orange;

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      data-testid={`about-pillar-${index}`}
      className={`
        reveal group relative overflow-hidden
        rounded-[1.6rem]
        border border-[#E8D9CB]
        bg-[#FFFCF8]
        p-6
        shadow-[0_14px_40px_rgba(70,42,29,0.07)]
        transition-all duration-400
        hover:-translate-y-2
        hover:shadow-[0_24px_60px_rgba(70,42,29,0.14)]
        ${currentStyle.hoverBorder}
      `}
    >
      <div
        className={`
          absolute left-0 top-0 h-1.5 w-full
          bg-gradient-to-r
          ${currentStyle.topLine}
        `}
      />

      <div
        className={`
          pointer-events-none absolute
          -right-12 -top-12
          h-36 w-36
          rounded-full blur-3xl
          opacity-70 transition-opacity duration-300
          group-hover:opacity-100
          ${currentStyle.glow}
        `}
      />

      <div className="relative">
        <div
          className={`
            mb-5 flex h-12 w-12
            items-center justify-center
            rounded-xl border
            shadow-sm
            transition-all duration-300
            group-hover:rotate-3 group-hover:scale-110
            ${currentStyle.icon}
          `}
        >
          <Icon className="h-6 w-6" />
        </div>

        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#9A7A6A]">
          0{index + 1}
        </p>

        <h3 className="font-heading text-[1.65rem] font-extrabold leading-tight text-[#2D1B16]">
          {pillar.title}
        </h3>

        <p className="mt-3 text-[15px] font-medium leading-7 text-[#6A5147]">
          {pillar.desc}
        </p>
      </div>
    </article>
  );
}
