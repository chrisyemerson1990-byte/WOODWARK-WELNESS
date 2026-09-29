import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Logo />

        <nav aria-label="Primary navigation" className="desktop-nav">
          {siteConfig.navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="#day-sessions">
          Book a day session
          <ArrowIcon />
        </Link>

        <details className="mobile-nav">
          <summary>
            <span className="sr-only">Open navigation</span>
            <span aria-hidden="true" className="mobile-nav__lines" />
          </summary>
          <nav aria-label="Mobile navigation" className="mobile-nav__panel">
            {siteConfig.navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="mobile-nav__cta" href="#day-sessions">
              Book a day session
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
