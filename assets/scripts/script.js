let allGames = [
    {
      name: "Baldi's Basics",
      image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/baldisbasics.png",
      link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/baldisbasics/index.html"
    },
    {
      name: "Another Game",
      image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/anothergame.png",
      link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/anothergame/index.html"
    },
    {
      name: "Cool Math Clone",
      image: "https://libyyyyyy.github.io/saltycubestestupdate/assets/images/coolmath.png",
      link: "https://libyyyyyy.github.io/saltycubestestupdate/assets/games/coolmath/index.html"
    }
    // Add more games here...
  ];
  
  let currentSort = 'asc';
  let currentSearch = '';
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", e => {
      currentSearch = e.target.value.toLowerCase();
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
  
    let filtered = allGames.filter(game =>
      game.name.toLowerCase().includes(currentSearch)
    );
  
    filtered.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
  
      if (currentSort === 'asc') return nameA.localeCompare(nameB);
      else return nameB.localeCompare(nameA);
    });
  
    filtered.forEach(game => {
      const div = document.createElement("div");
      div.className = "gameholder";
  
      const a = document.createElement("a");
      a.href = game.link;
  
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