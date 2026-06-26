"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  youtubeId?: string;
};

/**
 * Modal de demonstração ("assistir como funciona").
 * Se youtubeId for passado, mostra o vídeo embedado do YouTube.
 * Caso contrário, mostra um placeholder.
 */
export default function WatchDemoModal({
  open,
  onClose,
  title = "Como funciona a agenda",
  youtubeId,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm"
          >
            {youtubeId ? (
              <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/70">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1`}
                  title={title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="demo-content aspect-[9/16] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-400 via-amber-500 to-zinc-900 flex flex-col items-center justify-center gap-3 shadow-2xl shadow-black/70">
                <span className="text-xs font-bold uppercase tracking-widest text-black/60">
                  demonstração
                </span>
                <span className="px-6 text-center text-base font-black uppercase tracking-wide text-black/80">
                  {title}
                </span>
              </div>
            )}

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
