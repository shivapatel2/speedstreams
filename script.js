// --- Utility: Debounce Function ---
// This function delays the execution of a callback until a specified wait time has passed.
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// --- Movie Card Click & Search Functionality ---
document.addEventListener("DOMContentLoaded", function () {
  // Event delegation for movie card clicks.
  document.body.addEventListener("click", function (event) {
    const card = event.target.closest(".movie-card");
    if (card) {
      const movieId = card.dataset.movieId;
      const movieTitle = card.querySelector("h3").innerText;
      const movieImage = card.querySelector("img").src;
      openMoviePage(movieId, movieTitle, movieImage);
    }
  });

  // Search functionality
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const movieSections = document.querySelectorAll(".movie-section");
  const movieCards = document.querySelectorAll(".movie-card");
  const errorMessage = document.getElementById("noResultsMessage");
  const fuzzySearchThreshold = 0.6;

  // Filter movies based on search term using Jaccard Similarity
  function filterMovies(searchTerm) {
    let foundMovie = false;
    // Hide all movie sections initially
    movieSections.forEach((section) => {
      section.style.display = "none";
    });
    movieCards.forEach((card) => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      const section = card.closest(".movie-section");
      const similarity = jaccardSimilarity(title, searchTerm.toLowerCase());
      if (similarity >= fuzzySearchThreshold || title.includes(searchTerm.toLowerCase())) {
        card.style.display = "block";
        section.style.display = "block";
        foundMovie = true;
      } else {
        card.style.display = "none";
      }
    });
   if (!foundMovie && searchTerm.trim() !== "") {
  errorMessage.style.display = "block";
  errorMessage.textContent = `No matches found for "${searchTerm}". Try different keywords.`;
} else {
  errorMessage.style.display = "none";
}
  }

  // Jaccard Similarity for fuzzy search
  function jaccardSimilarity(str1, str2) {
    const set1 = new Set(str1);
    const set2 = new Set(str2);
    const intersection = new Set([...set1].filter((x) => set2.has(x)));
    return intersection.size / (set1.size + set2.size - intersection.size);
  }

  // Create a debounced version of the filterMovies function to reduce main-thread blocking.
  const debouncedFilterMovies = debounce(() => {
    filterMovies(searchInput.value.toLowerCase());
  }, 300);

  // Use the debounced function for input and keypress events.
  searchInput.addEventListener("input", debouncedFilterMovies);
  searchBtn.addEventListener("click", debouncedFilterMovies);
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      debouncedFilterMovies();
    }
  });
});

// --- Movie Page & Modal Handling ---
function openMoviePage(movieId, movieTitle, movieImage) {
  const movieLinks = {
    
    /*Hindi Movies starts Here copy from "Skyforce" till }; to add new movies*/ 
      /*change movie name,description,links in MovieLinks replacing # if series then in series link*/
    
    SkyForce: {
      description: "A thrilling Hindi movie with an amazing storyline.",
      movieLinks: { "480p": "https://runurl.in/AjcJt0O", "720p": "https://runurl.in/AjcJt0O", "1080p": "https://runurl.in/AjcJt0O" }
    },
   
    hindi2: {
      description: "A thrilling Hindi movie with an amazing storyline.",
      movieLinks: { "480p": "#", "720p": "#", "1080p": "#" },
      seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
    },
    
    hindi3: {
      description: "A thrilling Hindi movie with an amazing storyline.",
      movieLinks: { "480p": "#", "720p": "#", "1080p": "#" },
      seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
    },
   
     /*Punjabi Movies starts Here copy from "punjabi1" till }; to add new movies*/ 
      /*change movie name,description,links in MovieLinks replacing # if series then in series link*/
    
    punjabi1: {
      description: "A thrilling Punjabi movie with an amazing storyline.",
      movieLinks: { "480p": "#.com", "720p": "#.com", "1080p": "#.com" },
      seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
    },
   
    /*Hollywood Movies starts Here copy from "Hollywood1" till }; to add new movies*/ 
      /*change movie name,description,links in MovieLinks replacing # if series then in series link*/
    
    hollywood1: {
      description: "An action-packed Hollywood blockbuster.",
      movieLinks: { "480p": "#", "720p": "#", "1080p": "#" },
      seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
    },
   
    hollywood2: {
      description: "An action-packed Hollywood blockbuster.",
      movieLinks: { "480p": "#", "720p": "#", "1080p": "#" },
      seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
    },
   
    hollywood3: {
      description: "An action-packed Hollywood blockbuster.",
      movieLinks: { "480p": "#", "720p": "#", "1080p": "#" },
      seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
    },

    RCBvsKKR: {
      description: "Watch the thrilling IPL match between RCB and KKR.",
      category: "ipl",
      movieLinks: { "480p": "#", "720p": "#", "1080p": "#" }
    },
    
    /*Anime's starts Here copy from "Anime1" till }; to add new movies*/ 
      /*change movie name,description,links in MovieLinks replacing # if series then in series link*/
    
    Anime1: {
      description: "An action-packed anime movie.",
      movieLinks: { "480p": "#", "720p": "#", "1080p": "#" },
      seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
    }
  };
  
  const movieData = movieLinks[movieId];
  if (!movieData) {
    alert("Movie details not available!");
    return;
  }
  const moviePageContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="SPEED Movies - Stream latest Hindi, Punjabi, Hollywood movies in HD quality">
    <title>${movieTitle}</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
        background: #111;
        color: white;
      }
      .container {
        max-width: 600px;
        margin: auto;
        padding: 20px;
        border-radius: 10px;
        background: #222;
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
      }
      img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
      }
      .description {
        font-size: 18px;
        margin-top: 10px;
        color: #ccc;
      }
      .buttons {
        margin-top: 20px;
      }
      .btn {
        display: block;
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        font-size: 16px;
        text-decoration: none;
        color: white;
        background: linear-gradient(45deg, #007BFF, #00D4FF);
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;
      }
      .btn:hover {
        background: linear-gradient(45deg, #00D4FF, #007BFF);
      }
      .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
      }
      .modal-content {
        background: #fff;
        padding: 20px;
        margin: 10% auto;
        width: 80%;
        max-width: 400px;
        border-radius: 5px;
        color: black;
        text-align: left;
      }
      .close-modal {
        font-size: 20px;
        cursor: pointer;
        float: right;
      }
      .download-links {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .download-links a {
        display: block;
        width: 80%;
        padding: 12px;
        margin-top: 8px;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
        color: white;
        background: linear-gradient(45deg, #FF416C, #FF4B2B);
        border-radius: 8px;
        transition: 0.3s;
      }
      .download-links a:hover {
        background: linear-gradient(45deg, #FF4B2B, #FF416C);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>${movieTitle}</h1>
      <img src="${movieImage}" alt="${movieTitle}">
      <p class="description">${movieData.description}</p>
      <div class="buttons">
        <button class="btn" onclick="openLinks('Movie Links')">🎬 PLAY IT FOR FREE</button>
        ${movieData.category !== 'ipl' ? `
          <button class="btn" onclick="openLinks('Series Links')">📺 Series Links</button>
          <button class="btn" onclick="openTutorial()">📖 Tutorial</button>
        ` : ''}
      </div>
      <button id="homeBtn" class="btn">🏠 Go to Home</button>
    </div>

    <div id="linksModal" class="modal">
      <div class="modal-content">
        <span class="close-modal" onclick="closeModal()">×</span>
        <h2 id="modalTitle"></h2>
        <div class="download-links" id="modalLinks"></div>
      </div>
    </div>

    ${movieData.category !== 'ipl' ? `
      <div id="tutorialModal" class="modal">
        <div class="modal-content">
          <span class="close-modal" onclick="closeModal()">×</span>
          <h2>Tutorial for ${movieTitle}</h2>
          <h3>🎬 Tutorial for Movies</h3>
          <a href="#">Movie Tutorial Link 1</a>
          <a href="#">Movie Tutorial Link 2</a>
          <h3>📺 Tutorial for Series</h3>
          <a href="#">Series Tutorial Link 1</a>
          <a href="#">Series Tutorial Link 2</a>
        </div>
      </div>
    ` : ''}

    <script>
      const movieData = ${JSON.stringify(movieData)};
      document.getElementById("homeBtn").addEventListener("click", function() {
        window.location.href = "";  // Replace with your actual homepage URL
      });

      function openLinks(category) {
        const categoryKey = category.toLowerCase().includes("movie") ? "movieLinks" : "seriesLinks";
        const linksContainer = document.getElementById("modalLinks");

        if (!movieData[categoryKey]) {
          alert("Links not available for this category.");
          return;
        }

        // Clear existing links
        linksContainer.innerHTML = "";

        if (movieData.category === "ipl") {
          // For IPL category, show a single "PLAY NOW" button
          document.getElementById("modalTitle").innerText = "PLAY NOW";

          const playNowButton = document.createElement("button");
          playNowButton.className = "btn";
          playNowButton.innerText = "▶️ PLAY NOW";
          playNowButton.onclick = function () {
            const link = Object.values(movieData[categoryKey])[0]; // Use the first available link
            window.open(link, "_blank");
          };

          linksContainer.appendChild(playNowButton);
        } else {
          // For other categories, show multiple resolution links
          document.getElementById("modalTitle").innerText = category;

          linksContainer.innerHTML = Object.keys(movieData[categoryKey]).map(resolution => {
            const link = movieData[categoryKey][resolution];
            return \`
              <h3>\${resolution}</h3>
              <a href="\${link}" target="_blank">Download Now</a>
            \`;
          }).join("");
        }

        document.getElementById("linksModal").style.display = "block";
      }

      function openTutorial() {
        document.getElementById("tutorialModal").style.display = "block";
      }

      function closeModal() {
        document.getElementById("linksModal").style.display = "none";
        document.getElementById("tutorialModal").style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target.classList.contains("modal")) {
          closeModal();
        }
      };
    </script>
  </body>
  </html>
`;
  const movieWindow = window.open("", "_blank");
  movieWindow.document.write(moviePageContent);
  movieWindow.document.close();
}

// --- In-Page Modal Functions (if needed) ---
function closeMovieModal() {
  document.getElementById("movieModal").style.display = "none";
}

function closeLinksModal() {
  document.getElementById("linksModal").style.display = "none";
}

function closeTutorialModal() {
  document.getElementById("tutorialModal").style.display = "none";
}

// Close modals on Escape key press
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeLinksModal();
    closeTutorialModal();
  }
});
