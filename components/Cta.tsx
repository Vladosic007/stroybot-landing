"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BOT_URL } from "@/lib/config";

export function Cta() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden border-t border-bone-50/5 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-light bg-[size:48px_48px] opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-15%] left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-signal/20 blur-[140px]"
      />

      <div className="mx-auto max-w-container container-px">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-bone-50/10 bg-ink-800/60 p-8 backdrop-blur-sm sm:p-14 lg:p-20"
        >
          {/* Corner mark */}
          <div className="absolute right-8 top-8 hidden text-[10px] font-mono uppercase tracking-widest text-bone-500 sm:block">
            #свободный_доступ
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              <span className="text-xs font-bold uppercase tracking-widest text-signal">
                СтройБот уже работает
              </span>
            </div>

            <h2 className="h-display mt-7 text-balance text-4xl text-bone-50 sm:text-6xl lg:text-7xl">
              Заходите прямо сейчас
              <br />и забирайте{" "}
              <span className="text-signal">максимальную выгоду</span>
            </h2>

            <p className="mt-6 max-w-[55ch] text-pretty text-base text-bone-400 sm:mt-7 sm:text-xl">
              Регистрация занимает минуту, первая заявка ещё две. Деньги,
              которые сэкономит конкуренция поставщиков, навсегда ваши
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:items-center">
              <a
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-signal px-8 py-4 text-base font-bold text-ink-900 transition-all duration-200 hover:bg-signal-400 cursor-pointer"
              >
                Открыть СтройБота в МАКС
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2.5}
                  aria-hidden
                />
              </a>

              <div className="text-sm text-bone-400">
                Без комиссии · Без подписки · Без посредников
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
