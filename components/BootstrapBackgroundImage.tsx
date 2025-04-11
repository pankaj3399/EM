"use client"

import type React from "react"
import Image from "next/image"

interface BootstrapBackgroundImageProps {
  src: string
  alt: string
  children: React.ReactNode
  className?: string
  overlayColor?: string
  overlayOpacity?: number
  priority?: boolean
  quality?: number
  style?: React.CSSProperties
}

/**
 * BootstrapBackgroundImage creates a responsive background image with overlay
 * optimized for SEO and performance
 */
export default function BootstrapBackgroundImage({
  src,
  alt,
  children,
  className = "",
  overlayColor = "#000000",
  overlayOpacity = 0.4,
  priority = true,
  quality = 85,
  style = {},
}: BootstrapBackgroundImageProps) {
  return (
    <div
      className={`position-relative ${className}`}
      style={{
        overflow: "hidden",
        ...style,
      }}
    >
      {/* SEO-optimized background image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
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
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
            zIndex: 1,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content positioned above the background */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {children}
      </div>
    </div>
  )
}
