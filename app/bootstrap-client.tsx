"use client"

import { useEffect } from "react"

// This component ensures Bootstrap JS is loaded only on the client side
export function BootstrapClient() {
  useEffect(() => {
    // Dynamically import Bootstrap JS
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])

  return null
}
