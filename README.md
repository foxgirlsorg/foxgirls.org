# foxgirls.org

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **The official portal for the foxgirls.org collective.**

This repository contains the source code for the [foxgirls.org](https://foxgirls.org) landing page. 

## 🛠️ Technical Overview

The application is built with a focus on performance and modern web standards, utilizing the latest generation of the Svelte framework.

* **Framework:** [Svelte 5](https://svelte.dev/) (Runes syntax)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** Native CSS with Glassmorphism UI principles
* **Icons:** [Lucide Svelte](https://lucide.dev/)
* **Deployment:** GitHub Pages via GitHub Actions

## 🚀 Local Development

Follow these steps to configure the development environment locally.

### Prerequisites

* Node.js (v20+ recommended)
* npm, pnpm, or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/foxgirlsorg/foxgirls.org.git
    cd foxgirls.org
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## 📦 Building & Deployment

### Manual Production Build
To generate a production-ready build locally:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

### Automated Deployment (GitHub Actions)
This repository is configured for Continuous Deployment (CD). Changes pushed to the `main` branch trigger a workflow that automatically builds and deploys the application to **foxgirls.org**.

> **Note:** The custom domain configuration is managed via the `public/CNAME` file. Ensure this file is maintained to prevent domain resets during the deployment process.

## 📂 Project Structure

```text
src/
├── lib/           # Svelte interface components
├── assets/        # Static media assets
├── App.svelte     # Main application entry point
└── app.css        # Global styles and variables
public/
├── CNAME          # DNS configuration for GitHub Pages
└── og-image.jpg   # Open Graph social preview image
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright © 2025 **foxgirls.org**. All rights reserved.