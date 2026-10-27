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
  "Simulation",
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
  {
    id: "awesome-tanks-2",
    name: "Awesome Tanks 2",
    category: "Action",
    description: "Tanks, upgrades, and explosive arena battles.",
    thumbnail: "./assets/neon-drift.svg?v=1",
    url: "https://nintendoboi222.github.io/games/awesome-tanks-2",
    externalUrl: "https://nintendoboi222.github.io/games/awesome-tanks-2",
    playable: true,
    popular: false,
    searchTerms: ["tank","shooting","action"],
  },
  {
    id: "bitlife",
    name: "BitLife",
    category: "Simulation",
    description: "Make life choices and see where your story goes.",
    thumbnail: "./assets/monkey-mart.svg?v=1",
    url: "https://nintendoboi222.github.io/games/bitlife",
    externalUrl: "https://nintendoboi222.github.io/games/bitlife",
    playable: true,
    popular: true,
    searchTerms: ["life","simulator","choices"],
  },
  {
    id: "block-blast",
    name: "Block Blast",
    category: "Puzzle",
    description: "Fit blocks, clear rows, and chase a bigger score.",
    thumbnail: "./assets/number-merge.svg?v=5",
    url: "https://nintendoboi222.github.io/games/block-blast",
    externalUrl: "https://nintendoboi222.github.io/games/block-blast",
    playable: true,
    popular: true,
    searchTerms: ["blocks","puzzle","brain"],
  },
  {
    id: "bloxorz",
    name: "Bloxorz",
    category: "Puzzle",
    description: "Roll a block through tricky floating platforms.",
    thumbnail: "./assets/number-merge.svg?v=5",
    url: "https://nintendoboi222.github.io/games/bloxors",
    externalUrl: "https://nintendoboi222.github.io/games/bloxors",
    playable: true,
    popular: false,
    searchTerms: ["logic","platform","classic"],
  },
  {
    id: "boxing-random",
    name: "Boxing Random",
    category: "Sports",
    description: "Wild physics and chaotic one-button boxing.",
    thumbnail: "./assets/retro-bowl.svg?v=6",
    url: "https://nintendoboi222.github.io/games/boxing-random",
    externalUrl: "https://nintendoboi222.github.io/games/boxing-random",
    playable: true,
    popular: false,
    searchTerms: ["boxing","two player","sports"],
  },
  {
    id: "chrome-dino",
    name: "Chrome Dino",
    category: "Arcade",
    description: "Jump over cacti and keep the endless run alive.",
    thumbnail: "./assets/cookie-clicker.svg?v=5",
    url: "https://nintendoboi222.github.io/games/chrome-dino",
    externalUrl: "https://nintendoboi222.github.io/games/chrome-dino",
    playable: true,
    popular: false,
    searchTerms: ["dinosaur","runner","offline"],
  },
  {
    id: "crossy-road",
    name: "Crossy Road",
    category: "Arcade",
    description: "Hop through traffic, rivers, and endless obstacles.",
    thumbnail: "./assets/cookie-clicker.svg?v=5",
    url: "https://nintendoboi222.github.io/games/crossy-road",
    externalUrl: "https://nintendoboi222.github.io/games/crossy-road",
    playable: true,
    popular: true,
    searchTerms: ["crossing","frogger","runner"],
  },
  {
    id: "drift-hunters",
    name: "Drift Hunters",
    category: "Racing",
    description: "Build speed, tune your ride, and drift through corners.",
    thumbnail: "./assets/snow-rider.svg?v=2",
    url: "https://nintendoboi222.github.io/games/drift-hunters",
    externalUrl: "https://nintendoboi222.github.io/games/drift-hunters",
    playable: true,
    popular: true,
    searchTerms: ["cars","drifting","3d"],
  },
  {
    id: "duck-life-4",
    name: "Duck Life 4",
    category: "Simulation",
    description: "Train your duck, compete, and level up your skills.",
    thumbnail: "./assets/monkey-mart.svg?v=1",
    url: "https://nintendoboi222.github.io/games/duck-life-4",
    externalUrl: "https://nintendoboi222.github.io/games/duck-life-4",
    playable: true,
    popular: false,
    searchTerms: ["duck","training","racing"],
  },
  {
    id: "eggy-car",
    name: "Eggy Car",
    category: "Racing",
    description: "Drive carefully over hills without dropping your egg.",
    thumbnail: "./assets/snow-rider.svg?v=2",
    url: "https://nintendoboi222.github.io/games/eggy-car",
    externalUrl: "https://nintendoboi222.github.io/games/eggy-car",
    playable: true,
    popular: true,
    searchTerms: ["car","physics","hill"],
  },
  {
    id: "flappy-bird",
    name: "Flappy Bird",
    category: "Arcade",
    description: "Thread the gaps and see how long you can last.",
    thumbnail: "./assets/cookie-clicker.svg?v=5",
    url: "https://nintendoboi222.github.io/games/flappy-birb",
    externalUrl: "https://nintendoboi222.github.io/games/flappy-birb",
    playable: true,
    popular: false,
    searchTerms: ["flap","bird","reaction"],
  },
  {
    id: "funny-shooter-2",
    name: "Funny Shooter 2",
    category: "Action",
    description: "Fight waves of strange enemies in a colorful shooter.",
    thumbnail: "./assets/neon-drift.svg?v=1",
    url: "https://nintendoboi222.github.io/games/Funny-Shooter-2",
    externalUrl: "https://nintendoboi222.github.io/games/Funny-Shooter-2",
    playable: true,
    popular: false,
    searchTerms: ["shooter","fps","action"],
  },
  {
    id: "getaway-shootout",
    name: "Getaway Shootout",
    category: "Action",
    description: "Race rivals to the getaway in chaotic physics combat.",
    thumbnail: "./assets/neon-drift.svg?v=1",
    url: "https://nintendoboi222.github.io/games/getaway-shootout",
    externalUrl: "https://nintendoboi222.github.io/games/getaway-shootout",
    playable: true,
    popular: false,
    searchTerms: ["multiplayer","race","platform"],
  },
  {
    id: "google-snake",
    name: "Google Snake",
    category: "Arcade",
    description: "Eat, grow, and avoid crashing into yourself.",
    thumbnail: "./assets/cookie-clicker.svg?v=5",
    url: "https://nintendoboi222.github.io/games/Google-snake",
    externalUrl: "https://nintendoboi222.github.io/games/Google-snake",
    playable: true,
    popular: false,
    searchTerms: ["snake","classic","score"],
  },
  {
    id: "hextris",
    name: "Hextris",
    category: "Puzzle",
    description: "Rotate the hexagon and match falling colored blocks.",
    thumbnail: "./assets/number-merge.svg?v=5",
    url: "https://nintendoboi222.github.io/games/hextris",
    externalUrl: "https://nintendoboi222.github.io/games/hextris",
    playable: true,
    popular: false,
    searchTerms: ["hexagon","tetris","logic"],
  },
  {
    id: "idle-breakout",
    name: "Idle Breakout",
    category: "Arcade",
    description: "Build an unstoppable brick-breaking machine.",
    thumbnail: "./assets/cookie-clicker.svg?v=5",
    url: "https://nintendoboi222.github.io/games/idle-breakout",
    externalUrl: "https://nintendoboi222.github.io/games/idle-breakout",
    playable: true,
    popular: false,
    searchTerms: ["idle","clicker","bricks"],
  },
  {
    id: "impossible-quiz",
    name: "The Impossible Quiz",
    category: "Puzzle",
    description: "Answer weird questions and expect the unexpected.",
    thumbnail: "./assets/number-merge.svg?v=5",
    url: "https://nintendoboi222.github.io/games/impossiblequiz",
    externalUrl: "https://nintendoboi222.github.io/games/impossiblequiz",
    playable: true,
    popular: false,
    searchTerms: ["quiz","trivia","funny"],
  },
  {
    id: "jacksmith",
    name: "Jacksmith",
    category: "Simulation",
    description: "Forge weapons and equip warriors for battle.",
    thumbnail: "./assets/monkey-mart.svg?v=1",
    url: "https://nintendoboi222.github.io/games/jacksmith",
    externalUrl: "https://nintendoboi222.github.io/games/jacksmith",
    playable: true,
    popular: false,
    searchTerms: ["crafting","blacksmith","strategy"],
  },
  {
    id: "learn-to-fly-3",
    name: "Learn to Fly 3",
    category: "Arcade",
    description: "Build a contraption and launch your penguin skyward.",
    thumbnail: "./assets/cookie-clicker.svg?v=5",
    url: "https://nintendoboi222.github.io/games/learn-to-fly-3",
    externalUrl: "https://nintendoboi222.github.io/games/learn-to-fly-3",
    playable: true,
    popular: false,
    searchTerms: ["penguin","upgrade","launch"],
  },
  {
    id: "madalin-stunt-cars-2",
    name: "Madalin Stunt Cars 2",
    category: "Racing",
    description: "Take supercars to huge stunt arenas and ramps.",
    thumbnail: "./assets/snow-rider.svg?v=2",
    url: "https://nintendoboi222.github.io/games/madalin-stunt-cars-2",
    externalUrl: "https://nintendoboi222.github.io/games/madalin-stunt-cars-2",
    playable: true,
    popular: false,
    searchTerms: ["cars","stunts","3d"],
  },
  {
    id: "ovo",
    name: "OvO",
    category: "Action",
    description: "Speedrun a precision platformer with slick movement.",
    thumbnail: "./assets/neon-drift.svg?v=1",
    url: "https://nintendoboi222.github.io/games/ovo",
    externalUrl: "https://nintendoboi222.github.io/games/ovo",
    playable: true,
    popular: true,
    searchTerms: ["platformer","parkour","speedrun"],
  },
  {
    id: "papas-freezeria",
    name: "Papa's Freezeria",
    category: "Simulation",
    description: "Run an ice cream shop and keep every order on point.",
    thumbnail: "./assets/monkey-mart.svg?v=1",
    url: "https://nintendoboi222.github.io/games/papas-freezeria",
    externalUrl: "https://nintendoboi222.github.io/games/papas-freezeria",
    playable: true,
    popular: false,
    searchTerms: ["restaurant","cooking","management"],
  },
  {
    id: "poly-track",
    name: "PolyTrack",
    category: "Racing",
    description: "Race low-poly tracks, chase lap times, and master jumps.",
    thumbnail: "./assets/snow-rider.svg?v=2",
    url: "https://nintendoboi222.github.io/games/poly-track",
    externalUrl: "https://nintendoboi222.github.io/games/poly-track",
    playable: true,
    popular: true,
    searchTerms: ["time trial","cars","3d"],
  },
  {
    id: "ragdoll-archers",
    name: "Ragdoll Archers",
    category: "Action",
    description: "Aim, dodge, and outlast your opponents with physics arrows.",
    thumbnail: "./assets/neon-drift.svg?v=1",
    url: "https://nintendoboi222.github.io/games/ragdoll-archers",
    externalUrl: "https://nintendoboi222.github.io/games/ragdoll-archers",
    playable: true,
    popular: false,
    searchTerms: ["archery","physics","battle"],
  },
  {
    id: "retro-bowl-collage",
    name: "Retro Bowl College",
    category: "Sports",
    description: "Manage a college football team and chase a championship.",
    thumbnail: "./assets/retro-bowl.svg?v=6",
    url: "https://nintendoboi222.github.io/games/retro-bowl-collage",
    externalUrl: "https://nintendoboi222.github.io/games/retro-bowl-collage",
    playable: true,
    popular: false,
    searchTerms: ["football","coach","college"],
  },
  {
    id: "rooftop-snipers",
    name: "Rooftop Snipers",
    category: "Multiplayer",
    description: "Knock your rival off the roof in quick-fire duels.",
    thumbnail: "./assets/basket-random.svg?v=6",
    url: "https://nintendoboi222.github.io/games/rooftop-snipers",
    externalUrl: "https://nintendoboi222.github.io/games/rooftop-snipers",
    playable: true,
    popular: true,
    searchTerms: ["two player","duel","shooter"],
  },
  {
    id: "run-2",
    name: "Run 2",
    category: "Action",
    description: "Run and jump through rotating space tunnels.",
    thumbnail: "./assets/neon-drift.svg?v=1",
    url: "https://nintendoboi222.github.io/games/run-2",
    externalUrl: "https://nintendoboi222.github.io/games/run-2",
    playable: true,
    popular: false,
    searchTerms: ["platformer","space","runner"],
  },
  {
    id: "snake-io",
    name: "Snake.io",
    category: "Arcade",
    description: "Grow your snake and outmaneuver the competition.",
    thumbnail: "./assets/cookie-clicker.svg?v=5",
    url: "https://nintendoboi222.github.io/games/snake.io",
    externalUrl: "https://nintendoboi222.github.io/games/snake.io",
    playable: true,
    popular: false,
    searchTerms: ["snake","multiplayer","arena"],
  },
  {
    id: "soccer-random",
    name: "Soccer Random",
    category: "Sports",
    description: "Score goals in unpredictable physics football matches.",
    thumbnail: "./assets/retro-bowl.svg?v=6",
    url: "https://nintendoboi222.github.io/games/soccer-random",
    externalUrl: "https://nintendoboi222.github.io/games/soccer-random",
    playable: true,
    popular: false,
    searchTerms: ["football","soccer","two player"],
  },
  {
    id: "sort-the-court",
    name: "Sort the Court",
    category: "Simulation",
    description: "Make royal decisions and see how your kingdom changes.",
    thumbnail: "./assets/monkey-mart.svg?v=1",
    url: "https://nintendoboi222.github.io/games/sort-the-court",
    externalUrl: "https://nintendoboi222.github.io/games/sort-the-court",
    playable: true,
    popular: false,
    searchTerms: ["kingdom","choices","strategy"],
  },
  {
    id: "space-company",
    name: "Space Company",
    category: "Simulation",
    description: "Build a space industry from humble beginnings.",
    thumbnail: "./assets/monkey-mart.svg?v=1",
    url: "https://nintendoboi222.github.io/games/space-company",
    externalUrl: "https://nintendoboi222.github.io/games/space-company",
    playable: true,
    popular: false,
    searchTerms: ["idle","space","management"],
  },
  {
    id: "stickman-hook",
    name: "Stickman Hook",
    category: "Action",
    description: "Swing, release, and fly through acrobatic levels.",
    thumbnail: "./assets/neon-drift.svg?v=1",
    url: "https://nintendoboi222.github.io/games/stickman-hook",
    externalUrl: "https://nintendoboi222.github.io/games/stickman-hook",
    playable: true,
    popular: false,
    searchTerms: ["swing","physics","platformer"],
  },
  {
    id: "subway-surfers",
    name: "Subway Surfers",
    category: "Action",
    description: "Dodge trains and barriers in an endless runner.",
    thumbnail: "./assets/neon-drift.svg?v=1",
    url: "https://nintendoboi222.github.io/games/subway-surfers-beijing",
    externalUrl: "https://nintendoboi222.github.io/games/subway-surfers-beijing",
    playable: true,
    popular: true,
    searchTerms: ["runner","endless","surf"],
  },
  {
    id: "territorial-io",
    name: "Territorial.io",
    category: "Strategy",
    description: "Expand your territory and outmaneuver rival nations.",
    thumbnail: "./assets/cookie-clicker.svg?v=5",
    url: "https://nintendoboi222.github.io/games/territorial-io",
    externalUrl: "https://nintendoboi222.github.io/games/territorial-io",
    playable: true,
    popular: false,
    searchTerms: ["strategy","map","multiplayer"],
  },
  {
    id: "time-shooter-2",
    name: "Time Shooter 2",
    category: "Action",
    description: "Time moves when you move. Plan every shot.",
    thumbnail: "./assets/neon-drift.svg?v=1",
    url: "https://nintendoboi222.github.io/games/time-shooter-2",
    externalUrl: "https://nintendoboi222.github.io/games/time-shooter-2",
    playable: true,
    popular: true,
    searchTerms: ["fps","shooter","slow motion"],
  },
  {
    id: "tiny-fishing",
    name: "Tiny Fishing",
    category: "Arcade",
    description: "Cast a line, catch fish, and upgrade your gear.",
    thumbnail: "./assets/cookie-clicker.svg?v=5",
    url: "https://nintendoboi222.github.io/games/tiny-fishing",
    externalUrl: "https://nintendoboi222.github.io/games/tiny-fishing",
    playable: true,
    popular: false,
    searchTerms: ["fishing","idle","upgrade"],
  },
  {
    id: "tomb-of-the-mask",
    name: "Tomb of the Mask",
    category: "Arcade",
    description: "Zip through maze-like tombs and dodge deadly traps.",
    thumbnail: "./assets/cookie-clicker.svg?v=5",
    url: "https://nintendoboi222.github.io/games/tomb-of-the-mask",
    externalUrl: "https://nintendoboi222.github.io/games/tomb-of-the-mask",
    playable: true,
    popular: false,
    searchTerms: ["maze","retro","action"],
  },
  {
    id: "tunnel-rush",
    name: "Tunnel Rush",
    category: "Racing",
    description: "Dodge obstacles at speed inside a shifting tunnel.",
    thumbnail: "./assets/snow-rider.svg?v=2",
    url: "https://nintendoboi222.github.io/games/tunnel-rush-1",
    externalUrl: "https://nintendoboi222.github.io/games/tunnel-rush-1",
    playable: true,
    popular: false,
    searchTerms: ["reflex","3d","runner"],
  },
  {
    id: "unicycle-hero",
    name: "Unicycle Hero",
    category: "Sports",
    description: "Balance, launch, and compete in oddball events.",
    thumbnail: "./assets/retro-bowl.svg?v=6",
    url: "https://nintendoboi222.github.io/games/unicycle-hero",
    externalUrl: "https://nintendoboi222.github.io/games/unicycle-hero",
    playable: true,
    popular: false,
    searchTerms: ["physics","sports","balance"],
  },
  {
    id: "wheely-1",
    name: "Wheely",
    category: "Puzzle",
    description: "Solve clever puzzles to guide a little red car.",
    thumbnail: "./assets/number-merge.svg?v=5",
    url: "https://nintendoboi222.github.io/games/wheely-1",
    externalUrl: "https://nintendoboi222.github.io/games/wheely-1",
    playable: true,
    popular: false,
    searchTerms: ["car","puzzle","point and click"],
  },
  {
    id: "10-minutes-till-dawn",
    name: "10 Minutes Till Dawn",
    category: "Action",
    description: "Survive monster swarms in a tense top-down shooter.",
    thumbnail: "./assets/neon-drift.svg?v=1",
    url: "https://nintendoboi222.github.io/games/10-minutes-till-dawn",
    externalUrl: "https://nintendoboi222.github.io/games/10-minutes-till-dawn",
    playable: true,
    popular: false,
    searchTerms: ["survival","shooter","roguelike"],
  },
  {
    id: "2-minute-football",
    name: "2 Minute Football",
    category: "Sports",
    description: "Quick football matches built for short sessions.",
    thumbnail: "./assets/retro-bowl.svg?v=6",
    url: "https://nintendoboi222.github.io/games/2MinuteFootball",
    externalUrl: "https://nintendoboi222.github.io/games/2MinuteFootball",
    playable: true,
    popular: false,
    searchTerms: ["football","sports","quick"],
  },
  {
    id: "idle-web-tycoon",
    name: "Idle Web Tycoon",
    category: "Simulation",
    description: "Grow a tiny online business into a money machine.",
    thumbnail: "./assets/monkey-mart.svg?v=1",
    url: "https://nintendoboi222.github.io/games/idle-web-tycoon",
    externalUrl: "https://nintendoboi222.github.io/games/idle-web-tycoon",
    playable: true,
    popular: false,
    searchTerms: ["idle","tycoon","clicker"],
  },
  {
    id: "riddle-school",
    name: "Riddle School",
    category: "Puzzle",
    description: "Escape school through point-and-click puzzles.",
    thumbnail: "./assets/number-merge.svg?v=5",
    url: "https://nintendoboi222.github.io/games/riddle-school-1",
    externalUrl: "https://nintendoboi222.github.io/games/riddle-school-1",
    playable: true,
    popular: false,
    searchTerms: ["escape","adventure","classic"],
  },
  {
    id: "tetris-classic",
    name: "Tetris",
    category: "Puzzle",
    description: "Stack falling blocks and clear lines.",
    thumbnail: "./assets/number-merge.svg?v=5",
    url: "https://nintendoboi222.github.io/games/tetris",
    externalUrl: "https://nintendoboi222.github.io/games/tetris",
    playable: true,
    popular: false,
    searchTerms: ["blocks","classic","puzzle"],
  }
];

const LOCAL_GAME_PAGES = {
  "2048": "./games/2048.html",
  "tetris": "./games/tetris.html",
  "neon-drift": "./games/slope.html",
  "void-break": "./games/void-break.html"
};
const LOCAL_GAME_IDS = new Set(Object.keys(LOCAL_GAME_PAGES));
const LOCAL_GAMES = games.filter((game) => LOCAL_GAME_IDS.has(game.id));

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
    const pool = LOCAL_GAMES;
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
  let filteredGames = LOCAL_GAMES.filter((game) => {
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
    const statusClass = "playable";
    const localBuild = LOCAL_GAME_IDS.has(game.id);
    const statusText = "Playable here";
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
            <div class="card-actions"><button class="play-btn" data-play-id="${game.id}">Play now</button></div>
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
  const destination = LOCAL_GAME_PAGES[game.id];
  if (destination) {
    window.location.assign(destination);
    return;
  }

  // External links are intentionally disabled until hosted and tested here.
  showToast("That game is not hosted in PixelPulse yet.");
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
  if (gamesCount) gamesCount.textContent = LOCAL_GAMES.length;
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
