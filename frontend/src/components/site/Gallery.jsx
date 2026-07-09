import { useState } from "react";
import { Camera, Star } from "lucide-react";
import { GALLERY } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

function GalleryItem({ item, index, spans, isFeatured, onFeatureRequest }) {
    const ref = useReveal();
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${index * 60}ms` }}
            data-testid={`gallery-item-${index}`}
            className={`reveal group relative overflow-hidden rounded-2xl border border-white/10 ${spans}`}
        >
            <img
                src={item.url}
                alt={item.caption || "Institute gallery"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--asa-bg)]/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                    {isFeatured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--asa-gold)]/15 border border-[color:var(--asa-gold)]/40 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-[color:var(--asa-gold)]">
                            <Star className="h-3 w-3" /> Featured
                        </span>
                    )}
                    <p className="mt-2 text-sm font-medium text-white">
                        {item.caption}
                    </p>
                </div>
                <button
                    type="button"
                    data-testid={`gallery-replace-${index}`}
                    onClick={() => onFeatureRequest(index)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur px-3 py-1.5 text-[11px] text-white border border-white/10 hover:border-[color:var(--asa-gold)]/60"
                    title="Placeholder — click to reveal how to replace"
                >
                    <Camera className="h-3.5 w-3.5" />
                    Replace
                </button>
            </div>
        </div>
    );
}

export default function Gallery() {
    const [featureIndex, setFeatureIndex] = useState(0);
    const [notice, setNotice] = useState(false);

    const spans = [
        "col-span-2 row-span-2 md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
        "col-span-2 md:col-span-1 aspect-[4/3]",
        "col-span-2 md:col-span-1 aspect-[4/3]",
        "col-span-2 md:col-span-1 aspect-[4/3]",
        "col-span-2 md:col-span-1 aspect-[4/3]",
        "col-span-2 md:col-span-2 aspect-[16/9]",
    ];

    const handleFeature = (idx) => {
        setFeatureIndex(idx);
        setNotice(true);
        setTimeout(() => setNotice(false), 3200);
    };

    return (
        <section
            id="gallery"
            data-testid="gallery-section"
            className="relative py-24 lg:py-32 bg-[color:var(--asa-secondary)]/30 border-y border-white/5"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--asa-gold)]">
                            ✦ Life at AmbaShree
                        </p>
                        <h2 className="font-heading mt-4 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
                            A glimpse of our{" "}
                            <span className="italic text-[color:var(--asa-gold)]">
                                classrooms
                            </span>
                            .
                        </h2>
                        <p className="mt-4 max-w-xl text-sm text-[color:var(--asa-text-muted)]">
                            These images are premium placeholders — real
                            institute photos will replace them as soon as they
                            are shared.
                        </p>
                    </div>
                    {notice && (
                        <div
                            data-testid="gallery-notice"
                            className="rounded-xl border border-[color:var(--asa-gold)]/40 bg-[color:var(--asa-gold)]/10 px-4 py-2.5 text-xs text-[color:var(--asa-gold)]"
                        >
                            Image #{featureIndex + 1} marked as feature slot —
                            upload real photo to replace.
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-4 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[200px]">
                    {GALLERY.map((g, i) => (
                        <GalleryItem
                            key={g.url}
                            item={g}
                            index={i}
                            spans={spans[i]}
                            isFeatured={i === featureIndex}
                            onFeatureRequest={handleFeature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
