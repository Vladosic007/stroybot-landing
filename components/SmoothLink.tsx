"use client";

import { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { smoothScrollTo } from "@/lib/smoothScroll";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function SmoothLink({
  href,
  children,
  className,
  onClick,
  ...rest
}: Props) {
  const isAnchor = href.startsWith("#") && href.length > 1;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor) {
      e.preventDefault();
      smoothScrollTo(href);
      history.replaceState(null, "", href);
    }
    onClick?.(e);
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
