"use client";

import { motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-16 pb-10 overflow-hidden">
      {/* glow de fundo */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl pointer-events-none" />

      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs font-semibold tracking-wide text-yellow-300"
      >
        2026 · NOVOS MODELOS
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-balance text-center text-3xl sm:text-4xl font-extrabold leading-tight max-w-md"
      >
        A <span className="text-yellow-400">FALTA DE TEMPO</span> E A{" "}
        <span className="text-yellow-400">FALTA DE IDEIAS</span> TE IMPEDE DE
        POSTAR TODOS OS DIAS?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-4 max-w-sm text-center text-zinc-300"
      >
        Criamos a solução que qualquer barbeiro consegue usar. Basta
        escolher, arrastar e postar.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative mt-10 flex items-center justify-center gap-4 sm:gap-8"
      >
        <PhoneMockup
          label="STORY ANIMADO 1"
          videoSrc="/videos/story-animado1.mp4"
          poster="/videos/story-animado1-poster.jpg"
          aspectRatio="9/16"
          delay={0.1}
          className="rotate-[-4deg]"
        />
        <PhoneMockup
          label="STORY ANIMADO 2"
          videoSrc="/videos/story-animado2.mp4"
          poster="/videos/story-animado2-poster.jpg"
          hasSound
          aspectRatio="9/16"
          delay={0.25}
          className="rotate-[4deg] scale-110"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-xs uppercase tracking-[0.2em]">veja como funciona</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="text-xl text-yellow-400/70"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
