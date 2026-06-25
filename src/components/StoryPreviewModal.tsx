"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { StoryItem } from "@/data/stories";
import LazyStoryVideo from "@/components/LazyStoryVideo";

type Props = {
  story: StoryItem | null;
  onClose: () => void;
};

export default function StoryPreviewModal({ story, onClose }: Props) {
  return (
    <AnimatePresence>
      {story && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[300px]"
          >
            <div className="relative aspect-[9/16] w-full rounded-[1.6rem] border-[6px] border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/70">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-20 bg-zinc-800 rounded-b-xl z-10" />
              <div className="absolute inset-[6px] rounded-[1.2rem] overflow-hidden">
                {story.videoSrc ? (
                  <LazyStoryVideo src={story.videoSrc} poster={story.poster} />
                ) : (
                  <div
                    className={`h-full w-full bg-gradient-to-br ${story.gradient} flex flex-col items-center justify-center gap-3`}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-black/60">
                      {story.category}
                    </span>
                    <span className="px-6 text-center text-sm font-black uppercase tracking-wide text-black/80">
                      STORY ANIMADO
                    </span>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black font-bold shadow-lg"
              aria-label="Fechar"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
