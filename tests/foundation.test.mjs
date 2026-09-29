import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("homepage preserves the primary and secondary conversion paths", async () => {
  const page = await read("src/app/page.tsx");

  assert.match(page, /Book a day session/i);
  assert.match(page, /Hire the venue/i);
  assert.match(page, /id="day-sessions"/);
  assert.match(page, /id="venue-hire"/);
});

test("global layout includes language, skip link, header, and footer", async () => {
  const layout = await read("src/app/layout.tsx");

  assert.match(layout, /lang="en-AU"/);
  assert.match(layout, /Skip to content/);
  assert.match(layout, /<SiteHeader \/>/);
  assert.match(layout, /<SiteFooter \/>/);
});

test("design system includes focus and reduced-motion treatment", async () => {
  const styles = await read("src/app/globals.css");

  assert.match(styles, /:focus-visible/);
  assert.match(styles, /prefers-reduced-motion: reduce/);
  assert.match(styles, /--colour-forest/);
  assert.match(styles, /--space-10/);
});

test("placeholder photography is disclosed in the interface", async () => {
  const photoFrame = await read("src/components/ui/photo-frame.tsx");

  assert.match(photoFrame, /Photography placeholder/);
  assert.match(photoFrame, /Photography direction/);
});
