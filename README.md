# Mandisi Portfolio

Personal portfolio website for Taropafadzwa Mandisi Chitumwa - Software Engineer, Johannesburg.

## Tech stack

- **React 18** with React Router v6 for client-side routing
- **Vite 5** for dev server and production build
- **CSS Modules** for component-scoped styling (no CSS-in-JS, no Tailwind)
- Zero runtime UI libraries — all components handcrafted

## Project structure

```
mandisi-portfolio/
├── public/
│   ├── favicon.svg
│   └── Taropafadzwa_Mandisi_Chitumwa_CV_2026.pdf   
├── src/
│   ├── assets/            
│   ├── components/        
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Cursor.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Projects.jsx / .module.css
│   │   ├── Skills.jsx / .module.css
│   │   ├── Experience.jsx / .module.css
│   │   ├── Interests.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   ├── Footer.jsx / .module.css
│   │   ├── Marquee.jsx / .module.css
│   │   └── FadeIn.jsx
│   ├── data/
│   │   └── content.js     
│   ├── hooks/
│   │   ├── useFadeIn.js
│   │   └── useActiveSection.js
│   ├── pages/
│   │   ├── Home.jsx / .module.css
│   │   └── Article.jsx / .module.css
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx            ← router + layout
│   └── main.jsx           ← entry point
├── index.html
├── vite.config.js
└── package.json
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main portfolio — Hero, About, Projects, Skills, Experience, Interests, Contact |
| `/article` | "The 25 Year Old Rookie" — full personal essay |

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Updating content

All editable content — projects, skills, experience, certifications — lives in one place:

```
src/data/content.js
```

Edit that file to add projects, update roles, or change tech stack details. No need to touch component files.

## CV download

The CV is served as a static asset from `/public/`. To update it:

1. Drop the new PDF into `/public/`
2. Update the filename reference in `Navbar.jsx` and `Contact.jsx` if needed

```

## Design system

| Token | Value |
|-------|-------|
| `--orange` | `#e8531a` |
| `--bg` | `#0a0a0a` |
| `--bg-alt` | `#080808` |
| `--surface` | `#111111` |
| Display font | Bebas Neue |
| Body font | DM Sans |
| Serif accent | DM Serif Display |

---


