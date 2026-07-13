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
      className="relative isolate overflow-hidden bg-[#FFF9F2] pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.58]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(74,36,27,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,36,27,0.05) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        <div className="absolute -left-24 top-28 h-[360px] w-[360px] rounded-full bg-orange-200/45 blur-[100px]" />

        <div className="absolute -right-28 top-12 h-[430px] w-[430px] rounded-full bg-purple-300/30 blur-[110px]" />

        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-amber-100/70 blur-[100px]" />
      </div>

      {/* Desktop Laddu Gopal Blessing */}
      <div
        data-testid="laddu-gopal-corner"
        className="absolute right-4 top-24 z-30 hidden items-center gap-3 rounded-2xl border border-amber-300/60 bg-white/95 px-3 py-3 shadow-xl backdrop-blur-md lg:flex xl:right-8"
      >
        <div className="h-16 w-16 overflow-hidden rounded-xl border-2 border-amber-300 bg-amber-50 p-1 shadow-inner">
          <img
            src="/faculty/laddu-gopal.jpg"
            alt="Laddu Gopal"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        <div className="pr-2">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#F97316]">
            Blessings
          </p>

          <p className="mt-1 text-sm font-semibold italic text-[#4A241B]">
            With the Grace of
          </p>

          <p className="font-black text-amber-600">
            Laddu Gopal
          </p>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:pb-24">
        {/* Left Content */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#F97316]" />

            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#4A241B]">
              Premium Skills Academy
            </span>
          </div>

          {/* Mobile Laddu Gopal */}
          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-amber-200 bg-white/90 p-3 shadow-sm lg:hidden">
            <div className="h-14 w-14 overflow-hidden rounded-xl border-2 border-amber-300 bg-amber-50 p-1">
              <img
                src="/faculty/laddu-gopal.jpg"
                alt="Laddu Gopal"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F97316]">
                Blessings
              </p>

              <p className="text-sm italic text-[#4A241B]">
                With the Grace of{" "}
                <span className="font-black not-italic text-amber-600">
                  Laddu Gopal
                </span>
              </p>
            </div>
          </div>

          <h1
            data-testid="hero-heading"
            className="mt-8 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.045em] text-[#382019] sm:text-6xl lg:text-[4.7rem]"
          >
            School se
            <br />

            <span className="relative inline-block text-[#F97316]">
              Career
              <span className="absolute -bottom-2 left-0 h-[7px] w-full rounded-full bg-orange-200" />
            </span>

            <span> tak.</span>
          </h1>

          <p className="mt-7 max-w-xl text-xl font-extrabold leading-relaxed text-[#4A241B] sm:text-2xl">
            Skills jo classroom ke bahar bhi kaam aaye.
          </p>

          <p
            data-testid="hero-subtitle"
            className="mt-4 max-w-xl text-base font-medium leading-7 text-[#6A5147] sm:text-lg"
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
                className="flex items-center gap-2 text-sm font-extrabold text-[#4A241B]"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F97316]" />
                {item}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              data-testid="hero-apply-btn"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#FB923C] px-7 py-4 font-extrabold text-white shadow-xl shadow-orange-200/80 transition duration-300 hover:-translate-y-1 hover:from-[#EA580C] hover:to-[#F97316]"
            >
              Book Free Counselling

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={`https://wa.me/${CONTACT.whatsappRaw}`}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-whatsapp-btn"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#4A241B] bg-white px-7 py-4 font-extrabold text-[#4A241B] transition duration-300 hover:-translate-y-1 hover:bg-[#4A241B] hover:text-white"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          {/* Learning Journey */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-[#8A6C5E]">
              Your Learning Journey
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {journey.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="rounded-full border border-[#DCC8B8] bg-white px-4 py-2 text-xs font-extrabold text-[#4A241B] shadow-sm transition hover:border-purple-300 hover:bg-purple-50 sm:text-sm">
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

        {/* Right Image Side */}
        <div className="relative lg:col-span-6">
          <div className="absolute -left-7 top-10 h-40 w-40 rounded-full bg-purple-400/25 blur-3xl" />

          <div className="absolute -right-8 bottom-4 h-52 w-52 rounded-full bg-orange-300/35 blur-3xl" />

          <div className="relative mx-auto max-w-[570px]">
            {/* Decorative Learn Card */}
            <div className="absolute -left-4 top-14 z-20 hidden rounded-2xl bg-gradient-to-br from-[#4A241B] via-[#4A205F] to-[#28113F] px-5 py-4 text-white shadow-xl sm:block">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-300">
                Learn
              </p>

              <p className="text-lg font-black">
                With Clarity
              </p>
            </div>

            {/* Straight Classroom Image Card */}
            <div className="relative overflow-hidden rounded-[2.25rem] border-[10px] border-white bg-white shadow-[0_35px_80px_rgba(74,36,27,0.22)]">
              <img
                src={GALLERY[1].url}
                alt="Classroom in session"
                className="h-[470px] w-full object-cover object-center sm:h-[550px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#321A2D]/80 via-[#321A2D]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">
                  The AmbaShree Way
                </p>

                <p className="mt-2 max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                  Learn. Speak.
                  <br />
                  Grow. Succeed.
                </p>
              </div>
            </div>

            {/* Speak Card */}
            <div className="absolute -bottom-5 left-3 z-20 rounded-2xl border border-[#E8D8C8] bg-white px-5 py-4 shadow-2xl sm:-left-6">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#F97316]">
                Speak
              </p>

              <p className="mt-1 font-black text-[#4A241B]">
                With Confidence
              </p>
            </div>

            {/* Future Card */}
            <div className="absolute -right-2 bottom-16 z-20 rounded-2xl bg-gradient-to-br from-[#F97316] to-[#EA580C] px-5 py-4 text-white shadow-2xl sm:-right-5">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-orange-100">
                Prepare
              </p>

              <p className="mt-1 font-black">
                For Your Future
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="relative border-y border-[#DCC8B8] bg-white/90 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-5 text-xs font-black uppercase tracking-[0.2em] text-[#4A241B] sm:text-sm">
          <span>CBSE</span>
          <span className="text-purple-600">✦</span>

          <span>ICSE</span>
          <span className="text-[#F97316]">✦</span>

          <span>State Board</span>
          <span className="text-purple-600">✦</span>

          <span>Spoken English</span>
          <span className="text-[#F97316]">✦</span>

          <span>Personality Development</span>
          <span className="text-purple-600">✦</span>

          <span>Career Guidance</span>
        </div>
      </div>
    </section>
  );
}
