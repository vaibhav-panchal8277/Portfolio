# Vaibhav Panchal's portfolio

Personal site for my work in AI/ML, live at [portfolio-4gke.vercel.app](https://portfolio-4gke.vercel.app/). Built with Next.js 16, React 19 and Tailwind CSS 4. Every page is static.

## Run it

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000. Before pushing, check it with:

```bash
npm run lint
npm run build
```

## Update the content

All the text lives in `src/content/`, so most updates only touch one file:

| File | What it holds |
|---|---|
| `site.ts` | Name, links, photo, navigation, home page stats |
| `work.ts` | TestGrid case studies |
| `projects.ts` | Personal projects |
| `experience.ts` | Timeline, TestGrid work, education, certifications |
| `research.ts` | Research projects |
| `toolkit.ts` | Skills |
| `capabilities.ts` | "What I do" cards |

Adding an entry to `work.ts` creates its page and sitemap entry automatically. In `projects.ts`, a project only gets a case study page if it has `sections`. Add `repo` or `live` to show those links.

Keep client names and internal details out of everything here, because this repo and the site are both public.

## Project layout

- `src/app/` holds the pages, the contact form action and the SEO files
- `src/components/` holds the header, footer and shared pieces
- `src/app/globals.css` holds the colours, fonts and glass styles. The two accent colours are `--color-accent` and `--color-accent-alt`.

## Contact form

The form sends email through [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` and `CONTACT_EMAIL`. Add the same values in Vercel for the live site.

## Deploy

Pushing to `main` deploys to production straight away through `.github/workflows/vercel-deploy.yml`. That workflow doesn't run lint or a build check first, so run them locally.

This portfolio tested using [TestGrid.io](https://testgrid.io)
