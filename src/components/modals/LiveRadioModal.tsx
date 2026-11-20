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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-sm rounded-2xl bg-surface border border-outline-variant shadow-modal overflow-hidden flex flex-col">
        {/* Header Banner */}
        <div className="bg-primary text-on-primary p-5 flex flex-col gap-2 relative">
          <button
            onClick={onClose}
            aria-label="Close radio player"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cta text-white text-xs font-semibold w-fit">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse-live" />
            LIVE BROADCAST
          </div>

          <h3 className="font-headline text-xl font-bold text-white leading-tight">
            {CHURCH_INFO.radioStation}
          </h3>
          <p className="font-body text-xs text-gold-soft">
            {CHURCH_INFO.radioTime}
          </p>
        </div>

        {/* Player Body */}
        <div className="p-5 flex flex-col items-center gap-5 text-center">
          {/* Animated Radio Graphic / Visualizer */}
          <div className="relative w-28 h-28 rounded-full bg-surface-container-low border-4 border-tertiary flex items-center justify-center shadow-inner">
            <Radio className="w-12 h-12 text-primary" />
            {isPlaying && (
              <div className="absolute inset-0 rounded-full border-4 border-cta animate-ping opacity-40 pointer-events-none" />
            )}
          </div>

          {/* Broadcast Title */}
          <div className="flex flex-col gap-1">
            <h4 className="font-title text-base font-semibold text-secondary">
              Sunday Morning Glory Broadcast
            </h4>
            <p className="font-body text-xs text-on-surface-variant">
              Live from Tarkwa, Western Region, Ghana
            </p>
          </div>

          {/* Equalizer Bars Simulation */}
          <div className="flex items-end justify-center gap-1.5 h-8 w-full max-w-[200px]">
            {[14, 28, 18, 32, 24, 16, 30, 22, 12].map((height, i) => (
              <span
                key={i}
                className="w-1.5 rounded-full bg-primary transition-all duration-300"
                style={{
                  height: isPlaying ? `${Math.max(6, (height * (i % 2 === 0 ? 1.2 : 0.8)))}px` : '4px',
                  opacity: isPlaying ? 1 : 0.3
                }}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <Button
              variant="cta"
              size="lg"
              onClick={() => setIsPlaying(!isPlaying)}
              className="gap-2 px-6 h-12 text-sm shadow-md"
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

          {/* Volume Control */}
          <div className="w-full flex items-center gap-3 px-2 pt-2 border-t border-outline-variant">
            <Volume2 className="w-4 h-4 text-on-surface-variant" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              aria-label="Broadcast Volume"
              className="w-full h-1.5 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <span className="font-label text-xs text-on-surface-variant tabular-nums w-8">
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
    </div>
  )
}
