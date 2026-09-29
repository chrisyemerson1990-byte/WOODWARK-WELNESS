import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { SectionHeading } from "@/components/ui/section-heading";

const experiences = [
  { number: "01", title: "Wood-fired warmth", copy: "Settle into a hot tub surrounded by open air, timber and greenery." },
  { number: "02", title: "Cold water reset", copy: "Move at your own pace between barrel plunges, the pool and places to rest." },
  { number: "03", title: "Space to slow down", copy: "Stretch out on the deck, sit by the fire or simply spend an unhurried day outside." },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero__content container">
          <p className="eyebrow">A nature-based day retreat in the Whitsundays</p>
          <h1>Come back to<br />your own pace.</h1>
          <p className="hero__intro">
            Fire, water and open space for people who need a day to recover,
            reconnect and feel more like themselves.
          </p>
          <div className="hero__actions">
            <ButtonLink href="#day-sessions">Book a day session</ButtonLink>
            <ButtonLink href="#venue-hire" tone="light">Hire the venue</ButtonLink>
          </div>
        </div>
        <div className="hero__media-wrap container">
          <PhotoFrame
            className="hero__media"
            label="Guests sharing the wood-fired hot tubs at golden hour — authentic property image to replace this frame"
          />
          <p className="hero__note">Woodwark, near Airlie Beach</p>
        </div>
      </section>

      <section className="intro-section" id="our-place">
        <div className="container intro-grid">
          <p className="eyebrow">Rest feels different out here</p>
          <div>
            <h2>A place shaped by timber, water, fire and room to breathe.</h2>
            <p>
              Woodwark Wellness is a relaxed day retreat set on a spacious natural
              property near Airlie Beach. Come for the facilities, join a guided
              session, or gather your people for time well spent outdoors.
            </p>
            <Link className="text-link" href="#experience">Explore the experience <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="container">
          <SectionHeading eyebrow="The experience" title="Move between warmth, cold and stillness.">
            <p>No rigid routine. Just considered spaces that let you choose what your body and mind need that day.</p>
          </SectionHeading>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.number}>
                <span>{experience.number}</span>
                <h3>{experience.title}</h3>
                <p>{experience.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="day-section" id="day-sessions">
        <div className="container day-grid">
          <PhotoFrame
            className="day-section__photo"
            label="Morning light across the pool, timber deck and cold plunge barrels"
          />
          <div className="day-section__content">
            <p className="eyebrow">Day sessions</p>
            <h2>Take the day. Leave the rush behind.</h2>
            <p>
              Day sessions are for individuals, couples and small groups wanting
              uncomplicated time to rest and recover. Swim, soak, plunge and settle
              into the property at your own pace.
            </p>
            <ul className="feature-list">
              <li>Wood-fired hot tubs and barrel cold plunges</li>
              <li>Swimming pool and wide timber deck</li>
              <li>Fire pits and quiet outdoor places</li>
              <li>Two private cabins and natural surrounds</li>
            </ul>
            <ButtonLink href="#booking-note">Explore day sessions</ButtonLink>
            <p className="owner-note" id="booking-note">Session times, inclusions and pricing are <strong>[OWNER TO CONFIRM]</strong>.</p>
          </div>
        </div>
      </section>

      <section className="guided-section" id="guided-sessions">
        <div className="container guided-grid">
          <div>
            <p className="eyebrow">Guided sessions</p>
            <h2>Come as you are.<br />We’ll guide the rest.</h2>
          </div>
          <div className="guided-copy">
            <p>
              Scheduled breathwork, yoga, meditation, sound and movement sessions
              offer a little structure without taking away the ease of being here.
            </p>
            <p className="owner-note">The first guided program is <strong>[OWNER TO CONFIRM]</strong>.</p>
            <ButtonLink href="mailto:hello@woodwarkwellness.com.au?subject=Guided%20sessions" tone="secondary">Ask about guided sessions</ButtonLink>
          </div>
        </div>
      </section>

      <section className="gather-section" id="groups">
        <div className="container">
          <SectionHeading align="center" eyebrow="Two ways to gather" title="Bring your people. Or bring your practice.">
            <p>Choose a shared day at the property, or make the whole place your own.</p>
          </SectionHeading>
          <div className="pathway-grid">
            <article className="pathway-card">
              <p className="pathway-card__number">01</p>
              <div>
                <h3>Group days</h3>
                <p>For friends, teams and communities wanting to reset together without organising a full retreat.</p>
                <Link href="mailto:hello@woodwarkwellness.com.au?subject=Group%20booking">Plan a group day <span aria-hidden="true">→</span></Link>
              </div>
            </article>
            <article className="pathway-card pathway-card--dark" id="venue-hire">
              <p className="pathway-card__number">02</p>
              <div>
                <h3>Venue hire & retreats</h3>
                <p>A ready-made natural setting for facilitators, teachers and organisers to host meaningful multi-day experiences.</p>
                <Link href="mailto:hello@woodwarkwellness.com.au?subject=Venue%20hire">Enquire about the venue <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container location-grid">
          <div>
            <p className="eyebrow">Close enough. Far enough away.</p>
            <h2>In Woodwark, on the quieter side of the Whitsundays.</h2>
          </div>
          <div>
            <p>
              Set near Airlie Beach in Queensland’s Whitsundays, the property offers
              a change of pace for locals, visitors and retreat groups from further afield.
            </p>
            <p className="owner-note">Travel times and arrival directions are <strong>[OWNER TO CONFIRM]</strong>.</p>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container closing-cta__inner">
          <p className="eyebrow">Your day can feel different</p>
          <h2>Make some room<br />to reset.</h2>
          <div>
            <ButtonLink href="#day-sessions" tone="light">Book a day session</ButtonLink>
            <p>Looking for exclusive use? <Link href="#venue-hire">Hire the venue</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
