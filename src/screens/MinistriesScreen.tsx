import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, UserCheck, Heart } from 'lucide-react'
import { MINISTRIES, MinistryItem } from '@/data/churchData'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface MinistriesScreenProps {
  onSelectMinistry: (ministry: MinistryItem) => void
}

export const MinistriesScreen: React.FC<MinistriesScreenProps> = ({ onSelectMinistry }) => {
  return (
    <div className="flex flex-col gap-0 pb-20 pt-2">
      {/* Overview */}
      <section className="px-page-margin py-section flex flex-col gap-2">
        <h2 className="font-headline text-headline-lg-mobile text-secondary font-bold">
          Our Ministries
        </h2>
        <p className="font-body text-body-md text-muted-foreground text-pretty leading-relaxed">
          At Seal of Grace Bible Church, we believe in serving God and one another through a variety of ministries designed to meet the spiritual, emotional, and physical needs of our church family and the community.
        </p>
      </section>

      {/* Ministry Cards */}
      <section className="px-page-margin pb-section grid grid-cols-1 gap-gutter-lg">
        {MINISTRIES.map((ministry) => (
          <Card key={ministry.id} className="overflow-hidden flex flex-col">
            <div className="relative h-48 overflow-hidden bg-slate-900">
              <img
                src={ministry.image}
                alt={ministry.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="font-label text-[11px] text-gold-soft font-semibold tracking-wide uppercase">
                  {ministry.tagline}
                </span>
                <h3 className="font-headline text-xl text-white font-bold leading-tight">
                  {ministry.title}
                </h3>
              </div>
            </div>

            <div className="p-gutter-lg flex flex-col gap-gutter-sm">
              <p className="font-body text-body-md text-muted-foreground text-pretty leading-relaxed">
                {ministry.description}
              </p>

              <div className="flex flex-col gap-1 text-xs text-muted-foreground pt-2 border-t border-border/60">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{ministry.meetingTime}</span>
                </div>
                {ministry.leader && (
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{ministry.leader}</span>
                  </div>
                )}
              </div>

              <div className="pt-2 flex items-center gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onSelectMinistry(ministry)}
                  className="gap-1.5 text-xs font-semibold shadow-sm flex-1"
                >
                  <span>
                    {ministry.id === 'choir' ? 'Join the Choir' : 'Get Involved'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-border text-xs font-semibold text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </div>
  )
}
