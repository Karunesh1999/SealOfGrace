import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  Play,
  ExternalLink,
  BookOpen,
  Calendar,
  User,
  Clock,
  Share2,
  CheckCircle2
} from 'lucide-react'
import { SERMONS, CHURCH_INFO } from '@/data/churchData'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const SermonDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [shared, setShared] = useState(false)

  const sermon = SERMONS.find((s) => s.id === id) || SERMONS[0]

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: sermon.title,
        text: `Listen to "${sermon.title}" by ${sermon.preacher} at Seal of Grace Bible Church`,
        url: window.location.href,
      }).catch(() => {})
    } else {
      navigator.clipboard?.writeText(window.location.href)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    }
  }

  return (
    <div className="flex flex-col gap-0 pb-20">
      {/* Top Banner with Image */}
      <div className="relative h-56 bg-slate-900 w-full overflow-hidden">
        <img
          src={sermon.image}
          alt={sermon.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1000&q=80'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

        {/* Back Link & Share */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          <Link
            to="/sermons"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Sermons</span>
          </Link>

          <button
            onClick={handleShare}
            className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
            title="Share sermon"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <Badge variant="cta" className="text-[10px] uppercase font-bold mb-1">
            {sermon.category}
          </Badge>
          <h1 className="font-headline text-xl font-bold text-white leading-tight">
            {sermon.title}
          </h1>
          <p className="font-body text-xs text-gold-soft mt-0.5">
            By {sermon.preacher} · {sermon.year}
          </p>
        </div>
      </div>

      {/* Share Toast */}
      {shared && (
        <div className="mx-page-margin mt-3 p-2.5 rounded-lg bg-success text-white text-xs font-medium text-center animate-in slide-in-from-top">
          Link copied to clipboard!
        </div>
      )}

      {/* Body Content */}
      <div className="p-page-margin flex flex-col gap-5">
        {/* Metadata Bar */}
        <div className="rounded-xl bg-card border border-border p-3.5 flex items-center justify-between text-xs text-muted-foreground shadow-xs">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-primary" />
            <span className="font-medium text-foreground">{sermon.preacher}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span>{sermon.year}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span>{sermon.duration}</span>
          </span>
        </div>

        {/* Play on YouTube Video Banner */}
        <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center justify-between shadow-xs hover:border-red-200 transition-colors gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 border border-red-100 flex items-center justify-center shrink-0 shadow-xs">
              <Play className="w-5 h-5 fill-red-600 text-red-600 ml-0.5" />
            </div>
            <span className="font-headline text-base font-bold text-slate-900 leading-none">
              Play on YouTube
            </span>
          </div>

          <a
            href={sermon.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-label text-xs font-bold shadow-xs active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            <span>Watch Video</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Scripture Text */}
        {sermon.verses && (
          <div className="rounded-xl bg-primary-container p-4 flex items-start gap-3 text-primary-container-foreground">
            <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <span className="font-label text-xs font-bold uppercase tracking-wider">
                Scripture Foundation
              </span>
              <p className="font-body text-xs italic font-medium leading-relaxed">
                {sermon.verses}
              </p>
            </div>
          </div>
        )}

        {/* Message Summary */}
        <div className="flex flex-col gap-2">
          <h2 className="font-headline text-base font-bold text-secondary">
            Sermon Overview
          </h2>
          <p className="font-body text-body-md text-muted-foreground leading-relaxed text-pretty">
            {sermon.description}
          </p>
        </div>

        {/* Key Teaching Outline */}
        {sermon.keyPoints && (
          <div className="flex flex-col gap-2.5">
            <h3 className="font-headline text-base font-bold text-secondary">
              Key Study Points
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {sermon.keyPoints.map((pt, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-muted p-3 flex items-start gap-2.5 text-xs text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-body leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Callout */}
        <div className="rounded-xl bg-secondary text-secondary-foreground p-4 flex flex-col gap-2 text-center mt-2 shadow-sm">
          <h4 className="font-headline text-sm font-bold">
            Grow Further in the Word
          </h4>
          <p className="font-body text-xs text-secondary-container">
            Need spiritual clarity or pastoral prayer based on this sermon?
          </p>
          <Link
            to="/booking?service=pastoral-counseling"
            className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-full bg-cta text-white font-label text-xs font-semibold hover:bg-cta/90 mt-1 shadow-xs"
          >
            <span>Request Pastoral Discussion</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
