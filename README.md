# Forge Fitness - Premium Modern Gym Website

A luxury fitness brand website built with React and Vite. Premium design with smooth animations, fully responsive, and optimized for desktop, tablet, and mobile devices.

## Features

- **Hero Section**: Full-screen hero with professional bodybuilder background, large typography, and dual CTA buttons
- **Services Section**: 3 premium horizontal service cards (Strength Training, Boxing, Personal Coaching)
- **Membership Plans**: 3 elegant pricing tiers (Basic, Premium, Elite Coaching) with feature highlights
- **Contact Section**: Premium contact area with gym details, hours, and social links
- **Navigation**: Fixed responsive navigation with smooth scroll anchoring
- **Animations**: Smooth fade-in animations and elegant hover effects
- **Premium Color Palette**: Dark background (#0A0A0A) with burnt orange accent (#D97706)
- **Fully Responsive**: Optimized for mobile (640px), tablet (768px), and desktop (1200px+)

## Project Structure

```
forge-fitness/
├── src/
│   ├── components/
│   │   └── ForgeFitness.jsx      # Main website component
│   ├── styles/
│   │   └── ForgeFitness.css      # All styling
│   ├── App.jsx                   # Root app component
│   └── main.jsx                  # React entry point
├── index.html                    # HTML entry point
├── package.json                  # Dependencies
├── vite.config.js                # Vite configuration
└── README.md                     # This file
```

## Getting Started

### Prerequisites

- Node.js 16+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone or extract the project**
   ```bash
   cd forge-fitness
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The website will open automatically at `http://localhost:3000`

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Design Details

### Color Palette

- **Background**: `#0A0A0A` (Deep Black)
- **Card Background**: `#161616` (Dark Gray)
- **Accent**: `#D97706` (Burnt Orange)
- **Primary Text**: `#F5F5F5` (Off White)
- **Secondary Text**: `#B3B3B3` (Medium Gray)

### Typography

- **Headlines**: Large, bold, premium sans-serif
- **Body Text**: Clean, readable sans-serif with optimal line-height
- **Letter Spacing**: Generous on headings for premium feel

### Sections

1. **Navigation**: Fixed header with logo, menu, and CTA button
2. **Hero**: Full-screen section with background image and double CTA
3. **Services**: 3 large cards with alternating image/text layout
4. **Pricing**: 3 membership cards with featured (Elite) card highlighted
5. **Contact**: Premium contact section with gym details
6. **Footer**: Simple developer credit

## Responsive Breakpoints

- **Desktop**: 1200px and above (full grid layouts)
- **Tablet**: 769px to 1199px (adjusted spacing, 2-column grids)
- **Mobile**: 640px to 768px (single column, stacked cards)
- **Small Mobile**: Below 640px (minimal spacing, optimized touch targets)

## Technologies Used

- **React 18**: Modern component library
- **Vite**: Fast, modern build tool and development server
- **CSS3**: Pure CSS with no frameworks for lightweight, custom styling
- **JavaScript ES6+**: Modern JavaScript features

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **No External Dependencies**: Uses only React and Vite (except for dev dependencies)
- **Professional Images**: High-quality images from Unsplash for fast loading
- **CSS Optimization**: Efficient selectors and minimal specificity

## Customization

### Changing Colors

Edit the color values in `src/styles/ForgeFitness.css`:

```css
--accent-color: #D97706;  /* Burnt orange */
--background: #0A0A0A;    /* Deep black */
--card-bg: #161616;       /* Dark gray */
```

### Updating Content

Edit `src/components/ForgeFitness.jsx`:
- Hero title/subtitle
- Service descriptions
- Pricing plans and features
- Contact information

### Adding Images

Replace image URLs in the component with your own images:

```jsx
<img src="your-image-url" alt="Description" />
```

## Deployment

### Deploy to Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and build correctly
3. Your site will be live with continuous deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your GitHub repo to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `dist`

### Deploy to Other Platforms

Any static hosting platform works:
- GitHub Pages
- Firebase Hosting
- AWS Amplify
- Cloudflare Pages

Just run `npm run build` and upload the `dist` folder.

## Performance Tips

- Images are lazy-loaded by browsers
- CSS is minified in production build
- Use `npm run build` for optimized production files
- Deploy to a CDN for fastest loading worldwide

## License

This project is open source and available for commercial use.

## Support

For questions or issues, please reach out or refer to the React and Vite documentation:
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

## Credits

Developed for premium fitness branding. Images sourced from Unsplash for demonstration purposes.

---

**Ready to launch your premium fitness brand?** The website is fully functional and ready for deployment!
