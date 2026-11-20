import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'

import { DesktopDeviceFrame } from '@/components/layout/DesktopDeviceFrame'
import { RouteSync } from '@/components/layout/RouteSync'
import { TopAppBar } from '@/components/layout/TopAppBar'
import { BottomNavBar } from '@/components/layout/BottomNavBar'
import { NavigationDrawer } from '@/components/layout/NavigationDrawer'
import { LiveRadioModal } from '@/components/modals/LiveRadioModal'
import { SermonModal } from '@/components/modals/SermonModal'
import { ImageLightboxModal } from '@/components/modals/ImageLightboxModal'
import { GetInvolvedModal } from '@/components/modals/GetInvolvedModal'

import { HomeScreen } from '@/screens/HomeScreen'
import { AboutUsScreen } from '@/screens/AboutUsScreen'
import { ServicesScreen } from '@/screens/ServicesScreen'
import { ServiceDetailScreen } from '@/screens/ServiceDetailScreen'
import { BookingScreen } from '@/screens/BookingScreen'
import { EventsScreen } from '@/screens/EventsScreen'
import { MinistriesScreen } from '@/screens/MinistriesScreen'
import { OurPastorsScreen } from '@/screens/OurPastorsScreen'
import { SermonsScreen } from '@/screens/SermonsScreen'
import { SermonDetailScreen } from '@/screens/SermonDetailScreen'
import { GalleryScreen } from '@/screens/GalleryScreen'
import { ContactUsScreen } from '@/screens/ContactUsScreen'
import { MoreScreen } from '@/screens/MoreScreen'
import { LiveRadioScreen } from '@/screens/LiveRadioScreen'

import { SermonItem, GalleryPhoto, MinistryItem } from '@/data/churchData'

// Auto-scroll to top when route changes
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AppLayout() {
  const navigate = useNavigate()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isRadioModalOpen, setIsRadioModalOpen] = useState(false)
  const [selectedSermon, setSelectedSermon] = useState<SermonItem | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null)
  const [selectedMinistry, setSelectedMinistry] = useState<MinistryItem | null>(null)

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-body antialiased flex flex-col relative select-none">
      <ScrollToTop />
      <RouteSync />

      {/* Top App Bar */}
      <TopAppBar
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenRadio={() => navigate('/live')}
      />

      {/* Routed Pages */}
      <main className="flex-1 flex flex-col bg-background">
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen
                onOpenRadio={() => navigate('/live')}
                onSelectPhoto={setSelectedPhoto}
              />
            }
          />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<AboutUsScreen />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/services/:id" element={<ServiceDetailScreen />} />
          <Route path="/booking" element={<BookingScreen />} />
          <Route path="/appointment" element={<Navigate to="/booking" replace />} />
          <Route path="/events" element={<EventsScreen />} />
          <Route
            path="/ministries"
            element={<MinistriesScreen onSelectMinistry={setSelectedMinistry} />}
          />
          <Route path="/pastors" element={<OurPastorsScreen />} />
          <Route
            path="/sermons"
            element={<SermonsScreen onSelectSermon={setSelectedSermon} />}
          />
          <Route path="/sermons/:id" element={<SermonDetailScreen />} />
          <Route
            path="/gallery"
            element={<GalleryScreen onSelectPhoto={setSelectedPhoto} />}
          />
          <Route path="/portfolio" element={<Navigate to="/gallery" replace />} />
          <Route path="/contact" element={<ContactUsScreen />} />
          <Route path="/live" element={<LiveRadioScreen />} />
          <Route path="/radio" element={<Navigate to="/live" replace />} />
          <Route path="/more" element={<MoreScreen onOpenRadio={() => navigate('/live')} />} />
          <Route path="/menu" element={<Navigate to="/more" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Fixed Bottom Navigation Bar */}
      <BottomNavBar onOpenDrawer={() => setIsDrawerOpen(true)} />

      {/* Slide-over Full Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenRadio={() => navigate('/live')}
      />

      {/* Live Broadcast / Radio Modal (kept clean as backup) */}
      <LiveRadioModal
        isOpen={isRadioModalOpen}
        onClose={() => setIsRadioModalOpen(false)}
      />

      {/* Sermon Audio & Study Modal */}
      <SermonModal
        sermon={selectedSermon}
        onClose={() => setSelectedSermon(null)}
      />

      {/* Full Image Lightbox Modal */}
      <ImageLightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      {/* Ministry Join / Get Involved Modal */}
      <GetInvolvedModal
        ministry={selectedMinistry}
        onClose={() => setSelectedMinistry(null)}
      />
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <DesktopDeviceFrame>
        <AppLayout />
      </DesktopDeviceFrame>
    </BrowserRouter>
  )
}

export default App
