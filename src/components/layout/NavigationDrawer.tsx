import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  X,
  Home,
  Info,
  Calendar,
  Sparkles,
  Users,
  ShieldCheck,
  PlayCircle,
  Image as ImageIcon,
  Mail,
  Phone,
  MapPin,
  Radio,
  BookMarked,
  ChevronRight
} from 'lucide-react'
import { CHURCH_INFO } from '@/data/churchData'

interface NavigationDrawerProps {
  isOpen: boolean
  onClose: () => void
  onOpenRadio: () => void
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onOpenRadio,
}) => {
  const location = useLocation()
  const path = location.pathname

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const menuSections = [
    {
      title: 'Worship & Services',
      items: [
        { path: '/', label: 'Home', icon: Home, desc: 'Announcements, themes & overview', color: 'bg-primary/10 text-primary' },
        { path: '/services', label: 'Church Services', icon: Sparkles, desc: 'Sunday worship, prayers & sacraments', color: 'bg-amber-500/10 text-amber-600' },
        { path: '/booking', label: 'Book Appointment', icon: BookMarked, desc: 'Pastoral counseling & baby dedication', color: 'bg-rose-500/10 text-rose-600' },
        { path: '/events', label: 'Events & Calendar', icon: Calendar, desc: 'Weekly services & 2026 fasting schedule', color: 'bg-blue-500/10 text-blue-600' },
        { path: '/sermons', label: 'Sermons & Teachings', icon: PlayCircle, desc: 'Biblical audio messages & study notes', color: 'bg-emerald-500/10 text-emerald-600' },
      ]
    },
    {
      title: 'Our Church Family',
      items: [
        { path: '/ministries', label: 'Ministries', icon: Users, desc: 'Children, Choir, Youth & Evangelism', color: 'bg-purple-500/10 text-purple-600' },
        { path: '/pastors', label: 'Our Pastors', icon: ShieldCheck, desc: 'Lead Pastor Samuel Koffie & presbytery', color: 'bg-sky-500/10 text-sky-600' },
        { path: '/about', label: 'About Us', icon: Info, desc: 'Our vision, mission & 7 biblical pillars', color: 'bg-indigo-500/10 text-indigo-600' },
        { path: '/gallery', label: 'Photo Gallery', icon: ImageIcon, desc: 'Worship moments & service highlights', color: 'bg-teal-500/10 text-teal-600' },
        { path: '/contact', label: 'Contact Us', icon: Mail, desc: 'Prayer requests, directions & support', color: 'bg-primary/10 text-primary' },
      ]
    }
  ]

  return (
    <div
      className="fixed inset-0 z-50 bg-background text-foreground flex flex-col overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Clean Top Header */}
      <header className="sticky top-0 z-20 bg-background/95 backdrop-blur-md border-b border-border px-page-margin py-3.5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-headline text-lg font-bold text-secondary">
            {CHURCH_INFO.shortName}
          </span>
          <span className="font-label text-xs text-muted-foreground">
            {CHURCH_INFO.slogan}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="w-9 h-9 rounded-full bg-muted hover:bg-muted-foreground/10 flex items-center justify-center text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Main Page Content */}
      <div className="flex flex-col gap-4 px-page-margin py-4 pb-24">
        {/* Live Broadcast Pill */}
        <button
          onClick={() => {
            onClose()
            onOpenRadio()
          }}
          className="w-full flex items-center justify-between p-4 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/50 transition-all text-left group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <Radio className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
                <span className="font-title text-sm font-bold text-foreground">
                  Listen to Live Broadcast
                </span>
              </div>
              <span className="font-body text-xs text-muted-foreground">
                {CHURCH_INFO.radioStation} • Sundays 7:00 AM
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </button>

        {/* Menu Sections */}
        {menuSections.map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <span className="font-label text-xs uppercase tracking-wider text-muted-foreground font-bold px-1">
              {section.title}
            </span>
            <div className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-xs divide-y divide-border">
              {section.items.map((item) => {
                const Icon = item.icon
                const isActive = item.path === '/'
                  ? path === '/' || path === '/home'
                  : path.startsWith(item.path)

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={`flex items-center justify-between p-3.5 transition-colors ${
                      isActive ? 'bg-primary/5 text-primary' : 'hover:bg-muted/50 active:bg-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className={`font-title text-sm font-semibold truncate ${
                          isActive ? 'text-primary font-bold' : 'text-foreground'
                        }`}>
                          {item.label}
                        </span>
                        <span className="font-body text-xs text-muted-foreground truncate">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  </Link>
                )
              })}
            </div>
          </div>
        ))}

        {/* Church Info & Contact Details */}
        <div className="p-4 rounded-2xl bg-card border border-border shadow-xs flex flex-col gap-2.5 mt-1">
          <div className="flex flex-col gap-0.5">
            <span className="font-headline font-bold text-base text-secondary">
              {CHURCH_INFO.name}
            </span>
            <span className="font-label text-xs text-tertiary font-semibold">
              {CHURCH_INFO.slogan}
            </span>
          </div>
          <div className="flex flex-col gap-1.5 text-xs text-muted-foreground pt-1 border-t border-border">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{CHURCH_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
              <a href={`tel:${CHURCH_INFO.phoneRaw}`} className="hover:underline text-foreground font-medium">
                {CHURCH_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="truncate">{CHURCH_INFO.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationDrawer
