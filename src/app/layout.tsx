import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Barbergram Pro | Conteúdos animados para barbeiros",
  description:
    "O maior e mais completo grupo de conteúdos para barbeiros da América Latina. Escolha, arraste e poste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white overflow-x-hidden">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
