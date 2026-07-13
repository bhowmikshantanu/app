import {
  AppWindow,
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  BriefcaseBusiness,
  LayoutDashboard,
  MessageCircle,
  Smartphone,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";

import { CONTACT } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

const solutions = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Simple Android and mobile-first applications for local businesses, service providers and growing startups.",
    accent: "orange",
  },
  {
    icon: AppWindow,
    title: "Web Apps",
    description:
      "Responsive web applications, customer portals and practical digital platforms built around your workflow.",
    accent: "purple",
  },
  {
    icon: Store,
    title: "Small Business Software",
    description:
      "Affordable software for billing, inventory, enquiries, records, customers and day-to-day business operations.",
    accent: "brown",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Management Tools",
    description:
      "Simple dashboards and internal management systems that help teams track work, data and performance.",
    accent: "purple",
  },
  {
    icon: Bot,
    title: "Automation Tools",
    description:
      "Custom tools that reduce repetitive work, organise information and make small business processes faster.",
    accent: "orange",
  },
  {
    icon: Blocks,
    title: "Startup MVPs",
    description:
      "Practical first versions of startup ideas for testing, demonstrations, early users and business validation.",
    accent: "brown",
  },
];

function SolutionCard({ item, index }) {
  const ref = useReveal();
  const Icon = item.icon;

  const styles = {
    orange: {
      icon: "border-orange-200 bg-orange-50 text-[#F97316]",
      line: "from-orange-500 to-orange-300",
      glow: "bg-orange-400/15",
      hover: "hover:border-orange-300",
    },
    purple: {
      icon: "border-purple-200 bg-purple-50 text-purple-700",
      line: "from-purple-700 to-purple-400",
      glow: "bg-purple-500/15",
      hover: "hover:border-purple-300",
    },
    brown: {
      icon: "border-[#D8BFB0] bg-[#F3E6DD] text-[#6B3828]",
      line: "from-[#6B3828] to-[#B6785F]",
      glow: "bg-[#8B4A33]/15",
      hover: "hover:border-[#CDAA98]",
    },
  };

  const currentStyle = styles[item.accent] || styles.orange;

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`
        reveal group relative overflow-hidden
        rounded-[1.6rem]
        border border-[#E7D7C9]
        bg-[#FFFCF8]
        p-6
        shadow-[0_14px_42px_rgba(70,42,29,0.07)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_62px_rgba(70,42,29,0.14)]
        ${currentStyle.hover}
      `}
    >
      <div
        className={`
          absolute left-0 top-0 h-1.5 w-full
          bg-gradient-to-r
          ${currentStyle.line}
        `}
      />

      <div
        className={`
          pointer-events-none absolute
          -right-14 -top-14
          h-40 w-40 rounded-full blur-3xl
          transition-all duration-500
          ${currentStyle.glow}
        `}
      />

      <div className="relative">
        <div
          className={`
            flex h-14 w-14 items-center justify-center
            rounded-2xl border shadow-sm
            transition-all duration-300
            group-hover:rotate-3 group-hover:scale-110
            ${currentStyle.icon}
          `}
        >
          <Icon className="h-7 w-7" />
        </div>

        <p className="mt-6 text-[10px] font-black uppercase tracking-[0.22em] text-[#9A7A6A]">
          Digital Solution 0{index + 1}
        </p>

        <h3 className="mt-2 font-heading text-[1.85rem] font-extrabold leading-tight text-[#2D1B16]">
          {item.title}
        </h3>

        <p className="mt-3 text-[15px] font-medium leading-7 text-[#6A5147]">
          {item.description}
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 text-[15px] font-black text-[#4A241B] transition hover:gap-3 hover:text-[#F97316]"
        >
          Discuss Your Requirement
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export default function DigitalSolutions() {
  return (
    <section
      id="digital-solutions"
      data-testid="digital-solutions-section"
      className="relative overflow-hidden bg-[#FAF3EA] py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#F97316]">
              ✦ Digital Solutions
            </p>

            <h2 className="mt-4 max-w-4xl font-heading text-[2.7rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#2D1B16] sm:text-5xl lg:text-6xl">
              Have an idea?{" "}
              <span className="italic text-purple-700">
                Let&apos;s build it.
              </span>
            </h2>
          </div>

          <p className="text-[16px] font-semibold leading-8 text-[#6A5147] lg:col-span-4">
            Affordable apps, software and smart digital tools for small
            businesses, organisations and growing startups.
          </p>
        </div>

        <div
          className="
            mt-10 overflow-hidden rounded-[2rem]
            bg-gradient-to-r from-[#4A241B] via-[#4A205F] to-[#28113F]
            p-6 text-white
            shadow-[0_24px_70px_rgba(49,25,19,0.25)]
            md:p-8
          "
        >
          <div className="grid gap-7 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Sparkles className="h-6 w-6 text-orange-300" />
                </div>

                <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">
                  Practical Technology for Growing Businesses
                </p>
              </div>

              <p className="mt-5 max-w-3xl font-heading text-2xl font-bold leading-snug text-white sm:text-3xl">
                Small solutions can create a big difference in how your
                organisation works, serves customers and grows.
              </p>
            </div>

            <a
              href={`https://wa.me/${CONTACT.whatsappRaw}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-[#EA580C] lg:col-span-4"
            >
              <MessageCircle className="h-5 w-5" />
              Discuss Your Idea
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <SolutionCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: BriefcaseBusiness,
              title: "Small Organisations",
            },
            {
              icon: Store,
              title: "Local Businesses",
            },
            {
              icon: Sparkles,
              title: "Growing Startups",
            },
            {
              icon: Wrench,
              title: "Custom Requirements",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-2xl border border-[#E7D7C9] bg-[#FFF9F3] px-4 py-4 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="font-extrabold text-[#49362F]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
