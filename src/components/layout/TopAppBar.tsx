import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BookOpen, Phone, Menu, Calendar } from 'lucide-react'
import { CHURCH_INFO } from '@/data/churchData'

interface TopAppBarProps {
  onOpenDrawer?: () => void
  onOpenRadio?: () => void
}

export const TopAppBar: React.FC<TopAppBarProps> = () => {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-page-margin py-2.5 flex items-center justify-between shadow-xs border-b border-slate-200/80 transition-colors">
      {/* Logo & Brand */}
      <Link
        to="/"
        className="flex items-center gap-2.5 text-left active:opacity-85 transition-opacity"
      >
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-slate-200/80 shadow-xs shrink-0 overflow-hidden p-0.5">
          <img
            src="/images/church/logo/logo-1.png"
            alt={CHURCH_INFO.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-headline text-[15px] font-bold text-slate-900 leading-tight tracking-wide">
            {CHURCH_INFO.shortName}
          </span>
          <span className="font-label text-[11px] text-tertiary-foreground/75 font-semibold leading-tight">
            Bible Church
          </span>
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="flex items-center gap-1.5">
        {/* Quick Booking shortcut */}
        <button
          type="button"
          onClick={() => navigate('/booking')}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-cta text-white text-[11px] font-semibold hover:bg-destructive shadow-xs transition-colors"
          title="Book Session"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">Book</span>
        </button>

        {/* Quick Phone Call */}
        <a
          href={`tel:${CHURCH_INFO.phoneRaw}`}
          aria-label="Call church office"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-primary transition-colors border border-slate-200/80 shadow-xs"
        >
          <Phone className="w-3.5 h-3.5" />
        </a>

        {/* Hamburger Menu Toggle */}
        <Link
          to="/more"
          aria-label="Open navigation menu"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-primary transition-colors border border-slate-200/80 shadow-xs"
        >
          <Menu className="w-4 h-4" />
        </Link>
      </div>
    </header>
  )
}

export default TopAppBar
