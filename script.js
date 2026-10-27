const STORAGE_KEYS = {
  favorites: "pixelpulse-favorites",
  recent: "pixelpulse-recent",
  settings: "pixelpulse-settings",
};

const categoryLabels = [
  "All Games",
  "Racing",
  "Action",
  "Sports",
  "Arcade",
  "Puzzle",
  "Multiplayer",
  "Popular",
];

const games = [
  {
    id: "retro-bowl",
    name: "Retro Bowl",
    category: "Sports",
    description: "Build a football franchise, draft players, and lead your team to a championship.",
    thumbnail: "./assets/retro-bowl.svg?v=6",
    url: "https://poki.com/en/g/retro-bowl",
    externalUrl: "https://poki.com/en/g/retro-bowl",
    alternateUrl: "https://retrobowl.me/",
    searchTerms: ["football", "american football", "nfl", "coach", "new star games"],
    playable: true,
    popular: true,
  },
  {
    id: "snow-rider-3d",
    name: "Snow Rider 3D",
    category: "Racing",
    description: "Bomb down a snowy mountain, dodge hazards, and beat your distance record.",
    thumbnail: "./assets/snow-rider.svg?v=2",
    url: "https://snowrider3d.com/",
    externalUrl: "https://snowrider3d.com/",
    alternateUrl: "https://www.crazygames.com/game/snow-rider-3d",
    searchTerms: ["snow", "sled", "winter", "downhill"],
    playable: true,
    popular: true,
  },
  {
    id: "slope",
    name: "Slope",
    category: "Racing",
    description: "The original high-speed 3D ball run through a neon course.",
    thumbnail: "./assets/slope-classic.svg?v=7",
    url: "https://www.crazygames.com/game/slope",
    externalUrl: "https://www.crazygames.com/game/slope",
    alternateUrl: "https://www.crazygames.com/game/slope",
    playable: true,
    popular: true,
  },
  {
    id: "void-break",
    name: "Void Break",
    category: "Arcade",
    description: "A neon brick-breaker with escalating waves, power drops, split cores, and a saved high score.",
    thumbnail: "./assets/void-break.svg?v=1",
    url: "./games/void-break.html",
    playable: true,
    popular: true,
    searchTerms: ["brick breaker", "breakout", "original", "local game", "powerups"],
  },
  {
    id: "neon-drift",
    name: "Neon Drift",
    category: "Racing",
    description: "PixelPulse's own endless neon runner. Dodge hazards, chase distance, and beat your best run.",
    thumbnail: "./assets/neon-drift.svg?v=1",
    url: "./games/slope.html",
    playable: true,
    popular: false,
    searchTerms: ["original", "pixelpulse", "endless runner", "local game"],
  },
  {
    id: "moto-x3m",
    name: "Moto X3M",
    category: "Racing",
    description: "Race a dirt bike through stunt tracks, traps, and timed levels.",
    thumbnail: "./assets/moto-x3m.svg?v=5",
    url: "https://www.crazygames.com/game/moto-x3m",
    externalUrl: "https://www.crazygames.com/game/moto-x3m",
    alternateUrl: "https://www.crazygames.com/game/moto-x3m",
    playable: true,
    popular: true,
  },
  {
    id: "basket-random",
    name: "Basket Random",
    category: "Sports",
    description: "Chaotic one-button basketball with physics-driven matches.",
    thumbnail: "./assets/basket-random.svg?v=6",
    url: "https://www.crazygames.com/game/basket-random",
    externalUrl: "https://www.crazygames.com/game/basket-random",
    alternateUrl: "https://www.crazygames.com/game/basket-random",
    playable: true,
    popular: true,
  },
  {
    id: "2048",
    name: "Pixel 2048",
    category: "Puzzle",
    description: "PixelPulse’s own number-merging puzzle. Combine tiles and chase the 2048 target.",
    thumbnail: "./assets/number-merge.svg?v=5",
    url: "https://play2048.co/",
    externalUrl: "https://play2048.co/",
    alternateUrl: "https://www.crazygames.com/game/2048",
    playable: true,
    popular: true,
  },
  {
    id: "tetris",
    name: "Pixel Tetris",
    category: "Puzzle",
    description: "PixelPulse’s own falling-block puzzle inspired by the timeless block-stacking classic.",
    thumbnail: "./assets/pixel-tetris.svg?v=5",
    url: "https://tetris.com/play-tetris",
    externalUrl: "https://tetris.com/play-tetris",
    alternateUrl: "https://www.crazygames.com/game/tetris",
    playable: true,
    popular: true,
  },
  {
    id: "cookie-clicker",
    name: "Cookie Clicker",
    category: "Arcade",
    description: "The original incremental cookie-baking game by Orteil.",
    thumbnail: "./assets/cookie-clicker.svg?v=5",
    url: "https://orteil.dashnet.org/cookieclicker/",
    externalUrl: "https://orteil.dashnet.org/cookieclicker/",
    alternateUrl: "https://www.crazygames.com/game/cookie-clicker",
    playable: true,
    popular: true,
  },
  {
    id: "basketball-stars",
    name: "Basketball Stars",
    category: "Sports",
    description: "Fast one-on-one basketball with shots, steals, and dunks.",
    thumbnail: "./assets/basketball-stars.svg?v=1",
    url: "https://www.crazygames.com/game/basketball-stars",
    externalUrl: "https://www.crazygames.com/game/basketball-stars",
    alternateUrl: "https://www.crazygames.com/game/basketball-stars",
    playable: true,
    popular: true,
  },
  {
    id: "run-3",
    name: "Run 3",
    category: "Action",
    description: "Run and jump through tunnels in this space-running platform game.",
    thumbnail: "./assets/run-3.svg?v=1",
    url: "https://www.coolmathgames.com/0-run-3",
    externalUrl: "https://www.coolmathgames.com/0-run-3",
    alternateUrl: "https://www.coolmathgames.com/0-run-3",
    playable: true,
    popular: true,
  },
  {
    id: "drift-boss",
    name: "Drift Boss",
    category: "Racing",
    description: "Time your turns carefully and stay on the floating track.",
    thumbnail: "./assets/drift-boss.svg?v=1",
    url: "https://www.crazygames.com/game/drift-boss",
    externalUrl: "https://www.crazygames.com/game/drift-boss",
    alternateUrl: "https://www.crazygames.com/game/drift-boss",
    playable: true,
    popular: false,
  },
  {
    id: "monkey-mart",
    name: "Monkey Mart",
    category: "Arcade",
    description: "Run a supermarket, stock shelves, and keep customers happy.",
    thumbnail: "./assets/monkey-mart.svg?v=1",
    url: "https://www.crazygames.com/game/monkey-mart",
    externalUrl: "https://www.crazygames.com/game/monkey-mart",
    alternateUrl: "https://www.crazygames.com/game/monkey-mart",
    playable: true,
    popular: false,
  },
];

const state = {
  selectedCategory: "All Games",
  searchTerm: "",
  favorites: loadStorage(STORAGE_KEYS.favorites, []),
  recent: loadStorage(STORAGE_KEYS.recent, []),
  settings: loadStorage(STORAGE_KEYS.settings, {
    darkMode: true,
    sound: true,
  }),
};

const navButtons = document.querySelectorAll(".nav-btn");
const categoryFilters = document.getElementById("categoryFilters");
const gameGrid = document.getElementById("gameGrid");
const searchInput = document.getElementById("searchInput");
const randomGameBtn = document.getElementById("randomGameBtn");
const resultsLabel = document.getElementById("resultsLabel");
const gamesCount = document.getElementById("gamesCount");
const favoritesCount = document.getElementById("favoritesCount");
const recentCount = document.getElementById("recentCount");
const settingsPanel = document.getElementById("settingsPanel");
const darkModeToggle = document.getElementById("darkModeToggle");
const soundToggle = document.getElementById("soundToggle");
const panicButton = document.getElementById("panicButton");
const closeSettings = document.getElementById("closeSettings");
const toast = document.getElementById("toast");

if (document.body.dataset.page === "home") {
  initHomePage();
}

if (document.body.dataset.page === "game") {
  initGamePage();
}

function initHomePage() {
  renderCategoryFilters();
  renderGames();
  syncStats();
  applySettings();

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.nav;
      if (target === "settings") {
        settingsPanel.classList.remove("hidden");
        button.classList.add("active");
        return;
      }

      settingsPanel.classList.add("hidden");
      navButtons.forEach((nav) => nav.classList.toggle("active", nav === button));

      if (target === "all") {
        state.selectedCategory = "All Games";
      }
      if (target === "favorites") {
        state.selectedCategory = "Favorites";
      }
      if (target === "recent") {
        state.selectedCategory = "Recently Played";
      }
      if (target === "home") {
        state.selectedCategory = "All Games";
      }

      renderCategoryFilters();
      renderGames();
    });
  });

  searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value.trim();
    renderGames();
  });

  randomGameBtn.addEventListener("click", () => {
    const pool = games.filter((game) => game.playable);
    if (!pool.length) {
      showToast("No playable games are available right now.");
      return;
    }
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    openGame(chosen.id);
  });

  document.getElementById("jumpToPopular").addEventListener("click", () => {
    state.selectedCategory = "Popular";
    renderCategoryFilters();
    renderGames();
    document.querySelector(".games-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  darkModeToggle.checked = !state.settings.darkMode;
  soundToggle.checked = state.settings.sound;

  darkModeToggle.addEventListener("change", () => {
    state.settings.darkMode = !darkModeToggle.checked;
    saveStorage(STORAGE_KEYS.settings, state.settings);
    applySettings();
  });

  soundToggle.addEventListener("change", () => {
    state.settings.sound = soundToggle.checked;
    saveStorage(STORAGE_KEYS.settings, state.settings);
    showToast(soundToggle.checked ? "Sound on." : "Sound off.");
  });

  panicButton.addEventListener("click", () => {
    window.location.href = "./panic.html";
  });

  closeSettings.addEventListener("click", () => {
    settingsPanel.classList.add("hidden");
  });
}

function initGamePage() {
  const gameId = new URLSearchParams(window.location.search).get("id");
  const game = games.find((item) => item.id === gameId) || null;
  const frame = document.getElementById("gameFrame");
  const title = document.getElementById("gameTitle");
  const loadingOverlay = document.getElementById("loadingOverlay");
  const unavailablePanel = document.getElementById("unavailablePanel");
  const unavailableBackBtn = document.getElementById("unavailableBackBtn");
  unavailableBackBtn?.addEventListener("click", () => { window.location.href = "./index.html"; });

  if (!game) {
    title.textContent = "Unavailable Game";
    unavailablePanel.classList.remove("hidden");
    frame.classList.add("hidden");
    loadingOverlay.classList.add("hidden");
    return;
  }

  title.textContent = game.name;
  recordRecentGame(game.id);

  if (!game.playable) {
    unavailablePanel.classList.remove("hidden");
    frame.classList.add("hidden");
    loadingOverlay.classList.add("hidden");
    document.getElementById("statusText").textContent = `${game.name} is not included in this static build because its source isn’t authorized for redistribution here.`;
    return;
  }

  const hideLoader = () => loadingOverlay.classList.add("hidden");
  const showLoadError = () => {
    hideLoader();
    document.getElementById("statusText").textContent = "The game took too long to load. Tap Reload or go back and try again.";
    unavailablePanel.classList.remove("hidden");
  };

  document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  document.getElementById("reloadBtn").addEventListener("click", () => {
    unavailablePanel.classList.add("hidden");
    loadingOverlay.classList.remove("hidden");
    frame.src = game.url;
    window.setTimeout(() => {
      if (!loadingOverlay.classList.contains("hidden")) showLoadError();
    }, 10000);
  });

  frame.addEventListener("load", hideLoader);
  frame.addEventListener("error", showLoadError);
  frame.src = game.url;
  window.setTimeout(() => {
    if (!loadingOverlay.classList.contains("hidden")) showLoadError();
  }, 10000);

  document.getElementById("fullscreenBtn").addEventListener("click", async () => {
    try {
      const target = document.documentElement;
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await target.requestFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  });
}

function renderCategoryFilters() {
  const categories = [...categoryLabels];

  categoryFilters.innerHTML = categories.map((category) => {
    const activeClass = state.selectedCategory === category ? "active" : "";
    return `<button class="filter-chip ${activeClass}" data-category="${category}">${category}</button>`;
  }).join("");

  categoryFilters.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCategory = button.dataset.category;
      renderCategoryFilters();
      renderGames();
    });
  });
}

function getGamesToDisplay() {
  const normalizedSearch = state.searchTerm.toLowerCase();
  let filteredGames = games.filter((game) => {
    const matchesCategory =
      state.selectedCategory === "All Games" ||
      (state.selectedCategory === "Favorites" && state.favorites.includes(game.id)) ||
      (state.selectedCategory === "Recently Played" && state.recent.includes(game.id)) ||
      (state.selectedCategory === "Popular" && game.popular) ||
      game.category === state.selectedCategory;

    const matchesSearch =
      !normalizedSearch ||
      game.name.toLowerCase().includes(normalizedSearch) ||
      game.category.toLowerCase().includes(normalizedSearch) ||
      (game.searchTerms || []).some((term) => term.includes(normalizedSearch));

    return matchesCategory && matchesSearch;
  });

  if (state.selectedCategory === "Favorites" && filteredGames.length === 0) {
    filteredGames = [];
  }

  if (state.selectedCategory === "Recently Played" && filteredGames.length === 0) {
    filteredGames = [];
  }

  return filteredGames;
}

function renderGames() {
  const visibleGames = getGamesToDisplay();
  resultsLabel.textContent = `${visibleGames.length} result${visibleGames.length === 1 ? "" : "s"}`;

  if (!visibleGames.length) {
    gameGrid.innerHTML = `
      <div class="game-card" style="grid-column:1/-1; padding:1.2rem;">
        <h3 style="margin:0 0 0.5rem;">No results</h3>
        <p style="margin:0; color: var(--muted);">Try a different keyword or switch categories.</p>
      </div>
    `;
    return;
  }

  gameGrid.innerHTML = visibleGames.map((game) => {
    const isFavorite = state.favorites.includes(game.id);
    const statusClass = game.playable || game.externalUrl ? "playable" : "unavailable";
    const localBuild = ["2048", "tetris", "neon-drift", "void-break"].includes(game.id);
    const statusText = localBuild ? "Playable here" : game.externalUrl ? "Open game site" : "Unavailable";
    return `
      <article class="game-card" data-id="${game.id}">
        <div class="card-art" style="background-image:url('${game.thumbnail}');">
          <button class="favorite-btn ${isFavorite ? "active" : ""}" aria-label="Toggle favorite for ${game.name}" data-favorite-id="${game.id}">★</button>
          <span class="category-tag">${game.category}</span>
        </div>
        <div class="card-content">
          <h3>${game.name}</h3>
          <p>${game.description}</p>
          <div class="card-meta">
            <span class="status-pill ${statusClass}">${statusText}</span>
            <div class="card-actions"><button class="play-btn" data-play-id="${game.id}">${localBuild ? "Play here" : game.externalUrl ? "Open game" : "Info"}</button></div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll("[data-play-id]").forEach((button) => {
    button.addEventListener("click", () => openGame(button.dataset.playId));
  });

  document.querySelectorAll("[data-favorite-id]").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.favoriteId));
  });
}

function openGame(gameId) {
  const game = games.find((item) => item.id === gameId);
  if (!game) {
    showToast("That game could not be found.");
    return;
  }
  recordRecentGame(game.id);

  // Only send games to local builds that actually exist. Never substitute a
  // tiny imitation for a commercial game while presenting it as the original.
  const localPages = {
    "2048": "./games/2048.html",
    "tetris": "./games/tetris.html",
    "neon-drift": "./games/slope.html",
    "void-break": "./games/void-break.html"
  };
  const destination = localPages[game.id];
  if (destination) {
    window.location.assign(destination);
    return;
  }

  // Third-party games must open at their actual source, never inside an iframe:
  // many game portals block embedding and would leave players stuck on a spinner.
  // Open a new tab so PixelPulse stays available, and provide a real fallback if
  // the first source is unavailable or blocked by the network.
  const source = game.externalUrl || game.url;
  if (source) {
    const opened = window.open(source, "_blank", "noopener,noreferrer");
    if (!opened) {
      // Popup blockers can prevent a new tab; direct navigation still works.
      window.location.assign(source);
    }
    return;
  }
  showToast("This game is not available yet.");
}

function toggleFavorite(gameId) {
  const index = state.favorites.indexOf(gameId);
  if (index >= 0) {
    state.favorites.splice(index, 1);
    showToast("Removed from favorites.");
  } else {
    state.favorites.push(gameId);
    showToast("Added to favorites.");
  }

  saveStorage(STORAGE_KEYS.favorites, state.favorites);
  renderGames();
  syncStats();
}

function recordRecentGame(gameId) {
  const updated = [gameId, ...state.recent.filter((id) => id !== gameId)].slice(0, 6);
  state.recent = updated;
  saveStorage(STORAGE_KEYS.recent, updated);
  syncStats();
}

function syncStats() {
  // The game-player page does not contain the homepage stat counters.
  // Guard each counter so recording a game cannot stop the player from loading.
  if (gamesCount) gamesCount.textContent = games.length;
  if (favoritesCount) favoritesCount.textContent = state.favorites.length;
  if (recentCount) recentCount.textContent = state.recent.length;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function applySettings() {
  document.body.classList.toggle("light-mode", state.settings.darkMode !== true);
  if (darkModeToggle) darkModeToggle.checked = !state.settings.darkMode;
}

function loadStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Storage error:", error);
  }
}

if (document.body.dataset.page === "home") {
  navButtons.forEach((button) => {
    if (button.dataset.nav === "home") {
      button.classList.add("active");
    }
  });
}
