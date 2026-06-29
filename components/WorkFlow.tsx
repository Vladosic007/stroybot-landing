"use client";

import { motion } from "framer-motion";

type Step = {
  kicker: string;
  title: string;
  description: string;
  chat: ChatBubble[];
};

type ChatBubble = {
  side: "in" | "out";
  text: string;
  meta?: string;
};

const STEPS: Step[] = [
  {
    kicker: "01 / Заявка",
    title: "Опишите, что нужно",
    description:
      "Выберите город, категорию материала, количество и срок поставки. Бот ведёт пошагово, заполнить можно за две минуты с телефона прямо со стройки",
    chat: [
      { side: "in", text: "Город: Ростов-на-Дону" },
      { side: "in", text: "Категория: Кирпич" },
      { side: "in", text: "Количество: 5 поддонов" },
      { side: "in", text: "Срок: до 28.06.2026" },
      { side: "out", text: "Заявка №1284 создана\nОжидайте предложений" },
    ],
  },
  {
    kicker: "02 / Конкуренция",
    title: "Поставщики борются за заказ",
    description:
      "Заявка автоматически уходит профильным поставщикам в вашем городе. Они присылают свои цены: кто-то даёт скидку, кто-то предлагает доставку бесплатно",
    chat: [
      { side: "out", text: "Новая заявка №1284", meta: "СтройСнаб 161" },
      { side: "in", text: "Цена: 95 000 ₽\nДоставка включена" },
      { side: "out", text: "Новая заявка №1284", meta: "Дон Кирпич" },
      { side: "in", text: "Цена: 91 200 ₽\nДоставка 2 500 ₽" },
      { side: "out", text: "Новая заявка №1284", meta: "Кирпич Опт ЮФО" },
      { side: "in", text: "Цена: 88 700 ₽\nДоставка включена" },
    ],
  },
  {
    kicker: "03 / Выбор",
    title: "Сравнили, выбрали, поехали",
    description:
      "Через 15 минут получаете сводку всех предложений в одном сообщении. Выбираете лучшее, бот обменивается контактами и ставит сделку в работу",
    chat: [
      {
        side: "out",
        text: "По заявке №1284 три предложения:\n\nСтройСнаб 161 — 95 000 ₽\nДон Кирпич — 93 700 ₽\nКирпич Опт ЮФО — 88 700 ₽",
      },
      { side: "in", text: "Выбираю Кирпич Опт ЮФО" },
      {
        side: "out",
        text: "Контакты отправлены обеим сторонам\nЭкономия: 6 300 ₽",
      },
    ],
  },
];

export function WorkFlow() {
  return (
    <section
      id="workflow"
      className="relative isolate overflow-hidden border-t border-bone-50/5 py-24 sm:py-32"
    >
      {/* Постоянный фоновый grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-grid-light bg-[size:48px_48px] opacity-40"
      />
      {/* Sticky жёлтый glow — горит на протяжении всего скролла секции */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="sticky top-0 h-screen w-full">
          <div className="absolute left-[-15%] top-1/4 h-[36rem] w-[36rem] rounded-full bg-signal/15 blur-[140px]" />
          <div className="absolute right-[-10%] top-2/3 h-[30rem] w-[30rem] rounded-full bg-signal/12 blur-[130px]" />
          <div className="absolute left-1/3 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/8 blur-[120px]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-container container-px">
        <SectionHeader
          kicker="Как это работает"
          title="От заявки до сделки за 15 минут"
          subtitle="Три шага вместо десяти звонков, один экран вместо переписки в десяти чатах"
        />

        <div className="mt-20 flex flex-col gap-24 lg:gap-32">
          {STEPS.map((step, i) => (
            <StepRow key={step.kicker} step={step} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepRow({ step, reverse }: { step: Step; reverse: boolean }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={reverse ? "lg:order-2" : "lg:order-1"}
      >
        <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-signal">
          {step.kicker}
        </div>
        <h3 className="h-display max-w-[14ch] text-balance text-3xl text-bone-50 sm:text-5xl lg:text-6xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-[44ch] text-pretty text-base text-bone-400 sm:mt-6 sm:text-lg">
          {step.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className={`flex justify-center ${reverse ? "lg:order-1" : "lg:order-2"}`}
      >
        <PhoneMock bubbles={step.chat} />
      </motion.div>
    </div>
  );
}

function PhoneMock({ bubbles }: { bubbles: ChatBubble[] }) {
  return (
    <div className="relative w-[260px] sm:w-[300px] lg:w-[320px]">
      {/* Yellow halo */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-signal/10 blur-3xl"
      />
      {/* Phone frame */}
      <div className="rounded-[2.5rem] border border-bone-50/10 bg-ink-800 p-2 shadow-2xl shadow-black/50">
        <div className="rounded-[2rem] border border-bone-50/5 bg-ink-900 p-1">
          {/* Top bar */}
          <div className="flex items-center justify-between rounded-t-[1.75rem] bg-ink-700/60 px-5 py-3">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-signal/20 ring-1 ring-signal/40">
                <div className="flex h-full items-center justify-center text-[10px] font-extrabold text-signal">
                  СБ
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-bone-50">
                  СтройБот
                </div>
                <div className="text-[10px] text-bone-400">в сети</div>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="h-1 w-1 rounded-full bg-bone-400" />
              <div className="h-1 w-1 rounded-full bg-bone-400" />
              <div className="h-1 w-1 rounded-full bg-bone-400" />
            </div>
          </div>
          {/* Chat */}
          <div className="flex flex-col gap-2 bg-ink-900 p-4">
            {bubbles.map((b, i) => (
              <Bubble key={i} bubble={b} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ bubble }: { bubble: ChatBubble }) {
  const isOut = bubble.side === "out";
  return (
    <div
      className={`flex flex-col ${isOut ? "items-start" : "items-end"} gap-0.5`}
    >
      {bubble.meta && (
        <div className="px-1 text-[10px] uppercase tracking-wider text-bone-500">
          {bubble.meta}
        </div>
      )}
      <div
        className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2 text-[12px] leading-snug ${
          isOut
            ? "rounded-bl-md bg-ink-700 text-bone-100"
            : "rounded-br-md bg-signal text-ink-900"
        }`}
      >
        {bubble.text}
      </div>
    </div>
  );
}

function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-bone-50/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-bone-400">
        {kicker}
      </div>
      <h2 className="h-display mt-5 text-balance text-4xl text-bone-50 sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base text-bone-400 sm:mt-6 sm:text-xl">
        {subtitle}
      </p>
    </motion.div>
  );
}
