import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-bone-50/10 bg-ink-900 py-10">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-6 container-px text-sm text-bone-500 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-bold text-bone-300">
            ТУРБО<span className="text-signal">СНАБ</span>
          </span>
          <span className="text-bone-600">·</span>
          <span>© {new Date().getFullYear()} TAGIT</span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="transition-colors duration-200 hover:text-bone-300 cursor-pointer"
          >
            Политика
          </Link>
          <Link
            href="#"
            className="transition-colors duration-200 hover:text-bone-300 cursor-pointer"
          >
            Контакты
          </Link>
          <Link
            href="#"
            className="transition-colors duration-200 hover:text-bone-300 cursor-pointer"
          >
            Поддержка
          </Link>
        </div>
      </div>
    </footer>
  );
}
