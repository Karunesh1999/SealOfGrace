import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BookOpen, Phone, Menu, Radio, Calendar } from 'lucide-react'
import { CHURCH_INFO } from '@/data/churchData'

interface TopAppBarProps {
  onOpenDrawer: () => void
  onOpenRadio: () => void
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  onOpenDrawer,
  onOpenRadio,
}) => {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-40 bg-secondary text-secondary-foreground px-page-margin py-3 flex items-center justify-between shadow-md border-b border-white/5">
      {/* Logo & Brand */}
      <Link
        to="/"
        className="flex items-center gap-2.5 text-left active:opacity-85 transition-opacity"
      >
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center border border-tertiary shadow-sm shrink-0">
          <BookOpen className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="flex flex-col">
          <span className="font-headline text-[15px] font-bold text-secondary-foreground leading-tight tracking-wide">
            {CHURCH_INFO.shortName}
          </span>
          <span className="font-label text-[11px] text-tertiary font-medium leading-tight">
            Bible Church
          </span>
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Quick Booking shortcut */}
        <button
          type="button"
          onClick={() => navigate('/booking')}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-cta text-cta-foreground text-[11px] font-semibold hover:bg-destructive shadow-xs transition-colors"
          title="Book Session"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">Book</span>
        </button>

        {/* Live Radio Tune-in */}
        <button
          type="button"
          onClick={onOpenRadio}
          className="relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-primary/80 hover:bg-primary text-primary-foreground text-[12px] font-semibold border border-tertiary/40 transition-colors"
          title="Listen to Live Broadcast"
        >
          <span className="w-2 h-2 rounded-full bg-cta animate-pulse-live" />
          <Radio className="w-3.5 h-3.5 text-tertiary" />
          <span className="hidden sm:inline font-label text-xs">Live</span>
        </button>

        {/* Quick Phone Call */}
        <a
          href={`tel:${CHURCH_INFO.phoneRaw}`}
          aria-label="Call church office"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground hover:bg-tertiary hover:text-tertiary-foreground transition-colors duration-150 shadow-sm"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Hamburger Menu Toggle */}
        <Link
          to="/more"
          aria-label="Open navigation menu"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground hover:bg-tertiary hover:text-tertiary-foreground transition-colors duration-150 shadow-sm"
        >
          <Menu className="w-5 h-5" />
        </Link>
      </div>
    </header>
  )
}
