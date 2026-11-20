import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Radio,
  ExternalLink,
  Clock,
  MapPin,
  Calendar,
  Share2,
  MessageSquareHeart,
  Headphones
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CHURCH_INFO } from '@/data/churchData'

export const LiveRadioScreen: React.FC = () => {
  const navigate = useNavigate()
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Seal of Grace Bible Church - Live Radio Broadcast',
          text: `Tune in live to Medeama FM 92.9 - Sunday Morning Glory Broadcast (07:00 AM - 08:00 AM GMT)`,
          url: window.location.href,
        })
      } catch {
        // Share cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pb-24">
      {/* Clean Top Navigation Bar */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 px-page-margin py-3 flex items-center justify-between shadow-xs">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-primary transition-colors p-1 -ml-1 rounded-lg hover:bg-slate-100"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
          <span className="font-label text-xs font-bold text-slate-900 tracking-wide uppercase">
            Live Radio
          </span>
        </div>

        <button
          onClick={handleShare}
          className="p-1.5 rounded-full text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors"
          title="Share broadcast"
          aria-label="Share broadcast"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {isCopied && (
        <div className="bg-primary text-white text-xs text-center py-1.5 animate-in fade-in">
          Broadcast link copied to clipboard!
        </div>
      )}

      <div className="flex flex-col gap-6 px-page-margin py-5 max-w-lg mx-auto w-full">
        {/* Main Clean Audio Player Card (No Dark Banner) */}
        <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-card border border-border shadow-xs gap-5">
          {/* On Air Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-bold border border-cta/20">
            <span className="w-2 h-2 rounded-full bg-cta animate-ping" />
            <span>ON THE AIR • {CHURCH_INFO.radioStation}</span>
          </div>

          {/* Radio Waves Visualizer Icon / Album Art */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-tertiary flex items-center justify-center shadow-md my-2 bg-slate-900">
            <img
              src="/images/church/Website_Photos/photos/radio2.png"
              alt="Medeama FM 92.9 Radio Broadcast"
              className="w-full h-full object-cover"
            />
            {isPlaying && (
              <>
                <div className="absolute inset-0 rounded-full border-4 border-cta animate-ping opacity-35 pointer-events-none" />
              </>
            )}
          </div>

          {/* Program Information */}
          <div className="flex flex-col gap-1.5">
            <h1 className="font-headline text-2xl font-bold text-slate-900 leading-tight">
              Sunday Morning Glory Broadcast
            </h1>
            <p className="font-body text-xs text-muted-foreground">
              Preaching the Word of God with Power & Grace • Live from Tarkwa, Ghana
            </p>
          </div>

          {/* Dynamic Audio Equalizer Simulation */}
          <div className="flex items-end justify-center gap-1.5 h-10 w-full max-w-[220px] py-1">
            {[12, 28, 16, 36, 24, 18, 34, 22, 14, 26, 12].map((height, i) => (
              <span
                key={i}
                className="w-1.5 rounded-full bg-primary transition-all duration-300"
                style={{
                  height: isPlaying ? `${Math.max(6, height * (i % 2 === 0 ? 1.2 : 0.75))}px` : '4px',
                  opacity: isPlaying ? 1 : 0.25
                }}
              />
            ))}
          </div>

          {/* Primary Action Button */}
          <div className="w-full flex justify-center">
            <Button
              variant="cta"
              size="lg"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-full max-w-xs gap-2.5 px-8 h-13 text-base font-bold rounded-full shadow-md active:scale-98 transition-transform"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5 fill-current" />
                  <span>Pause Broadcast</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-current" />
                  <span>Tune In Now</span>
                </>
              )}
            </Button>
          </div>

          {/* Volume Control Bar */}
          <div className="w-full max-w-xs p-3.5 rounded-2xl bg-muted/50 border border-slate-200/80 flex items-center gap-3">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-destructive" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(Number(e.target.value))
                if (isMuted) setIsMuted(false)
              }}
              aria-label="Broadcast Volume"
              className="w-full h-1.5 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <span className="font-label text-xs text-muted-foreground tabular-nums w-8 text-right shrink-0">
              {isMuted ? '0%' : `${volume}%`}
            </span>
          </div>

          {/* Facebook Live External Stream Alternative */}
          <a
            href={CHURCH_INFO.facebookPage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline mt-1"
          >
            <span>Also Streaming on Facebook Live Video</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Broadcast Schedule & Transmission Info Card */}
        <div className="p-5 rounded-2xl bg-card border border-border shadow-xs flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary font-bold text-sm font-title">
            <Clock className="w-4 h-4" />
            <span>Weekly Air Schedule</span>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-primary" />
                <div className="flex flex-col">
                  <span className="font-semibold text-xs text-slate-900">Every Sunday Morning</span>
                  <span className="text-[11px] text-muted-foreground">Live Transmitted from Sanctuary</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary font-bold text-xs">
                07:00 AM - 08:00 AM
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2.5">
                <Headphones className="w-4 h-4 text-tertiary-foreground" />
                <div className="flex flex-col">
                  <span className="font-semibold text-xs text-slate-900">FM Radio Frequency</span>
                  <span className="text-[11px] text-muted-foreground">Tarkwa & Western Region</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 font-bold text-xs">
                92.9 FM
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cta" />
                <div className="flex flex-col">
                  <span className="font-semibold text-xs text-slate-900">Main Church Sanctuary</span>
                  <span className="text-[11px] text-muted-foreground">Effuanta Road, Tarkwa</span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                Ghana
              </span>
            </div>
          </div>
        </div>

        {/* Quick Action Links */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/contact')}
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/50 text-slate-800 text-xs font-semibold transition-colors"
          >
            <MessageSquareHeart className="w-4 h-4 text-primary" />
            <span>Prayer Request</span>
          </button>
          <button
            onClick={() => navigate('/booking')}
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-card border border-border shadow-xs hover:border-cta/50 text-slate-800 text-xs font-semibold transition-colors"
          >
            <Calendar className="w-4 h-4 text-cta" />
            <span>Book Counseling</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LiveRadioScreen
