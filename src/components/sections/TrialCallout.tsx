"use client";

import { motion } from "framer-motion";

/**
 * Bloco de destaque "Posso só experimentar?" em um cartão branco
 * arredondado sobre o fundo escuro, antes da Agenda + Checklist.
 */
export default function TrialCallout() {
  return (
    <section className="relative px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-sm rounded-3xl bg-white px-6 py-10 text-center text-black shadow-xl shadow-black/30"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center"
        >
          <motion.span
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl"
          >
            ⚠️
          </motion.span>
        </motion.div>

        <h2 className="text-balance text-3xl sm:text-4xl font-black uppercase leading-tight text-red-500">
          Posso só experimentar?
        </h2>

        <p className="mt-5 text-lg leading-snug text-zinc-800">
          <span className="font-bold">Sim e deve!</span> Se não gostar, dentro
          do clube{" "}
          <span className="font-bold">tem um botão pra você cancelar</span> e
          pegar seu dinheiro de volta!{" "}
          <span className="font-bold">
            Mas agora é vitalício, você não paga mais nada por isso!
          </span>
        </p>
      </motion.div>
    </section>
  );
}
