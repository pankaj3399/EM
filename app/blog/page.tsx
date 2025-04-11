"use client"

import { Container, Row, Col, Card, Badge } from "react-bootstrap"
import Link from "next/link"
import { getAllBlogPosts } from "@/data/blog-data"
import SEOImage from "@/components/SEOImage"
import MainNavbar from "@/components/MainNavbar"

// Navbar height constant for consistent spacing
const NAVBAR_HEIGHT = "70px"

export default function BlogPage() {
  const blogPosts = getAllBlogPosts ? getAllBlogPosts() : []

  return (
    <>
      <MainNavbar />
      {/* Add padding-top to account for fixed navbar */}
      <Container className="py-5" style={{ marginTop: NAVBAR_HEIGHT }}>
        <h1 className="mb-4">HVAC Blog</h1>
        <p className="lead mb-5">Expert tips and advice for maintaining your home comfort systems</p>

        <Row>
          {blogPosts.map((post, index) => (
            <Col key={post.slug} md={4} className="mb-4">
              <Card className="h-100">
                <SEOImage
                  src={`/images/blog/${post.thumbnail}`}
                  alt={`Featured image for ${post.title}`}
                  width={400}
                  height={225}
                  priority={index < 3} // Prioritize first 3 images
                  fluid
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <div className="mb-3">
                    {post.keywords.map((keyword) => (
                      <Link
                        key={keyword}
                        href={`/blog/category/${encodeURIComponent(keyword)}`}
                        passHref
                        legacyBehavior
                      >
                        <Badge bg="secondary" className="me-1 mb-1" style={{ cursor: "pointer" }}>
                          {keyword}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="btn btn-danger" style={{ backgroundColor: "#c50303" }}>
                    Read More
                  </Link>
                </Card.Body>
                <Card.Footer className="text-muted">Published: {post.date}</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
