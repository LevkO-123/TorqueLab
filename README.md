# TorqueLab Parts Shopify Theme

A dark, performance-focused Online Store 2.0 theme built for the TorqueLab Parts auto shop brand. It ships with animated hero, fitment search UI, curated collections, product merchandising, and utility pages ready for launch.

## Installation
1. Download or zip this repository.
2. In Shopify Admin, go to **Online Store → Themes → Add theme → Upload zip** and upload the packaged archive. Alternatively, use the Shopify CLI:
   ```bash
   shopify theme dev
   # or
   shopify theme push
   ```
3. Publish the uploaded theme and customize sections via the Theme Editor.

## Customization
- **Brand colors & typography:** update CSS variables at the top of `assets/theme.css` to adjust backgrounds, accent colors, and fonts.
- **Placeholder imagery:** replace the files in `assets/` (e.g., `hero-garage.jpg`, `banner-brakes.jpg`, `workshop-hero.jpg`, `workshop-detail.jpg`, `workshop-video.mp4`) with brand photography or video.
- **Navigation:** edit links inside `sections/header.liquid` (desktop and mobile) and the footer columns in `sections/footer.liquid`.
- **Featured collections/products:** configure the featured collections and product sections from the home template in the Theme Editor or adjust defaults in `templates/index.json`.
- **Content pages:** update About, FAQ, Policy, and Contact section text in their respective templates under `templates/` or through the Theme Editor.

## Development notes
- Built with Shopify Online Store 2.0 JSON templates and modular sections for reordering.
- Vanilla CSS/JS only—no external frameworks. Animations and parallax behaviors live in `assets/theme.js`.
- Responsive and mobile-first with sticky header, mobile drawer navigation, search dropdown, and mini-cart overlay.
