import Link from "next/link";

import { Logo } from "@/components/layout/logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo inverse />
          <p>A slower pace, close to home.</p>
          <p className="footer-location">Woodwark · Whitsundays · Queensland</p>
        </div>
        <div>
          <p className="footer-label">Visit</p>
          <Link href="#day-sessions">Day sessions</Link>
          <Link href="#guided-sessions">Guided sessions</Link>
          <Link href="#our-place">Our place</Link>
        </div>
        <div>
          <p className="footer-label">Gather</p>
          <Link href="#groups">Group bookings</Link>
          <Link href="#venue-hire">Venue hire</Link>
          <Link href="mailto:hello@woodwarkwellness.com.au">Contact us</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Woodwark Wellness</p>
        <p>Rest · Recovery · Connection</p>
      </div>
    </footer>
  );
}
