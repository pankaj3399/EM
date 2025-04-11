"use client"

import type React from "react"
import { Container } from "react-bootstrap"
import Image from "next/image"

/**
 * SEOBackgroundImage - A component for creating SEO-friendly background images
 *
 * This component provides:
 * 1. React-Bootstrap compatible container for background images
 * 2. Next.js image optimization for SEO and performance
 * 3. Proper semantic structure for accessibility
 * 4. Overlay options for better text readability
 */
interface SEOBackgroundImageProps {
  src: string // Image source path
  alt: string // Descriptive alt text for SEO and accessibility
  children: React.ReactNode // Content to display over the background
  height?: string // Container height (e.g., "500px", "100vh")
  fluid?: boolean // Makes container fluid width
  overlayColor?: string // Color of the overlay
  overlayOpacity?: number // Opacity of the overlay (0-1)
  className?: string // Additional CSS classes
  priority?: boolean // Prioritizes loading (recommended for hero images)
  quality?: number // Image quality (1-100)
  id?: string // Optional ID for the container
}

export default function SEOBackgroundImage({
  src,
  alt,
  children,
  height = "100vh",
  fluid = true,
  overlayColor = "#000000",
  overlayOpacity = 0.4,
  className = "",
  priority = true,
  quality = 85,
  id,
}: SEOBackgroundImageProps) {
  return (
    <Container
      fluid={fluid}
      className={`position-relative p-0 ${className}`}
      style={{
        height,
        overflow: "hidden",
      }}
      id={id}
    >
      {/* Background image with Next.js Image optimization */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0 }}
        aria-hidden="true" // Hide from screen readers as it's decorative
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Overlay for better text readability */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
            zIndex: 1,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content container */}
      <div className="position-relative w-100 h-100 d-flex" style={{ zIndex: 2 }}>
        {children}
      </div>
    </Container>
  )
}
