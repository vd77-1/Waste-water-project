# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## TRISHNA prototype features

- **Scan / Enter code** (`/scan`): scan a booth QR with the camera (or upload a photo of it), or type a booth code such as `B-17`. Codes are matched loosely (`b17`, `B-017`, full `/booth/B-17` URLs all work).
- **Live booth status** (`/booth/<code>`): status, water availability, TDS and pH. Public reports raise the booth's complaint count and flag it.
- **Real campus map**: OpenStreetMap / satellite tiles of IIT (BHU) via Leaflet. Booth positions are approximate - drag them into place on `/manage`.
- **Add & manage booths** (`/manage`): click the map to place a new booth, set its status, print/download its QR code, delete booths, or reset the demo data. Data is stored in the browser (`localStorage`) - replace `src/data/boothStore.ts` with an API for a real backend.

Camera scanning needs HTTPS or `localhost`. For Netlify, set `NITRO_PRESET=netlify`.
