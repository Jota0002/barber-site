"use client";

import { motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";

/**
 * Seção com as telas reais do app.
 */
export default function AppScreens() {
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            por dentro do app
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black uppercase leading-tight">
            Tudo organizado,
            <br />
            na palma da sua mão
          </h2>
        </motion.div>

        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <PhoneMockup
            label="TELA DO APP 1"
            videoSrc="/videos/appscreen1.mp4"
            poster="/videos/appscreen1-poster.jpg"
            delay={0}
            className="rotate-[-4deg]"
          />
          <PhoneMockup
            label="TELA DO APP 2"
            videoSrc="/videos/appscreen2.mp4"
            poster="/videos/appscreen2-poster.jpg"
            delay={0.15}
            className="rotate-[4deg] scale-110"
          />
        </div>
      </div>
    </section>
  );
}
