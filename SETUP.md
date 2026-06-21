# Forge Fitness - Quick Setup Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Install Node.js
If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org)

### Step 2: Navigate to Project
```bash
cd forge-fitness
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Start Development Server
```bash
npm run dev
```

Your website will open automatically at `http://localhost:3000` 🎉

---

## 📁 File Structure

```
src/
├── components/
│   └── ForgeFitness.jsx     ← Main component (all sections here)
├── styles/
│   └── ForgeFitness.css     ← All styling
├── App.jsx                  ← Root component
└── main.jsx                 ← React bootstrap

index.html                   ← HTML entry
package.json                 ← Dependencies
vite.config.js              ← Vite config
```

---

## 🎨 Customization Guide

### 1. Change Gym Name & Details

Edit `src/components/ForgeFitness.jsx`:

**Line ~140**: Gym Name
```jsx
<p className="contact-value">Forge Fitness</p>
```

**Line ~146**: Address
```jsx
<p className="contact-value">MVP Colony, Visakhapatnam</p>
```

**Line ~151**: Phone
```jsx
<a href="tel:+919876543210" className="contact-link">+91 9876543210</a>
```

**Line ~156**: Email
```jsx
<a href="mailto:hello@forgefitness.com" className="contact-link">hello@forgefitness.com</a>
```

### 2. Change Colors

Edit `src/styles/ForgeFitness.css`:

```css
/* Change accent color from burnt orange */
.nav-logo { color: #D97706; }  /* Change this value */

/* Change background */
body { background-color: #0A0A0A; }  /* Change this value */

/* Change card background */
.price-card { background-color: #161616; }  /* Change this value */
```

### 3. Replace Hero Background Image

Edit `src/components/ForgeFitness.jsx` (~Line 77):

```jsx
#hero {
  background: linear-gradient(...),
              url('YOUR_IMAGE_URL_HERE') center/cover;
}
```

Replace `YOUR_IMAGE_URL_HERE` with your image URL.

### 4. Update Service Images

Edit `src/components/ForgeFitness.jsx`:

**Service 1** (Line ~95):
```jsx
<img src="https://your-image-url.jpg" alt="Strength Training" />
```

**Service 2** (Line ~113):
```jsx
<img src="https://your-image-url.jpg" alt="Boxing" />
```

**Service 3** (Line ~131):
```jsx
<img src="https://your-image-url.jpg" alt="Personal Coaching" />
```

### 5. Modify Pricing Plans

Edit `src/components/ForgeFitness.jsx` around lines ~155-200:

```jsx
<div className="price-card">
  <div className="price-name">Your Plan Name</div>
  <div className="price-amount">₹<span>9999</span></div>
  <ul className="price-features">
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>
</div>
```

---

## 🔨 Common Tasks

### Add a New Section

1. Add HTML in `src/components/ForgeFitness.jsx`
2. Add ID: `<section id="newsection">`
3. Add link in navigation menu
4. Add CSS in `src/styles/ForgeFitness.css`

### Change Font

Edit `src/styles/ForgeFitness.css`:

```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

### Add More Navigation Links

Edit `src/components/ForgeFitness.jsx` (~Line 65):

```jsx
<li><a onClick={() => scrollToSection('newsection')}>New Link</a></li>
```

---

## 📱 Testing Responsive Design

### Chrome DevTools
1. Press `F12` or `Ctrl+Shift+I`
2. Click device toggle (top-left)
3. Select iPhone, iPad, or Pixel device

### Test Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (2 columns)
- **Mobile**: 640px - 767px (1 column)
- **Small Mobile**: < 640px (minimal layout)

---

## 🚀 Deployment

### Deploy to Vercel (Free, Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click Deploy (Vite auto-detected)
6. Your site is live! 🎉

### Deploy to Netlify (Free)

1. Build project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop `dist` folder
4. Site is live! 🎉

---

## ⚡ Available Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Create optimized production build
npm run preview  # Preview production build locally
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- --port 3001
```

### Dependencies Not Installing
```bash
rm -rf node_modules
npm install
```

### Images Not Loading
- Check URL is correct
- Use absolute URLs (with https://)
- Verify image permissions

### Styling Not Applied
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check CSS file is saved
- Verify className matches CSS selectors

---

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [MDN CSS Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Unsplash Images](https://unsplash.com) - Free stock photos

---

## 💡 Tips for Premium Look

1. **Use high-quality images** - Essential for luxury brands
2. **Generous spacing** - Don't cram content
3. **Limited color palette** - 2-3 colors max
4. **Large typography** - Bold, readable headlines
5. **Smooth animations** - No flashy effects
6. **Professional content** - High-quality copy

---

## ✅ Checklist Before Launch

- [ ] All text content updated
- [ ] Images replaced with your photos
- [ ] Contact information correct
- [ ] Colors match brand guidelines
- [ ] Tested on mobile, tablet, desktop
- [ ] All links work
- [ ] Fast loading times
- [ ] No broken images
- [ ] Navigation works smoothly
- [ ] SEO title updated in HTML

---

**Need help?** Check React and Vite documentation, or review the code comments in the components!

Happy building! 🏋️‍♂️💪
