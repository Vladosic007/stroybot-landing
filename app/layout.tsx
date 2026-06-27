import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "СтройБот — найдём поставщика стройматериалов за 15 минут",
  description:
    "Сервис для подрядчиков и поставщиков. Создаёте заявку — собираем предложения с проверенных поставщиков вашего города за 15 минут. Конкуренция работает на вас.",
  keywords: [
    "стройматериалы",
    "поставщики",
    "подрядчики",
    "тендер стройка",
    "B2B стройка",
    "стройбот",
  ],
  openGraph: {
    title: "СтройБот — найдём поставщика за 15 минут",
    description:
      "Конкуренция поставщиков работает на ваш проект. Заявка → 15 минут → лучшие предложения.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={jakarta.variable}>
      <body className="bg-ink-900 text-bone-50 antialiased">{children}</body>
    </html>
  );
}
