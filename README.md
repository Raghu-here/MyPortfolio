
# 🎨 MyPortfolio

A high-performance, interactive personal portfolio website featuring fluid animations, modern UI/UX patterns, and a custom-engineered cursor system. Built with a modular architecture for optimal performance and maintainability.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Active](https://img.shields.io/badge/Status-Active-success.svg)](#)
[![Tech: Vanilla JS](https://img.shields.io/badge/Tech-Vanilla%20JS-F7DF1E.svg)](#)
## 🚀 Overview

This project is a modern, responsive portfolio designed to showcase professional work and skills with a focus on smooth user experience. Unlike standard static sites, it utilizes advanced DOM manipulation and CSS orchestration to create a premium, application-like feel.

**Target Audience:** Recruiters, collaborators, and developers looking for a high-quality portfolio template.

## ✨ Features

-   **Custom Cursor System**: A dual-element cursor (dot and ring) with Linear Interpolation (Lerp) for smooth, lag-free tracking.
-   **Performance-Optimized Reveal Logic**: Uses the `Intersection Observer API` to trigger animations only when elements enter the viewport, reducing CPU overhead.
-   **SEO & Accessibility Enhanced**: Optimized with meta tags, semantic HTML, and a `robots.txt` file for superior search engine visibility and screen reader compatibility.
-   **Staggered Hero Animations**: Sophisticated entry sequence for hero text and CTAs using timed CSS transitions and JavaScript triggers.
-   **Interactive Email Utility**: One-click "Copy to Clipboard" functionality for contact information with visual feedback.
-   **Adaptive Navigation**: A smart navbar that responds to scroll depth and includes a fully functional mobile overlay menu.
-   **Refined Project Showcase**: Features a polished UI with enhanced card styles and updated project details, including the Barrel Network integration.
-   **Fluid UI/UX**: Hover-aware cursor states that react to interactive elements like buttons, links, and project cards.
## 🛠 Tech Stack

-   **Frontend**: HTML5, CSS3 (Custom Properties, Flexbox, Grid)
-   **Scripting**: Vanilla JavaScript (ES6+)
-   **Animations**: CSS Keyframes + `requestAnimationFrame` for high-refresh-rate smoothness
-   **APIs**: Intersection Observer, Clipboard API

## 🏗 Architecture

The project follows a modular structure separating concerns between styling and logic:

```text
├── css/
│   ├── animations.css    # Keyframe definitions and reveal transitions
│   └── main.css          # Layout, typography, and component styling
├── js/
│   ├── cursor.js         # CustomCursor class and mouse tracking logic
│   └── main.js           # Scroll effects, mobile menu, and reveal observers
└── index.html            # Semantic HTML5 structure
```

### Key Components

1.  **CustomCursor Class (`cursor.js`)**: Encapsulates the mouse tracking logic. It uses `requestAnimationFrame` for the outer ring to ensure 60fps+ movement that feels "organic."
2.  **Intersection Observer (`main.js`)**: Manages the `.reveal` class, ensuring that content fades and slides in gracefully as the user scrolls.
3.  **Scroll Debouncing**: The navbar scroll effect is optimized using `requestAnimationFrame` to prevent layout thrashing during rapid scrolling.

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
-   **Email**: Update the email address in `js/main.js` inside the `copy-email` event listener.
-   **Animations**: Modify `css/animations.css` to change the duration or easing of the reveal effects.
-   **Cursor**: The cursor sensitivity can be adjusted in `js/cursor.js` by changing the lerp factor (default: `0.15`).

### Adding Reveal Elements
To make any new section animate on scroll, simply add the `reveal` class:
```html
<section class="reveal">
  <!-- Your content here -->
</section>
```

## 🔧 Development

### Code Style
-   **JS**: ES6 classes for complex components, arrow functions for event listeners.
-   **CSS**: BEM-inspired naming convention for components (e.g., `.hero-title`, `.btn-menu`).

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