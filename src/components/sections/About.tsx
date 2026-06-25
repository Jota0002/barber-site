"use client";

import { motion } from "framer-motion";

const bullets = [
  "NÃO é aplicativo.",
  "NÃO é Canva.",
  "NÃO precisa aprender nada.",
];

export default function About() {
  return (
    <section className="relative px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7 }}
        className="text-balance text-center text-2xl sm:text-3xl font-extrabold leading-snug"
      >
        O MAIOR E MAIS COMPLETO GRUPO DE{" "}
        <span className="text-yellow-400">CONTEÚDOS PARA BARBEIROS</span> DA
        AMÉRICA LATINA
      </motion.h2>

      <div className="mt-8 flex flex-col gap-3 max-w-sm mx-auto">
        {bullets.map((b, i) => (
          <motion.div
            key={b}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm font-semibold text-zinc-200"
          >
            {b}
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-6 max-w-sm text-center text-zinc-400"
      >
        Basta entrar no seu grupo, escolher os conteúdos do dia e postar.
        Todos são 100% animados e exclusivos, ideal pra chamar mais atenção
        do seu serviço e da sua barbearia.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto mt-10 flex max-w-xs items-center justify-center gap-3 rounded-2xl border border-yellow-400/30 bg-yellow-400/5 px-6 py-5 text-center"
      >
        <div>
          <p className="text-3xl font-extrabold text-yellow-400">12 mil+</p>
          <p className="text-xs text-zinc-400">
            barbeiros usando desde 2022
          </p>
        </div>
      </motion.div>
    </section>
  );
}
