import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowIcon } from "@/components/ui/arrow-icon";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  tone?: "primary" | "secondary" | "light";
  showArrow?: boolean;
};

export function ButtonLink({
  children,
  href,
  tone = "primary",
  showArrow = true,
}: ButtonLinkProps) {
  return (
    <Link className={`button button--${tone}`} href={href}>
      <span>{children}</span>
      {showArrow ? <ArrowIcon /> : null}
    </Link>
  );
}
