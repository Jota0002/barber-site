"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // aparece depois que o usuário rolou um pouco, some no topo
    setVisible(latest > 0.08);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4"
        >
          <a
            href="#oferta"
            className="block w-full rounded-full bg-yellow-400 px-6 py-4 text-center font-bold text-black shadow-2xl shadow-black/40"
          >
            RECEBA SEU ACESSO
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
