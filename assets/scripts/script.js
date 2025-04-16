let allGames = [
  {
    name: "Baldi's Basics",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/baldisbasics.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/baldisbasics/index.html"
  },
  {
    name: "Bloons TD 4",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/btd4.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/btd4/index.html"
  },
  {
    name: "Bloons TD 5",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/btd5.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/btd5/index.html"
  },
  {
    name: "Cookie Clicker",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/cookieclicker.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/cc/index.html"
  },
  // Additional games ...
];

let currentSort = 'asc';
let currentSearch = '';

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", e => {
    currentSearch = e.target.value.trim().toLowerCase();
    renderGames();
  });

  renderGames();
  renderPopularGames();
});

// Render all games, filtered and sorted
function renderGames() {
  const container = document.getElementById("gamesContainer");
  container.innerHTML = ""; // Clear previous content

  // Filter games based on search
  let filtered = allGames.filter(game => {
    const search = normalizeString(currentSearch);
    const nameMatch = normalizeString(game.name).includes(search);
    const keywordMatch = (game.keywords || []).some(keyword =>
      normalizeString(keyword).includes(search)
    );
    return nameMatch || keywordMatch;
  });

  // Sort filtered games
  filtered.sort((a, b) => {
    const nameA = normalizeString(a.name);
    const nameB = normalizeString(b.name);
    if (currentSort === 'asc') return nameA.localeCompare(nameB);
    else return nameB.localeCompare(nameA);
  });

  // Display the games in rows of 8
  for (let i = 0; i < filtered.length; i += 8) {
    const row = document.createElement("div");
    row.className = "game-row";

    const gamesInRow = filtered.slice(i, i + 8);

    gamesInRow.forEach(game => {
      const div = document.createElement("div");
      div.className = "gameholder";

      const a = document.createElement("a");
      a.href = game.link;
      a.target = "_blank";

      // Track clicks
      a.addEventListener("click", () => {
        trackClick(game);
      });

      const img = document.createElement("img");
      img.src = game.image;
      img.alt = game.name;
      img.style.width = "120px";
      img.style.height = "120px";
      img.style.marginTop = "10px";

      const span = document.createElement("span");
      span.className = "gt";
      span.textContent = game.name;

      a.appendChild(img);
      div.appendChild(a);
      div.appendChild(span);
      row.appendChild(div);
    });

    container.appendChild(row);
  }
}

// Track a click on a game and update the popular games list
function trackClick(game) {
  const key = `clicks_${game.name}`;
  let count = parseInt(localStorage.getItem(key)) || 0;
  localStorage.setItem(key, count + 1);
  
  // Immediately render popular games after tracking the click
  renderPopularGames();
}

// Render the most popular games based on clicks
function renderPopularGames() {
  const container = document.getElementById("popularGamesContainer");
  container.innerHTML = "";

  // Sort games by clicks (stored in localStorage)
  const sortedGames = [...allGames].sort((a, b) => {
    const aClicks = parseInt(localStorage.getItem(`clicks_${a.name}`)) || 0;
    const bClicks = parseInt(localStorage.getItem(`clicks_${b.name}`)) || 0;
    return bClicks - aClicks;
  });

  // Display the top 5 most popular games
  const top5 = sortedGames.slice(0, 5);
  top5.forEach(game => {
    const div = document.createElement("div");
    div.className = "gameholder";

    const a = document.createElement("a");
    a.href = game.link;
    a.target = "_blank";

    const img = document.createElement("img");
    img.src = game.image;
    img.alt = game.name;
    img.style.width = "100px";
    img.style.height = "100px";

    const span = document.createElement("span");
    span.className = "gt";
    span.textContent = game.name;

    a.appendChild(img);
    div.appendChild(a);
    div.appendChild(span);
    container.appendChild(div);
  });
}

// Normalize string for case-insensitive search
function normalizeString(str) {
  return str
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[-\s]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Sort the games list (A-Z or Z-A)
function sortGames(order) {
  currentSort = order;
  renderGames();
}

// Toggle compact mode (smaller view)
function toggleCompactMode() {
  document.querySelectorAll('.gameholder').forEach(game => {
    game.classList.toggle('compact');
  });
}
