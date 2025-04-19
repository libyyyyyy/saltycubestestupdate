let allGames = [
  {
    name: "Baldi's Basics",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/baldisbasics.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/baldisbasics/index.html",
    status: "ok"
  },
  {
    name: "Bloons TD 4",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/btd4.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/btd4.swf",
    status: "ok"
  },
  {
    name: "Bloons TD 5",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/btd5.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/btd5.swf",
    status: "ok"
  },
  {
    name: "Cookie Clicker",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/cookieclicker.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/cc/index.html",
    status: "ok"
  },
  {
    name: "Chrome Dinosaur Game",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/dinogame.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/dinogame/index.html",
    status: "broken"
  },
  {
    name: "Crazy Cattle 3D",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/crazycattle3d.png",
    link: "https://crazycattle3d.github.io",
    status: "ok"
  },
  {
    name: "Eaglercraft 1.5.2",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/eaglercraft.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/eaglercraft1.5.2/index.html",
    keywords: ["minecraft"],
    status: "ok"
  },
  {
    name: "Eaglercraft 1.8.8",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/eaglercraft.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/eaglercraft1.8.8/index.html",
    keywords: ["minecraft"],
    status: "ok"
  },
  {
    name: "Eaglercraft 1.12.2",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/eaglercraft.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/eaglercraft1.12.2/index.html",
    keywords: ["minecraft"],
    status: "ok"
  },
  {
    name: "fataltotheflesh",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/fataltotheflesh.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/fataltotheflesh/index.html",
    status: "ok"
  },
  {
    name: "Five Nights at Freddy's 1",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/fnaf1.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/fnaf1/index.html",
    keywords: ["fnaf", "fnaf1"],
    status: "ok"
  },
  {
    name: "Five Nights at Freddy's 2",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/fnaf2.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/fnaf2/index.html",
    keywords: ["fnaf", "fnaf2"],
    status: "ok"
  },
  {
    name: "Five Nights at Freddy's 3",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/fnaf3.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/fnaf3/index.html",
    keywords: ["fnaf", "fnaf3"],
    status: "ok"
  },
  {
    name: "Five Nights at Freddy's 4",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/fnaf4.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/fnaf4/index.html",
    keywords: ["fnaf", "fnaf4"],
    status: "ok"
  },
  {
    name: "Five Nights at Freddy's 4 Halloween Edition",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/fnaf4he.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/fnaf4/index.html",
    keywords: ["fnaf", "fnaf4", "fnaf4he"],
    status: "ok"
  },
  {
    name: "Five Nights at Freddy's World",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/fnafworld.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/fnafworld/index.html",
    keywords: ["fnaf", "fnafworld", "fnafworld"],
    status: "ok"
  },
  {
    name: "Five Nights at Freddy's Ultimate Custom Night",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/fnafucn.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/fnafucn/index.html",
    keywords: ["fnaf", "fnafucn", "ucn"],
    status: "ok"
  },
  {
    name: "Henry Stickmin: Breaking The Bank",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/hsbtb.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/hsbtb.swf",
    status: "ok"
  },
  {
    name: "Henry Stickmin: Escaping The Prison",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/hsetp.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/hsetp.swf",
    status: "ok"
  },
  {
    name: "Henry Stickmin: Fleeing The Complex",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/hsftc.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/hsftc.swf",
    status: "ok"
  },
  {
    name: "Henry Stickmin: Infiltrating The Airship",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/hsita.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/hsita.swf",
    status: "ok"
  },
  {
    name: "Henry Stickmin: Stealing The Diamond",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/hsstd.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/hsstd.swf",
    status: "ok"
  },
  {
    name: "Learn To Fly 1",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/ltf1.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/ltf1.swf",
    status: "ok"
  },
  {
    name: "Learn To Fly 2",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/ltf2.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/ltf2.swf",
    status: "ok"
  },
  {
    name: "Learn To Fly 3",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/ltf3.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/ltf3.swf",
    status: "ok"
  },
  {
    name: "Minecraft Classic",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/minecraftclassic.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/minecraftclassic/index.html",
    status: "ok"
  },
  {
    name: "Plants Vs. Zombies",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/pvz.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/pvz/index.html",
    status: "ok"
  },
  {
    name: "Riddle School",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/riddleschool.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/riddleschool.swf",
    status: "ok"
  },
  {
    name: "Riddle School 2",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/riddleschool2.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/riddleschool2.swf",
    status: "ok"
  },
  {
    name: "Riddle School 3",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/riddleschool3.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/games/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/riddleschool3.swf",
    status: "ok"
  },
  {
    name: "Riddle School 4",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/riddleschool4.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/riddleschool4.swf",
    status: "ok"
  },
  {
    name: "Riddle School 5",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/riddleschool5.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/riddleschool5.swf",
    status: "ok"
  },
  {
    name: "Riddle Transfer",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/riddletransfer.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/riddletransfer.swf",
    status: "ok"
  },
  {
    name: "Riddle Transfer 2",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/riddletransfer2.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/riddletransfer2.swf",
    status: "ok"
  },
  {
    name: "Run 1",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/run1.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/run1.swf",
    status: "ok"
  },
  {
    name: "Run 2",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/run2.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/run2.swf",
    status: "Broken"
  },
  {
    name: "Run 3",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/run3.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/run3.swf",
    status: "ok"
  },
  {
    name: "The Binding of Isaac: Wrath of The Lamb",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/tboiwotl.jpeg",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/tboiwotl.swf",
    status: "ok"
  },
  {
    name: "The World's Hardest Game",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/worldshardestgame.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/worldshardestgame.swf",
    status: "ok"
  },
  {
    name: "The World's Hardest Game 2",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/worldshardestgame2.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/worldshardestgame2.swf",
    status: "ok"
  },
  {
    name: "The World's Hardest Game 3",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/worldshardestgame3.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/worldshardestgame3.swf",
    status: "ok"
  },
  {
    name: "The World's Hardest Game 4",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/worldshardestgame4.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/worldshardestgame4.swf",
    status: "ok"
  },
  {
    name: "The Impossible Quiz",
    image: "https://libyyyyyy.github.io/saltycubes/assets/images/impossiblequiz.png",
    link: "https://libyyyyyy.github.io/saltycubes/assets/swfloader.html?file=https://libyyyyyy.github.io/saltycubes/assets/games/swfs/impossiblequiz.swf",
    status: "ok"
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

  const filtered = allGames.filter(game => {
    const search = normalizeString(currentSearch);
    const nameMatch = normalizeString(game.name).includes(search);
    const keywordMatch = (game.keywords || []).some(keyword =>
      normalizeString(keyword).includes(search)
    );
    return nameMatch || keywordMatch;
  });

  filtered.sort((a, b) => {
    const nameA = normalizeString(a.name);
    const nameB = normalizeString(b.name);
    return currentSort === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });

  for (let i = 0; i < filtered.length; i += 8) {
    const row = document.createElement("div");
    row.className = "game-row";

    const gamesInRow = filtered.slice(i, i + 8);

    gamesInRow.forEach(game => {
      const div = document.createElement("div");
      div.className = "gameholder";

      const img = document.createElement("img");
      img.src = game.image;
      img.alt = game.name;

      const span = document.createElement("div");
      span.className = "gt";
      span.textContent = game.name;

      const status = game.status || "ok";

      if (status === "ok") {
        const a = document.createElement("a");
        a.href = game.link;
        a.target = "_blank";
        a.appendChild(img);
        a.addEventListener("click", () => {
          trackClick(game);
        });
        div.appendChild(a);
      } else {
        div.appendChild(img);
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.textContent = status.toUpperCase();
        div.appendChild(overlay);
      }

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
