"use client";

import { motion } from "framer-motion";
import { HardHat, Truck, ArrowRight } from "lucide-react";
import { SmoothLink } from "./SmoothLink";

const CONTRACTOR_PERKS = [
  "Заявка собирает рынок сама, без обзвона",
  "Видите 3–10 коммерческих предложений в одном месте",
  "Конкуренция автоматически снижает цену",
  "Контакт получает только выбранный поставщик",
  "Лимит до 5 активных заявок в сутки",
  "Бесплатно, комиссии за поиск нет",
];

const VENDOR_PERKS = [
  "Уведомления только о заявках вашего города и категории",
  "Откликаетесь одной кнопкой, без переговоров с менеджером",
  "Свободная цена и комментарий по сделке",
  "Контакты клиента приходят, если выбрали именно вас",
  "Профиль с городами и категориями редактируется в любой момент",
  "Площадка работает без абонентской платы",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Roles() {
  return (
    <section
      id="roles"
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
          <div className="absolute left-[-10%] top-1/3 h-[36rem] w-[36rem] rounded-full bg-signal/12 blur-[140px]" />
          <div className="absolute right-[5%] top-1/2 h-[28rem] w-[28rem] rounded-full bg-signal/10 blur-[120px]" />
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
            Для кого
          </div>
          <h2 className="h-display mt-5 text-balance text-5xl text-bone-50 sm:text-6xl lg:text-7xl">
            Две стороны одной сделки
          </h2>
          <p className="mt-6 max-w-[55ch] text-pretty text-lg text-bone-400 sm:text-xl">
            Подрядчики получают рынок в одном окне. Поставщики получают
            квалифицированный трафик заявок. Обе стороны без комиссии
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RoleCard
            index={0}
            icon={HardHat}
            tag="Подрядчики"
            title="Для тех, кто закупает материалы"
            sub="Бригады, прорабы, генподряд, частные стройки"
            perks={CONTRACTOR_PERKS}
            ctaLabel="Я подрядчик"
            ctaHref="#cta"
            iconAccent
          />
          <RoleCard
            index={1}
            icon={Truck}
            tag="Поставщики"
            title="Для тех, кто продаёт стройматериалы"
            sub="Базы, склады, дилеры, региональные сети"
            perks={VENDOR_PERKS}
            ctaLabel="Я поставщик"
            ctaHref="#cta"
          />
        </div>
      </div>
    </section>
  );
}

function RoleCard({
  index,
  icon: Icon,
  tag,
  title,
  sub,
  perks,
  ctaLabel,
  ctaHref,
  iconAccent = false,
}: {
  index: number;
  icon: typeof HardHat;
  tag: string;
  title: string;
  sub: string;
  perks: string[];
  ctaLabel: string;
  ctaHref: string;
  iconAccent?: boolean;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex flex-col rounded-3xl border border-bone-50/10 bg-ink-800/50 p-8 text-bone-50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-ink-800/80 hover:shadow-[0_24px_60px_-20px_rgba(250,204,21,0.15)] sm:p-10"
    >
      <div className="flex items-start justify-between">
        <div
          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
            iconAccent
              ? "bg-signal text-ink-900"
              : "bg-bone-50/10 text-bone-50 group-hover:bg-bone-50 group-hover:text-ink-900"
          }`}
        >
          <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
        </div>
        <span className="rounded-full bg-bone-50/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-bone-300">
          {tag}
        </span>
      </div>
      <h3 className="mt-7 text-balance text-3xl font-bold leading-tight sm:text-4xl">
        {title}
      </h3>
      <p className="mt-2 text-base text-bone-400">{sub}</p>

      <ul className="mt-7 flex flex-col gap-3">
        {perks.map((p) => (
          <li key={p} className="flex items-start gap-3 text-[15px]">
            <CheckBadge />
            <span className="text-bone-200">{p}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <SmoothLink
          href={ctaHref}
          className={`group/cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 cursor-pointer ${
            iconAccent
              ? "bg-signal text-ink-900 hover:bg-signal-400"
              : "bg-bone-50 text-ink-900 hover:bg-bone-200"
          }`}
        >
          {ctaLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5"
            strokeWidth={2.5}
            aria-hidden
          />
        </SmoothLink>
      </div>
    </motion.div>
  );
}

function CheckBadge() {
  return (
    <span
      className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-signal/15"
      aria-hidden
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        className="text-signal"
      >
        <path
          d="M2 5l2 2 4-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
