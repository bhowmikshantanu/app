import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { CONTACT, GALLERY } from "@/lib/data";

const journey = [
  "Classes 7–10",
  "Spoken English",
  "Personality Development",
  "Interview Preparation",
  "Career Guidance",
];

const highlights = [
  "Personal Attention",
  "Practical Learning",
  "Career Focused",
];

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative isolate overflow-hidden bg-[#fffaf2] pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,43,87,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(16,43,87,0.045) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        <div className="absolute -left-24 top-28 h-[360px] w-[360px] rounded-full bg-orange-200/40 blur-[100px]" />

        <div className="absolute -right-28 top-12 h-[430px] w-[430px] rounded-full bg-sky-200/50 blur-[110px]" />

        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-amber-100/60 blur-[100px]" />
      </div>

      {/* Laddu Gopal Blessing */}
      <div
        data-testid="laddu-gopal-corner"
        className="absolute right-4 top-24 z-30 hidden items-center gap-3 rounded-2xl border border-amber-300/50 bg-white/90 px-3 py-3 shadow-xl backdrop-blur-md lg:flex xl:right-8"
      >
        <div className="h-16 w-16 overflow-hidden rounded-xl border-2 border-amber-300 bg-amber-50 p-1 shadow-inner">
          <img
            src="/faculty/laddu-gopal.jpg"
            alt="Laddu Gopal"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        <div className="pr-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#F97316]">
            Blessings
          </p>

          <p className="mt-1 text-sm font-semibold italic text-[#102B57]">
            With the Grace of
          </p>

          <p className="font-black text-amber-600">Laddu Gopal</p>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:pb-24">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#F97316]" />

            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#102B57]">
              Premium Skills Academy
            </span>
          </div>

          {/* Mobile Laddu Gopal */}
          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-amber-200 bg-white/80 p-3 shadow-sm lg:hidden">
            <div className="h-14 w-14 overflow-hidden rounded-xl border-2 border-amber-300 p-1">
              <img
                src="/faculty/laddu-gopal.jpg"
                alt="Laddu Gopal"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F97316]">
                Blessings
              </p>

              <p className="text-sm italic text-[#102B57]">
                With the Grace of{" "}
                <span className="font-black not-italic text-amber-600">
                  Laddu Gopal
                </span>
              </p>
            </div>
          </div>

          <h1
            data-testid="hero-heading"
            className="mt-8 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.045em] text-[#102B57] sm:text-6xl lg:text-[4.7rem]"
          >
            School se
            <br />

            <span className="relative inline-block text-[#F97316]">
              Career
              <span className="absolute -bottom-2 left-0 h-[7px] w-full rounded-full bg-orange-200" />
            </span>

            <span> tak.</span>
          </h1>

          <p className="mt-7 max-w-xl text-xl font-bold leading-relaxed text-[#102B57] sm:text-2xl">
            Skills jo classroom ke bahar bhi kaam aaye.
          </p>

          <p
            data-testid="hero-subtitle"
            className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Academic Coaching, Spoken English, Personality Development,
            Interview Preparation aur Career Guidance — practical learning aur
            personal attention ke saath.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-bold text-[#102B57]"
              >
                <CheckCircle2 className="h-5 w-5 text-[#F97316]" />

                {item}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              data-testid="hero-apply-btn"
              className="group inline-flex items-center gap-2 rounded-full bg-[#F97316] px-7 py-4 font-bold text-white shadow-xl shadow-orange-200/80 transition duration-300 hover:-translate-y-1 hover:bg-[#EA580C]"
            >
              Book Free Counselling

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={`https://wa.me/${CONTACT.whatsappRaw}`}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-whatsapp-btn"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#102B57] bg-white px-7 py-4 font-bold text-[#102B57] transition duration-300 hover:-translate-y-1 hover:bg-[#102B57] hover:text-white"
            >
              <MessageCircle className="h-5 w-5" />

              WhatsApp
            </a>
          </div>

          {/* Learning Journey */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-slate-400">
              Your Learning Journey
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {journey.map((item, index) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="rounded-full border border-[#102B57]/10 bg-white px-4 py-2 text-xs font-extrabold text-[#102B57] shadow-sm sm:text-sm">
                    {item}
                  </span>

                  {index < journey.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-[#F97316] sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative lg:col-span-6">
          <div className="absolute -left-7 top-10 h-40 w-40 rounded-full bg-sky-300/30 blur-3xl" />

          <div className="absolute -right-8 bottom-4 h-52 w-52 rounded-full bg-orange-300/30 blur-3xl" />

          <div className="relative mx-auto max-w-[570px]">
            {/* Decorative text */}
            <div className="absolute -left-6 top-16 z-20 hidden -rotate-6 rounded-2xl bg-[#102B57] px-5 py-4 text-white shadow-xl sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-300">
                Learn
              </p>

              <p className="text-lg font-black">With Clarity</p>
            </div>

            {/* Image */}
            <div className="relative rotate-[1.5deg] overflow-hidden rounded-[2.5rem] border-[10px] border-white bg-white shadow-[0_35px_80px_rgba(16,43,87,0.25)]">
              <img
                src={GALLERY[1].url}
                alt="Classroom in session"
                className="h-[480px] w-full object-cover sm:h-[560px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102B57]/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
                  The AmbaShree Way
                </p>

                <p className="mt-2 max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                  Learn. Speak.
                  <br />
                  Grow. Succeed.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-3 z-20 rounded-2xl bg-white px-5 py-4 shadow-2xl sm:-left-8">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#F97316]">
                Speak
              </p>

              <p className="mt-1 font-black text-[#102B57]">
                With Confidence
              </p>
            </div>

            <div className="absolute -right-3 bottom-20 z-20 rounded-2xl bg-[#F97316] px-5 py-4 text-white shadow-2xl sm:-right-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-100">
                Prepare
              </p>

              <p className="mt-1 font-black">For Your Future</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="relative border-y border-[#102B57]/10 bg-white/85 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-5 text-xs font-black uppercase tracking-[0.2em] text-[#102B57] sm:text-sm">
          <span>CBSE</span>
          <span className="text-[#F97316]">✦</span>
          <span>ICSE</span>
          <span className="text-[#F97316]">✦</span>
          <span>State Board</span>
          <span className="text-[#F97316]">✦</span>
          <span>Spoken English</span>
          <span className="text-[#F97316]">✦</span>
          <span>Personality Development</span>
          <span className="text-[#F97316]">✦</span>
          <span>Career Guidance</span>
        </div>
      </div>
    </section>
  );
}
