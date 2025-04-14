let allGames = [
    {
      name: "Baldi's Basics",
      image: "/assets/images/baldisbasics.png",
      link: "assets/games/baldisbasics/index.html"
    },
    {
      name: "Another Game",
      image: "/assets/images/anothergame.png",
      link: "assets/games/anothergame/index.html"
    },
    {
      name: "Cool Math Clone",
      image: "/assets/images/coolmath.png",
      link: "assets/games/coolmath/index.html"
    }
    // Add more games here...
  ];
  
  let currentSort = 'asc';
  let currentSearch = '';
  const baseUrl = 'https://libyyyyyy.github.io/saltycubestestupdate/'; // Base URL
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", e => {
      currentSearch = e.target.value.trim().toLowerCase(); // Get input value
      renderGames();
    });
  
    renderGames();
  });
  
  function sortGames(order) {
    currentSort = order;
    renderGames();
  }
  
  function renderGames() {
    const container = document.getElementById("gamesContainer");
    container.innerHTML = ""; // Clear previous content
  
    let filtered = allGames.filter(game => {
      return normalizeString(game.name).includes(normalizeString(currentSearch));
    });
  
    filtered.sort((a, b) => {
      const nameA = normalizeString(a.name);
      const nameB = normalizeString(b.name);
  
      if (currentSort === 'asc') return nameA.localeCompare(nameB);
      else return nameB.localeCompare(nameA);
    });
  
    filtered.forEach(game => {
      const div = document.createElement("div");
      div.className = "gameholder";
  
      const a = document.createElement("a");
      a.href = baseUrl + game.link;  // Prepend the base URL
  
      const img = document.createElement("img");
      img.src = game.image;
      img.alt = game.name;
  
      const span = document.createElement("span");
      span.className = "gt";
      span.textContent = game.name;
  
      a.appendChild(img);
      div.appendChild(a);
      div.appendChild(span);
      container.appendChild(div);
    });
  }
  
  function toggleCompactMode() {
    document.querySelectorAll('.gameholder').forEach(game => {
      game.classList.toggle('compact');
    });
  }
  
  // Normalize function to make search more broad (removes apostrophes, etc.)
  function normalizeString(str) {
    return str
      .toLowerCase() // Convert to lowercase
      .replace(/['’]/g, "") // Remove apostrophes (both straight and curly)
      .replace(/[-\s]/g, "") // Remove hyphens and spaces
      .normalize("NFD") // Normalize characters like accents
      .replace(/[\u0300-\u036f]/g, ""); // Remove accents
  }
  