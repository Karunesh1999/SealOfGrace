import React, { useState } from 'react'
import { X, CheckCircle, HeartHandshake, Phone, Mail } from 'lucide-react'
import { MinistryItem, CHURCH_INFO } from '@/data/churchData'
import { Button } from '@/components/ui/button'
import { Input, Textarea } from '@/components/ui/input'

interface GetInvolvedModalProps {
  ministry: MinistryItem | null
  onClose: () => void
}

export const GetInvolvedModal: React.FC<GetInvolvedModalProps> = ({ ministry, onClose }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (!ministry) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-sm rounded-2xl bg-surface border border-outline-variant shadow-modal overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-primary text-on-primary p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-tertiary" />
            <h3 className="font-headline text-base font-bold text-white">
              Join {ministry.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-3">
          {submitted ? (
            <div className="p-4 flex flex-col items-center text-center gap-3">
              <CheckCircle className="w-12 h-12 text-success" />
              <h4 className="font-headline text-lg font-bold text-secondary">
                Thank You, {name || 'Believer'}!
              </h4>
              <p className="font-body text-xs text-on-surface-variant">
                Your interest in serving in the {ministry.title} has been recorded. Our ministry leaders will reach out to you shortly.
              </p>
              <div className="rounded-lg bg-surface-container p-2.5 text-xs text-on-surface-variant w-full mt-2">
                <span className="font-semibold block text-secondary">Meeting Time:</span>
                {ministry.meetingTime}
              </div>
              <Button variant="primary" onClick={onClose} className="mt-2 w-full">
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <p className="font-body text-xs text-on-surface-variant">
                We welcome you to grow your spiritual gifts with us! Fill in your details below.
              </p>

              <div>
                <label className="font-label text-xs font-semibold text-secondary block mb-1">
                  Full Name *
                </label>
                <Input
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="font-label text-xs font-semibold text-secondary block mb-1">
                  Phone / WhatsApp *
                </label>
                <Input
                  required
                  type="tel"
                  placeholder="+233 24 000 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="font-label text-xs font-semibold text-secondary block mb-1">
                  Note / Experience (Optional)
                </label>
                <Textarea
                  rows={2}
                  placeholder="Brief note about yourself..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              <Button type="submit" variant="cta" className="mt-1 w-full text-xs">
                Submit Request
              </Button>

              <div className="text-center pt-1 border-t border-outline-variant">
                <span className="font-body text-[11px] text-on-surface-variant">
                  Prefer calling? Dial{' '}
                  <a href={`tel:${CHURCH_INFO.phoneRaw}`} className="text-primary font-semibold underline">
                    {CHURCH_INFO.phone}
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
