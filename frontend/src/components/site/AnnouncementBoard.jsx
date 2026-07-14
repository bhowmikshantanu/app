import { CalendarDays, Gift, Megaphone, Rocket } from "lucide-react";

export default function AnnouncementBoard() {
  return (
    <div
      data-testid="announcement-board"
      className="fixed inset-x-0 top-0 z-[60] hidden lg:block"
    >
      <div className="relative mx-auto max-w-6xl px-8 pt-5">
        {/* Hanging ropes */}
        <div className="absolute left-[8%] top-0 h-8 w-[3px] rounded-full bg-gradient-to-b from-amber-700 to-amber-400 shadow-sm" />
        <div className="absolute right-[8%] top-0 h-8 w-[3px] rounded-full bg-gradient-to-b from-amber-700 to-amber-400 shadow-sm" />

        {/* Board */}
        <div
          className="
            relative overflow-hidden rounded-[22px]
            border-2 border-[#F97316]
            bg-[#fffaf2]
            shadow-[0_12px_35px_rgba(249,115,22,0.30)]
          "
        >
          {/* top glow */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#F97316] to-transparent" />

          <div className="grid grid-cols-4 divide-x divide-[#102B57]/10">
            {/* Registration */}
            <div className="flex items-center justify-center gap-3 px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100">
                <CalendarDays className="h-5 w-5 text-[#F97316]" />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">
                  Registration Starts On
                </p>

                <p className="mt-1 text-lg font-black leading-none text-[#102B57]">
                  23rd July
                </p>
              </div>
            </div>

            {/* Batch */}
            <div className="flex items-center justify-center gap-3 px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                <Rocket className="h-5 w-5 text-[#102B57]" />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">
                  First Batch Starts On
                </p>

                <p className="mt-1 text-lg font-black leading-none text-[#102B57]">
                  3rd August
                </p>
              </div>
            </div>

            {/* Discount */}
            <div className="flex items-center justify-center gap-3 px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100">
                <Gift className="h-5 w-5 text-[#F97316]" />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">
                  Special Discount
                </p>

                <p className="mt-1 text-sm font-black leading-tight text-[#F97316]">
                  For First Batch
                </p>
              </div>
            </div>

            {/* Hurry */}
            <div className="flex items-center justify-center gap-3 bg-[#F97316] px-5 py-4 text-white">
              <Megaphone className="h-7 w-7 shrink-0" />

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-orange-100">
                  Limited Opportunity
                </p>

                <p className="mt-1 text-xl font-black leading-none">
                  HURRY UP!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hanging knobs */}
        <div className="absolute left-[calc(8%-5px)] top-[25px] h-3 w-3 rounded-full border-2 border-amber-700 bg-amber-400 shadow-md" />

        <div className="absolute right-[calc(8%-5px)] top-[25px] h-3 w-3 rounded-full border-2 border-amber-700 bg-amber-400 shadow-md" />
      </div>
    </div>
  );
}
