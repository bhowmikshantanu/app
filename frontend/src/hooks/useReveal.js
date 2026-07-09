import { useEffect, useRef } from "react";

/**
 * Small IntersectionObserver-driven reveal hook.
 * Add ref to any element and it gets `.in-view` when scrolled into view.
 */
export function useReveal(threshold = 0.15) {
    const ref = useRef(null);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("in-view");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold },
        );
        io.observe(node);
        return () => io.disconnect();
    }, [threshold]);
    return ref;
}
