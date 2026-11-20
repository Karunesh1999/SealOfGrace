import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Calendar, PlayCircle, Sparkles, LayoutGrid } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BottomNavBarProps {
  onOpenDrawer: () => void
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ onOpenDrawer }) => {
  const location = useLocation()
  const path = location.pathname

  const tabs = [
    { path: '/', label: 'Home', icon: Home, matchExact: true },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/sermons', label: 'Sermons', icon: PlayCircle },
    { path: '/services', label: 'Services', icon: Sparkles },
  ]

  const isMoreActive = [
    '/about',
    '/pastors',
    '/gallery',
    '/contact',
    '/booking',
    '/ministries'
  ].some((prefix) => path.startsWith(prefix))

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-secondary text-secondary-foreground border-t border-border/20 shadow-bottom-nav select-none max-w-lg mx-auto"
    >
      <div className="grid grid-cols-5 items-center h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = tab.matchExact
            ? path === '/' || path === '/home'
            : path.startsWith(tab.path)

          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 py-1.5 h-full transition-colors active:scale-95",
                isActive
                  ? "text-tertiary font-bold"
                  : "text-secondary-container hover:text-secondary-foreground font-medium"
              )}
            >
              <div className="relative">
                <Icon className={cn("w-5 h-5", isActive && "stroke-[2.5]")} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-tertiary" />
                )}
              </div>
              <span className="font-label text-[11px] tracking-tight">{tab.label}</span>
            </Link>
          )
        })}

        {/* More button */}
        <Link
          to="/more"
          className={cn(
            "flex flex-col items-center justify-center gap-1 py-1.5 h-full transition-colors active:scale-95",
            path === '/more' || isMoreActive
              ? "text-tertiary font-bold"
              : "text-secondary-container hover:text-secondary-foreground font-medium"
          )}
        >
          <div className="relative">
            <LayoutGrid className="w-5 h-5" />
            {(path === '/more' || isMoreActive) && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-tertiary" />
            )}
          </div>
          <span className="font-label text-[11px] tracking-tight">More</span>
        </Link>
      </div>
    </nav>
  )
}
