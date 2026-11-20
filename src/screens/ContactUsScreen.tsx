import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Calendar } from 'lucide-react'
import { CHURCH_INFO } from '@/data/churchData'
import { Button } from '@/components/ui/button'
import { Input, Textarea } from '@/components/ui/input'

export const ContactUsScreen: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col gap-0 pb-20 pt-2">
      {/* Get in Touch Cards */}
      <section className="px-page-margin py-section flex flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <span className="font-label text-label-sm text-tertiary-container-foreground uppercase tracking-wider font-semibold">
            Contact
          </span>
          <h2 className="font-headline text-headline-lg-mobile text-secondary font-bold">
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {/* Email */}
          <a
            href={`mailto:${CHURCH_INFO.email}`}
            className="rounded-xl bg-card border border-border p-3.5 flex items-center gap-3.5 hover:border-primary/50 transition-colors shadow-xs"
          >
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-sm">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="font-label text-[11px] text-muted-foreground font-medium">
                Send us an email
              </span>
              <span className="font-title text-xs font-semibold text-secondary break-all">
                {CHURCH_INFO.email}
              </span>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${CHURCH_INFO.phoneRaw}`}
            className="rounded-xl bg-card border border-border p-3.5 flex items-center gap-3.5 hover:border-primary/50 transition-colors shadow-xs"
          >
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-label text-[11px] text-muted-foreground font-medium">
                Give us a call / WhatsApp
              </span>
              <span className="font-title text-xs font-semibold text-secondary tabular-nums">
                {CHURCH_INFO.phone}
              </span>
            </div>
          </a>

          {/* Address */}
          <div className="rounded-xl bg-card border border-border p-3.5 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-label text-[11px] text-muted-foreground font-medium">
                Church Location
              </span>
              <span className="font-title text-xs font-semibold text-secondary">
                {CHURCH_INFO.address}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Message & Prayer Request Form */}
      <section className="px-page-margin pb-section flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-headline text-headline-lg-mobile text-secondary font-bold">
            Have Any Question?
          </h2>
          <Link
            to="/booking"
            className="font-label text-xs font-semibold text-primary hover:underline"
          >
            Schedule In-Person
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-card border border-border p-4 flex flex-col gap-3 shadow-sm"
        >
          {isSubmitted ? (
            <div className="py-6 px-3 flex flex-col items-center text-center gap-3 animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-success" />
              <h3 className="font-headline text-lg font-bold text-secondary">
                God Bless You, {formState.name || 'Friend'}!
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-xs">
                Thank you! Your message and prayer request have been received by the pastors and intercessors at Seal of Grace Bible Church.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsSubmitted(false)
                  setFormState({ name: '', email: '', phone: '', message: '' })
                }}
                className="mt-2 text-xs"
              >
                Send Another Request
              </Button>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-1">
                <label className="font-label text-xs font-semibold text-secondary">
                  Your Full Name *
                </label>
                <Input
                  required
                  placeholder="Enter your full name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label text-xs font-semibold text-secondary">
                  Email Address *
                </label>
                <Input
                  required
                  type="email"
                  placeholder="you@example.com"
                  icon={<Mail className="w-4 h-4" />}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label text-xs font-semibold text-secondary">
                  Phone Number *
                </label>
                <Input
                  required
                  type="tel"
                  placeholder="+233 24 000 0000"
                  icon={<Phone className="w-4 h-4" />}
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label text-xs font-semibold text-secondary">
                  Message / Prayer Request *
                </label>
                <Textarea
                  rows={4}
                  required
                  placeholder="Write your prayer request, testimony, or inquiry..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                variant="cta"
                className="gap-2 text-xs font-semibold h-11 mt-1 shadow-md hover:bg-destructive transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Pastors</span>
              </Button>
            </>
          )}
        </form>
      </section>

      {/* Service Times Quick Summary */}
      <section className="px-page-margin pb-6">
        <div className="rounded-xl bg-muted border border-border p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-headline text-sm font-bold text-secondary">
              Weekly Service Timings
            </span>
          </div>
          <div className="grid grid-cols-1 gap-1.5 text-xs text-muted-foreground font-body">
            <div className="flex justify-between border-b border-border/40 pb-1">
              <span>Sunday Divine Service</span>
              <span className="font-semibold text-secondary tabular-nums">08:30 AM - 11:00 AM</span>
            </div>
            <div className="flex justify-between border-b border-border/40 pb-1">
              <span>Medeama FM 92.9 Live</span>
              <span className="font-semibold text-secondary tabular-nums">07:00 AM - 08:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span>Covenant Prayers (Monday)</span>
              <span className="font-semibold text-secondary tabular-nums">07:00 AM - 08:00 AM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
