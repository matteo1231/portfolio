# Images Directory Structure

This directory contains all the images used in the portfolio website.

## Directory Structure:

### /hero/
- profile-main.jpg - Main hero section profile image

### /about/
- profile-1.jpg - First carousel image for about section
- profile-2.jpg - Second carousel image for about section

### /projects/
- ecommerce-platform.jpg - E-commerce platform project thumbnail
- task-management.jpg - Task management app project thumbnail
- weather-dashboard.jpg - Weather dashboard project thumbnail
- portfolio-website.jpg - Portfolio website project thumbnail
- blog-platform.jpg - Blog platform project thumbnail
- fitness-tracker.jpg - Fitness tracker project thumbnail

## Image Guidelines:

### Hero Image:
- Recommended size: 500x600px
- Format: JPG or PNG
- Professional headshot or portrait

### About Carousel Images:
- Recommended size: 400x500px
- Format: JPG or PNG
- Should complement each other and show different angles/poses

### Project Thumbnails:
- Recommended size: 300x200px
- Format: JPG or PNG
- Should showcase the project interface or key features
- Maintain consistent aspect ratio (3:2)

## Usage:

Images are referenced in the React component using Next.js Image component:
\`\`\`jsx
<Image src="/images/hero/profile-main.jpg" alt="Description" width={500} height={600} />
\`\`\`

Replace placeholder images with your actual images following the naming convention above.
