"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
};

/**
 * Vídeo de story que só baixa/carrega quando entra na tela (IntersectionObserver)
 * e pausa quando sai — assim conseguimos ter dezenas de vídeos reais no grid
 * sem pesar o carregamento inicial da página. Roda em loop, mudo, sem controles.
 */
export default function LazyStoryVideo({ src, poster, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.25, rootMargin: "200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={`h-full w-full object-cover ${className}`}
      src={shouldLoad ? src : undefined}
      poster={poster}
      preload="none"
      loop
      muted
      playsInline
      autoPlay
    />
  );
}
