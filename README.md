
# 🎨 MyPortfolio

A high-performance, interactive personal portfolio website featuring fluid animations, modern UI/UX patterns, and a custom-engineered cursor system. Built with a modular architecture for optimal performance and maintainability.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Active](https://img.shields.io/badge/Status-Active-success.svg)](#)
[![Tech: Vanilla JS](https://img.shields.io/badge/Tech-Vanilla%20JS-F7DF1E.svg)](#)
## 🚀 Overview

This project is a modern, responsive portfolio designed to showcase professional work and skills with a focus on smooth user experience. Unlike standard static sites, it utilizes advanced DOM manipulation and CSS orchestration to create a premium, application-like feel. The codebase is strictly modular, leveraging a component-based architecture that separates styles and logic for every element—from the custom cursor system to the bento-grid skill layouts—to ensure high maintainability and performance.

**Target Audience:** Recruiters, collaborators, and developers looking for a high-quality, vanilla JavaScript portfolio template.
## ✨ Features

- **Unified Site Wrapper**: Implemented a robust site-wide wrapper structure to ensure consistent layout constraints and improved responsive behavior across all sections.
- **Responsive Skills Grid**: A redesigned skills section featuring a staggered grid layout with interactive hover effects and tech cards for a dynamic presentation of technical expertise.
- **Interactive Marquee Control**: Infinite scroll rows in the stack section that smoothly decelerate on hover using `updatePlaybackRate` for better readability.
- **Modular Bento Architecture**: Modern, responsive grid layouts for project showcases, built with a clean and organized visual hierarchy.
- **Performance-Optimized Reveal Logic**: Decoupled `Intersection Observer` implementation that triggers animations only when elements enter the viewport.
- **Custom Cursor System**: A dual-element cursor (dot and ring) with Linear Interpolation (Lerp) for smooth, lag-free tracking.
- **Minimalist Footer Design**: Replaced the previous footer with a streamlined, minimal layout for a cleaner end-of-page experience.
- **Refined Resource Loading**: Updated script references to ensure optimal loading sequence and better project structure alignment.
- **SEO & Accessibility Enhanced**: Optimized with meta tags, semantic HTML, and a `robots.txt` file for superior search engine visibility.
- **Integrated Professional Resume**: Direct access to a downloadable PDF resume hosted within the assets directory for seamless professional sharing.
## 🛠 Tech Stack

- **Frontend**: Next.js, CSS3 (Custom Properties, Flexbox, Staggered Grid)
- **Scripting**: Vanilla JavaScript (ES6+)
- **Animations**: CSS Keyframes + `requestAnimationFrame` for high-refresh-rate smoothness
- **APIs**: Intersection Observer, Clipboard API
- **Deployment**: Vercel
## 🏗 Architecture

The project follows a modular structure separating concerns between styling and logic, utilizing a component-based CSS architecture with a centralized site wrapper for layout consistency:

text
├── css/
│   ├── base.css          # Core layout foundations and site wrapper structure
│   ├── hero.css          # Redesigned hero layout and stats grid styles
│   ├── variables.css     # Centralized design tokens and CSS variables
│   ├── animations.css    # Keyframe definitions and reveal transitions
│   ├── skills.css        # Bento grid and skill card layouts
│   └── contact.css       # Form validation and success state styling
├── js/
│   ├── animations.js     # Marquee deceleration and playback logic
│   ├── contact.js        # Form validation and mailto handling
│   ├── hero.js           # Staggered load sequences for the redesigned hero
│   ├── navbar.js         # Scroll-aware nav and mobile menu logic
│   └── reveal.js         # Intersection Observer implementation
└── index.html            # Semantic HTML5 structure with site-wide wrapper


### Key Components

1.  **Site Wrapper Structure**: A foundational layout container implemented in `base.css` and `index.html` that provides consistent padding, max-widths, and structural integrity across the portfolio.
2.  **Hero Sequencer (`hero.js`)**: Orchestrates the initial page load animations for the redesigned hero section and stats grid using a delay-based staggered approach.
3.  **Marquee Controller (`animations.js`)**: Manages the playback rate of CSS animations, allowing for smooth transitions between active and hovered states.
4.  **Contact Handler (`contact.js`)**: Processes form inputs, validates email formats, and constructs the `mailto` URI for seamless communication.
5.  **Reveal Engine (`reveal.js`)**: A centralized Intersection Observer that manages the `.reveal` class across the entire application.
6.  **Modular CSS System**: Utilizes `variables.css` and component-specific stylesheets to maintain a scalable and maintainable design system.
## 🚦 Getting Started

### Prerequisites

-   Any modern web browser (Chrome, Firefox, Safari, Edge).
-   A local development server (optional, but recommended for optimal performance).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Raghu-here/MyPortfolio.git
    ```

2.  **Navigate to the directory:**
    ```bash
    cd MyPortfolio
    ```

3.  **Launch the site:**
    -   Simply open `index.html` in your browser.
    -   *OR* use VS Code "Live Server" extension for hot-reloading.

## 💻 Usage

### Customizing Content
- **Email**: Update the recipient address in `js/contact.js` within the `window.location.href` assignment.
- **Marquee Speed**: Change the deceleration and acceleration factors in `js/animations.js` within the `ease` function parameters.
- **Projects**: Update project links, descriptions, and image paths (e.g., `assets/barrel-network.png`) directly within the `index.html` file.
- **Resume**: Replace `assets/resume.pdf` with your own resume file to update the site's download link.

### Adding Reveal Elements
To make any new section animate on scroll, simply add the `reveal` class:

html
<section class="reveal">
  <!-- Your content here -->
</section>

## 🔧 Development

### Code Style
-   **JS**: ES6 classes for complex components, arrow functions for event listeners.
-   **CSS**: Modular architecture using dedicated stylesheets for specific sections and components (e.g., `base.css`, `work.css`, `about.css`). Follows a BEM-inspired naming convention (e.g., `.hero-title`, `.btn-menu`).

### Running Tests
Currently, this project uses manual UI testing. Ensure to check:
1.  Cursor behavior on touch devices (automatically disabled via `pointer: fine` check).
2.  Mobile menu toggle on small breakpoints.
3.  Clipboard functionality across different browsers.
## 🚀 Deployment

This project is ready for static hosting:

1.  **GitHub Pages**: Push to `main` branch and enable Pages in settings.
2.  **Vercel/Netlify**: Connect the repository; no build command required.
3.  **SEO Ready**: Includes `robots.txt` and meta tags for immediate search engine indexing upon deployment.
## ❓ Troubleshooting

| Issue | Solution |
| :--- | :--- |
| Cursor not showing | Ensure your device has a pointing device (mouse). The cursor is disabled on touchscreens to preserve native UX. |
| Animations not triggering | Check if the `reveal` class is present and that `js/main.js` is loading correctly. |
| Email copy fails | Ensure you are viewing the site over `HTTPS` or `localhost`, as the Clipboard API requires a secure context. |

## 🗺 Roadmap

- [ ] Add a Dark/Light mode toggle.
- [ ] Implement a dynamic project filtering system.
- [ ] Integrate a headless CMS for blog posts.
- [ ] Add PWA support for offline viewing.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🤝 Credits

-   **Developer**: [Raghu](https://github.com/Raghu-here)
-   **Icons**: FontAwesome / Lucide (as applicable)
-   **Inspiration**: Modern minimalist design trends.