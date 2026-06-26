"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import WatchDemoModal from "@/components/WatchDemoModal";

const itens = [
  "Agenda de horários e serviços com valores",
  "Perfeito para 1 ou quantos barbeiros quiserem usar",
  "Pode registrar vários barbeiros e organizar a agenda.",
  "Marque a medida que for atendendo e veja a receita",
  "Totalmente ilimitado e sem mensalidades",
  "Use em quantos celulares quiser e computador",
];

/**
 * Seção da funcionalidade de Agenda + Checklist.
 */
export default function AgendaFeature() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400/10"
          >
            <motion.span
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl"
            >
              🎁
            </motion.span>
          </motion.div>

          <p className="text-base sm:text-lg font-black uppercase tracking-wide text-[var(--accent)]">
            Incluso também:
            <br />
            De <span className="text-red-500">R$ 397</span> por ZERO reais!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            agenda + checklist
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black uppercase leading-tight">
            Uma agenda completa
            <br />
            pensada pra barbearia
          </h2>
        </motion.div>

        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-12">
          <PhoneMockup
            label="AGENDA"
            imageSrc="/videos/agenda-mock.jpg"
            delay={0}
            className="rotate-[-4deg]"
          />
          <PhoneMockup
            label="CHECKLIST"
            videoSrc="/videos/agenda-checklist.mp4"
            poster="/videos/agenda-checklist-poster.jpg"
            delay={0.15}
            className="rotate-[4deg] scale-110"
          />
        </div>

        <ul className="mx-auto max-w-md space-y-3 mb-10">
          {itens.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 text-sm sm:text-base text-white/80"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-black text-black">
                ✓
              </span>
              {item}
            </motion.li>
          ))}
        </ul>

        <div className="flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-lg shadow-yellow-500/20 transition hover:scale-105"
          >
            ▶ Assistir como funciona
          </button>
        </div>
      </div>

      <WatchDemoModal
        open={open}
        onClose={() => setOpen(false)}
        youtubeId="2Px68LcwIBg"
      />
    </section>
  );
}
