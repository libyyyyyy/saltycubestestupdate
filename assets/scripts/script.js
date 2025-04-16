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
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/fnaf4he/index.html",
    keywords: ["fnaf", "fnaf4"]
  },
  {
    name: "Five Nights at Freddy's World",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/fnafworld.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/fnafworld/index.html",
    keywords: ["fnaf", "fnafworld", "fnaf world"]
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
    name: "Henry Stickmin: Stealing The Diamond",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/hsstd.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/hsstd/index.html"
  },
  {
    name: "Henry Stickmin: Infiltrating The Airship",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/hsita.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/hsita/index.html"
  },
  {
    name: "Henry Stickmin: Fleeing The Complex",
    image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/hsftc.png",
    link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/hsftc/index.html"
  }
];

let currentSort = 'asc';
let currentSearch = '';

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", e => {
    currentSearch = e.target.value.trim().toLowerCase();
    renderGames();
  });

  renderGames(); // <== You were missing this!
  renderPopularGames();
});

function renderGames() {
  const container = document.getElementById("gamesContainer");
  container.innerHTML = ""; // Clear previous content

  // Filter games based on name or keywords
  let filtered = allGames.filter(game => {
    const search = normalizeString(currentSearch);
    const nameMatch = normalizeString(game.name).includes(search);
    const keywordMatch = (game.keywords || []).some(keyword =>
      normalizeString(keyword).includes(search)
    );
    return nameMatch || keywordMatch;
  });

  // Sort games based on currentSort setting
  filtered.sort((a, b) => {
    const nameA = normalizeString(a.name);
    const nameB = normalizeString(b.name);
    if (currentSort === 'asc') return nameA.localeCompare(nameB);
    else return nameB.localeCompare(nameA);
  });

  // Split into rows of 8 games each
  for (let i = 0; i < filtered.length; i += 8) {
    const row = document.createElement("div");
    row.className = "game-row";

    const gamesInRow = filtered.slice(i, i + 8);

    gamesInRow.forEach(game => {
      const div = document.createElement("div");
      div.className = "gameholder";

      const a = document.createElement("a");
      a.href = game.link;

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

    const a = document.createElement("a");
    a.href = game.link;
    a.target = "_blank"; // optional: open in new tab

    // Track clicks
    a.addEventListener("click", () => {
      const key = `clicks_${game.name}`;
      let count = parseInt(localStorage.getItem(key)) || 0;
      localStorage.setItem(key, count + 1);
    });
  }
}

function renderPopularGames() {
  const container = document.getElementById("popularGamesContainer");
  container.innerHTML = "";

  const sortedGames = [...allGames].sort((a, b) => {
    const aClicks = parseInt(localStorage.getItem(`clicks_${a.name}`)) || 0;
    const bClicks = parseInt(localStorage.getItem(`clicks_${b.name}`)) || 0;
    return bClicks - aClicks;
  });

  const top5 = sortedGames.slice(0, 5);

  top5.forEach(game => {
    const div = document.createElement("div");
    div.className = "gameholder";

    const a = document.createElement("a");
    a.href = game.link;
    a.target = "_blank";
    a.addEventListener("click", () => {
      const key = `clicks_${game.name}`;
      const count = parseInt(localStorage.getItem(key)) || 0;
      localStorage.setItem(key, count + 1);
      renderPopularGames(); // live update!
    });

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

document.addEventListener("DOMContentLoaded", () => {
  renderPopularGames();
});

function toggleCompactMode() {
  document.querySelectorAll('.gameholder').forEach(game => {
    game.classList.toggle('compact');
  });
}

function sortGames(order) {
  currentSort = order;
  renderGames();
}

function normalizeString(str) {
  return str
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[-\s]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
