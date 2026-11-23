import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Radio,
  Bookmark,
  Users,
  ExternalLink,
  Sparkles,
  Church,
  HeartHandshake,
  Flame
} from 'lucide-react'
import {
  CHURCH_INFO,
  ANNUAL_THEME_DETAILS,
  MONTHLY_THEMES,
  EVENTS,
  CHURCH_SERVICES,
  GALLERY_PHOTOS,
  PASTORS
} from '@/data/churchData'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface HomeScreenProps {
  onOpenRadio: () => void
  onSelectPhoto: (photo: typeof GALLERY_PHOTOS[0]) => void
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onOpenRadio,
  onSelectPhoto,
}) => {
  const navigate = useNavigate()
  const leadPastor = PASTORS.find((p) => p.isLead) || PASTORS[0]

  return (
    <div className="flex flex-col gap-0 pb-20">
      {/* Core Services Quick Access */}
      <section className="px-page-margin pt-6 pb-2 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-headline text-headline-md text-secondary font-bold">
            Church Services & Ministry
          </h2>
          <Link
            to="/services"
            className="font-label text-xs text-primary hover:underline font-semibold"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {CHURCH_SERVICES.slice(0, 4).map((svc) => {
            const categoryMeta: Record<string, { label: string; icon: any; badgeClass: string; gradient: string }> = {
              worship: {
                label: 'Worship',
                icon: Church,
                badgeClass: 'bg-primary/95 text-white',
                gradient: 'from-blue-950/85 via-black/30 to-transparent'
              },
              counseling: {
                label: 'Counseling',
                icon: HeartHandshake,
                badgeClass: 'bg-rose-600/95 text-white',
                gradient: 'from-rose-950/85 via-black/30 to-transparent'
              },
              prayer: {
                label: 'Prayer',
                icon: Flame,
                badgeClass: 'bg-amber-600/95 text-white',
                gradient: 'from-amber-950/85 via-black/30 to-transparent'
              },
              broadcast: {
                label: 'Broadcast',
                icon: Radio,
                badgeClass: 'bg-emerald-600/95 text-white',
                gradient: 'from-emerald-950/85 via-black/30 to-transparent'
              }
            }
            const meta = categoryMeta[svc.category] || {
              label: svc.category,
              icon: Sparkles,
              badgeClass: 'bg-primary/95 text-white',
              gradient: 'from-slate-950/85 via-black/30 to-transparent'
            }
            const Icon = meta.icon

            return (
              <Link
                key={svc.id}
                to={`/services/${svc.id}`}
                className="group flex flex-col rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 overflow-hidden active:scale-[0.98]"
              >
                {/* Image Header with smooth zoom & overlay */}
                <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-900">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s1.jpg'
                    }}
                  />
                  {/* Gradient Overlay for Contrast */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${meta.gradient}`} />

                  {/* Top Category Badge */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md shadow-xs ${meta.badgeClass}`}>
                      <Icon className="w-2.5 h-2.5" />
                      <span>{meta.label}</span>
                    </span>
                  </div>

                  {/* Schedule Indicator */}
                  {svc.schedule && (
                    <div className="absolute bottom-1.5 left-2 right-2 z-10 flex items-center gap-1 text-[10px] text-white/95 font-medium truncate drop-shadow-sm">
                      <Clock className="w-2.5 h-2.5 text-white/80 shrink-0" />
                      <span className="truncate">{svc.schedule.split('(')[0].trim()}</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-3 flex flex-col flex-1 justify-between gap-2.5 bg-white">
                  <h3 className="font-headline text-[13px] font-bold text-slate-800 group-hover:text-primary leading-snug line-clamp-2 transition-colors">
                    {svc.title}
                  </h3>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary">
                    <span className="text-[11px] font-bold group-hover:underline">Explore</span>
                    <span className="w-5 h-5 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="px-page-margin py-section flex flex-col gap-gutter-lg">
        <div className="flex items-end justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <span className="font-label text-label-sm text-tertiary-container-foreground uppercase tracking-wider font-semibold">
              Seal Of Grace Church Activities
            </span>
            <h2 className="font-headline text-headline-lg-mobile text-secondary font-bold">
              Upcoming Events
            </h2>
          </div>
          <Link
            to="/events"
            className="font-label text-label-sm text-primary hover:underline font-semibold shrink-0"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-gutter-lg">
          {EVENTS.slice(0, 2).map((event) => (
            <Card key={event.id} className="overflow-hidden flex flex-col">
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1000&q=80'
                  }}
                />
                <div className="absolute top-gutter-md right-gutter-md rounded-md bg-cta text-white px-3 py-1 text-center shadow-md">
                  <span className="block font-title text-title-md font-bold tabular-nums leading-none">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="block font-label text-[10px] uppercase font-semibold leading-tight pt-0.5">
                    {event.date.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              </div>

              <div className="p-gutter-lg flex flex-col gap-gutter-sm">
                <header className="flex flex-col gap-0.5">
                  <span className="font-label text-[11px] font-bold text-tertiary-container-foreground uppercase tracking-wide">
                    {event.tag}
                  </span>
                  <h3 className="font-title text-title-md text-secondary font-bold">
                    {event.title}
                  </h3>
                </header>

                <div className="flex flex-col gap-1 text-muted-foreground text-xs">
                  <p className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="tabular-nums font-medium text-foreground">{event.time}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    {event.id.includes('radio') ? (
                      <Radio className="w-3.5 h-3.5 text-primary shrink-0" />
                    ) : (
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    )}
                    <span>{event.location}</span>
                  </p>
                  {event.id.includes('radio') && (
                    <button
                      type="button"
                      onClick={onOpenRadio}
                      className="mt-2 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white font-semibold text-xs transition-colors"
                    >
                      <Radio className="w-3.5 h-3.5" />
                      <span>Tune In Live Radio</span>
                    </button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Annual Theme, Values, Mission & Vision */}
      <section className="bg-accent px-page-margin py-section flex flex-col gap-gutter-xl border-y border-border/60">
        <div className="flex flex-col gap-1">
          <span className="font-label text-label-sm text-tertiary-container-foreground uppercase tracking-wider font-semibold">
            Annual Theme {CHURCH_INFO.year}
          </span>
          <h2 className="font-headline text-headline-lg-mobile text-secondary font-bold text-balance">
            {ANNUAL_THEME_DETAILS.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="rounded-lg bg-card border border-border p-4 flex flex-col gap-1 shadow-sm">
            <h3 className="font-headline text-title-md text-secondary font-bold">Our Values</h3>
            <p className="font-body text-body-md text-muted-foreground text-pretty leading-relaxed">
              {ANNUAL_THEME_DETAILS.values}
            </p>
          </div>

          <div className="rounded-lg bg-card border border-border p-4 flex flex-col gap-1 shadow-sm">
            <h3 className="font-headline text-title-md text-secondary font-bold">Our Mission</h3>
            <p className="font-body text-body-md text-muted-foreground text-pretty leading-relaxed">
              {ANNUAL_THEME_DETAILS.mission}
            </p>
          </div>

          <div className="rounded-lg bg-card border border-border p-4 flex flex-col gap-1 shadow-sm">
            <h3 className="font-headline text-title-md text-secondary font-bold">Our Vision</h3>
            <p className="font-body text-body-md text-muted-foreground text-pretty leading-relaxed">
              {ANNUAL_THEME_DETAILS.vision}
            </p>
          </div>
        </div>

        {/* Monthly Themes Card */}
        <div className="rounded-lg bg-card border border-border shadow-sm p-4 flex flex-col gap-3.5">
          <div className="flex items-center justify-between border-b border-border/60 pb-2">
            <h3 className="font-headline text-headline-md text-secondary font-bold">
              Monthly Themes
            </h3>
            <Bookmark className="w-5 h-5 text-tertiary fill-current" />
          </div>

          <div className="flex flex-col gap-3">
            {MONTHLY_THEMES.map((theme, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-12 shrink-0 rounded-md bg-gold-soft text-gold-soft-foreground py-1.5 text-center shadow-xs">
                  <span className="block font-label text-xs font-bold leading-none">
                    {theme.month}
                  </span>
                  <span className="block font-label text-[10px] tabular-nums font-semibold leading-tight pt-0.5">
                    {theme.year}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="font-title text-title-sm text-secondary font-semibold">
                    {theme.title}
                  </p>
                  {theme.scripture && (
                    <p className="font-body text-[11px] text-muted-foreground">
                      {theme.scripture}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presbytery Team Preview */}
      <section className="px-page-margin py-section flex flex-col gap-gutter-lg">
        <div className="flex items-end justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <span className="font-label text-label-sm text-tertiary-container-foreground uppercase tracking-wider font-semibold">
              Church Officers
            </span>
            <h2 className="font-headline text-headline-lg-mobile text-secondary font-bold">
              Our Presbytery Team
            </h2>
          </div>
          <Link
            to="/pastors"
            className="font-label text-label-sm text-primary hover:underline font-semibold shrink-0"
          >
            See All
          </Link>
        </div>

        <div className="rounded-xl bg-card border border-border shadow-sm p-4 flex items-center gap-4">
          <img
            src={leadPastor.image}
            alt={leadPastor.name}
            className="w-20 h-20 rounded-full object-cover shrink-0 border-2 border-tertiary shadow-sm"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
            }}
          />
          <div className="flex flex-col gap-1 min-w-0">
            <h3 className="font-title text-title-md text-secondary font-bold truncate">
              {leadPastor.name}
            </h3>
            <p className="font-body text-xs text-muted-foreground">
              {leadPastor.role}
            </p>
            <Link
              to="/pastors"
              className="font-label text-xs text-primary font-semibold hover:underline text-left inline-flex items-center gap-1 pt-0.5"
            >
              <span>Meet our pastors</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Media Gallery Preview */}
      <section className="px-page-margin py-6 flex flex-col gap-3 bg-background text-foreground">
        <div className="flex items-end justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <span className="font-label text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Our Memory
            </span>
            <h2 className="font-headline text-headline-md text-secondary font-bold">
              Media Gallery
            </h2>
          </div>
          <Link
            to="/gallery"
            className="font-label text-xs text-primary hover:underline font-semibold shrink-0"
          >
            Explore Now
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {[
            GALLERY_PHOTOS.find((p) => p.category === 'service') || GALLERY_PHOTOS[0],
            GALLERY_PHOTOS.find((p) => p.category === 'choir') || GALLERY_PHOTOS[1],
            GALLERY_PHOTOS.find((p) => p.category === 'children') || GALLERY_PHOTOS[2],
            GALLERY_PHOTOS.find((p) => p.category === 'events') || GALLERY_PHOTOS[3],
          ].map((photo) => (
            <button
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="relative group rounded-xl overflow-hidden border border-border shadow-xs active:scale-95 transition-transform"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1000&q=80'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                <span className="font-label text-xs text-white font-medium truncate">
                  {photo.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
