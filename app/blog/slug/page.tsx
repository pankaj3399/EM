"use client"

import { useEffect, useState } from "react"
import { Container, Badge, Figure } from "react-bootstrap"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import SEOImage from "@/components/SEOImage"
import MainNavbar from "@/components/MainNavbar"

// Navbar height constant for consistent spacing
const NAVBAR_HEIGHT = "70px"

export default function BlogPost() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call or import
    // For now, we'll simulate getting the blog post data
    const fetchPost = async () => {
      try {
        // This is a placeholder - in a real app, you would fetch from an API
        // or import from your data file
        const slug = params?.slug

        if (!slug) {
          router.push("/blog")
          return
        }

        // Simulate API call
        setTimeout(() => {
          // Mock data for testing
          const mockPost = {
            title: "How to Maintain Your HVAC System",
            date: "April 11, 2025",
            slug: slug,
            excerpt: "Regular maintenance of your HVAC system can save you money and extend its lifespan.",
            content:
              "<p>This is a sample blog post content. In a real application, this would be the full content of your blog post.</p><p>Regular maintenance of your HVAC system is essential for optimal performance and longevity.</p>",
            thumbnail: "hvac-maintenance.jpg",
            keywords: ["maintenance", "HVAC", "tips"],
          }

          setPost(mockPost)
          setLoading(false)
        }, 500)
      } catch (error) {
        console.error("Error fetching blog post:", error)
        router.push("/blog")
      }
    }

    fetchPost()
  }, [params, router])

  if (loading) {
    return (
      <>
        <MainNavbar />
        <Container className="text-center" style={{ paddingTop: `calc(${NAVBAR_HEIGHT} + 2rem)` }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </Container>
      </>
    )
  }

  if (!post) {
    return (
      <>
        <MainNavbar />
        <Container className="text-center" style={{ paddingTop: `calc(${NAVBAR_HEIGHT} + 2rem)` }}>
          <h1>Blog Post Not Found</h1>
          <p>The requested blog post could not be found.</p>
          <Link href="/blog" className="btn btn-primary">
            Return to Blog
          </Link>
        </Container>
      </>
    )
  }

  // Add structured data for rich results
  const baseUrl = "https://www.emergencyac.org"
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [`${baseUrl}/images/blog/${post.thumbnail}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "E+M Emergency Air Conditioning LLC",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "E+M Emergency Air Conditioning LLC",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/BudaTexasAirConditioningServiceLogo.png`,
      },
    },
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
  }

  return (
    <>
      <MainNavbar />
      <Container style={{ paddingTop: `calc(${NAVBAR_HEIGHT} + 2rem)` }}>
        {/* Add structured data script */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <Link href="/blog" className="btn btn-outline-secondary mb-4">
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-4">
            <h1 className="display-4 mb-3">{post.title}</h1>
            <div className="text-muted mb-2">Published: {post.date}</div>
            <div className="mb-4">
              {post.keywords.map((keyword: string) => (
                <Link key={keyword} href={`/blog/category/${encodeURIComponent(keyword)}`} passHref legacyBehavior>
                  <Badge bg="secondary" className="me-2" style={{ cursor: "pointer" }}>
                    {keyword}
                  </Badge>
                </Link>
              ))}
            </div>
          </header>

          {/* Featured image with optimization using React-Bootstrap Figure */}
          <Figure className="mb-4">
            <SEOImage
              src={`/images/blog/${post.thumbnail}`}
              alt={`Featured image for ${post.title}`}
              width={1200}
              height={630}
              priority={true}
              fluid
              rounded
              className="figure-img"
            />
            <Figure.Caption className="text-center">Featured image: {post.title}</Figure.Caption>
          </Figure>

          {/* Blog content */}
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </Container>
    </>
  )
}
