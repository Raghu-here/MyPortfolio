# 🎨 MyPortfolio

A high-performance, interactive personal portfolio built with a modular architecture and vanilla JavaScript. Designed for developers seeking a clean, application-like template with fluid animations and modern UI/UX patterns.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Overview

This portfolio combines responsive design with advanced DOM manipulation to deliver a premium user experience. Key technical features include:

- Component-based CSS architecture with semantic HTML
- Custom cursor system using Lerp for smooth tracking
- Scroll-triggered animations via Intersection Observer
- Interactive marquee with hover deceleration
- SEO-optimized structure with accessibility enhancements

---

## 🛠 Tech Stack

- **Core**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Animation**: CSS Keyframes + `requestAnimationFrame`
- **APIs**: Intersection Observer, Clipboard API
- **Deployment**: Static hosting (GitHub Pages, Vercel/Netlify)

---

## 📁 Project Structure

```
├── css/
│   ├── base.css          # Layout foundations and site wrapper
│   ├── hero.css          # Hero section styles
│   ├── variables.css     # Design tokens and CSS variables
│   ├── animations.css    # Keyframe definitions
│   ├── skills.css        # Bento grid layouts
│   └── contact.css       # Form styling
├── js/
│   ├── animations.js     # Marquee playback control
│   ├── contact.js        # Form validation and mailto
│   ├── hero.js           # Hero load sequences
│   ├── navbar.js         # Navigation logic
│   └── reveal.js         # Scroll reveal system
└── index.html            # Main HTML structure
```

---

## 🧰 Key Components

1. **Site Wrapper**  
   Defined in `base.css` and `index.html` for consistent layout constraints.

2. **Hero Sequencer**  
   `hero.js` manages staggered animations for the hero section using delay-based sequencing.

3. **Marquee Controller**  
   `animations.js` implements smooth infinite scroll with hover deceleration via `updatePlaybackRate`.

4. **Contact Handler**  
   `contact.js` validates form inputs and constructs `mailto` URIs.

5. **Reveal Engine**  
   `reveal.js` uses Intersection Observer to trigger `.reveal` animations on viewport entry.

6. **Modular CSS System**  
   Component-specific stylesheets with BEM-inspired naming (e.g., `.hero-title`, `.btn-menu`).

---

## 🧪 Getting Started

### Prerequisites
- Modern browser (Chrome, Firefox, Safari, Edge)
- Optional: Local development server for optimal performance

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/Raghu-here/MyPortfolio.git
   ```
2. Navigate to the directory:
   ```bash
   cd MyPortfolio
   ```
3. Open `index.html` in your browser or use VS Code Live Server for hot reloading.

---

## 🛠 Customization

- **Email Address**: Update `js/contact.js` in the `mailto` URI
- **Marquee Speed**: Modify `ease` function parameters in `js/animations.js`
- **Projects**: Edit links, descriptions, and image paths in `index.html`
- **Resume**: Replace `assets/resume.pdf` with your file

---

## 🧹 Development

### Code Style
- **JavaScript**: ES6 classes for complex components, arrow functions for event listeners
- **CSS**: Modular architecture with dedicated stylesheets and BEM-like naming

### Testing
- **Manual UI Testing**: Verify cursor behavior on non-touch devices, mobile menu toggles, and clipboard functionality
- **Code Quality**: Review `assets/testerror.js` for anti-pattern examples (e.g., unhandled promises)

---

## 🚀 Deployment

- **GitHub Pages**: Push to `main` branch and enable Pages
- **Vercel/Netlify**: Connect the repo (no build command required)
- **SEO Ready**: Includes `robots.txt` and meta tags for search indexing

---

## ❓ Troubleshooting

| Issue | Solution |
| :--- | :--- |
| Cursor not visible | Requires mouse input; disabled on touchscreens |
| Animations not triggering | Confirm `reveal` class is applied and `js/main.js` is loaded |
| Email copy fails | Must be served over HTTPS or localhost for Clipboard API |

---

## 🗺 Roadmap

- [ ] Add Dark/Light mode toggle
- [ ] Implement project filtering system
- [ ] Integrate headless CMS for blog posts
- [ ] Add PWA support for offline access

---

## 📄 License

Distributed under the [MIT License](LICENSE).

---

## 🤝 Credits

- **Developer**: [Raghu](https://github.com/Raghu-here)  
- **Icons**: FontAwesome / Lucide  
- **Inspiration**: Modern minimalist design principles