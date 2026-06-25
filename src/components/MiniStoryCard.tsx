"use client";

import { motion } from "framer-motion";
import type { StoryItem } from "@/data/stories";
import LazyStoryVideo from "@/components/LazyStoryVideo";

type Props = {
  story: StoryItem;
  onOpen: (story: StoryItem) => void;
  index: number;
};

export default function MiniStoryCard({ story, onOpen, index }: Props) {
  const content = story.videoSrc ? (
    <LazyStoryVideo src={story.videoSrc} poster={story.poster} />
  ) : (
    <div
      className={`h-full w-full bg-gradient-to-br ${story.gradient} flex items-center justify-center`}
    >
      <span className="px-2 text-center text-[9px] font-bold uppercase tracking-wide text-black/70">
        {story.label}
      </span>
    </div>
  );

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(story)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.4, delay: (index % 10) * 0.03 }}
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.04 }}
      className="relative aspect-[9/16] w-full cursor-pointer overflow-hidden text-left"
    >
      {story.framed ? (
        <div className="relative h-full w-full overflow-hidden rounded-xl border-[3px] border-zinc-800 bg-zinc-950 shadow-lg shadow-black/50 [clip-path:inset(0_round_0.75rem)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-8 bg-zinc-800 rounded-b-md z-20" />
          <div className="absolute inset-[3px] z-0 overflow-hidden rounded-lg [clip-path:inset(0_round_0.5rem)]">
            {content}
          </div>
        </div>
      ) : (
        <div className="h-full w-full overflow-hidden rounded-lg shadow-lg shadow-black/50 [clip-path:inset(0_round_0.5rem)]">
          {content}
        </div>
      )}
    </motion.button>
  );
}
