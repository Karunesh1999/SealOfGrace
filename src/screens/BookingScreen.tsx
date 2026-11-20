import React, { useState } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Video,
  MapPin,
  Download,
  Share2
} from 'lucide-react'
import { CHURCH_SERVICES, CHURCH_INFO } from '@/data/churchData'
import { Button } from '@/components/ui/button'
import { Input, Textarea } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const BookingScreen: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const initialServiceId = searchParams.get('service') || 'pastoral-counseling'

  // Wizard state (Steps: 1 = Service, 2 = Date & Slot, 3 = Details, 4 = Review, 5 = Confirmed)
  const [currentStep, setCurrentStep] = useState<number>(1)

  // Booking Form State
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId)
  const [meetingType, setMeetingType] = useState<'in-person' | 'virtual'>('in-person')
  const [selectedDate, setSelectedDate] = useState<string>('Tuesday, 24 Nov 2026')
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM - 11:00 AM')
  const [fullName, setFullName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [prayerRequest, setPrayerRequest] = useState<string>('')
  const [bookingRef, setBookingRef] = useState<string>('')

  const selectedService =
    CHURCH_SERVICES.find((s) => s.id === selectedServiceId) || CHURCH_SERVICES[1]

  const dateOptions = [
    { label: 'Tue, 24 Nov 2026', full: 'Tuesday, 24 Nov 2026' },
    { label: 'Thu, 26 Nov 2026', full: 'Thursday, 26 Nov 2026' },
    { label: 'Sat, 28 Nov 2026', full: 'Saturday, 28 Nov 2026' },
    { label: 'Tue, 1 Dec 2026', full: 'Tuesday, 1 Dec 2026' },
  ]

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '02:00 PM - 03:00 PM',
    '04:30 PM - 05:30 PM',
    '06:00 PM - 07:00 PM'
  ]

  const handleNextStep = () => {
    if (currentStep === 3) {
      if (!fullName.trim() || !phone.trim()) {
        alert('Please fill in your name and phone number to continue.')
        return
      }
    }
    setCurrentStep((prev) => prev + 1)
  }

  const handleConfirmBooking = () => {
    // Generate simulated reference code
    const randomCode = `SGBC-2026-${Math.floor(1000 + Math.random() * 9000)}`
    setBookingRef(randomCode)
    setCurrentStep(5)
  }

  return (
    <div className="flex flex-col gap-0 pb-20 pt-2">
      {/* Progress Stepper Bar */}
      {currentStep < 5 && (
        <div className="bg-muted px-page-margin py-3 border-b border-border flex items-center justify-between text-xs font-label">
          <div className="flex items-center gap-1.5">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                currentStep >= 1 ? 'bg-primary text-white' : 'bg-border text-muted-foreground'
              }`}
            >
              1
            </span>
            <span className={currentStep === 1 ? 'font-bold text-foreground' : 'text-muted-foreground'}>
              Service
            </span>
          </div>

          <div className="w-6 h-0.5 bg-border" />

          <div className="flex items-center gap-1.5">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                currentStep >= 2 ? 'bg-primary text-white' : 'bg-border text-muted-foreground'
              }`}
            >
              2
            </span>
            <span className={currentStep === 2 ? 'font-bold text-foreground' : 'text-muted-foreground'}>
              Time
            </span>
          </div>

          <div className="w-6 h-0.5 bg-border" />

          <div className="flex items-center gap-1.5">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                currentStep >= 3 ? 'bg-primary text-white' : 'bg-border text-muted-foreground'
              }`}
            >
              3
            </span>
            <span className={currentStep === 3 ? 'font-bold text-foreground' : 'text-muted-foreground'}>
              Details
            </span>
          </div>

          <div className="w-6 h-0.5 bg-border" />

          <div className="flex items-center gap-1.5">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                currentStep >= 4 ? 'bg-primary text-white' : 'bg-border text-muted-foreground'
              }`}
            >
              4
            </span>
            <span className={currentStep === 4 ? 'font-bold text-foreground' : 'text-muted-foreground'}>
              Review
            </span>
          </div>
        </div>
      )}

      {/* STEP 1: Select Service */}
      {currentStep === 1 && (
        <div className="p-page-margin flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex flex-col gap-0.5">
            <h2 className="font-headline text-base font-bold text-secondary">
              Select Ministry Service or Counseling
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {CHURCH_SERVICES.filter((s) => s.bookable).map((svc) => (
              <div
                key={svc.id}
                onClick={() => setSelectedServiceId(svc.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  selectedServiceId === svc.id
                    ? 'border-primary bg-primary-container/40 ring-1 ring-primary'
                    : 'border-border bg-card hover:border-primary/40'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-headline text-sm font-bold text-secondary">
                    {svc.title}
                  </span>
                  <input
                    type="radio"
                    name="service"
                    checked={selectedServiceId === svc.id}
                    onChange={() => setSelectedServiceId(svc.id)}
                    className="accent-primary w-4 h-4 shrink-0"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Session Format */}
          <div className="flex flex-col gap-2 pt-2 border-t border-border">
            <span className="font-label text-xs font-semibold text-secondary">
              Preferred Attendance Format
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setMeetingType('in-person')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-center transition-all ${
                  meetingType === 'in-person'
                    ? 'border-primary bg-primary-container text-primary font-bold'
                    : 'border-border bg-card text-muted-foreground'
                }`}
              >
                <MapPin className="w-5 h-5" />
                <span className="text-xs">In-Person at Church</span>
              </button>
              <button
                type="button"
                onClick={() => setMeetingType('virtual')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-center transition-all ${
                  meetingType === 'virtual'
                    ? 'border-primary bg-primary-container text-primary font-bold'
                    : 'border-border bg-card text-muted-foreground'
                }`}
              >
                <Video className="w-5 h-5" />
                <span className="text-xs">Virtual / Phone Call</span>
              </button>
            </div>
          </div>

          <Button variant="cta" onClick={handleNextStep} className="mt-2 w-full gap-2">
            <span>Continue to Date & Time</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* STEP 2: Date & Time Slot */}
      {currentStep === 2 && (
        <div className="p-page-margin flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-xs text-primary font-semibold">
            <button
              onClick={() => setCurrentStep(1)}
              className="inline-flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
            <span>·</span>
            <span>{selectedService.title}</span>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="font-headline text-base font-bold text-secondary">
              Select Preferred Date
            </h2>
            <p className="font-body text-xs text-muted-foreground">
              Pastoral appointments are available weekly on designated prayer days.
            </p>
          </div>

          {/* Date Chips */}
          <div className="grid grid-cols-2 gap-2">
            {dateOptions.map((d) => (
              <button
                key={d.full}
                type="button"
                onClick={() => setSelectedDate(d.full)}
                className={`p-3 rounded-xl border text-left flex flex-col gap-0.5 transition-all ${
                  selectedDate === d.full
                    ? 'border-primary bg-primary text-white shadow-xs'
                    : 'border-border bg-card text-muted-foreground hover:border-primary/40'
                }`}
              >
                <CalendarIcon className="w-4 h-4" />
                <span className="text-xs font-semibold">{d.label}</span>
              </button>
            ))}
          </div>

          {/* Time Slot Picker */}
          <div className="flex flex-col gap-2 pt-2 border-t border-border">
            <h3 className="font-headline text-sm font-bold text-secondary">
              Select Time Slot
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={`p-2.5 rounded-lg border flex items-center justify-between text-xs transition-all ${
                    selectedTime === slot
                      ? 'border-primary bg-primary-container text-primary font-bold'
                      : 'border-border bg-card text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{slot}</span>
                  </span>
                  {selectedTime === slot && <CheckCircle className="w-4 h-4 text-primary" />}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
              Back
            </Button>
            <Button variant="cta" onClick={handleNextStep} className="flex-1 gap-1.5">
              <span>Next: Your Details</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 3: Personal Information */}
      {currentStep === 3 && (
        <div className="p-page-margin flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-xs text-primary font-semibold">
            <button
              onClick={() => setCurrentStep(2)}
              className="inline-flex items-center gap-1 hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
            <span>·</span>
            <span>{selectedDate} ({selectedTime})</span>
          </div>

          <div className="flex flex-col gap-0.5">
            <h2 className="font-headline text-base font-bold text-secondary">
              Your Contact Information
            </h2>
            <p className="font-body text-xs text-muted-foreground">
              All information shared with the pastoral office is strictly confidential.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <label className="font-label text-xs font-semibold text-secondary block mb-1">
                Full Name *
              </label>
              <Input
                required
                placeholder="Enter your full name"
                icon={<User className="w-4 h-4" />}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div>
              <label className="font-label text-xs font-semibold text-secondary block mb-1">
                Phone Number / WhatsApp *
              </label>
              <Input
                required
                type="tel"
                placeholder="+233 24 000 0000"
                icon={<Phone className="w-4 h-4" />}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="font-label text-xs font-semibold text-secondary block mb-1">
                Email Address (Optional)
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                icon={<Mail className="w-4 h-4" />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="font-label text-xs font-semibold text-secondary block mb-1">
                Brief Prayer Topic or Reason for Session *
              </label>
              <Textarea
                rows={3}
                required
                placeholder="Share a brief note so our pastors can pray and prepare in advance..."
                value={prayerRequest}
                onChange={(e) => setPrayerRequest(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Button variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
              Back
            </Button>
            <Button variant="cta" onClick={handleNextStep} className="flex-1 gap-1.5">
              <span>Review Summary</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 4: Review & Summary */}
      {currentStep === 4 && (
        <div className="p-page-margin flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex flex-col gap-0.5">
            <h2 className="font-headline text-base font-bold text-secondary">
              Review Appointment Summary
            </h2>
            <p className="font-body text-xs text-muted-foreground">
              Please verify your appointment details before final confirmation.
            </p>
          </div>

          {/* Summary Card */}
          <Card className="p-4 flex flex-col gap-3 border-primary/30 shadow-md bg-card">
            <div className="flex items-start justify-between border-b border-border pb-3">
              <div>
                <span className="font-label text-[10px] uppercase font-bold text-primary">
                  Selected Service
                </span>
                <h3 className="font-headline text-base font-bold text-secondary">
                  {selectedService.title}
                </h3>
              </div>
              <Badge variant="gold" className="text-[10px] capitalize">
                {meetingType}
              </Badge>
            </div>

            <div className="grid grid-cols-1 gap-2 text-xs">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-primary" />
                  <span>Date:</span>
                </span>
                <span className="font-semibold text-foreground">{selectedDate}</span>
              </div>

              <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>Time:</span>
                </span>
                <span className="font-semibold text-foreground">{selectedTime}</span>
              </div>

              <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-primary" />
                  <span>Candidate:</span>
                </span>
                <span className="font-semibold text-foreground">{fullName}</span>
              </div>

              <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>Contact:</span>
                </span>
                <span className="font-semibold text-foreground tabular-nums">{phone}</span>
              </div>

              {prayerRequest && (
                <div className="pt-2 border-t border-border/60">
                  <span className="font-semibold block text-foreground mb-0.5">Prayer Notes:</span>
                  <p className="font-body text-muted-foreground italic bg-muted p-2 rounded-md">
                    "{prayerRequest}"
                  </p>
                </div>
              )}
            </div>
          </Card>

          <div className="flex items-center gap-2 p-3 rounded-lg bg-primary-container text-xs text-primary-container-foreground">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
            <span>
              Your session will be held in strict Christian pastoral confidence at Seal of Grace Bible Church.
            </span>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Button variant="outline" onClick={() => setCurrentStep(3)} className="flex-1">
              Modify
            </Button>
            <Button
              variant="cta"
              onClick={handleConfirmBooking}
              className="flex-1 gap-1.5 text-xs shadow-md"
            >
              <span>Confirm & Book</span>
              <CheckCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 5: Success / Confirmation Ticket */}
      {currentStep === 5 && (
        <div className="p-page-margin flex flex-col items-center text-center gap-4 animate-in zoom-in-95 duration-250">
          <div className="w-16 h-16 rounded-full bg-success/20 border-2 border-success flex items-center justify-center text-success mt-2">
            <CheckCircle className="w-9 h-9" />
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="font-headline text-xl font-bold text-secondary">
              Appointment Scheduled!
            </h2>
            <p className="font-body text-xs text-muted-foreground max-w-xs">
              Thank you, {fullName}. Your pastoral appointment request has been confirmed.
            </p>
          </div>

          {/* Ticket Card */}
          <div className="w-full max-w-sm rounded-2xl bg-card border-2 border-dashed border-primary/40 p-5 flex flex-col gap-3 text-left shadow-md">
            <div className="flex items-center justify-between border-b border-border pb-2.5">
              <div>
                <span className="font-label text-[10px] text-muted-foreground uppercase">Reference ID</span>
                <span className="font-title text-sm font-bold text-primary block tabular-nums">
                  {bookingRef}
                </span>
              </div>
              <Badge variant="success">Confirmed</Badge>
            </div>

            <div className="flex flex-col gap-2 text-xs">
              <div>
                <span className="font-label text-muted-foreground text-[11px] block">Service:</span>
                <span className="font-semibold text-foreground">{selectedService.title}</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-label text-muted-foreground text-[11px] block">Date:</span>
                  <span className="font-semibold text-foreground">{selectedDate}</span>
                </div>
                <div>
                  <span className="font-label text-muted-foreground text-[11px] block">Time:</span>
                  <span className="font-semibold text-foreground tabular-nums">{selectedTime}</span>
                </div>
              </div>
              <div>
                <span className="font-label text-muted-foreground text-[11px] block">Location:</span>
                <span className="font-semibold text-foreground">
                  {meetingType === 'in-person'
                    ? 'SGBC Pastoral Office, Effuanta Rd. Tarkwa'
                    : 'Virtual Phone / WhatsApp Session'}
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-muted p-2.5 text-[11px] text-muted-foreground text-center">
              Our pastors will reach out to <strong className="text-foreground">{phone}</strong> prior to your session.
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 w-full pt-1">
            <Button
              variant="primary"
              onClick={() => alert(`Appointment summary for ${bookingRef} has been saved.`)}
              className="gap-2 text-xs w-full"
            >
              <Download className="w-4 h-4" />
              <span>Save / Print Ticket</span>
            </Button>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-border text-xs font-semibold text-muted-foreground hover:text-foreground"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
