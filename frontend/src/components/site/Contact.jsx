import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "@/lib/data";

const initial = { name: "", email: "", phone: "", course: "", message: "" };

const COURSES_OPT = [
    "CBSE Classes 7–10",
    "ICSE Classes 7–10",
    "State Board Classes 7–10",
    "Mathematics",
    "Science",
    "Spoken English",
    "Personality Development",
    "Interview Preparation",
    "Career Guidance",
    "Microsoft Intune Training",
];

export default function Contact() {
    const [form, setForm] = useState(initial);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Please enter your name";
        if (!form.email.trim()) e.email = "Please enter your email";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            e.email = "Enter a valid email";
        if (!form.phone.trim()) e.phone = "Please enter your phone";
        if (!form.message.trim()) e.message = "Tell us how we can help";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        // Simulate submission — no backend storage per requirements.
        setTimeout(() => {
            setSubmitting(false);
            setForm(initial);
            toast.success("Thanks! Your enquiry has been received.", {
                description:
                    "Our counsellor will get in touch with you within 24 hours.",
            });
        }, 900);
    };

    const onChange = (k) => (e) =>
        setForm((f) => ({ ...f, [k]: e.target.value }));

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-24 lg:py-32 bg-[color:var(--asa-secondary)]/30 border-y border-white/5"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="max-w-3xl mb-14">
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--asa-gold)]">
                        ✦ Get in Touch
                    </p>
                    <h2 className="font-heading mt-4 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
                        Let&apos;s plan your{" "}
                        <span className="italic text-[color:var(--asa-gold)]">
                            journey
                        </span>{" "}
                        together.
                    </h2>
                    <p className="mt-5 text-[color:var(--asa-text-muted)] max-w-xl">
                        Share your details and our counsellor will walk you
                        through course options, batch timings and fees.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Contact info + map */}
                    <div className="lg:col-span-5 space-y-6">
                        <a
                            href={`tel:${CONTACT.phone}`}
                            data-testid="contact-phone"
                            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[color:var(--asa-surface)] p-5 hover:border-[color:var(--asa-gold)]/50 transition-colors"
                        >
                            <div className="h-11 w-11 rounded-xl bg-[color:var(--asa-gold)]/10 border border-[color:var(--asa-gold)]/25 flex items-center justify-center">
                                <Phone className="h-5 w-5 text-[color:var(--asa-gold)]" />
                            </div>
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)]">
                                    Phone
                                </p>
                                <p className="mt-1 text-white font-medium">
                                    {CONTACT.phone}
                                </p>
                            </div>
                        </a>

                        <a
                            href={`https://wa.me/${CONTACT.whatsappRaw}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="contact-whatsapp"
                            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[color:var(--asa-surface)] p-5 hover:border-emerald-400/50 transition-colors"
                        >
                            <div className="h-11 w-11 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center">
                                <MessageCircle className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)]">
                                    WhatsApp
                                </p>
                                <p className="mt-1 text-white font-medium">
                                    {CONTACT.whatsapp}
                                </p>
                            </div>
                        </a>

                        <a
                            href={`mailto:${CONTACT.email}`}
                            data-testid="contact-email"
                            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[color:var(--asa-surface)] p-5 hover:border-[color:var(--asa-gold)]/50 transition-colors"
                        >
                            <div className="h-11 w-11 rounded-xl bg-[color:var(--asa-gold)]/10 border border-[color:var(--asa-gold)]/25 flex items-center justify-center">
                                <Mail className="h-5 w-5 text-[color:var(--asa-gold)]" />
                            </div>
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)]">
                                    Email
                                </p>
                                <p className="mt-1 text-white font-medium break-all">
                                    {CONTACT.email}
                                </p>
                            </div>
                        </a>

                        <div
                            data-testid="contact-map"
                            className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/3] bg-[color:var(--asa-surface)]"
                        >
                            <iframe
                                title="AmbaShree Skills Academy Location"
                                src={CONTACT.mapsQuery}
                                className="absolute inset-0 h-full w-full grayscale contrast-125 opacity-90"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--asa-bg)]/60 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl glass px-4 py-3">
                                <MapPin className="h-4 w-4 text-[color:var(--asa-gold)]" />
                                <p className="text-xs text-white/85 truncate">
                                    {CONTACT.address}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={onSubmit}
                        noValidate
                        data-testid="contact-form"
                        className="lg:col-span-7 relative rounded-3xl border border-white/10 bg-[color:var(--asa-surface)] p-6 md:p-10"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col">
                                <label className="text-xs uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)] mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={onChange("name")}
                                    data-testid="contact-input-name"
                                    className="rounded-xl bg-[color:var(--asa-bg)] border border-white/10 focus:border-[color:var(--asa-gold)]/60 focus:outline-none px-4 py-3.5 text-white placeholder:text-white/30 transition-colors"
                                    placeholder="Your name"
                                />
                                {errors.name && (
                                    <span className="mt-1 text-xs text-red-400">
                                        {errors.name}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)] mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={onChange("email")}
                                    data-testid="contact-input-email"
                                    className="rounded-xl bg-[color:var(--asa-bg)] border border-white/10 focus:border-[color:var(--asa-gold)]/60 focus:outline-none px-4 py-3.5 text-white placeholder:text-white/30 transition-colors"
                                    placeholder="you@email.com"
                                />
                                {errors.email && (
                                    <span className="mt-1 text-xs text-red-400">
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)] mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={onChange("phone")}
                                    data-testid="contact-input-phone"
                                    className="rounded-xl bg-[color:var(--asa-bg)] border border-white/10 focus:border-[color:var(--asa-gold)]/60 focus:outline-none px-4 py-3.5 text-white placeholder:text-white/30 transition-colors"
                                    placeholder="+91 ..."
                                />
                                {errors.phone && (
                                    <span className="mt-1 text-xs text-red-400">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)] mb-2">
                                    Course of Interest
                                </label>
                                <select
                                    value={form.course}
                                    onChange={onChange("course")}
                                    data-testid="contact-input-course"
                                    className="rounded-xl bg-[color:var(--asa-bg)] border border-white/10 focus:border-[color:var(--asa-gold)]/60 focus:outline-none px-4 py-3.5 text-white transition-colors"
                                >
                                    <option value="">Select a course</option>
                                    {COURSES_OPT.map((c) => (
                                        <option key={c} value={c}>
                                            {c}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col md:col-span-2">
                                <label className="text-xs uppercase tracking-[0.25em] text-[color:var(--asa-text-muted)] mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    value={form.message}
                                    onChange={onChange("message")}
                                    data-testid="contact-input-message"
                                    className="rounded-xl bg-[color:var(--asa-bg)] border border-white/10 focus:border-[color:var(--asa-gold)]/60 focus:outline-none px-4 py-3.5 text-white placeholder:text-white/30 transition-colors resize-none"
                                    placeholder="Tell us about your goals..."
                                />
                                {errors.message && (
                                    <span className="mt-1 text-xs text-red-400">
                                        {errors.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <p className="text-xs text-[color:var(--asa-text-muted)]">
                                By submitting, you agree to be contacted by our
                                counsellors.
                            </p>
                            <button
                                type="submit"
                                disabled={submitting}
                                data-testid="contact-submit-btn"
                                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--asa-gold)] px-7 py-3.5 text-sm font-semibold text-[color:var(--asa-bg)] hover:bg-[color:var(--asa-gold-hover)] disabled:opacity-70 disabled:cursor-not-allowed transition-[background-color,transform] hover:-translate-y-0.5"
                            >
                                {submitting ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Enquiry
                                        <Send className="h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
