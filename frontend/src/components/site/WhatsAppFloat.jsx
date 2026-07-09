import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function WhatsAppFloat() {
    return (
        <a
            href={`https://wa.me/${CONTACT.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="floating-whatsapp-btn"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-24 right-5 z-40 group inline-flex items-center gap-2 rounded-full bg-emerald-500 pl-4 pr-5 py-3 text-white shadow-[0_10px_40px_-10px_rgba(16,185,129,0.7)] hover:bg-emerald-600 transition-[background-color,transform] hover:-translate-y-0.5"
        >
            <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white/80 opacity-70 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
            </span>
            <MessageCircle className="h-5 w-5" />
            <span className="hidden sm:inline text-sm font-semibold">
                Chat on WhatsApp
            </span>
        </a>
    );
}
