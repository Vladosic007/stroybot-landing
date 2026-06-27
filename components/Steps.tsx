"use client";

import { motion } from "framer-motion";
import { UserPlus, MessageSquareText, Handshake } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: UserPlus,
    title: "Зарегистрируйтесь",
    description:
      "Откройте бота в МАКС, подтвердите телефон и выберите роль: подрядчик или поставщик. Минута до первой заявки",
  },
  {
    n: "02",
    icon: MessageSquareText,
    title: "Создайте заявку",
    description:
      "Город, материал, количество, срок поставки, адрес. Бот ведёт пошагово, без бланков и таблиц",
  },
  {
    n: "03",
    icon: Handshake,
    title: "Получите контакты",
    description:
      "Через 15 минут получаете список предложений. Выбираете лучшее, бот соединяет с поставщиком. Дальше стройка",
  },
];

export function Steps() {
  return (
    <section
      id="steps"
      className="relative isolate overflow-hidden border-t border-bone-50/5 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-grid-light bg-[size:48px_48px] opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="sticky top-0 h-screen w-full">
          <div className="absolute right-[-10%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-signal/12 blur-[120px]" />
          <div className="absolute left-[-5%] top-2/3 h-[24rem] w-[24rem] rounded-full bg-signal/8 blur-[110px]" />
        </div>
      </div>
      <div className="relative mx-auto max-w-container container-px">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-bone-50/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-bone-400">
            Начало работы
          </div>
          <h2 className="h-display mt-5 text-balance text-5xl text-bone-50 sm:text-6xl lg:text-7xl">
            Начните за <span className="text-signal">3 шага</span>
          </h2>
          <p className="mt-6 text-pretty text-lg text-bone-400 sm:text-xl">
            От регистрации до контактов поставщика меньше получаса. Без
            обучения, без менеджеров, без подписки
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl border border-bone-50/10 bg-ink-800/50 p-8 transition-all duration-300 hover:border-signal/50 hover:bg-ink-800"
            >
              <div className="flex items-start justify-between">
                <div className="font-mono text-5xl font-extrabold text-signal/80 transition-colors duration-300 group-hover:text-signal">
                  {s.n}
                </div>
                <div className="rounded-xl border border-bone-50/10 bg-ink-900 p-3 transition-colors duration-300 group-hover:border-signal/30">
                  <s.icon
                    className="h-6 w-6 text-bone-50 transition-colors duration-300 group-hover:text-signal"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-bone-50">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-bone-400">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
