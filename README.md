# Aura Concept Creator

The website for Aura Concept Creator, a creative agency based in Karachi,
Pakistan. This project is built with Next.js, React, and TypeScript.

## Get started

You’ll need Node.js 20.9 or newer installed on your computer.

1. Open a terminal in the project folder.
2. Install the project dependencies:

   ```bash
   npm ci
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The server refreshes the site as you save changes. Press `Ctrl+C` in the
terminal when you want to stop it.

## Useful commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run dev:clean` | Clears the Next.js cache, then starts development |
| `npm run check` | Runs lint and TypeScript checks |
| `npm run build` | Builds the site for production |
| `npm run start` | Serves a production build |
| `npm run clean` | Clears the generated Next.js cache |

Run `npm run build` before deploying to check that the production build works.

## Updating images and videos

The site’s images, logos, and videos are hosted on Cloudinary.

1. Sign in to Cloudinary—or create an account using **alternate0@gmail.com**.
2. Open **Media Library** and upload the image or video.
3. Open the uploaded asset and copy its **Secure URL**.
4. Add that URL to the matching project data:
   - Brand logos: `src/data/brands.ts`
   - Team photos: `src/data/team.ts`
   - Portfolio images and videos: `src/data/portfolio-data.ts`

Keep the Cloudinary URL and filename intact. Brand logos use a shared image
transform in `src/data/brands.ts`; enter each logo’s display name and dimensions
alongside its asset path so it appears correctly in the scrolling showcase.

## Where to make common changes

- Pages and page metadata: `src/app/`
- Shared page sections and components: `src/components/`
- Site content and service plans: `src/data/`
- Global styles: `src/app/globals.css`

## A note about dependencies

Keep `package-lock.json` in the project and commit it with dependency changes.
Use `npm ci` to install the exact dependency versions recorded in the lockfile.
