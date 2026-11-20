import React, { useState } from 'react'

interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string
}

export const FALLBACK_CHURCH_IMAGE =
  'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1000&q=80'

export const AppImage: React.FC<AppImageProps> = ({
  src,
  alt = '',
  className = '',
  fallbackSrc = FALLBACK_CHURCH_IMAGE,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src || fallbackSrc)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setCurrentSrc(fallbackSrc)
    }
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  )
}

export default AppImage
