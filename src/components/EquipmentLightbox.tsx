import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export type EquipmentSlide = {
  src: string;
  name: string;
  caption: string;
  tag: string;
};

export function EquipmentLightbox({
  slides,
  index,
  onClose,
}: {
  slides: EquipmentSlide[];
  index: number;
  onClose: () => void;
}) {
  const [i, setI] = useState(index);
  useEffect(() => setI(index), [index]);

  const lbSlides = slides.map((s) => ({
    src: s.src,
    alt: `${s.name} at Goodlife Fitness Club Solapur`,
    description: `${s.tag} — ${s.caption}`,
    title: s.name,
  }));

  return (
    <Lightbox
      open={index >= 0}
      close={onClose}
      index={i}
      on={{ view: ({ index: n }) => setI(n) }}
      slides={lbSlides}
      carousel={{ finite: false, preload: 2 }}
      controller={{ closeOnBackdropClick: true }}
      styles={{
        container: { backgroundColor: "rgba(0,0,0,0.92)" },
        slide: { padding: "1rem" },
      }}
      render={{
        slideFooter: ({ slide }) => (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 to-transparent p-4 pb-8 text-center md:p-6 md:pb-10">
            <span className="mb-2 inline-block rounded-sm bg-primary px-2 py-0.5 font-display text-xs tracking-widest text-primary-foreground">
              {(slide as { description?: string }).description?.split(" — ")[0]?.toUpperCase()}
            </span>
            <h3 className="font-display text-2xl leading-tight text-white md:text-3xl">
              {(slide as { title?: string }).title}
            </h3>
            <p className="mt-1 text-sm text-white/70">
              {(slide as { description?: string }).description?.split(" — ")[1]}
            </p>
          </div>
        ),
      }}
    />
  );
}
