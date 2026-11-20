import React, { useState } from 'react'
import { ZoomIn, Sparkles } from 'lucide-react'
import { GALLERY_PHOTOS, GalleryPhoto } from '@/data/churchData'

interface GalleryScreenProps {
  onSelectPhoto: (photo: GalleryPhoto) => void
}

export const GalleryScreen: React.FC<GalleryScreenProps> = ({ onSelectPhoto }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'Show All' },
    { id: 'events', label: 'Events' },
    { id: 'service', label: 'Service & Members' },
    { id: 'children', label: 'Children Ministry' },
    { id: 'choir', label: 'Choir' },
    { id: 'baptism', label: 'Baptism' },
    { id: 'media', label: 'Media' }
  ]

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    return selectedCat === 'all' || photo.category === selectedCat
  })

  return (
    <div className="flex flex-col gap-0 pb-20 pt-2">
      {/* Category Filter Chips */}
      <section className="px-page-margin pt-4 pb-2 flex flex-col gap-2.5">
        <h2 className="font-headline text-headline-md text-secondary font-bold">
          Explore Our Church Gallery
        </h2>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCat(c.id)}
              className={`px-3 py-1.5 rounded-full font-label text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCat === c.id
                  ? 'bg-secondary text-on-secondary shadow-xs'
                  : 'bg-surface-container border border-outline text-on-surface-variant hover:text-secondary'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="px-page-margin py-3 grid grid-cols-2 gap-2.5">
        {filteredPhotos.map((photo) => (
          <figure
            key={photo.id}
            onClick={() => onSelectPhoto(photo)}
            className="group cursor-pointer rounded-xl overflow-hidden border border-outline-variant bg-surface shadow-xs active:scale-95 transition-all hover:shadow-md"
          >
            <div className="relative h-36 overflow-hidden bg-slate-900">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="w-8 h-8 rounded-full bg-secondary/80 text-white flex items-center justify-center">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>
            </div>
            <figcaption className="p-2.5 font-body text-xs text-on-surface-variant font-medium flex items-center justify-between">
              <span className="truncate">{photo.caption}</span>
              <span className="font-label text-[10px] uppercase text-primary font-bold">
                {photo.category}
              </span>
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  )
}
