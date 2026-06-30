import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Dias Santiago | Frontend Developer",
  description: "Portfólio de Gabriel Dias Santiago, Desenvolvedor Frontend Júnior com foco em React, TypeScript, interfaces modernas e experiência do usuário.",
  keywords: ["Frontend", "React", "TypeScript", "Next.js", "Gabriel Dias Santiago", "Portfolio"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
