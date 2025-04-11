"use client"

import React from "react"
import { Placeholder } from "react-bootstrap"
import Image from "next/image"

/**
 * SEOImage - A component that combines React-Bootstrap styling with Next.js image optimization
 *
 * This component provides:
 * 1. React-Bootstrap styling (fluid, rounded, thumbnail, etc.)
 * 2. Next.js image optimization for SEO and performance
 * 3. Loading states and error handling
 * 4. Accessibility features
 */
interface SEOImageProps {
  src: string // Image source path
  alt: string // Descriptive alt text for SEO and accessibility
  width: number // Image width in pixels
  height: number // Image height in pixels
  fluid?: boolean // Makes image responsive (equivalent to img-fluid)
  rounded?: boolean // Adds rounded corners
  roundedCircle?: boolean // Makes image circular
  thumbnail?: boolean // Adds thumbnail styling
  className?: string // Additional CSS classes
  priority?: boolean // Prioritizes loading (for above-the-fold images)
  quality?: number // Image quality (1-100)
  loading?: "lazy" | "eager" // Loading behavior
  sizes?: string // Responsive size hints
  style?: React.CSSProperties // Additional inline styles
}

export default function SEOImage({
  src,
  alt,
  width,
  height,
  fluid = false,
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  className = "",
  priority = false,
  quality = 85,
  loading = "lazy",
  sizes = "100vw",
  style = {},
}: SEOImageProps) {
  const [isLoading, setIsLoading] = React.useState(!priority)
  const [hasError, setHasError] = React.useState(false)

  // Handle successful image load
  const handleImageLoad = () => {
    setIsLoading(false)
  }

  // Handle image loading error
  const handleImageError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  // Build the className based on React-Bootstrap Image props
  let imageClassName = className || ""
  if (fluid) imageClassName += " img-fluid"
  if (rounded) imageClassName += " rounded"
  if (roundedCircle) imageClassName += " rounded-circle"
  if (thumbnail) imageClassName += " img-thumbnail"

  // If there's an error loading the image, show a placeholder with Bootstrap styling
  if (hasError) {
    return (
      <div
        className={`d-flex align-items-center justify-content-center bg-light text-secondary ${imageClassName}`}
        style={{
          width: fluid ? "100%" : width,
          height: fluid ? "auto" : height,
          aspectRatio: width / height,
          ...style,
        }}
        role="img"
        aria-label={alt}
      >
        Image not available
      </div>
    )
  }

  return (
    <div className="position-relative" style={{ ...style }}>
      {/* Show loading placeholder while image is loading */}
      {isLoading && (
        <Placeholder
          as="div"
          animation="glow"
          className={imageClassName}
          style={{
            width: fluid ? "100%" : width,
            height: fluid ? "auto" : height,
            aspectRatio: width / height,
          }}
        >
          <Placeholder xs={12} style={{ height: "100%" }} />
        </Placeholder>
      )}

      {/* Next.js Image with React-Bootstrap styling classes */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
          position: isLoading ? "absolute" : "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
        }}
      >
        <Image
          src={src || "images/hero-bg.webp"}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          sizes={sizes}
         // loading={loading}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={imageClassName}
          style={{
            objectFit: "contain",
            width: fluid ? "100%" : "auto",
            height: "auto",
          }}
        />
      </div>
    </div>
  )
}
