"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";
import { SmoothLink } from "./SmoothLink";
import { BOT_URL } from "@/lib/config";

type Bubble = { side: "in" | "out"; text: string; meta?: string };

const CHAT_SCRIPT: Bubble[] = [
  { side: "in", text: "Город: Ростов-на-Дону" },
  { side: "in", text: "Категория: Кирпич" },
  { side: "in", text: "Количество: 5 поддонов" },
  { side: "out", text: "Заявка №1284 создана\nЖду предложений…" },
  {
    side: "out",
    text: "Лучшая цена от Кирпич Опт ЮФО:\n88 700 ₽ · доставка включена",
  },
];

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  const glowAX = useTransform(mouseX, [-1, 1], [-24, 24]);
  const glowAY = useTransform(mouseY, [-1, 1], [-18, 18]);
  const glowBX = useTransform(mouseX, [-1, 1], [22, -22]);
  const glowBY = useTransform(mouseY, [-1, 1], [16, -16]);
  const cardTopX = useTransform(mouseX, [-1, 1], [-14, 14]);
  const cardTopY = useTransform(mouseY, [-1, 1], [-10, 10]);
  const cardBotX = useTransform(mouseX, [-1, 1], [12, -12]);
  const cardBotY = useTransform(mouseY, [-1, 1], [8, -8]);
  const phoneX = useTransform(mouseX, [-1, 1], [-6, 6]);
  const phoneY = useTransform(mouseY, [-1, 1], [-4, 4]);

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY, reduceMotion]);

  return (
    <section className="relative isolate overflow-x-clip pt-24 pb-16 sm:pt-36 sm:pb-28 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 bg-grid-light bg-[size:48px_48px] opacity-50"
      />
      <motion.div
        aria-hidden
        style={{ x: glowAX, y: glowAY }}
        className="pointer-events-none absolute -top-32 left-1/4 -z-20 h-[44rem] w-[44rem] rounded-full bg-signal/20 blur-[160px]"
      />
      <motion.div
        aria-hidden
        style={{ x: glowBX, y: glowBY }}
        className="pointer-events-none absolute bottom-0 right-0 -z-20 h-[34rem] w-[34rem] translate-x-1/3 rounded-full bg-signal/12 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-container items-center gap-16 container-px lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT: текст и CTA */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="h-display max-w-[18ch] text-balance text-hero-lg text-bone-50"
          >
            Найдём вам <span className="text-signal">поставщика</span> за 15
            минут
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-7 max-w-[52ch] text-pretty text-lg text-bone-400 sm:text-xl"
          >
            Вы создаёте заявку, мы собираем предложения с проверенных
            поставщиков вашего города. Конкуренция работает на ваш проект, а не
            против него
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4"
          >
            <SmoothLink
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-signal px-7 py-4 text-base font-bold text-ink-900 transition-all duration-200 hover:bg-signal-400 cursor-pointer"
            >
              Открыть СтройБота
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              >
                <path
                  d="M3 8h10m0 0L8.5 3.5M13 8l-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SmoothLink>
            <SmoothLink
              href="#workflow"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-bone-50/15 bg-transparent px-7 py-4 text-base font-semibold text-bone-50 transition-all duration-200 hover:bg-bone-50/5 cursor-pointer"
            >
              Как это работает
            </SmoothLink>
          </motion.div>
        </div>

        {/* RIGHT: phone mockup + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: phoneX, y: phoneY }}
          className="relative mx-auto flex w-full justify-center"
        >
          {/* Phone block (relative, фикс ширина для якоря карточек) */}
          <div className="relative w-[260px] sm:w-[300px] lg:w-[320px]">
            {/* Yellow halo за phone */}
            <div
              aria-hidden
              className="absolute -inset-12 -z-10 rounded-full bg-signal/15 blur-[100px]"
            />

            <PhoneMock />

            {/* Floating card — заявка (слева сверху, выходит за phone) */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{ x: cardTopX, y: cardTopY }}
              className="pointer-events-none absolute -left-6 -top-6 z-30 w-[170px] rounded-2xl border border-bone-50/15 bg-ink-800/95 p-3 backdrop-blur-xl shadow-2xl shadow-black/50 sm:-left-16 sm:w-[190px] lg:-left-24 lg:w-[210px]"
            >
              <div className="flex items-center gap-2 border-b border-bone-50/10 pb-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-signal" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-signal">
                  Новая заявка
                </span>
              </div>
              <div className="mt-2 text-xs">
                <div className="font-semibold text-bone-50">Кирпич М-150</div>
                <div className="mt-0.5 text-bone-400">5 поддонов · Ростов</div>
              </div>
            </motion.div>

            {/* Floating card — сделка (справа снизу, выходит за phone) */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ x: cardBotX, y: cardBotY }}
              className="pointer-events-none absolute -right-6 -bottom-6 z-30 w-[180px] rounded-2xl border border-signal/40 bg-ink-800/95 p-3 backdrop-blur-xl shadow-2xl shadow-signal/20 sm:-right-16 sm:w-[200px] lg:-right-24 lg:w-[230px]"
            >
              <div className="flex items-center justify-between border-b border-bone-50/10 pb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-bone-300">
                  Сделка закрыта
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="text-signal"
                  aria-hidden
                >
                  <path
                    d="M2 6l2.5 2.5L10 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-2 text-xs">
                <div className="font-semibold text-bone-50">
                  Кирпич Опт ЮФО
                </div>
                <div className="mt-0.5 text-signal">88 700 ₽ · Выбран</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneMock() {
  const [visible, setVisible] = useState<Bubble[]>([]);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      setVisible([]);
      CHAT_SCRIPT.forEach((b, i) => {
        const t = setTimeout(() => {
          if (!cancelled) setVisible((prev) => [...prev, b]);
        }, 800 + i * 1200);
        timers.push(t);
      });
      const restart = setTimeout(
        () => {
          if (!cancelled) run();
        },
        800 + CHAT_SCRIPT.length * 1200 + 4000,
      );
      timers.push(restart);
    };

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div className="rounded-[2.6rem] border border-bone-50/12 bg-ink-800 p-2 shadow-2xl shadow-black/60">
        <div className="overflow-hidden rounded-[2.1rem] border border-bone-50/5 bg-ink-900">
          {/* Top bar */}
          <div className="flex items-center justify-between bg-ink-700/60 px-5 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-signal/20 ring-1 ring-signal/40">
                <span className="text-[10px] font-extrabold text-signal">
                  СБ
                </span>
              </div>
              <div>
                <div className="text-xs font-semibold text-bone-50">
                  СтройБот
                </div>
                <div className="text-[10px] text-signal">в сети</div>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="h-1 w-1 rounded-full bg-bone-400" />
              <div className="h-1 w-1 rounded-full bg-bone-400" />
              <div className="h-1 w-1 rounded-full bg-bone-400" />
            </div>
          </div>
          {/* Chat */}
          <div className="flex h-[380px] flex-col justify-end gap-2 bg-ink-900 p-4">
            {visible.map((b, i) => (
              <motion.div
                key={`${i}-${b.text}`}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`flex flex-col ${b.side === "out" ? "items-start" : "items-end"} gap-0.5`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2 text-[12px] leading-snug ${
                    b.side === "out"
                      ? "rounded-bl-md bg-ink-700 text-bone-100"
                      : "rounded-br-md bg-signal text-ink-900"
                  }`}
                >
                  {b.text}
                </div>
              </motion.div>
            ))}
            {visible.length < CHAT_SCRIPT.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-end"
              >
                <div className="flex gap-1 rounded-2xl rounded-bl-md bg-ink-700 px-3 py-2.5">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-bone-400 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-bone-400 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-bone-400" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
