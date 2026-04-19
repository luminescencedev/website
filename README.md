# Carabine Studio Website

Official website for [carabine.studio](https://carabine.studio)

> See our UI library at [ui.carabine.studio](https://ui.carabine.studio)

## Tech Stack

- **Framework:** [Next.js 16.2](https://nextjs.org/) with App Router
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 6.0](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4.1](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Type Checking

```bash
# Run TypeScript compiler check
pnpm type-check
```

### Linting

```bash
# Run ESLint
pnpm lint
```

## Project Structure

```
carabine-studio/
├── public/          # Static assets
│   └── fonts/       # Custom fonts
├── src/
│   ├── app/         # Next.js App Router pages
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── lib/         # Utility functions
└── ...config files
```

## License

Private project - All rights reserved
