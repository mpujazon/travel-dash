# Travel Dash

## Description

TypeScript + Vite web app that lets you explore cities around the world. Enter a city (or pick a random one) to see its current weather, country details, and a curated photo. It consumes OpenWeather, REST Countries, and Unsplash APIs and renders a responsive, card-based dashboard.

<!-- Optionally add a demo image to /public and update the path below -->
<!-- ![Project Demo](/public/demo.webp "Project Demo") -->

## Project Structure

```
travel-dash/
├── index.html
├── package.json
├── public/
│   └── vite.svg                 # Favicon
└── src/
    ├── main.ts                  # App bootstrap and event handlers
    ├── style.css                # (Empty) reserved for custom styles
    └── scripts/
        ├── types.ts             # Typed models for weather, country, and photos
        ├── ui.ts                # DOM rendering helpers
        ├── data/
        │   └── data.ts          # Predefined city list for random picks
        └── services/
            ├── countryAPI.ts    # Fetch country details from REST Countries
            ├── unsplashAPI.ts   # Fetch city photo from Unsplash
            └── weatherAPI.ts    # Fetch weather from OpenWeather
```

## Technologies

- TypeScript
- Vite 6
- Fetch API (REST calls)
- Tailwind CSS via CDN (in `index.html`)
- OpenWeather, REST Countries, Unsplash APIs

## Requirements

- Node.js 18+ and npm
- API keys in `.env`:
  - `VITE_WEATHER_API_KEY` (OpenWeather)
  - `VITE_UNSPLASH_ACCESS_KEY` (Unsplash)

## Installation

```bash
git clone <repo-url>
cd travel-dash
npm install
```

Create a `.env` file in the project root with your API keys:

```bash
echo "VITE_WEATHER_API_KEY=<your_openweather_key>" >> .env
echo "VITE_UNSPLASH_ACCESS_KEY=<your_unsplash_access_key>" >> .env
```

## Run

- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview built app: `npm run preview`

## Features

- City search and random suggestion with parallel loading of photo and country info [src/main.ts](src/main.ts)
- Retrieves weather from OpenWeather and renders temperature (ºC), description, humidity, wind, and icon [src/scripts/services/weatherAPI.ts](src/scripts/services/weatherAPI.ts) · [src/scripts/ui.ts](src/scripts/ui.ts)
- Resolves country by ISO code from weather response via REST Countries and displays name, subregion, population, and flag [src/scripts/services/countryAPI.ts](src/scripts/services/countryAPI.ts) · [src/scripts/ui.ts](src/scripts/ui.ts)
- Fetches a random landscape photo for the city from Unsplash and applies it as a hero background [src/scripts/services/unsplashAPI.ts](src/scripts/services/unsplashAPI.ts) · [src/scripts/ui.ts](src/scripts/ui.ts)
- Responsive, Tailwind-based layout with hero, stats cards, and a "Surprise Me" action [index.html](index.html)

## Learnings

- Using `Promise.all` to load independent data (country + photo) in parallel while sequencing weather first
- Calling public APIs with HTTP error handling and typed responses
- Strongly typing network data and DOM operations in TypeScript
- Managing per-environment secrets using Vite env variables (`import.meta.env`)
- Simple DOM-driven UI with Tailwind CDN and minimal custom CSS

## Contributions

1. Fork the repository
2. Create a branch: `git checkout -b feature/my-improvement`
3. Apply changes and add tests when relevant
4. Write descriptive commits: `git commit -m "feat: describe the improvement"`
5. Push the branch: `git push origin feature/my-improvement`
6. Open a pull request
