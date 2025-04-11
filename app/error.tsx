"use client"

import { useEffect } from "react"
import { Container, Button } from "react-bootstrap"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <Container className="text-center py-5 my-5">
      <h1>Thank you for contacting E+M Emergency A/C serving all areas around Buda, Texas</h1>
      <p>We apologize for the inconvenience. Please call 1(512)241-5837 or email info@emergencyac.org while the website is being built</p>
      <Button onClick={() => reset()} variant="danger" style={{ backgroundColor: "#c50303" }}>
        Try again
      </Button>
    </Container>
  )
}
