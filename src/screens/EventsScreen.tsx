import React, { useState } from 'react'
import {
  Clock,
  MapPin,
  Radio,
  CalendarCheck,
  Bell,
  Sparkles,
  Share2
} from 'lucide-react'
import { EVENTS, ANNUAL_CALENDAR } from '@/data/churchData'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const EventsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'weekly' | 'annual'>('weekly')
  const [reminderSaved, setReminderSaved] = useState<string | null>(null)

  const handleSetReminder = (id: string, title: string) => {
    setReminderSaved(id)
    setTimeout(() => {
      setReminderSaved(null)
    }, 2500)
  }

  return (
    <div className="flex flex-col gap-0 pb-20">
      {/* Filter Chips */}
      <section className="px-page-margin pt-4 pb-2 flex flex-col gap-2.5">
        <h2 className="font-headline text-headline-md text-secondary font-bold">
          Explore Our Events
        </h2>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('weekly')}
            className={`inline-flex items-center justify-center rounded-full px-4 py-2 font-label text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'weekly'
                ? 'bg-secondary text-on-secondary shadow-sm'
                : 'bg-surface-container border border-outline text-on-surface-variant hover:text-secondary'
            }`}
          >
            Every Week ({EVENTS.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('annual')}
            className={`inline-flex items-center justify-center rounded-full px-4 py-2 font-label text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'annual'
                ? 'bg-secondary text-on-secondary shadow-sm'
                : 'bg-surface-container border border-outline text-on-surface-variant hover:text-secondary'
            }`}
          >
            2026 Fasting & Calendar ({ANNUAL_CALENDAR.length})
          </button>
        </div>
      </section>

      {/* Reminder notification toast */}
      {reminderSaved && (
        <div className="mx-page-margin mb-2 p-3 rounded-lg bg-success text-white text-xs font-medium flex items-center justify-between shadow-md animate-in slide-in-from-top">
          <span className="flex items-center gap-1.5">
            <CalendarCheck className="w-4 h-4" />
            <span>Reminder saved to your church schedule!</span>
          </span>
        </div>
      )}

      {/* Weekly Services Panel */}
      {activeTab === 'weekly' && (
        <section className="px-page-margin py-2 flex flex-col gap-4">
          {EVENTS.map((event) => (
            <Card key={event.id} className="overflow-hidden flex flex-col">
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1000&q=80'
                  }}
                />
                <div className="absolute top-gutter-md right-gutter-md rounded-md bg-cta text-on-cta px-3 py-1 text-center shadow-md">
                  <span className="block font-title text-title-md font-bold tabular-nums leading-none">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="block font-label text-[10px] uppercase font-semibold leading-tight pt-0.5">
                    {event.date.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-label text-[11px] font-bold text-on-tertiary-container uppercase tracking-wide">
                    {event.tag}
                  </span>
                  <button
                    onClick={() => handleSetReminder(event.id, event.title)}
                    className="inline-flex items-center gap-1 text-[11px] text-primary hover:text-primary/80 font-semibold"
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span>Set Reminder</span>
                  </button>
                </div>

                <h3 className="font-title text-base text-secondary font-bold">
                  {event.title}
                </h3>

                <div className="flex flex-col gap-1 text-on-surface-variant text-xs pt-2 border-t border-outline-variant/60">
                  <p className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="tabular-nums font-medium">{event.time}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    {event.id.includes('radio') ? (
                      <Radio className="w-3.5 h-3.5 text-primary shrink-0" />
                    ) : (
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    )}
                    <span>{event.location}</span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </section>
      )}

      {/* Annual Fasting & Special Calendar Panel */}
      {activeTab === 'annual' && (
        <section className="px-page-margin py-2 flex flex-col gap-3">
          <div className="rounded-xl bg-gold-soft/50 border border-tertiary/40 p-3.5 flex items-center gap-2.5 text-secondary">
            <Sparkles className="w-5 h-5 text-tertiary shrink-0" />
            <div className="flex flex-col">
              <span className="font-headline text-xs font-bold">
                2026 Spiritual Calendar
              </span>
              <span className="font-body text-[11px] text-on-surface-variant">
                Join our collective prayer and fasting chains throughout the Year of Divine Speed.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {ANNUAL_CALENDAR.map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-surface-container-low border border-outline-variant p-4 flex flex-col gap-1.5 shadow-sm hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-title text-sm font-bold text-secondary">
                    {item.title}
                  </span>
                  <Badge variant="gold" className="text-[10px]">
                    {item.badge}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs text-on-surface-variant pt-1 border-t border-outline-variant/50">
                  <span className="font-body tabular-nums font-semibold text-primary">
                    {item.period}
                  </span>
                  <button
                    onClick={() => handleSetReminder(item.id, item.title)}
                    className="inline-flex items-center gap-1 text-[11px] text-on-surface-variant hover:text-primary"
                  >
                    <Bell className="w-3 h-3" />
                    <span>Remind Me</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
