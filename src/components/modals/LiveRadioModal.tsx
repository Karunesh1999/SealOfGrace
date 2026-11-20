import React, { useState } from 'react'
import { X, Play, Pause, Volume2, Radio, ExternalLink } from 'lucide-react'
import { CHURCH_INFO } from '@/data/churchData'
import { Button } from '@/components/ui/button'

interface LiveRadioModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LiveRadioModal: React.FC<LiveRadioModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(80)

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-background text-foreground flex flex-col animate-in fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Clean Top Header */}
      <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-slate-200 px-page-margin py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-headline text-base font-bold text-slate-900 leading-tight">
            Live Radio Broadcast
          </span>
          <span className="font-label text-[11px] text-muted-foreground font-medium">
            {CHURCH_INFO.radioStation} • {CHURCH_INFO.radioTime}
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close radio player"
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-primary flex items-center justify-center transition-colors border border-slate-200"
        >
          <X className="w-4 h-4" />
        </button>
      </header>

      {/* Main Single Page Player View */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6 text-center max-w-sm mx-auto w-full my-auto pb-12">
        {/* On Air Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-bold border border-cta/20">
          <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
          <span>ON THE AIR</span>
        </div>

        {/* Animated Radio Graphic / Visualizer */}
        <div className="relative w-32 h-32 rounded-full bg-primary/10 border-4 border-tertiary flex items-center justify-center shadow-md">
          <Radio className="w-14 h-14 text-primary" />
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border-4 border-cta animate-ping opacity-35 pointer-events-none" />
          )}
        </div>

        {/* Broadcast Title & Schedule */}
        <div className="flex flex-col gap-1">
          <h3 className="font-headline text-xl font-bold text-secondary">
            Sunday Morning Glory Broadcast
          </h3>
          <p className="font-body text-xs text-muted-foreground">
            Live from Tarkwa, Western Region, Ghana • {CHURCH_INFO.radioStation}
          </p>
        </div>

        {/* Equalizer Bars Simulation */}
        <div className="flex items-end justify-center gap-1.5 h-9 w-full max-w-[200px]">
          {[14, 28, 18, 36, 24, 16, 32, 22, 14].map((height, i) => (
            <span
              key={i}
              className="w-1.5 rounded-full bg-primary transition-all duration-300"
              style={{
                height: isPlaying ? `${Math.max(6, height * (i % 2 === 0 ? 1.2 : 0.8))}px` : '5px',
                opacity: isPlaying ? 1 : 0.3
              }}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="w-full flex flex-col items-center gap-3">
          <Button
            variant="cta"
            size="lg"
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-full max-w-xs gap-2 px-8 h-12 text-sm font-semibold rounded-full shadow-md"
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5" />
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

        {/* Volume Control Card */}
        <div className="w-full max-w-xs p-3.5 rounded-xl bg-card border border-border shadow-xs flex items-center gap-3">
          <Volume2 className="w-4 h-4 text-muted-foreground shrink-0" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label="Broadcast Volume"
            className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <span className="font-label text-xs text-muted-foreground tabular-nums w-8 shrink-0">
            {volume}%
          </span>
        </div>

        {/* Facebook Live External Link */}
        <a
          href={CHURCH_INFO.facebookPage}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline"
        >
          <span>Also Streaming on Facebook Live</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}

export default LiveRadioModal
