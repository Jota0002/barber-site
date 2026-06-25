"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Por onde eu tenho acesso?",
    a: "Após o pagamento, em poucos minutos o próprio sistema envia no seu WhatsApp o botão de acesso com tudo liberado. O clube não é no WhatsApp, é na nossa plataforma própria, com mais de 12 mil barbeiros usando desde 2022.",
  },
  {
    q: "Eu sou ruim com redes sociais",
    a: "Sem problemas: você não precisa de curso. Só escolhe o conteúdo, arrasta sua foto e posta. Você vai precisar apenas do Instagram para inserir foto e link, o resto a gente já envia pronto.",
  },
  {
    q: "Vou receber conteúdos até quando?",
    a: "Agora é vitalício! Você não paga mais nada por isso. Conteúdos novos e exclusivos pra sempre, sem mensalidade. Início, meio e fim de semana, feriado, datas comemorativas, divulgação de serviços e muito mais.",
  },
  {
    q: "O que está esperando por mim?",
    a: "Centenas de conteúdos já disponíveis no grupo, esperando por você. Use à vontade, quantas vezes quiser, desde o início do ano.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7 }}
        className="text-balance text-center text-2xl sm:text-3xl font-extrabold mb-10"
      >
        TIRE SUAS <span className="text-yellow-400">DÚVIDAS</span>
      </motion.h2>

      <div className="mx-auto flex max-w-md flex-col gap-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
              >
                {item.q}
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-2xl text-yellow-400 leading-none"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="px-5 pb-5 text-sm text-zinc-400">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
