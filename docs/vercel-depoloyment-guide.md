# Vercel Deployment Guide for HVAC Website

This guide explains how to deploy the HVAC website to Vercel, ensuring all images and SEO features work correctly in production.

## Prerequisites

Before deploying to Vercel, make sure you have:

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Git repository with your project code
3. All images properly placed in the `/public` directory
4. Completed the pre-deployment checklist

## Pre-Deployment Checklist

- [ ] All images are in the `/public` directory
- [ ] Image paths are correct and case-sensitive
- [ ] All images have descriptive alt text
- [ ] Critical above-the-fold images have the `priority` attribute
- [ ] Large images are properly compressed
- [ ] Run `npm run build` locally to check for any build errors
- [ ] Test the site locally with `npm run start` after building

## Deployment Steps

### 1. Connect Your Repository

1. Log in to your Vercel account
2. Click "New Project"
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Select the repository containing your HVAC website

### 2. Configure Project Settings

1. **Framework Preset**: Select "Next.js"
2. **Build and Output Settings**: Leave as default
3. **Environment Variables**: Add any required environment variables
   - For example: `NEXT_PUBLIC_SITE_URL=https://www.hvac-doctors.com`

### 3. Deploy

1. Click "Deploy"
2. Wait for the build and deployment to complete
3. Vercel will provide a preview URL once deployment is successful

### 4. Verify Deployment

After deployment, check the following:

1. All pages load correctly
2. Images are displaying properly
3. SEO elements are present (check with browser developer tools)
4. Site is responsive on different devices
5. No console errors

### 5. Custom Domain Setup (Optional)

To use your custom domain:

1. Go to your project settings in Vercel
2. Click on "Domains"
3. Add your domain (e.g., hvac-doctors.com)
4. Follow Vercel's instructions to configure DNS settings

## Troubleshooting Common Issues

### Images Not Loading

If images aren't loading in production:

1. Check the image paths in your code
2. Verify that images are in the correct location in the `/public` directory
3. Check for case sensitivity in filenames
4. Ensure the Vercel build process included your images

### Build Errors

If you encounter build errors:

1. Check the build logs in Vercel
2. Look for any missing dependencies
3. Verify that all imports are correct
4. Test the build locally with `npm run build`

### Performance Issues

If the site is slow in production:

1. Use Vercel Analytics to identify bottlenecks
2. Check image sizes and consider further optimization
3. Verify that priority images are marked correctly
4. Consider implementing Incremental Static Regeneration for dynamic pages

## Continuous Deployment

Vercel automatically deploys when you push changes to your repository. To ensure smooth continuous deployment:

1. Always test changes locally before pushing
2. Use feature branches for major changes
3. Review preview deployments before merging to main

## Need Help?

If you encounter issues with Vercel deployment, contact the senior developer at senior@hvac-doctors.com
