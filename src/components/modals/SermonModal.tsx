import React, { useState } from 'react'
import { X, Play, Pause, ExternalLink, Calendar, User, Clock, BookOpen } from 'lucide-react'
import { SermonItem } from '@/data/churchData'
import { Button } from '@/components/ui/button'

interface SermonModalProps {
  sermon: SermonItem | null
  onClose: () => void
}

export const SermonModal: React.FC<SermonModalProps> = ({ sermon, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(30)

  if (!sermon) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-surface border border-outline-variant shadow-modal overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Image & Close */}
        <div className="relative h-48 w-full bg-slate-900 shrink-0">
          <img
            src={sermon.image}
            alt={sermon.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close sermon modal"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-secondary/80 hover:bg-secondary text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-4 right-4">
            <span className="inline-block px-2 py-0.5 rounded-full bg-cta text-white text-[11px] font-semibold tracking-wide uppercase mb-1">
              {sermon.category}
            </span>
            <h3 className="font-headline text-lg font-bold text-white leading-snug line-clamp-2">
              {sermon.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 flex flex-col gap-4 overflow-y-auto">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-on-surface-variant border-b border-outline-variant pb-3">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-primary" />
              <span>{sermon.preacher}</span>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span>{sermon.year}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>{sermon.duration}</span>
            </span>
          </div>

          {/* Scripture references */}
          {sermon.verses && (
            <div className="rounded-lg bg-primary-container p-3 flex items-start gap-2.5 text-on-primary-container">
              <BookOpen className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-label text-xs font-semibold block">Key Scripture:</span>
                <span className="font-body text-xs italic">{sermon.verses}</span>
              </div>
            </div>
          )}

          {/* Description */}
          <p className="font-body text-xs text-on-surface-variant leading-relaxed">
            {sermon.description}
          </p>

          {/* Interactive In-App Player Simulation */}
          <div className="rounded-xl bg-surface-container border border-outline-variant p-3.5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-label text-xs font-semibold text-secondary">
                Audio Stream
              </span>
              <span className="font-label text-[11px] text-on-surface-variant tabular-nums">
                {isPlaying ? "14:28" : "00:00"} / {sermon.duration}
              </span>
            </div>

            {/* Progress bar */}
            <input
              type="range"
              min="0"
              max="100"
              value={isPlaying ? progress : 0}
              onChange={(e) => setProgress(Number(e.target.value))}
              aria-label="Audio progress"
              className="w-full h-1.5 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
            />

            <div className="flex items-center justify-between">
              <Button
                variant={isPlaying ? "secondary" : "primary"}
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="gap-1.5 text-xs h-9 px-4"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause Audio</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Play Audio Message</span>
                  </>
                )}
              </Button>

              <a
                href={sermon.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-label text-xs text-cta hover:underline font-semibold"
              >
                <span>YouTube Video</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
