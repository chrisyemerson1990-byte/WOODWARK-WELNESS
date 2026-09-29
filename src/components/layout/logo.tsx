import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      aria-label="Woodwark Wellness home"
      className={`logo ${inverse ? "logo--inverse" : ""}`}
      href="/"
    >
      <svg aria-hidden="true" className="logo__mark" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" />
        <path d="M10 22c4-1 4-7 8-11 0 7 2 9 8 11-4 1-7 2-8 5-2-3-4-4-8-5Z" fill="currentColor" />
      </svg>
      <span className="logo__words">
        <strong>Woodwark</strong>
        <span>Wellness</span>
      </span>
    </Link>
  );
}
