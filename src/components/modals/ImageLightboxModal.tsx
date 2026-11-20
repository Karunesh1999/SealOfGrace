import React, { useState, useEffect, useCallback, useRef } from 'react'
import { ArrowLeft, ChevronLeft, ChevronRight, Tag } from 'lucide-react'
import { GALLERY_PHOTOS, GalleryPhoto } from '@/data/churchData'

interface ImageLightboxModalProps {
  photo: GalleryPhoto | null
  onClose: () => void
  allPhotos?: GalleryPhoto[]
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  photo,
  onClose,
  allPhotos = GALLERY_PHOTOS
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(photo ? photo.id : null)
  const touchStartXRef = useRef<number | null>(null)

  // Keep selectedId in sync with photo prop
  useEffect(() => {
    if (photo) {
      setSelectedId(photo.id)
    } else {
      setSelectedId(null)
    }
  }, [photo])

  // Derive current photo safely
  const currentPhoto = (selectedId && allPhotos.find((p) => p.id === selectedId)) || photo

  // Safe category filtering
  const currentCategory = currentPhoto ? currentPhoto.category : 'events'
  const categoryPhotos = allPhotos.filter((p) => p.category === currentCategory)
  const activeIndex = currentPhoto ? categoryPhotos.findIndex((p) => p.id === currentPhoto.id) : 0
  const totalInCategory = categoryPhotos.length

  const handleNext = useCallback(() => {
    if (totalInCategory <= 1) return
    const nextIdx = (activeIndex + 1) % totalInCategory
    setSelectedId(categoryPhotos[nextIdx].id)
  }, [activeIndex, totalInCategory, categoryPhotos])

  const handlePrev = useCallback(() => {
    if (totalInCategory <= 1) return
    const prevIdx = (activeIndex - 1 + totalInCategory) % totalInCategory
    setSelectedId(categoryPhotos[prevIdx].id)
  }, [activeIndex, totalInCategory, categoryPhotos])

  // Keyboard navigation
  useEffect(() => {
    if (!photo) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [photo, handleNext, handlePrev, onClose])

  // Touch Swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchEndX - touchStartXRef.current
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handlePrev()
      } else {
        handleNext()
      }
    }
    touchStartXRef.current = null
  }

  // ALL HOOKS ARE CALLED BEFORE THIS CHECK!
  if (!photo || !currentPhoto) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-between animate-in fade-in duration-200 select-none overflow-hidden cursor-pointer"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar */}
      <header
        className="w-full px-4 py-3 bg-gradient-to-b from-black via-black/90 to-transparent flex items-center justify-between z-30 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side: Back Icon */}
        <button
          onClick={onClose}
          aria-label="Back to gallery"
          className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 active:bg-white/35 text-white flex items-center justify-center transition-all border border-white/20 shadow-md cursor-pointer active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Right Side: Category Badge & Counter */}
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
            <Tag className="w-3 h-3" />
            <span>{currentPhoto.category}</span>
          </span>
          <span className="text-xs font-semibold text-slate-300">
            {activeIndex >= 0 ? `${activeIndex + 1} of ${totalInCategory}` : ''}
          </span>
        </div>
      </header>

      {/* Main Full-Screen Photo Stage */}
      <main className="relative flex-1 flex items-center justify-center w-full px-2 overflow-hidden">
        {/* Previous Button (Back Icon) */}
        {totalInCategory > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrev()
            }}
            aria-label="Previous image in category"
            className="absolute left-2.5 sm:left-4 z-40 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white border border-white/25 flex items-center justify-center shadow-lg active:scale-90 transition-all backdrop-blur-sm cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 -ml-0.5" />
          </button>
        )}

        {/* Center Display Image */}
        <div
          className="w-full h-full flex items-center justify-center p-2 cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            key={currentPhoto.id}
            src={currentPhoto.image}
            alt={currentPhoto.title}
            className="max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl transition-all duration-300 animate-in fade-in zoom-in-98"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s7.jpg'
            }}
          />
        </div>

        {/* Next Button */}
        {totalInCategory > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            aria-label="Next image in category"
            className="absolute right-2.5 sm:right-4 z-40 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white border border-white/25 flex items-center justify-center shadow-lg active:scale-90 transition-all backdrop-blur-sm cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 -mr-0.5" />
          </button>
        )}
      </main>

      {/* Bottom Information & Dot Progress Bar */}
      <footer
        className="w-full px-4 pt-3 pb-5 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col gap-2 z-30 shrink-0 text-center cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-headline text-base font-bold text-white leading-tight">
          {currentPhoto.title}
        </h3>
        {currentPhoto.caption && (
          <p className="font-body text-xs text-slate-300 leading-snug">
            {currentPhoto.caption}
          </p>
        )}

        {/* Category Photo Dots Indicator */}
        {totalInCategory > 1 && totalInCategory <= 15 && (
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {categoryPhotos.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                aria-label={`Jump to photo ${idx + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  idx === activeIndex
                    ? 'w-6 h-1.5 bg-primary'
                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </footer>
    </div>
  )
}

export default ImageLightboxModal
