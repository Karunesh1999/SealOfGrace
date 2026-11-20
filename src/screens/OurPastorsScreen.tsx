import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Phone, Mail, Award, CheckCircle, Calendar, Sparkles } from 'lucide-react'
import { PASTORS, PastorItem, CHURCH_INFO } from '@/data/churchData'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const OurPastorsScreen: React.FC = () => {
  const navigate = useNavigate()
  const [selectedPastor, setSelectedPastor] = useState<PastorItem | null>(null)
  const leadPastor = PASTORS.find((p) => p.isLead) || PASTORS[0]
  const presbyteryTeam = PASTORS.filter((p) => !p.isLead)

  return (
    <div className="flex flex-col gap-0 pb-20 pt-2">
      {/* Lead Pastor Spotlight */}
      <section className="px-page-margin py-section flex flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <span className="font-label text-label-sm text-tertiary-container-foreground uppercase tracking-wider font-semibold">
            Leadership
          </span>
          <h2 className="font-headline text-headline-lg-mobile text-secondary font-bold">
            Meet Our Lead Pastor
          </h2>
        </div>

        <article className="rounded-2xl bg-card border border-border p-5 flex flex-col items-center text-center gap-3.5 shadow-sm">
          <div className="relative">
            <img
              src={leadPastor.image}
              alt={leadPastor.name}
              className="w-36 h-36 rounded-full object-cover border-4 border-card shadow-md"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
              }}
            />
            <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-tertiary flex items-center justify-center text-tertiary-foreground border-2 border-white shadow-xs">
              <Award className="w-4 h-4" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-headline text-xl text-secondary font-bold">
              {leadPastor.name}
            </h3>
            <span className="font-label text-xs text-primary font-bold uppercase tracking-wider">
              {leadPastor.role}
            </span>
          </div>

          <p className="font-body text-body-md text-muted-foreground text-pretty leading-relaxed">
            {leadPastor.bio}
          </p>

          <div className="flex items-center gap-2.5 pt-2 w-full max-w-xs">
            <a
              href={`tel:${CHURCH_INFO.phoneRaw}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-primary text-primary-foreground font-label text-xs font-semibold shadow-sm hover:bg-primary/90 text-center"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Office</span>
            </a>
            <Button
              variant="cta"
              size="sm"
              onClick={() => navigate('/booking?service=pastoral-counseling')}
              className="flex-1 text-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Session</span>
            </Button>
          </div>
        </article>
      </section>

      {/* Church Officers / Presbytery Team */}
      <section className="px-page-margin pb-section flex flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <span className="font-label text-label-sm text-tertiary-container-foreground uppercase tracking-wider font-semibold">
            Church Officers
          </span>
          <h2 className="font-headline text-headline-lg-mobile text-secondary font-bold">
            Meet Our Presbytery Team
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {PASTORS.map((pastor) => (
            <article
              key={pastor.id}
              onClick={() => setSelectedPastor(pastor)}
              className="rounded-xl bg-card border border-border p-3.5 flex items-center gap-3.5 shadow-xs hover:border-primary/50 transition-colors cursor-pointer"
            >
              <img
                src={pastor.image}
                alt={pastor.name}
                className="w-16 h-16 rounded-full object-cover shrink-0 border border-border shadow-xs"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
                }}
              />
              <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                <h3 className="font-title text-sm text-secondary font-bold truncate">
                  {pastor.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground">
                  {pastor.role}
                </p>
                <span className="font-label text-[11px] text-primary font-medium">
                  Seal of Grace Bible Church
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pastor Detail Modal */}
      {selectedPastor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm"
          role="dialog"
          onClick={() => setSelectedPastor(null)}
        >
          <div
            className="w-full max-w-xs rounded-2xl bg-card p-5 flex flex-col items-center text-center gap-3 border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPastor.image}
              alt={selectedPastor.name}
              className="w-24 h-24 rounded-full object-cover border-3 border-tertiary shadow-sm"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
              }}
            />
            <div className="flex flex-col gap-0.5">
              <h4 className="font-headline text-lg font-bold text-secondary">
                {selectedPastor.name}
              </h4>
              <span className="font-label text-xs text-primary font-semibold">
                {selectedPastor.role}
              </span>
            </div>
            <p className="font-body text-xs text-muted-foreground">
              {selectedPastor.bio || "Dedicated servant of Christ upholding biblical truths, pastoral care, and discipleship in the body of Christ."}
            </p>
            <div className="flex flex-col gap-2 w-full pt-2">
              <Button
                variant="cta"
                size="sm"
                onClick={() => {
                  setSelectedPastor(null)
                  navigate('/booking?service=pastoral-counseling')
                }}
                className="text-xs"
              >
                Request Meeting with Pastor
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedPastor(null)}
                className="text-xs"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
