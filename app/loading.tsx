"use client"

import { Container } from "react-bootstrap"

export default function Loading() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border" style={{ color: "#c50303" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </Container>
  )
}