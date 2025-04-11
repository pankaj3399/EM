# SEO Image Guide for Junior Developers

This guide explains how to use our custom image components that combine React-Bootstrap styling with Next.js image optimization for the best SEO results.

## Why Image SEO Matters

Google considers several factors when ranking images in search results:

1. **Image quality and relevance**
2. **Page loading speed**
3. **Alt text and file names**
4. **Structured data**
5. **Mobile-friendliness**
6. **Page context**

Our custom components help optimize all these factors automatically.

## Components Overview

We've created two custom components to handle images in our HVAC website:

1. **SEOImage**: For regular images that need React-Bootstrap styling
2. **SEOBackgroundImage**: For full-width background images (like hero sections)

## Using SEOImage

This component combines React-Bootstrap's Image styling with Next.js Image optimization.

### Basic Usage

\`\`\`jsx
import SEOImage from "@/components/SEOImage"

<SEOImage
  src="/images/example.jpg"
  alt="HVAC technician repairing an air conditioner"
  width={800}
  height={600}
  fluid
  rounded
/>
\`\`\`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | required | Path to the image (from public folder) |
| alt | string | required | Descriptive alt text for accessibility and SEO |
| width | number | required | Width of the image in pixels |
| height | number | required | Height of the image in pixels |
| fluid | boolean | false | Makes image responsive (like Bootstrap's img-fluid) |
| rounded | boolean | false | Adds rounded corners |
| roundedCircle | boolean | false | Makes image circular |
| thumbnail | boolean | false | Adds thumbnail styling |
| priority | boolean | false | Loads image immediately (use for above-the-fold) |
| sizes | string | "100vw" | Responsive size hints |
| quality | number | 85 | Image quality (1-100) |
| className | string | "" | Additional CSS classes |
| style | object | {} | Additional inline styles |

## Using SEOBackgroundImage

This component creates a full-width background image with content overlay.

### Basic Usage

\`\`\`jsx
import SEOBackgroundImage from "@/components/SEOBackgroundImage"

<SEOBackgroundImage
  src="/images/background.jpg"
  alt="HVAC service background"
  height="500px"
>
  <div className="text-center text-white p-4">
    <h1>Your Content Here</h1>
    <p>This will appear on top of the background image</p>
  </div>
</SEOBackgroundImage>
\`\`\`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | required | Path to the image (from public folder) |
| alt | string | required | Descriptive alt text for accessibility and SEO |
| children | ReactNode | required | Content to display over the background |
| height | string | "100vh" | Container height |
| fluid | boolean | true | Makes container fluid width |
| overlayColor | string | "#000000" | Color of the overlay |
| overlayOpacity | number | 0.4 | Opacity of the overlay (0-1) |
| className | string | "" | Additional CSS classes |
| priority | boolean | true | Loads image immediately (recommended for backgrounds) |
| quality | number | 85 | Image quality (1-100) |
| id | string | undefined | Optional ID for the container |

## SEO Best Practices

### 1. Write Descriptive Alt Text

Good alt text:
- Describes what's in the image
- Includes relevant keywords naturally
- Is concise (125 characters or less)
- Provides context

Examples:
\`\`\`jsx
// Good
alt="HVAC technician installing air conditioning unit in residential home"

// Bad
alt="HVAC image" or alt="pic123"
\`\`\`

### 2. Use Appropriate Image Dimensions

- Hero images: 1920×1080px
- Blog thumbnails: 800×600px
- Gallery images: 1200×800px
- Logo: 200×50px

### 3. Prioritize Above-the-Fold Images

Add the `priority` attribute to important images that appear above the fold:

\`\`\`jsx
<SEOImage
  src="/images/hero.jpg"
  alt="HVAC service"
  priority={true}
/>
\`\`\`

### 4. Use Descriptive Filenames

Name your image files with descriptive, keyword-rich names:
- Good: `hvac-maintenance-tips.jpg`
- Bad: `IMG_12345.jpg`

### 5. Compress Images Before Upload

Always compress your images before adding them to the project:
- Use tools like TinyPNG or Squoosh
- Aim for file sizes under 200KB when possible
- Use JPG for photos, PNG for logos or images with transparency

## Troubleshooting

### Images Not Displaying

1. Check the file path is correct
2. Verify the image exists in the public folder
3. Check for case sensitivity in filenames

### Slow-Loading Images

1. Compress the image further
2. Check the image dimensions (don't use oversized images)
3. Add the `priority` attribute for important images

### Layout Shift

1. Always specify width and height
2. Use the fluid prop for responsive images
3. Use appropriate aspect ratios

## Production Deployment Checklist

Before deploying to Vercel, ensure:

1. All images are in the `/public` directory
2. Image paths are correct (case-sensitive)
3. All images have descriptive alt text
4. Critical above-the-fold images have the `priority` attribute
5. Large images are properly compressed

## Need Help?

If you encounter issues with images, contact the senior developer at senior@hvac-doctors.com
