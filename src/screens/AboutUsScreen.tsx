import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, CheckCircle2, Heart, BookOpen, Flame, HandHeart, Sparkles, Calendar } from 'lucide-react'
import { CHURCH_INFO, PILLARS, ANNUAL_THEME_DETAILS } from '@/data/churchData'
import { Button } from '@/components/ui/button'

const pillarIcons: Record<string, React.ReactNode> = {
  spirit: <Flame className="w-5 h-5 text-cta shrink-0" />,
  christ: <Sparkles className="w-5 h-5 text-primary shrink-0" />,
  living: <CheckCircle2 className="w-5 h-5 text-success shrink-0" />,
  finance: <HandHeart className="w-5 h-5 text-tertiary shrink-0" />,
  word: <BookOpen className="w-5 h-5 text-primary shrink-0" />,
  prayer: <Flame className="w-5 h-5 text-cta shrink-0" />,
  grace: <Heart className="w-5 h-5 text-primary shrink-0" />
}

export const AboutUsScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-0 pb-20">
      {/* Page Banner */}
      <section className="bg-primary text-primary-foreground px-page-margin py-6 flex flex-col gap-1 shadow-sm">
        <span className="font-label text-label-sm text-gold-soft uppercase tracking-wider font-semibold">
          Home · About Us
        </span>
        <h1 className="font-display text-display-lg-mobile font-bold">
          About Seal of Grace Bible Church
        </h1>
      </section>

      {/* Our History */}
      <section className="px-page-margin py-section flex flex-col gap-3">
        <span className="font-label text-label-sm text-tertiary-container-foreground uppercase tracking-wider font-semibold">
          Est. 2016 · Tarkwa, Ghana
        </span>
        <h2 className="font-headline text-headline-lg-mobile text-secondary font-bold">
          Our History
        </h2>
        <div className="flex flex-col gap-3 text-muted-foreground font-body text-body-md leading-relaxed text-pretty">
          <p>
            Seal of Grace Bible Church, headquartered in Tarkwa, Ghana, began in 2016 when a group of young believers, led by Samuel Koffie, sought clarity on key spiritual issues and desired to honor the movement of the Holy Spirit and biblical truth.
          </p>
          <p>
            Following their first prayer meeting on August 5, 2016 at Tarkwa Methodist School, Nzemaline, members from Prestea and Tarkwa held the first official Sunday service on August 7, 2016, later uniting with believers from Accra, Anyinase, and Asaasetre in Takoradi.
          </p>
          <p>
            In November 2023, the Tarkwa and Prestea branches rebranded as Seal of Grace Bible Church to align closely with the original vision, mission, and values centered on the Bible and the Word of God.
          </p>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="px-page-margin pb-6 flex flex-col gap-3">
        <div className="rounded-xl bg-card border border-border p-4 flex flex-col gap-1.5 shadow-xs">
          <span className="font-label text-xs uppercase tracking-wider text-primary font-bold">
            Our Mission
          </span>
          <p className="font-body text-sm text-secondary font-medium">
            {ANNUAL_THEME_DETAILS.mission}
          </p>
        </div>

        <div className="rounded-xl bg-card border border-border p-4 flex flex-col gap-1.5 shadow-xs">
          <span className="font-label text-xs uppercase tracking-wider text-tertiary font-bold">
            Our Vision
          </span>
          <p className="font-body text-sm text-secondary font-medium">
            {ANNUAL_THEME_DETAILS.vision}
          </p>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="bg-accent px-page-margin py-section flex flex-col gap-gutter-lg border-y border-border/60">
        <div className="flex flex-col gap-1">
          <h2 className="font-headline text-headline-lg-mobile text-secondary font-bold">
            What We Stand For
          </h2>
          <p className="font-body text-body-md text-muted-foreground">
            Seal of Grace Bible Church stands firm in the teachings of the Lord Jesus Christ.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              className="rounded-xl bg-card border border-border p-4 flex flex-col gap-2 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                {pillarIcons[pillar.id] || <CheckCircle2 className="w-5 h-5 text-primary" />}
                <h3 className="font-title text-title-sm text-secondary font-bold">
                  {pillar.title}
                </h3>
              </div>
              <span className="font-label text-[11px] text-tertiary font-semibold tracking-wide">
                {pillar.verse}
              </span>
              <p className="font-body text-body-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Get in Touch Card */}
      <section className="px-page-margin py-section flex flex-col gap-3">
        <h2 className="font-headline text-headline-md text-secondary font-bold">
          Get in Touch
        </h2>
        <div className="rounded-xl bg-primary-container p-4 flex flex-col gap-3 text-primary-container-foreground shadow-sm">
          <a
            href={`mailto:${CHURCH_INFO.email}`}
            className="flex items-center gap-3 text-xs hover:underline truncate"
          >
            <Mail className="w-5 h-5 text-primary shrink-0" />
            <span className="font-body truncate">{CHURCH_INFO.email}</span>
          </a>

          <a
            href={`tel:${CHURCH_INFO.phoneRaw}`}
            className="flex items-center gap-3 text-xs hover:underline"
          >
            <Phone className="w-5 h-5 text-primary shrink-0" />
            <span className="font-body tabular-nums font-semibold">{CHURCH_INFO.phone}</span>
          </a>

          <div className="flex items-center gap-3 text-xs">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <span className="font-body">{CHURCH_INFO.address}</span>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Link
              to="/contact"
              className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-full bg-primary text-primary-foreground font-label text-xs font-semibold hover:bg-primary/90 text-center"
            >
              Send Message
            </Link>
            <Link
              to="/booking"
              className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-full bg-cta text-cta-foreground font-label text-xs font-semibold hover:bg-destructive text-center"
            >
              Book Counseling
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
