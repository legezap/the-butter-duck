"use client";

import { useEffect, useRef } from "react";

interface AutoPlayVideoProps {
  src: string;
  poster: string;
  className?: string;
}

export default function AutoPlayVideo({ src, poster, className }: AutoPlayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Force play on mount — handles tablets that block autoplay
    const tryPlay = () => {
      video.play().catch(() => {});
    };

    tryPlay();

    // Also try on first user interaction (some browsers require it)
    const onInteraction = () => {
      tryPlay();
      document.removeEventListener("touchstart", onInteraction);
      document.removeEventListener("click", onInteraction);
    };

    document.addEventListener("touchstart", onInteraction, { once: true });
    document.addEventListener("click", onInteraction, { once: true });

    return () => {
      document.removeEventListener("touchstart", onInteraction);
      document.removeEventListener("click", onInteraction);
    };
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
