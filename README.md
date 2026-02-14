# AI Security Learning Roadmap Website

A sleek, hacker-themed single-page application for tracking AI Security learning progress. Designed with a professional security terminal aesthetic.

## Features

- **Progress Tracking**: Track daily tasks, weekly modules, and milestones.
- **Hacker Aesthetic**: Dark mode, scanlines, matrix effects, and terminal fonts.
- **Interactive Dashboard**: Real-time stats, animated charts (CSS), and schedule tracking.
- **Local Persistence**: Autosaves progress to your browser's LocalStorage.
- **Resource Library**: Curated links to tools, papers, and skill communities.

## File Structure

```
project/
├── index.html          (Entry point)
├── css/                (Stylesheets)
│   ├── main.css        (Layout)
│   ├── theme.css       (Variables & Reset)
│   ├── components.css  (Widgets)
│   └── animations.css  (Visual effects)
├── js/                 (Application Logic)
│   ├── app.js          (Controller)
│   ├── storage.js      (Data persistence)
│   ├── ui.js           (View manipulation)
│   └── data.js         (Static content)
└── README.md
```

## How to Run

1. **Simple Method**: Just open `index.html` in any modern web browser.
2. **Local Server (Recommended)**:
   - Ensure you have Node.js installed.
   - Run `npm install` (optional, to lock versions).
   - Run `npm run dev` to start a local server at `http://localhost:8080`.

## Key Technologies

- Vanilla HTML5
- Modern CSS3 (Variables, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- No frameworks, no build steps required.

## Customization

- Edit `css/theme.css` to change color palettes (presets for Matrix Green, Red Team, etc. are available in the code comments).
- Update `js/data.js` to modify the curriculum and roadmap content.

---
*System Initialized: 2026-02-06*
*Security Level: MAX*
