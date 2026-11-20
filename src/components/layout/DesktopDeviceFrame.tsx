import React, { useState, useEffect, useRef } from 'react'

interface DesktopDeviceFrameProps {
  children: React.ReactNode
}

export const DesktopDeviceFrame: React.FC<DesktopDeviceFrameProps> = ({ children }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // 1. Check if already inside an iframe
  const isInsideIframe = typeof window !== 'undefined' && window.self !== window.top

  // 2. Track screen width (>= 768px considers desktop preview mode)
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(min-width: 768px)').matches
  })

  // Track initial path to load in iframe (including search query and hash)
  const [initialPath] = useState<string>(() => {
    if (typeof window === 'undefined') return '/'
    return window.location.pathname + window.location.search + window.location.hash
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // 3. Listen to browser popstate (Back/Forward buttons) on the desktop window and sync with iframe
  useEffect(() => {
    if (isInsideIframe || !isDesktop) return

    const handlePopState = () => {
      try {
        const targetPath =
          window.location.pathname + window.location.search + window.location.hash
        if (iframeRef.current && iframeRef.current.contentWindow) {
          const iframeCurrentPath =
            iframeRef.current.contentWindow.location.pathname +
            iframeRef.current.contentWindow.location.search +
            iframeRef.current.contentWindow.location.hash

          if (iframeCurrentPath !== targetPath) {
            iframeRef.current.contentWindow.location.replace(targetPath)
          }
        }
      } catch {
        // Cross-origin safety
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [isInsideIframe, isDesktop])

  // If already inside an iframe OR on mobile device (< 768px), render directly in genuine mobile viewport
  if (isInsideIframe || !isDesktop) {
    return <>{children}</>
  }

  // On Desktop (>= 768px) at top level: render authentic Apple iPhone 16 chassis
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-[#edf2fc] via-[#f5f8fe] to-[#faf5fc] flex items-center justify-center p-4 sm:p-6 select-none relative overflow-x-hidden font-sans">
      {/* Subtle soft ambient studio glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-sky-200/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[130px] pointer-events-none" />

      {/* The Apple iPhone 16 Chassis Mockup Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* iPhone 16 Hardware Outer Frame */}
        <div className="relative">
          {/* Left Hardware Buttons */}
          {/* 1. Action Button (iPhone 16 standard) */}
          <div className="absolute -left-[10px] top-[102px] w-[3px] h-[26px] bg-[#3f3f46] rounded-l-sm shadow-sm" />
          {/* 2. Volume Up */}
          <div className="absolute -left-[10px] top-[144px] w-[3px] h-[48px] bg-[#3f3f46] rounded-l-sm shadow-sm" />
          {/* 3. Volume Down */}
          <div className="absolute -left-[10px] top-[204px] w-[3px] h-[48px] bg-[#3f3f46] rounded-l-sm shadow-sm" />

          {/* Right Hardware Buttons */}
          {/* 4. Side / Power Button */}
          <div className="absolute -right-[10px] top-[148px] w-[3px] h-[68px] bg-[#3f3f46] rounded-r-sm shadow-sm" />
          {/* 5. iPhone 16 Signature: Capacitive Camera Control Button */}
          <div
            className="absolute -right-[9px] top-[290px] w-[2px] h-[52px] bg-[#52525b] rounded-r-[1px] shadow-sm border-l border-zinc-700/60"
            title="iPhone 16 Camera Control"
          />

          {/* iPhone 16 Body - Aerospace-grade aluminum & contoured edges */}
          <div
            className="relative w-[393px] max-w-[92vw] h-[852px] max-h-[88vh] bg-[#18181b] rounded-[54px] p-[10px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.28),0_12px_28px_-6px_rgba(0,0,0,0.14),0_0_0_1px_rgba(255,255,255,0.12),0_0_0_5px_#27272a,0_0_0_6px_#09090b] flex flex-col"
            style={{ aspectRatio: '393 / 852' }}
          >
            {/* Screen Bezel & Display Frame (Ultra-slim 44px border radius) */}
            <div className="relative w-full h-full bg-background rounded-[44px] overflow-hidden flex flex-col border border-black/40">
              {/* The Isolated Viewport Iframe (Authentic 1:1 Mobile Rendering) */}
              <iframe
                ref={iframeRef}
                src={initialPath}
                title="Seal of Grace - iPhone 16 Preview"
                className="w-full flex-1 border-0 select-auto bg-background"
                style={{
                  colorScheme: 'light',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              />

              {/* iOS Home Indicator Bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/25 rounded-full pointer-events-none z-50" />
            </div>
          </div>
        </div>

        {/* Soft diffused ground shadow underneath device */}
        <div className="w-72 h-6 bg-slate-900/20 blur-xl rounded-full mt-4 pointer-events-none" />
      </div>
    </div>
  )
}

export default DesktopDeviceFrame
