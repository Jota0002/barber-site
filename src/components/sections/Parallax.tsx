"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";

const categorias = [
  "INÍCIO DE SEMANA",
  "PROMOÇÕES",
  "FERIADOS",
  "DIVULGAÇÃO",
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="white" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="4.3" stroke="white" strokeWidth="1.7" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="white" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="white">
    <path d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 1.74.47 3.37 1.29 4.78L2.5 21.5l4.86-1.27a9.46 9.46 0 0 0 4.64 1.27c5.25 0 9.5-4.25 9.5-9.5s-4.25-9.5-9.5-9.5Zm0 17.2c-1.5 0-2.9-.42-4.1-1.15l-.29-.18-2.72.71.72-2.65-.19-.3a7.7 7.7 0 0 1-1.22-4.13c0-4.28 3.48-7.76 7.8-7.76s7.8 3.48 7.8 7.76-3.48 7.7-7.8 7.7Zm4.27-5.78c-.23-.12-1.36-.67-1.57-.74-.21-.08-.36-.12-.52.12-.15.23-.6.74-.74.9-.14.15-.27.16-.5.06-.23-.12-.97-.36-1.85-1.15-.68-.61-1.14-1.36-1.28-1.59-.13-.23-.01-.36.12-.49.12-.12.27-.31.4-.47.14-.16.18-.27.28-.45.09-.18.04-.34-.04-.47-.08-.12-.5-1.2-.68-1.65-.18-.43-.36-.38-.5-.39h-.43c-.15 0-.39.06-.6.3-.21.23-.8.78-.8 1.9 0 1.12.82 2.2.93 2.35.12.15 1.6 2.45 3.88 3.34 1.92.75 2.31.6 2.73.56.42-.04 1.36-.55 1.55-1.09.19-.53.19-.99.13-1.09-.06-.1-.21-.16-.44-.27Z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="white">
    <path d="M14.5 3c.4 1.9 1.7 3.3 3.6 3.6v2.5c-1.3.1-2.6-.3-3.6-1v6.1c0 2.6-2.1 4.7-4.7 4.7S5 16.8 5 14.2c0-2.5 1.9-4.5 4.4-4.7v2.6c-1.1.2-2 1.1-2 2.1 0 1.2 1 2.2 2.2 2.2 1.2 0 2.3-1 2.3-2.2V3h2.6Z" />
  </svg>
);

const platforms = [
  { label: "Storie", icon: <InstagramIcon />, bg: "bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600" },
  { label: "Reels e Post", icon: <InstagramIcon />, bg: "bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600" },
  { label: "Status do WhatsApp", icon: <WhatsAppIcon />, bg: "bg-emerald-500" },
  { label: "TikTok", icon: <TikTokIcon />, bg: "bg-zinc-900 border border-zinc-700" },
];

export default function Parallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // três camadas com velocidades diferentes = efeito de profundidade
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section
      ref={ref}
      className="relative px-6 py-24 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7 }}
        className="text-balance text-center text-2xl sm:text-3xl font-extrabold leading-snug mb-14"
      >
        CENTENAS DE{" "}
        <span className="text-yellow-400">CONTEÚDOS POR CATEGORIA</span>{" "}
        ESPERANDO POR VOCÊ
      </motion.h2>

      <div className="relative flex items-end justify-center gap-4">
        <motion.div style={{ y: yFast }} className="-mb-6">
          <PhoneMockup
            label={categorias[0]}
            videoSrc="/videos/inicio-semana.mp4"
            poster="/videos/inicio-semana-poster.jpg"
            aspectRatio="9/16"
            className="w-[140px] opacity-80"
          />
        </motion.div>
        <motion.div style={{ y: ySlow }} className="z-10 -mb-2">
          <PhoneMockup
            label={categorias[1]}
            videoSrc="/videos/promocoes.mp4"
            poster="/videos/promocoes-poster.jpg"
            hasSound
            aspectRatio="9/16"
            className="w-[170px]"
            delay={0.1}
          />
        </motion.div>
        <motion.div style={{ y: yMid }} className="-mb-8">
          <PhoneMockup
            label={categorias[2]}
            videoSrc="/videos/feriados2.mp4"
            poster="/videos/feriados2-poster.jpg"
            aspectRatio="9/16"
            className="w-[140px] opacity-80"
            delay={0.2}
          />
        </motion.div>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-16 max-w-xs text-balance text-center text-xl sm:text-2xl font-extrabold uppercase leading-snug"
      >
        Perfeito para usar nas{" "}
        <span className="text-yellow-400">plataformas abaixo</span>
      </motion.h3>

      <div className="mx-auto mt-10 grid max-w-xs grid-cols-2 gap-x-6 gap-y-8">
        {platforms.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${p.bg} shadow-lg shadow-black/30`}
            >
              {p.icon}
            </div>
            <span className="text-center text-[11px] font-light uppercase tracking-wide text-zinc-300">
              {p.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
