"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface LightboxProps {
  images: { image: string; title: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const item = images[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return createPortal(
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <button className="lightbox-arrow lightbox-arrow-left" onClick={onPrev} aria-label="Previous">
          &#8249;
        </button>

        <div className="lightbox-image-wrap">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="lightbox-image"
            sizes="90vw"
          />
        </div>

        <button className="lightbox-arrow lightbox-arrow-right" onClick={onNext} aria-label="Next">
          &#8250;
        </button>

        <p className="lightbox-caption">{item.title}</p>
      </div>
    </div>,
    document.body,
  );
}
