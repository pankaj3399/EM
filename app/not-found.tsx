"use client"

import { Container, Button } from "react-bootstrap"
import Link from "next/link"

export default function NotFound() {
  return (
    <Container className="text-center py-5 my-5">
      <h1 className="display-1">404</h1>
      <h2>Page Not Found</h2>
      <p>We couldn't find the page you were looking for. Please call 1(512)241-5837 or email info@emergencyac.org for all of your HVAC needs while our website is being worked on!</p>
      <Link href="/" passHref>
        <Button variant="danger" style={{ backgroundColor: "#c50303" }}>
          Return Home
        </Button>
      </Link>
    </Container>
  )
}