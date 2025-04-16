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
  {
    name: "Eaglercraft 1.5.2",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/eaglercraft.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/eaglercraft1.5.2/index.html",
    keywords: ["minecraft"]
  },
  {
    name: "Eaglercraft 1.8.8",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/eaglercraft.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/eaglercraft1.8.8/index.html",
    keywords: ["minecraft"]
  },
  {
    name: "Eaglercraft 1.12.2",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/eaglercraft.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/eaglercraft1.12.2/index.html",
    keywords: ["minecraft"]
  },
  {
    name: "fataltotheflesh",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/fataltotheflesh.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/fataltotheflesh/index.html"
  },
  {
    name: "Five Nights at Freddy's 1",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/fnaf1.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/fnaf1/index.html",
    keywords: ["fnaf", "fnaf1"]
  },
  {
    name: "Five Nights at Freddy's 2",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/fnaf2.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/fnaf2/index.html",
    keywords: ["fnaf", "fnaf2"]
  },
  {
    name: "Five Nights at Freddy's 3",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/fnaf3.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/fnaf3/index.html",
    keywords: ["fnaf", "fnaf3"]
  },
  {
    name: "Five Nights at Freddy's 4",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/fnaf4.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/fnaf4/index.html",
    keywords: ["fnaf", "fnaf4"]
  },
  {
    name: "Five Nights at Freddy's 4 Halloween Edition",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/fnaf4he.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/fnaf4/index.html",
    keywords: ["fnaf", "fnaf4", "fnaf4he"]
  },
  {
    name: "Five Nights at Freddy's World",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/fnafworld.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/fnafworld/index.html",
    keywords: ["fnaf", "fnafworld", "fnafworld"]
  },
  {
    name: "Five Nights at Freddy's Ultimate Custom Night",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/fnafucn.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/fnafucn/index.html",
    keywords: ["fnaf", "fnafucn", "ucn"]
  },
  {
    name: "Henry Stickmin: Breaking The Bank",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/hsbtb.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/hsbtb/index.html"
  },
  {
    name: "Henry Stickmin: Escaping The Prison",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/hsetp.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/hsetp/index.html"
  },
  {
    name: "Henry Stickmin: Fleeing The Complex",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/hsftc.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/hsftc/index.html"
  },
  {
    name: "Henry Stickmin: Infiltrating The Airship",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/hsita.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/hsita/index.html"
  },
  {
    name: "Henry Stickmin: Stealing The Diamond",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/hsstd.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/hsstd/index.html"
  },
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

      // Choose container: <a> if ok, otherwise a <div> (no link)
      let wrapper;
      if (game.status === "ok") {
        wrapper = document.createElement("a");
        wrapper.href = game.link;
        wrapper.target = "_blank";
        wrapper.addEventListener("click", () => trackClick(game));
      } else {
        wrapper = document.createElement("div");
        wrapper.style.cursor = "not-allowed"; // hint
      }

      // Image + title
      const img = document.createElement("img");
      img.src = game.image;
      img.alt = game.name;

      const span = document.createElement("span");
      span.className = "gt";
      span.textContent = game.name;

      wrapper.appendChild(img);
      wrapper.appendChild(span);
      div.appendChild(wrapper);

      // If blocked/broken, overlay the label
      if (game.status !== "ok") {
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.textContent = game.status === "blocked" ? "Blocked" : "Broken";
        div.appendChild(overlay);
      }

      row.appendChild(div);
    });
  }}

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
