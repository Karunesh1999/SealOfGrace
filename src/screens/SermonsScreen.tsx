import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  PlayCircle,
  ExternalLink,
  Search,
  BookOpen,
  Calendar,
  User,
  HeartHandshake,
  ArrowRight
} from 'lucide-react'
import { SERMONS, SermonItem, CHURCH_INFO } from '@/data/churchData'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface SermonsScreenProps {
  onSelectSermon: (sermon: SermonItem) => void
}

export const SermonsScreen: React.FC<SermonsScreenProps> = ({ onSelectSermon }) => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', 'Faith & Favor', 'Spiritual Warfare', 'Holy Living', 'Family & Relationships']

  const filteredSermons = SERMONS.filter((sermon) => {
    const matchesSearch =
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCat =
      selectedCategory === 'all' || sermon.category === selectedCategory
    return matchesSearch && matchesCat
  })

  return (
    <div className="flex flex-col gap-0 pb-20">
      {/* Search & Category Filter */}
      <section className="px-page-margin pt-4 pb-2 flex flex-col gap-3">
        <Input
          placeholder="Search sermons, scriptures or topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={<Search className="w-4 h-4" />}
          className="bg-card text-xs"
        />

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full font-label text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-secondary text-secondary-foreground shadow-xs'
                  : 'bg-muted border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat === 'all' ? 'All Messages' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Sermons List */}
      <section className="px-page-margin py-3 flex flex-col gap-4">
        <div className="flex flex-col gap-0.5">
          <span className="font-label text-label-sm text-tertiary-container-foreground uppercase tracking-wider font-semibold">
            Sacred Teachings
          </span>
          <h2 className="font-headline text-headline-lg-mobile text-secondary font-bold">
            Explore Our Sermons ({filteredSermons.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredSermons.map((sermon, idx) => (
            <Card key={sermon.id} className="overflow-hidden flex flex-col">
              {idx === 0 && (
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1000&q=80'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                    <span className="px-2 py-0.5 rounded-full bg-cta text-cta-foreground text-[10px] font-bold uppercase tracking-wider">
                      Featured Message
                    </span>
                  </div>
                </div>
              )}

              <div className="p-4 flex flex-col gap-2">
                <header className="flex flex-col gap-0.5">
                  <span className="font-label text-[11px] font-semibold text-tertiary uppercase">
                    {sermon.category}
                  </span>
                  <Link
                    to={`/sermons/${sermon.id}`}
                    className="font-title text-base text-secondary font-bold leading-snug hover:text-primary transition-colors"
                  >
                    {sermon.title}
                  </Link>
                  <p className="font-body text-xs text-muted-foreground">
                    Sermon By: {sermon.preacher} · {sermon.year}
                  </p>
                </header>

                <p className="font-body text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {sermon.description}
                </p>

                {sermon.verses && (
                  <p className="font-body text-[11px] text-primary italic">
                    Ref: {sermon.verses}
                  </p>
                )}

                <footer className="flex items-center justify-between pt-3 mt-1 border-t border-border/60">
                  <button
                    onClick={() => onSelectSermon(sermon)}
                    className="inline-flex items-center gap-1.5 font-label text-xs font-semibold text-cta hover:text-destructive transition-colors"
                  >
                    <PlayCircle className="w-4 h-4 fill-current" />
                    <span>Quick Audio</span>
                  </button>

                  <Link
                    to={`/sermons/${sermon.id}`}
                    className="inline-flex items-center gap-1 font-label text-xs text-primary hover:underline font-semibold"
                  >
                    <span>Read Notes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </footer>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Give Your Life to Christ Callout */}
      <section className="bg-secondary text-secondary-foreground mx-page-margin my-3 p-5 rounded-2xl flex flex-col gap-3 shadow-md">
        <div className="flex items-center gap-2">
          <HeartHandshake className="w-6 h-6 text-tertiary shrink-0" />
          <h2 className="font-headline text-lg text-secondary-foreground font-bold">
            Want to give your life to Christ?
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button
            variant="cta"
            size="sm"
            onClick={() => navigate('/booking?service=pastoral-counseling')}
            className="text-xs"
          >
            Start Your Journey
          </Button>
          <a
            href={`tel:${CHURCH_INFO.phoneRaw}`}
            className="font-label text-xs font-semibold text-tertiary tabular-nums hover:underline"
          >
            {CHURCH_INFO.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
