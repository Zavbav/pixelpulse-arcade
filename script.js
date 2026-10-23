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
    id: "neon-drift",
    name: "Neon Drift",
    category: "Racing",
    description: "A fast lane-dodging runner built for quick reactions and neon speed.",
    thumbnail: "./assets/neon-drift.svg",
    url: "./games/slope.html",
    playable: true,
    popular: true,
  },
  {
    id: "pixel-tetris",
    name: "Pixel Tetris",
    category: "Puzzle",
    description: "Classic falling blocks with smooth keyboard controls and quick rounds.",
    thumbnail: "./assets/pixel-tetris.svg",
    url: "./games/tetris.html",
    playable: true,
    popular: true,
  },
  {
    id: "number-merge",
    name: "Number Merge 2048",
    category: "Puzzle",
    description: "Slide, merge, and climb to the highest tile in this arcade puzzle challenge.",
    thumbnail: "./assets/number-merge.svg",
    url: "./games/2048.html",
    playable: true,
    popular: true,
  },
  {
    id: "goal-rush",
    name: "Goal Rush",
    category: "Sports",
    description: "This entry remains intentionally unavailable in the static archive.",
    thumbnail: "./assets/goal-rush.svg",
    url: "./game.html?id=goal-rush",
    playable: false,
    popular: true,
  },
  {
    id: "memory-pulse",
    name: "Memory Pulse",
    category: "Arcade",
    description: "This game card is intentionally unavailable in this static build.",
    thumbnail: "./assets/memory-pulse.svg",
    url: "./game.html?id=memory-pulse",
    playable: false,
    popular: false,
  },
  {
    id: "star-burst",
    name: "Star Burst",
    category: "Action",
    description: "This local action game is not part of the current static build.",
    thumbnail: "./assets/star-burst.svg",
    url: "./game.html?id=star-burst",
    playable: false,
    popular: false,
  },
  {
    id: "galaxy-duel",
    name: "Galaxy Duel",
    category: "Multiplayer",
    description: "This local multiplayer game remains intentionally unavailable here.",
    thumbnail: "./assets/galaxy-duel.svg",
    url: "./game.html?id=galaxy-duel",
    playable: false,
    popular: true,
  },
  {
    id: "retro-bowl",
    name: "Retro Bowl",
    category: "Sports",
    description: "Not redistributed here because the original game is not authorized for static use.",
    thumbnail: "./assets/retro-bowl.svg",
    url: "./game.html?id=retro-bowl",
    playable: false,
    popular: true,
  },
  {
    id: "basket-random",
    name: "Basket Random",
    category: "Sports",
    description: "Original rights are not reproduced here; this card is clearly marked unavailable.",
    thumbnail: "./assets/basket-random.svg",
    url: "./game.html?id=basket-random",
    playable: false,
    popular: true,
  },
  {
    id: "cookie-clicker",
    name: "Cookie Clicker",
    category: "Arcade",
    description: "This original browser game is intentionally omitted from the static archive.",
    thumbnail: "./assets/cookie-clicker.svg",
    url: "./game.html?id=cookie-clicker",
    playable: false,
    popular: false,
  },
  {
    id: "slope-classic",
    name: "Slope Classic",
    category: "Racing",
    description: "A third-party title kept unavailable to avoid unauthorized redistribution.",
    thumbnail: "./assets/slope-classic.svg",
    url: "./game.html?id=slope-classic",
    playable: false,
    popular: true,
  },
  {
    id: "moto-x3m",
    name: "Moto X3M",
    category: "Racing",
    description: "This game is intentionally omitted to keep the archive legal and properly sourced.",
    thumbnail: "./assets/moto-x3m.svg",
    url: "./game.html?id=moto-x3m",
    playable: false,
    popular: true,
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

  darkModeToggle.checked = state.settings.darkMode;
  soundToggle.checked = state.settings.sound;

  darkModeToggle.addEventListener("change", () => {
    state.settings.darkMode = darkModeToggle.checked;
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
      game.category.toLowerCase().includes(normalizedSearch);

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
    const statusClass = game.playable ? "playable" : "unavailable";
    const statusText = game.playable ? "Playable" : "Unavailable";
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
            <button class="play-btn" data-play-id="${game.id}">${game.playable ? "Play" : "Info"}</button>
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

  if (game.playable) {
    recordRecentGame(game.id);
  }

  window.location.href = `./game.html?id=${encodeURIComponent(game.id)}`;
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
  gamesCount.textContent = games.length;
  favoritesCount.textContent = state.favorites.length;
  recentCount.textContent = state.recent.length;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function applySettings() {
  document.body.classList.toggle("light-mode", state.settings.darkMode === true);
  if (darkModeToggle) darkModeToggle.checked = state.settings.darkMode;
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
