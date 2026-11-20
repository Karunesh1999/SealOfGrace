import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  Clock,
  MapPin,
  User,
  ArrowLeft,
  Sparkles,
  BookOpen,
  CheckCircle,
  Phone,
  Calendar
} from 'lucide-react'
import { CHURCH_SERVICES, CHURCH_INFO } from '@/data/churchData'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const ServiceDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const service = CHURCH_SERVICES.find((s) => s.id === id) || CHURCH_SERVICES[0]

  return (
    <div className="flex flex-col gap-0 pb-20">
      {/* Top Banner with Back Button */}
      <div className="relative h-56 bg-slate-900 w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1000&q=80'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

        {/* Back navigation pill */}
        <div className="absolute top-4 left-4 z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Services</span>
          </Link>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <Badge variant="gold" className="text-[10px] uppercase font-bold mb-1">
            {service.category}
          </Badge>
          <h1 className="font-headline text-xl font-bold text-white leading-tight">
            {service.title}
          </h1>
          <p className="font-body text-xs text-gold-soft mt-0.5">
            {service.tagline}
          </p>
        </div>
      </div>

      {/* Details Body */}
      <div className="p-page-margin flex flex-col gap-5">
        {/* Timing & Venue Bar */}
        <div className="rounded-xl bg-card border border-border p-4 flex flex-col gap-2.5 shadow-sm">
          <div className="flex items-center gap-2.5 text-xs text-foreground font-medium">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span>{service.schedule}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span>{service.location}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <User className="w-4 h-4 text-primary shrink-0" />
            <span>Officiating: {service.leader}</span>
          </div>
        </div>

        {/* Biblical Foundation */}
        <div className="rounded-xl bg-primary-container p-4 flex items-start gap-3 text-primary-container-foreground">
          <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="font-label text-xs font-bold uppercase tracking-wider">
              Scriptural Anchor
            </span>
            <span className="font-body text-xs italic leading-relaxed">
              "{service.scripture}"
            </span>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="flex flex-col gap-2">
          <h2 className="font-headline text-lg font-bold text-secondary">
            About This Ministry Service
          </h2>
          <p className="font-body text-body-md text-muted-foreground leading-relaxed text-pretty">
            {service.fullDetails}
          </p>
        </div>

        {/* What to Expect */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-headline text-base font-bold text-secondary">
            What to Expect & How to Prepare
          </h3>
          <ul className="flex flex-col gap-2 text-xs text-muted-foreground font-body">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
              <span>Welcoming, loving atmosphere focused entirely on Jesus Christ.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
              <span>Biblical counseling and prayer tailored to your personal walk with God.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
              <span>Feel free to bring your Bible, journal, and specific prayer petitions.</span>
            </li>
          </ul>
        </div>

        {/* Booking CTA Button */}
        <div className="pt-2 flex flex-col gap-2">
          {service.bookable ? (
            <Button
              variant="cta"
              size="lg"
              onClick={() => navigate(`/booking?service=${service.id}`)}
              className="w-full gap-2 text-sm font-semibold shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Appointment / Registration</span>
            </Button>
          ) : (
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/contact')}
              className="w-full gap-2 text-sm font-semibold"
            >
              <Calendar className="w-4 h-4" />
              <span>Attend Next Service</span>
            </Button>
          )}

          <a
            href={`tel:${CHURCH_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 py-2.5 text-xs text-muted-foreground hover:text-foreground font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>Questions? Call {CHURCH_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
