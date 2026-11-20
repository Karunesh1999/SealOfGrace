import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  User,
  Search,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import { CHURCH_SERVICES, ChurchServiceItem } from '@/data/churchData'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export const ServicesScreen: React.FC = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'worship', label: 'Worship' },
    { id: 'counseling', label: 'Pastoral Counseling' },
    { id: 'prayer', label: 'Prayer' },
    { id: 'sacrament', label: 'Sacraments' },
  ]

  const filteredServices = CHURCH_SERVICES.filter((svc) => {
    const matchesCat = selectedCategory === 'all' || svc.category === selectedCategory
    const matchesSearch =
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.leader.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="flex flex-col gap-0 pb-20">
      {/* Search & Categories */}
      <section className="px-page-margin pt-4 pb-2 flex flex-col gap-3">
        <Input
          placeholder="Search services or sacraments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={<Search className="w-4 h-4" />}
          className="bg-card text-xs"
        />

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 rounded-full font-label text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === c.id
                  ? 'bg-secondary text-secondary-foreground shadow-xs'
                  : 'bg-muted border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className="px-page-margin py-3 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-label text-label-sm text-tertiary-container-foreground uppercase tracking-wider font-semibold">
            Available Services ({filteredServices.length})
          </span>
          <Link
            to="/booking"
            className="inline-flex items-center gap-1 font-label text-xs font-semibold text-primary hover:underline"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredServices.map((svc) => (
            <Card key={svc.id} className="overflow-hidden flex flex-col">
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1000&q=80'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3.5">
                  <div className="flex flex-col">
                    <Badge variant="gold" className="text-[10px] w-fit mb-1">
                      {svc.category.toUpperCase()}
                    </Badge>
                    <h3 className="font-headline text-lg font-bold text-white leading-tight">
                      {svc.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-3">
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {svc.description}
                </p>

                <div className="flex flex-col gap-1.5 text-xs text-muted-foreground pt-1 border-t border-border/60">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{svc.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{svc.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Led by: {svc.leader}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-2">
                  <Link
                    to={`/services/${svc.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full border border-border bg-card text-foreground font-label text-xs font-semibold hover:bg-muted transition-colors text-center"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  {svc.bookable && (
                    <button
                      onClick={() => navigate(`/booking?service=${svc.id}`)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-cta text-white font-label text-xs font-semibold hover:bg-cta/90 shadow-xs transition-colors text-center"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Book Online</span>
                    </button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicesScreen
