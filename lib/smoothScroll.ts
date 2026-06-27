export function smoothScrollTo(targetId: string) {
  if (typeof window === "undefined") return;
  const target = document.querySelector(targetId);
  if (!target) return;

  const offsetY =
    (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 24;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches;

  window.scrollTo({
    top: offsetY,
    behavior: reduceMotion ? "auto" : "smooth",
  });
}
