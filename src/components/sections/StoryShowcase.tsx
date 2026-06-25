"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { stories, type StoryItem } from "@/data/stories";
import MiniStoryCard from "@/components/MiniStoryCard";
import StoryPreviewModal from "@/components/StoryPreviewModal";

export default function StoryShowcase() {
  const [active, setActive] = useState<StoryItem | null>(null);

  return (
    <section className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            +2500 modelos em destaque
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black uppercase leading-tight">
            Milhares de stories.
            <br />
            Todas as cores. Todas as categorias.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 max-w-md mx-auto">
            Toque em qualquer modelo para ver o preview animado.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
          {stories.map((story, i) => (
            <MiniStoryCard key={story.id} story={story} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <StoryPreviewModal story={active} onClose={() => setActive(null)} />
    </section>
  );
}
