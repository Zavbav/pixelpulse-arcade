# PixelPulse Arcade

PixelPulse Arcade is a modern gaming portal built with plain HTML, CSS, and vanilla JavaScript. It includes a searchable game library, category filters, favorites, recently played tracking, a dedicated game player page, local storage persistence, a settings panel, dark mode support, and a panic button.

## Features

- Responsive dark neon gaming interface
- Search by game name
- Category filters (Racing, Action, Sports, Arcade, Puzzle, Multiplayer, Popular)
- Favorites saved in localStorage
- Recently played tracking saved in localStorage
- Random game button
- Dedicated game page with fullscreen, reload, and back controls
- Settings with dark mode and sound toggles
- Panic button that redirects to a harmless safe page
- GitHub Pages friendly static project structure

## Local development

From the project folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## GitHub Pages publishing

1. Push this repository to GitHub.
2. Open the repository in GitHub.
3. Go to Settings > Pages.
4. Under Source, select the default branch (usually `main`).
5. Save the settings.
6. GitHub Pages will publish the site at a URL like:

```text
https://<your-username>.github.io/pixelpulse-arcade/
```

## Notes on legal game content

This project intentionally avoids redistributing proprietary browser games without permission. Some games are represented in the library as clearly marked unavailable entries instead of fake or broken links. Playable games included here are custom-made local HTML5 mini-games or original browser experiences created for this archive.

## Files included

- `index.html` — homepage and navigation
- `game.html` — dedicated game player page
- `style.css` — full styling and responsive layout
- `script.js` — search, filters, favorites, setting logic, and player initialization
- `panic.html` — harmless safe page
- `games/` — playable local mini-games
- `assets/` — local game thumbnails

## Browser support

The site is designed for modern browsers and works on desktop, laptops, Chromebooks, tablets, and phones.
