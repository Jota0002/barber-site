"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import WatchDemoModal from "@/components/WatchDemoModal";

/**
 * Seção de chamada para os modelos de Copa do Mundo.
 */
export default function WorldCupCallout() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-balance text-2xl sm:text-4xl font-black uppercase leading-tight">
            Acabamos de enviar modelos de Copa do Mundo
            <br />
            pra sua barbearia entrar no clima!
          </h2>
        </motion.div>

        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-10">
          <PhoneMockup
            label="MODELO COPA 1"
            videoSrc="/videos/copa-modelo1.mp4"
            poster="/videos/copa-modelo1-poster.jpg"
            aspectRatio="9/19.5"
            delay={0}
            className="rotate-[-4deg]"
          />
          <PhoneMockup
            label="MODELO COPA 2"
            videoSrc="/videos/copa-modelo2.mp4"
            poster="/videos/copa-modelo2-poster.jpg"
            hasSound
            aspectRatio="9/16"
            delay={0.15}
            className="rotate-[4deg] scale-110"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            assista o exemplo
          </p>
          <button
            onClick={() => setOpen(true)}
            className="rounded-full bg-pink-500 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-pink-500/30 transition hover:scale-105"
          >
            ▶ Assistir como arrastar e postar
          </button>
        </motion.div>
      </div>

      <WatchDemoModal
        open={open}
        onClose={() => setOpen(false)}
        title="Como arrastar e postar"
        youtubeId="dHkGPgbNKLg"
      />
    </section>
  );
}
