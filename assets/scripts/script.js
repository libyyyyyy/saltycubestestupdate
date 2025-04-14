// List of games
const gameList = [
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
    // Add more games here
  ];
  
  // Generate game tiles
  const container = document.getElementById("gamesContainer");
  
  gameList.forEach(game => {
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
  
  // Toggle compact mode
  function toggleCompactMode() {
    const games = document.querySelectorAll('.gameholder');
    games.forEach(game => {
      game.classList.toggle('compact');
    });
  }