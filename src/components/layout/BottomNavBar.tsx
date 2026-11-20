import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Calendar, PlayCircle, Church, LayoutGrid } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BottomNavBarProps {
  onOpenDrawer?: () => void
}

export const BottomNavBar: React.FC<BottomNavBarProps> = () => {
  const location = useLocation()
  const path = location.pathname

  const isMoreActive = [
    '/about',
    '/pastors',
    '/gallery',
    '/contact',
    '/booking',
    '/ministries'
  ].some((prefix) => path.startsWith(prefix))

  const leftTabs = [
    { path: '/', label: 'Home', icon: Home, matchExact: true },
    { path: '/events', label: 'Events', icon: Calendar },
  ]

  const centerTab = {
    path: '/services',
    label: 'Services',
    icon: Church
  }

  const rightTabs = [
    { path: '/sermons', label: 'Sermons', icon: PlayCircle },
    { path: '/more', label: 'More', icon: LayoutGrid },
  ]

  const isCenterActive = path.startsWith('/services')

  const renderTab = (tab: { path: string; label: string; icon: any; matchExact?: boolean }) => {
    const Icon = tab.icon
    const isActive = tab.matchExact
      ? path === '/' || path === '/home'
      : (tab.path === '/more' ? (path === '/more' || isMoreActive) : path.startsWith(tab.path))

    return (
      <Link
        key={tab.path}
        to={tab.path}
        className="flex flex-col items-center justify-center flex-1 h-full py-1 select-none active:scale-95 transition-transform"
      >
        {isActive ? (
          <div className="flex flex-col items-center justify-center px-3.5 py-1 rounded-2xl bg-primary/10 text-primary transition-all">
            <Icon className="w-5 h-5 stroke-[2.2]" />
            <span className="font-label text-[11px] font-bold tracking-tight">
              {tab.label}
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-2 py-1 text-slate-500 hover:text-slate-900 transition-colors gap-0.5">
            <Icon className="w-5 h-5 stroke-[1.75]" />
            <span className="font-label text-[11px] font-medium tracking-tight">
              {tab.label}
            </span>
          </div>
        )}
      </Link>
    )
  }

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] select-none max-w-lg mx-auto overflow-visible"
    >
      <div className="flex items-center justify-between h-16 px-1.5 relative overflow-visible">
        {/* Left Tabs */}
        {leftTabs.map(renderTab)}

        {/* Center Elevated Floating Action Tab */}
        <Link
          to={centerTab.path}
          className="flex flex-col items-center justify-center flex-1 -mt-6 select-none relative z-10 active:scale-95 transition-transform"
        >
          <div
            className={cn(
              "w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,90,150,0.38)] border-4 border-white transition-all",
              isCenterActive
                ? "ring-2 ring-primary ring-offset-2 scale-105"
                : "hover:scale-105"
            )}
          >
            <centerTab.icon className="w-6 h-6 text-white stroke-[2.2]" />
          </div>
          <span
            className={cn(
              "font-label text-[11px] tracking-tight mt-0.5",
              isCenterActive ? "text-primary font-bold" : "text-slate-700 font-semibold"
            )}
          >
            {centerTab.label}
          </span>
        </Link>

        {/* Right Tabs */}
        {rightTabs.map(renderTab)}
      </div>
    </nav>
  )
}

export default BottomNavBar
