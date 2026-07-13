# Yudha Sanggrama Wijaya — Personal Portfolio

Personal portfolio website showcasing my projects, work experience, education, and contact information. Built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org/) with React Compiler
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **UI Components** — [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **Icons** — [Lucide React](https://lucide.dev/)
- **Theme** — next-themes (dark/light mode)

## Features

- Responsive design (mobile-first)
- Dark / light mode toggle
- Typewriter animation on hero section
- Scroll-based animations (Framer Motion)
- Custom cursor
- Project cards with dialog detail view
- Smooth section navigation

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yudhasanggrama/my-personal-web.git
cd my-personal-web

# Install dependencies
npm install
```

### Environment Variables

Copy the example file and fill in the values (if any):

```bash
cp .env.example .env.local
```

See [.env.example](.env.example) for all available variables.

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles & CSS variables
│   ├── layout.tsx        # Root layout (font, theme provider)
│   └── page.tsx          # Main page (all sections)
├── components/
│   ├── ui/               # shadcn/ui base components
│   ├── Hero.tsx          # Hero / landing section
│   ├── Navbar.tsx        # Navigation bar
│   ├── Techstack.tsx     # Tech stack section
│   ├── ExperienceCard.tsx
│   ├── Education.tsx
│   ├── ProjectCard.tsx   # Project card + dialog detail
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── ...
└── lib/
    ├── data/
    │   ├── project.ts    # Project list data
    │   ├── experience.ts # Work experience data
    │   └── education.ts  # Education data
    └── utils.ts
```

## Customization

All content data is stored in `src/lib/data/`. Edit the files there to update your projects, experiences, and education without touching component code.

| File | Content |
|------|---------|
| `src/lib/data/project.ts` | Projects (title, description, tech, repo, demo) |
| `src/lib/data/experience.ts` | Work experiences |
| `src/lib/data/education.ts` | Education history |
| `src/components/Hero.tsx` | Name, roles, CV link |
| `src/components/ContactSection.tsx` | Email, LinkedIn, GitHub, WhatsApp |

### Adding a Project

Open `src/lib/data/project.ts` and add an entry to the array:

```ts
{
  id: 7,
  title: "Project Name",
  description: "Short description...",
  image: "/img/project/your-image.jpg",
  tech: ["Next.js", "TypeScript"],
  repoPrivate: "https://github.com/username/repo",  // or: true (private), false (no repo)
  demo: "https://your-demo.vercel.app",             // or: false (no demo)
}
```

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com/):

1. Push the repository to GitHub
2. Import the project on Vercel
3. Add environment variables (if any) in the Vercel dashboard
4. Deploy

## License

This project is open source and available under the [MIT License](LICENSE).
