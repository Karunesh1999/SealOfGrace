import React from 'react'
import { X, ZoomIn } from 'lucide-react'
import { GalleryPhoto } from '@/data/churchData'

interface ImageLightboxModalProps {
  photo: GalleryPhoto | null
  onClose: () => void
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ photo, onClose }) => {
  if (!photo) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-secondary/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-surface rounded-2xl overflow-hidden shadow-2xl border border-outline-variant flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3.5 bg-secondary text-on-secondary">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-tertiary" />
            <h4 className="font-headline text-sm font-bold text-white truncate">
              {photo.title}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Full Image */}
        <div className="bg-black flex items-center justify-center max-h-[60vh] overflow-hidden">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-auto max-h-[60vh] object-contain"
          />
        </div>

        {/* Caption */}
        <div className="p-3.5 bg-surface flex items-center justify-between border-t border-outline-variant">
          <span className="font-body text-xs text-on-surface-variant font-medium">
            {photo.caption}
          </span>
          <span className="font-label text-[11px] uppercase tracking-wider text-primary font-bold bg-primary-container px-2 py-0.5 rounded-full">
            {photo.category}
          </span>
        </div>
      </div>
    </div>
  )
}
