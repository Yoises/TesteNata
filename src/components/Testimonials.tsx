import { useRef, type MouseEvent } from "react";
import { useTranslation } from "react-i18next";

interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

/**
 * "From Our Guests" testimonial rail.
 * Horizontally scrollable, and draggable with the mouse (click + drag).
 * Reused wherever a testimonials strip is needed (currently: Home).
 */
export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", {
    returnObjects: true,
  }) as Testimonial[];

  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const onPointerDown = (e: MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current.isDown = true;
    drag.current.startX = e.pageX - el.offsetLeft;
    drag.current.scrollLeft = el.scrollLeft;
    el.classList.add("cursor-grabbing");
    el.classList.remove("cursor-grab");
  };

  const endDrag = () => {
    const el = scrollRef.current;
    drag.current.isDown = false;
    el?.classList.remove("cursor-grabbing");
    el?.classList.add("cursor-grab");
  };

  const onPointerMove = (e: MouseEvent) => {
    const el = scrollRef.current;
    if (!el || !drag.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - drag.current.startX) * 1.2;
    el.scrollLeft = drag.current.scrollLeft - walk;
  };

  return (
    <section className="py-stack-lg bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-stack-md">
          <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-2">
            {t("testimonials.eyebrow")}
          </span>
          <h2 className="font-headline-h1-mobile md:font-headline-h2 text-headline-h1-mobile md:text-headline-h2 text-on-surface">
            {t("testimonials.title")}
          </h2>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={onPointerDown}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onMouseMove={onPointerMove}
          className="flex gap-gutter overflow-x-auto cursor-grab select-none pb-4 -mx-margin-mobile px-margin-mobile md:-mx-margin-desktop md:px-margin-desktop [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-4 p-6 bg-surface-container-low rounded-lg border border-outline-variant shrink-0 w-[280px] md:w-[320px]"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]">
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-lg text-body-lg text-on-surface italic">
                "{item.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-label-caps text-label-caps text-on-surface font-bold">
                  {item.name}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  {item.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}