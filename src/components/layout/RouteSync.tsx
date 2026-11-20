import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * RouteSync synchronizes the outer browser address bar with the iframe's internal navigation.
 * When the user navigates inside the mobile iframe, the top window URL updates seamlessly.
 */
export const RouteSync: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.self !== window.top) {
      try {
        const fullPath = location.pathname + location.search
        if (
          window.top &&
          window.top.location.pathname + window.top.location.search !== fullPath
        ) {
          window.top.history.replaceState(null, '', fullPath)
        }
      } catch {
        // Cross-origin safety guard
      }
    }
  }, [location.pathname, location.search])

  return null
}

export default RouteSync
