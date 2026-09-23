# Kashy - AI-Powered Gamified Payment Suite

A Next.js App Router + React + Tailwind CSS web application featuring high-fidelity 3D assets, gamified rank progression, yield calculation, and interactive news chronicles.

## Quick Start (How to Run in CMD / Terminal)

Follow these simple steps to run the project on your computer:

### 1. Download / Extract the Project
- If you downloaded this as a ZIP from Google AI Studio (via **Settings > Export as ZIP** or **GitHub**), extract the ZIP folder to your desired location (e.g., `C:\projects\kashy`).

### 2. Open Command Prompt (CMD)
Open your CMD or terminal and navigate into the project folder:
```cmd
cd kashy
```

### 3. Install Dependencies
Run the install command once to download all required packages:
```cmd
npm install
```

### 4. Start the Development Server
Start the app:
```cmd
npm run dev
```

### 5. Open in Browser
Once running, open your browser and go to:
```
http://localhost:3000
```
Use the local URL displayed in your terminal. If port 3000 is already occupied, the development server automatically chooses an available port such as 3001. To select a port yourself, run `npm run dev -- --port 3002`.

---

## Available Scripts

Development and build commands first clear generated `.next` output to avoid stale OneDrive reparse points causing `EINVAL readlink` errors. Stop this project's running server before starting another dev session or build. `npm run clean` also clears this output manually and works on Windows. After cleaning or running development, run `npm run build` again before `npm start`.

- **`npm run dev`**: Starts the Next.js development server with instant reload.
- **`npm run build`**: Creates the production build in `.next/`.
- **`npm start`**: Serves the production build after `npm run build`. If port 3000 is occupied, use `npm start -- --port 3002`.
- **`npx tsc --noEmit`**: Checks TypeScript types.

## Tech Stack
- **Framework**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Motion & Interactions**: Motion (`motion/react`)
- **Icons**: Lucide React
