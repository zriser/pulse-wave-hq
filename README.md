# PulseWave Tech Website

A modern, responsive single-page React website for PulseWave Tech, featuring signal pulse and waveform aesthetics to convey intelligence, flow, and real-time data processing capabilities.

## 🚀 Live Demo

Visit the live site at: [https://pulsewavetech.io](https://pulsewavetech.io)

## 🛠 Technology Stack

- **React** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Lucide React** for icons
- **Canvas API** for animated waveforms

## ✨ Features

- **Animated Waveforms**: Custom canvas-based signal animations in hero section
- **Responsive Design**: Mobile-first approach with seamless desktop scaling
- **Accessibility**: WCAG AA compliant with proper focus management
- **Performance Optimized**: Lazy loading, code splitting, optimized assets
- **SEO Ready**: Comprehensive meta tags and semantic HTML structure
- **GitHub Pages Ready**: Static build optimized for deployment

## 🎨 Design System

The design centers on signal pulses and waveforms with:
- **Colors**: Navy backgrounds with cyan/electric blue accents
- **Animations**: Subtle pulse effects and waveform transitions
- **Typography**: Clean, technical aesthetics
- **Components**: Consistent design tokens and reusable components

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── HeroSection.tsx     # Main hero with animated background
│   ├── MissionSection.tsx  # Company mission statement
│   ├── CompetenciesSection.tsx # Core capabilities
│   ├── DifferentiatorsSection.tsx # What sets us apart
│   ├── PerformanceSection.tsx # Metrics and case studies
│   ├── ContactSection.tsx  # Contact form and info
│   ├── Footer.tsx          # Site footer
│   ├── WaveformBackground.tsx # Animated canvas waveforms
│   └── LoadingPulse.tsx    # Loading animation
├── assets/
│   └── hero-waveforms.jpg  # Hero background image
├── pages/
│   └── Index.tsx           # Main page component
└── hooks/                  # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pulsewave-tech-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 GitHub Pages Deployment

### Automatic Deployment

1. **Push to main branch** - GitHub Actions will automatically build and deploy
2. **Custom domain setup**:
   - Add `CNAME` file to `public/` directory with your domain
   - Configure DNS A records to point to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to gh-pages branch**
   ```bash
   npm run deploy
   ```

### GitHub Pages Configuration

1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `/ (root)`
4. Custom domain: `pulsewavetech.io`

## 📝 Content Management

### Updating Content

Key content files to modify:

- **Company Info**: `src/components/MissionSection.tsx`
- **Services**: `src/components/CompetenciesSection.tsx`
- **Contact**: `src/components/ContactSection.tsx`
- **Meta Tags**: `index.html`

### Adding New Sections

1. Create component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Update navigation if needed

## 🎨 Customization

### Colors and Theming

Edit design system in:
- `src/index.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind theme configuration

### Animations

Waveform animations can be customized in:
- `src/components/WaveformBackground.tsx` - Canvas animations
- `src/index.css` - CSS keyframes and utilities

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: <500KB initial load
- **First Paint**: <1.5s on 3G
- **Accessibility**: WCAG AA compliant

## 📄 License

Copyright © 2024 PulseWave Tech. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

For questions or support:
- Email: [info@pulsewavetech.io](mailto:info@pulsewavetech.io)
- Website: [https://pulsewavetech.io](https://pulsewavetech.io)

---

Built with ❤️ by the PulseWave Tech team