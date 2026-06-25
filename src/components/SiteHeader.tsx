"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SiteHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center pt-6 pb-1"
    >
      <div className="relative h-14 w-14 overflow-hidden rounded-full shadow-lg shadow-yellow-400/20 ring-1 ring-white/10">
        <Image
          src="/logo.png"
          alt="Barbergram Clube"
          fill
          sizes="56px"
          className="object-cover"
          priority
        />
      </div>
      <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
        Barbergram Clube
      </span>
    </motion.div>
  );
}
