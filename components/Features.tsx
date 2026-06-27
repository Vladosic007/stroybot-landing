"use client";

import { motion } from "framer-motion";
import {
  Gavel,
  Timer,
  ShieldCheck,
  Target,
  Lock,
  PackageOpen,
} from "lucide-react";

const FEATURES = [
  {
    icon: Gavel,
    title: "Конкуренция работает на вас",
    description:
      "Поставщики видят одну и ту же заявку и борются за заказ. Цены идут вниз сами, без торга и звонков",
  },
  {
    icon: Timer,
    title: "15 минут вместо 3 дней",
    description:
      "Бот собирает предложения по таймеру. Не нужно обзванивать поставщиков и ждать прайсы по почте",
  },
  {
    icon: ShieldCheck,
    title: "Только проверенные ИНН",
    description:
      "Каждый поставщик подтверждает компанию по ИНН на старте. Подставных контор и однодневок в системе нет",
  },
  {
    icon: Target,
    title: "По вашему городу и категории",
    description:
      "Заявка уходит только тем, кто реально возит ваш материал в ваш регион. Никакого спама и нерелевантных предложений",
  },
  {
    icon: Lock,
    title: "Контакты только победителю",
    description:
      "Ваш номер и адрес объекта получает один поставщик: тот, кого вы выбрали. Остальные видят только сумму заказа",
  },
  {
    icon: PackageOpen,
    title: "От пачки до фуры",
    description:
      "Берите 1 поддон кирпича или 20 тонн арматуры. Формат заявки один, подходит и для частных бригад, и для крупных объектов",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden border-t border-bone-50/5 py-24 sm:py-32"
    >
      {/* Постоянная сетка */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-grid-light bg-[size:48px_48px] opacity-40"
      />
      {/* Sticky жёлтый glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="sticky top-0 h-screen w-full">
          <div className="absolute right-[-12%] top-1/4 h-[34rem] w-[34rem] rounded-full bg-signal/12 blur-[140px]" />
          <div className="absolute left-1/4 top-2/3 h-[24rem] w-[24rem] rounded-full bg-signal/8 blur-[120px]" />
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
            Преимущества
          </div>
          <h2 className="h-display mt-5 text-balance text-5xl text-bone-50 sm:text-6xl lg:text-7xl">
            Что вы получаете
            <br />с первой же заявки
          </h2>
          <p className="mt-6 max-w-[55ch] text-pretty text-lg text-bone-400 sm:text-xl">
            СтройБот не просто чат с поставщиками. Это механика, которая
            экономит вам время, деньги и нервы на каждой закупке
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="group relative flex flex-col rounded-2xl border border-bone-50/10 bg-ink-800/40 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-ink-800/70"
            >
              <div className="absolute right-5 top-5 font-mono text-xs font-medium text-bone-500">
                0{i + 1}
              </div>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bone-50/10 transition-colors duration-300 group-hover:bg-signal">
                <f.icon
                  className="h-6 w-6 text-bone-50 transition-colors duration-300 group-hover:text-ink-900"
                  strokeWidth={2}
                  aria-hidden
                />
              </div>
              <h3 className="text-balance text-xl font-bold leading-tight text-bone-50">
                {f.title}
              </h3>
              <p className="mt-3 text-pretty text-[15px] leading-relaxed text-bone-400">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
