"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

type PhoneMockupProps = {
  label?: string;
  videoSrc?: string;
  poster?: string;
  imageSrc?: string;
  className?: string;
  delay?: number;
  hasSound?: boolean;
  aspectRatio?: string;
};

/**
 * Placeholder de mockup de celular.
 * Quando os vídeos/gifs reais dos stories chegarem, troque o conteúdo
 * do <div className="screen-content"> por:
 *   <video src={videoSrc} autoPlay loop muted playsInline />
 * ou
 *   <Image src={imageSrc} fill alt="" />
 *
 * aspectRatio: ajuste o formato da moldura (ex: "9/16") quando o vídeo
 * real tiver proporção diferente do padrão "9/19.5", evitando cortes.
 */
export default function PhoneMockup({
  label = "SEU STORY AQUI",
  videoSrc,
  poster,
  imageSrc,
  className = "",
  delay = 0,
  hasSound = false,
  aspectRatio = "9/19.5",
}: PhoneMockupProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ aspectRatio }}
      className={`relative w-[220px] rounded-[2.2rem] border-[6px] border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60 ${className}`}
    >
      {/* notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 bg-zinc-800 rounded-b-2xl z-10" />

      {/* screen */}
      <div className="screen-content absolute inset-[6px] rounded-[1.8rem] overflow-hidden bg-gradient-to-br from-yellow-400 via-amber-500 to-zinc-900 flex items-center justify-center">
        {videoSrc ? (
          <>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              ref={videoRef}
              src={videoSrc}
              poster={poster}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
            {hasSound && (
              <button
                onClick={toggleSound}
                className="absolute bottom-2 right-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-xs text-white backdrop-blur-sm"
                aria-label={muted ? "Ativar som" : "Mutar som"}
              >
                {muted ? "🔇" : "🔊"}
              </button>
            )}
          </>
        ) : imageSrc ? (
          <img src={imageSrc} alt="" className="h-full w-full object-cover" />
        ) : (
          <span className="px-4 text-center text-xs font-bold uppercase tracking-wide text-black/70">
            {label}
          </span>
        )}
      </div>
    </motion.div>
  );
}
