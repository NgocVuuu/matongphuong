# HoneyBlume - New Project Walkthrough

This is a brand new, high-performance Next.js application designed to replace the legacy website.

## Key Features

1.  **Modern Tech Stack**:
    *   **Next.js 15 (App Router)**: For server-side rendering, SEO, and performance.
    *   **Tailwind CSS v4**: For rapid, responsive styling.
    *   **Framer Motion**: For smooth, professional animations.
    *   **Lucide React**: For modern, consistent icons.
    *   **Next Themes**: For robust Dark Mode support.

2.  **Project Structure**:
    *   `src/app`: Main application routes.
    *   `src/components`: Reusable UI components (Hero, Navbar, Footer, etc.).
    *   `src/app/globals.css`: Global styles and theme variables (Honey/Gold palette).
    *   `tailwind.config.ts`: Configuration for Dark Mode and Theme Colors.

3.  **Responsiveness**:
    *   Fully responsive design for Mobile, Tablet, and Desktop.
    *   Mobile-first approach using Tailwind's utility classes.

4.  **Dark Mode**:
    *   Built-in dark mode toggle in the Navbar.
    *   System preference detection.
    *   Smooth color transitions.

5.  **SEO & Performance**:
    *   Semantic HTML structure.
    *   Optimized images (placeholder for now, ready for `next/image`).
    *   Fast loading speeds with Next.js optimizations.

## Getting Started

The server is configured to run on port **4000**.

### Commands

*   **Start Development Server**:
    ```bash
    npm run dev
    ```
    Access at: `http://localhost:4000`

*   **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Customization

*   **Colors**: Edit `src/app/globals.css` to change the `--primary`, `--secondary`, etc. variables.
*   **Content**: Edit the components in `src/components/` to update text and images.
*   **Images**: Place new images in `public/assets/` and reference them in your components.

## Next Steps

1.  Replace placeholder images in `src/components/*.tsx` with actual images from `public/assets/`.
2.  Update the content (text, prices, contact info) to match the latest business data.
3.  Connect the "Contact" form to a backend or email service (e.g., Formspree).
