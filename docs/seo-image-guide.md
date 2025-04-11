# React-Bootstrap Image Optimization Guide for SEO

This guide explains how to use our custom image components that combine React-Bootstrap styling with Next.js image optimization for the best SEO results.

## Components Overview

We've created two custom components to handle images in our HVAC website:

1. **BootstrapOptimizedImage**: For regular images that need React-Bootstrap styling
2. **BootstrapBackgroundImage**: For full-width background images (like hero sections)

## Why These Components Are SEO-Friendly

These components follow Google's best practices for image SEO:

- **Automatic image optimization**: Reduces file size without quality loss
- **Lazy loading**: Improves page load speed
- **Proper alt text**: Helps search engines understand image content
- **Responsive sizing**: Serves appropriate image sizes for different devices
- **Prevents layout shift**: Reserves space for images before they load
- **Structured data integration**: Provides additional context for search engines

## Using BootstrapOptimizedImage

This component combines React-Bootstrap's Image styling with Next.js Image optimization.

### Basic Usage

\`\`\`jsx
import BootstrapOptimizedImage from "@/components/BootstrapOptimizedImage"

<BootstrapOptimizedImage
  src="/images/example.jpg"
  alt="Descriptive alt text for SEO"
  width={800}
  height={600}
  fluid
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

## Using BootstrapBackgroundImage

This component creates a full-width background image with content overlay.

### Basic Usage

\`\`\`jsx
import BootstrapBackgroundImage from "@/components/BootstrapBackgroundImage"

<BootstrapBackgroundImage
  src="/images/background.jpg"
  alt="Descriptive alt text for SEO"
  style={{ height: "500px" }}
>
  <div className="text-center text-white p-4">
    <h1>Your Content Here</h1>
    <p>This will appear on top of the background image</p>
  </div>
</BootstrapBackgroundImage>
\`\`\`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | required | Path to the image (from public folder) |
| alt | string | required | Descriptive alt text for accessibility and SEO |
| children | ReactNode | required | Content to display over the background |
| className | string | "" | Additional CSS classes |
| overlayColor | string | "#000000" | Color of the overlay |
| overlayOpacity | number | 0.4 | Opacity of the overlay (0-1) |
| priority | boolean | true | Loads image immediately (recommended for backgrounds) |
| quality | number | 85 | Image quality (1-100) |
| style | object | {} | Additional inline styles |

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
<BootstrapOptimizedImage
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

## Need Help?

If you encounter issues with images, contact the senior developer at senior@hvac-doctors.com
\`\`\`

## 7. Update the Sitemap to Include Image Information
