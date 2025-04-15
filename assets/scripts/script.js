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
        name: "Five Nights at Freddy's",
        image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/fnaf1.png",
        link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/fnaf1/index.html"
    }
    
    // Add more games here...
  ];
  
  let currentSort = 'asc';
  let currentSearch = '';
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", e => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderGames();
  })
  
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
        }
      }
      
  
  function toggleCompactMode() {
    document.querySelectorAll('.gameholder').forEach(game => {
      game.classList.toggle('compact');
    });
  }
  
  function normalizeString(str) {
    return str
      .toLowerCase() // Convert to lowercase
      .replace(/['’]/g, "") // Remove apostrophes (both straight and curly)
      .replace(/[-\s]/g, "") // Remove hyphens and spaces
      .normalize("NFD") // Normalize characters like accents
      .replace(/[\u0300-\u036f]/g, ""); // Remove accents
  }