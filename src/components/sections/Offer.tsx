"use client";

import { motion } from "framer-motion";

const incluso = [
  { text: "250 novos modelos todos os meses", ok: true },
  { text: "Para quem trabalha por Ordem de Chegada, Agendamentos ou Assinatura", ok: true },
  { text: "Agenda ilimitada para cadastrar quantos barbeiros e serviços você quiser.", ok: true },
  { text: "Acesso Vitalício! Não é mais apenas 12 meses.", ok: true },
  { text: "Suporte de segunda à sábado", ok: true },
  { text: "Para todos os tamanhos de Barbearia", ok: true },
  { text: "Ideal para mesclar e chamar mais atenção nos Stories e Reels", ok: true },
  { text: "Não entra modelos com locução", ok: false },
];

export default function Offer() {
  return (
    <section
      id="oferta"
      className="relative px-6 py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mb-10 h-px w-32 bg-zinc-800"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400/10"
      >
        <motion.span
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-3xl font-black text-yellow-400"
        >
          ?
        </motion.span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-black uppercase leading-tight"
      >
        E quanto custa?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-2 text-sm text-zinc-400"
      >
        O investimento é ridiculamente baixo
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-10 flex flex-col items-center"
      >
        <span className="text-sm text-zinc-500 line-through">
          R$ 167,00
        </span>
        <span className="text-5xl font-extrabold text-yellow-400">
          R$ 87,00
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative mx-auto mt-4 inline-block overflow-hidden rounded-lg border border-yellow-400/70 bg-zinc-800 px-5 py-2.5 shadow-[0_0_12px_rgba(250,204,21,0.35)]"
      >
        <p className="relative z-10 text-sm sm:text-base font-extrabold uppercase text-white">
          Valor ÚNICO! Não é mensalidade! Vitalício pra sempre!
        </p>

        <motion.span
          aria-hidden
          initial={{ x: "-120%" }}
          animate={{ x: "220%" }}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
          className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-8 max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-xl shadow-black/30 backdrop-blur-xl"
      >
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.15em] text-yellow-400">
          Tudo isso incluso
        </p>
        <ul className="flex flex-col gap-3">
          {incluso.map((item, i) => (
            <motion.li
              key={item.text}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="flex items-start gap-3"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                  item.ok
                    ? "bg-emerald-500/15 text-emerald-400"
                    : "bg-red-500/15 text-red-400"
                }`}
              >
                {item.ok ? "✓" : "✕"}
              </span>
              <span className="text-sm text-zinc-200">{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.a
        href="https://aliberado.com/pay/barbergram"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileTap={{ scale: 0.96 }}
        className="relative mt-8 inline-block w-full max-w-xs overflow-hidden rounded-full bg-emerald-500 px-8 py-4 font-bold text-black shadow-lg shadow-emerald-500/30"
      >
        <span className="relative z-10">RECEBA SEU ACESSO</span>
        <motion.span
          aria-hidden
          initial={{ x: "-120%" }}
          animate={{ x: "220%" }}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
          className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
        />
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-6 max-w-xs text-xs text-zinc-500"
      >
        Seu acesso é enviado imediatamente após o pagamento
      </motion.p>

      <footer className="mt-16 border-t border-zinc-800 pt-8 text-xs text-zinc-500">
        <p>© 2026 Barbergram Pro. Todos os direitos reservados.</p>
      </footer>
    </section>
  );
}
