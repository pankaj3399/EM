"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Placeholder } from "react-bootstrap"

interface BootstrapOptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  fluid?: boolean
  rounded?: boolean
  roundedCircle?: boolean
  thumbnail?: boolean
  priority?: boolean
  sizes?: string
  quality?: number
  loading?: "lazy" | "eager"
  style?: React.CSSProperties
  onLoad?: () => void
  onError?: () => void
}

/**
 * BootstrapOptimizedImage combines React-Bootstrap styling with Next.js Image optimization
 * for the best SEO performance while maintaining Bootstrap's styling options.
 */
export default function BootstrapOptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  fluid = false,
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  priority = false,
  sizes = "100vw",
  quality = 85,
  loading = "lazy",
  style = {},
  onLoad,
  onError,
}: BootstrapOptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Build the className based on React-Bootstrap Image props
  let imageClassName = className || ""
  if (fluid) imageClassName += " img-fluid"
  if (rounded) imageClassName += " rounded"
  if (roundedCircle) imageClassName += " rounded-circle"
  if (thumbnail) imageClassName += " img-thumbnail"

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoading(false)
    if (onLoad) onLoad()
  }

  // Handle image error event
  const handleImageError = () => {
    setIsLoading(false)
    setHasError(true)
    if (onError) onError()
  }

  return (
    <div className="position-relative">
      {/* Show placeholder while loading */}
      {isLoading && !priority && (
        <Placeholder
          as="div"
          animation="glow"
          style={{
            width: "100%",
            height: typeof height === "number" ? height : "auto",
            aspectRatio: width && height ? `${width}/${height}` : undefined,
          }}
        >
          <Placeholder xs={12} style={{ height: "100%" }} />
        </Placeholder>
      )}

      {/* Show fallback for errors */}
      {hasError ? (
        <div
          className={`d-flex align-items-center justify-content-center bg-light text-secondary ${imageClassName}`}
          style={{
            width: "100%",
            height: typeof height === "number" ? height : "auto",
            aspectRatio: width && height ? `${width}/${height}` : undefined,
            ...style,
          }}
          role="img"
          aria-label={alt}
        >
          Image not available
        </div>
      ) : (
        /* Next.js optimized image with Bootstrap classes */
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={imageClassName}
          priority={priority}
          quality={quality}
          sizes={sizes}
          loading={loading}
          style={{
            ...style,
            opacity: isLoading && !priority ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </div>
  )
}
