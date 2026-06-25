"use client";

import { motion } from "framer-motion";

/**
 * Texto de impacto no mesmo estilo das demais seções (sem caixa de luz),
 * com um ícone animado centralizado no lugar do glow quadrado.
 */
export default function NeonCallout() {
  return (
    <section className="relative px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mb-6 flex h-14 w-14 items-center justify-center"
      >
        <motion.span
          animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-4xl"
        >
          ⚡
        </motion.span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-sm text-balance text-2xl sm:text-3xl font-extrabold leading-snug"
      >
        <span className="text-yellow-400">+250</span> NOVOS MODELOS TODA
        SEMANA E VOCÊ NÃO PAGA MAIS NADA POR ISSO!
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-4 max-w-xs text-sm font-light uppercase tracking-[0.15em] text-zinc-400"
      >
        o melhor investimento.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mx-auto mt-10 h-px w-32 bg-zinc-800"
      />
    </section>
  );
}
