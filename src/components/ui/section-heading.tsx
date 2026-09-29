import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-heading__copy">{children}</div> : null}
    </div>
  );
}
