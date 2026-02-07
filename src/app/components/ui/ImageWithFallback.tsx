import { useState, type ImgHTMLAttributes } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

/**
 * Transform image URL to request 3000x3000 size
 * Handles various image services like Unsplash and Pinterest
 */
function transformImageUrl(url: string | undefined): string | undefined {
  if (!url || typeof url !== 'string') return url

  try {
    // Handle Unsplash URLs
    if (url.includes('unsplash.com')) {
      const urlObj = new URL(url)
      // Update or add width and height parameters
      urlObj.searchParams.set('w', '3000')
      urlObj.searchParams.set('h', '3000')
      return urlObj.toString()
    }

    // Handle Pinterest URLs (i.pinimg.com)
    if (url.includes('pinimg.com')) {
      // Pinterest URLs format: https://i.pinimg.com/originals/xx/xx/xx/filename.jpg
      // Use 'originals' for highest quality, or replace size suffix
      // If URL already has a size (236x, 474x, 736x), replace with originals
      return url.replace(/\/(236x|474x|736x|564x)\//g, '/originals/')
    }

    // For other URLs, return as-is
    // Can be extended to handle other image services
    return url
  } catch (error) {
    // If URL parsing fails, return original
    console.warn('Failed to parse image URL:', error)
    return url
  }
}

export function ImageWithFallback(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  // Transform the image URL to request 3000x3000 size
  const transformedSrc = transformImageUrl(src)

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={transformedSrc} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
