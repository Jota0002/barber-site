export type StoryItem = {
  id: number;
  label: string;
  category: string;
  framed: boolean;
  gradient: string;
  videoSrc?: string;
  poster?: string;
};

const categorias = [
  "PROMOÇÕES",
  "INÍCIO DE SEMANA",
  "FERIADOS",
  "DIVULGAÇÃO",
  "BARBA",
  "CORTE DO DIA",
  "DEPOIMENTO",
  "AGENDA ABERTA",
  "COMBO",
  "FRASE MOTIVACIONAL",
  "BLACK FRIDAY",
  "NATAL",
  "DIA DOS PAIS",
  "ANIVERSÁRIO DA BARBEARIA",
  "ANTES E DEPOIS",
  "HORÁRIO ESPECIAL",
];

const gradients = [
  "from-yellow-400 via-amber-500 to-zinc-900",
  "from-orange-500 via-red-500 to-zinc-900",
  "from-fuchsia-500 via-purple-600 to-zinc-900",
  "from-sky-400 via-blue-600 to-zinc-900",
  "from-emerald-400 via-green-600 to-zinc-900",
  "from-pink-400 via-rose-500 to-zinc-900",
  "from-amber-300 via-orange-600 to-black",
  "from-cyan-400 via-teal-600 to-zinc-900",
  "from-violet-500 via-indigo-600 to-zinc-900",
  "from-lime-400 via-emerald-600 to-zinc-900",
  "from-red-500 via-rose-700 to-black",
  "from-yellow-300 via-yellow-600 to-zinc-900",
];

export const stories: StoryItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  label: categorias[i % categorias.length],
  category: categorias[i % categorias.length],
  framed: i % 3 !== 0,
  gradient: gradients[i % gradients.length],
}));

// Vídeos reais, espalhados pelo grid (não em ordem sequencial).
// Quando mais vídeos chegarem, é só repetir esse padrão:
// stories[indice].videoSrc = "/videos/arquivo.mp4"; stories[indice].poster = "/videos/arquivo-poster.jpg";
const realVideos: [number, string][] = [
  [2, "feriados"],
  [0, "story01"],
  [3, "story02"],
  [5, "story03"],
  [7, "story04"],
  [9, "story05"],
  [11, "story06"],
  [13, "story07"],
  [15, "story09"],
  [17, "story10"],
  [19, "story11"],
  [21, "story12"],
  [23, "story13"],
  [25, "story14"],
  [27, "story15"],
  [28, "story16"],
  [29, "story17"],
  [1, "story24"],
  [4, "story19"],
  [6, "story30"],
  [8, "story21"],
  [10, "story26"],
  [12, "story18"],
  [14, "story29"],
  [16, "story22"],
  [18, "story25"],
  [20, "story20"],
  [22, "story28"],
  [24, "story23"],
  [26, "story27"],
];

for (const [index, file] of realVideos) {
  stories[index].videoSrc = `/videos/${file}.mp4`;
  stories[index].poster = `/videos/${file}-poster.jpg`;
}
