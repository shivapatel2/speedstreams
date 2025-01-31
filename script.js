document.addEventListener("DOMContentLoaded", function () {
    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach(card => {
        card.addEventListener("click", function () {
            const movieId = card.dataset.movieId;
            const movieTitle = card.querySelector("h3").innerText;
            const movieImage = card.querySelector("img").src;

            openMoviePage(movieId, movieTitle, movieImage);
        });
    });

    function openMoviePage(movieId, movieTitle, movieImage) {
        const movieLinks = {
             
  /*Hindi Movies starts Here copy from "Skyforce" till }; to add new movies*/ 
 /*change movie name,description,links in MovieLinks replacing # if series then in series link*/
            "SkyForce": {
                description: "A thrilling Hindi movie with an amazing storyline.",
                movieLinks: { "480p": "https://runurl.in/AjcJt0O", "720p": "https://runurl.in/AjcJt0O", "1080p": "https://runurl.in/AjcJt0O" }
            },
            "hindi2": {
                description: "A thrilling Hindi movie with an amazing storyline.",
                movieLinks: { "480p": "#", "720p": "#", "1080p": "#" },
                seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
            },
            "hindi3": {
                description: "A thrilling Hindi movie with an amazing storyline.",
                movieLinks: { "480p": "#", "720p": "#", "1080p": "#" },
               seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
            },

  /*Pu jabi Movies starts Here copy from "punjabi1" till }; to add new movies*/ 
  /*change movie name,description,links in MovieLinks replacing # if series then in series link*/
            "punjabi1": {
                description: "A thrilling Punjabi movie with an amazing storyline.",
                movieLinks: { "480p": "#.com", "720p": "#.com", "1080p": "#.com" },
                seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
            },

 /*Hollywood Movies starts Here copy from "Hollywood1" till }; to add new movies*/
 /*change movie name,description,links in MovieLinks replacing # if series then in series link*/
            "hollywood1": {
                description: "An action-packed Hollywood blockbuster.",
                movieLinks: { "480p": "#", "720p": "#", "1080p": "#" },
                seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
            },
           "hollywood2": {
                description: "An action-packed Hollywood blockbuster.",
                movieLinks: { "480p": "#", "720p": "#", "1080p": "#" },
                seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
            },
           "hollywood3": {
                description: "An action-packed Hollywood blockbuster.",
                movieLinks: { "480p": "#", "720p": "#", "1080p": "#" },
                seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
            },
/*Animes starts Here copy from "Anime1" till }; to add new movies*/
  /*change movie name,description,links in MovieLinks replacing # if series then in series link*/
            "Anime1": { 
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
            <html>
            <head>
                <title>${movieTitle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="description" content="RMG Movies - Stream latest Hindi, Punjabi, and Hollywood movies in HD quality">
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 20px; background: #111; color: white; }
                    .container { max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; background: #222; box-shadow: 0px 0px 10px rgba(255,255,255,0.2); }
                    img { max-width: 100%; height: auto; border-radius: 10px; }
                    .description { font-size: 18px; margin-top: 10px; color: #ccc; }
                    .buttons { margin-top: 20px; }
                    .btn { display: block; width: 100%; padding: 12px; margin: 10px 0; font-size: 16px; text-decoration: none; color: white; background: linear-gradient(45deg, #007BFF, #00D4FF); border: none; border-radius: 8px; cursor: pointer; transition: 0.3s; }
                    .btn:hover { background: linear-gradient(45deg, #00D4FF, #007BFF); }
                    .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); }
                    .modal-content { background: #fff; padding: 20px; margin: 10% auto; width: 80%; max-width: 400px; border-radius: 5px; color: black; text-align: left; }
                    .close-modal { font-size: 20px; cursor: pointer; float: right; }
                    .download-links { display: flex; flex-direction: column; align-items: center; }
                    .download-links a { display: block; width: 80%; padding: 12px; margin-top: 8px; font-size: 16px; text-align: center; text-decoration: none; color: white; background: linear-gradient(45deg, #FF416C, #FF4B2B); border-radius: 8px; transition: 0.3s; }
                    .download-links a:hover { background: linear-gradient(45deg, #FF4B2B, #FF416C); }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>${movieTitle}</h1>
                    <img src="${movieImage}" alt="${movieTitle}">
                    <p class="description">${movieData.description}</p>
                    
                    <div class="buttons">
                        <button class="btn" onclick="openLinks('Movie Links')">🎬 Movie Links</button>
                        <button class="btn" onclick="openLinks('Series Links')">📺 Series Links</button>
                        <button class="btn" onclick="openTutorial()">📖 Tutorial</button>
                    </div>

                    <button id="homeBtn" class="btn">🏠 Go to Home</button> <!-- Home Button -->

                </div>

                <!-- Movie & Series Links Modal -->
                <div id="linksModal" class="modal">
                    <div class="modal-content">
                        <span class="close-modal" onclick="closeModal()">&times;</span>
                        <h2 id="modalTitle"></h2>
                        <div class="download-links" id="modalLinks"></div>
                    </div>
                </div>

                <!-- Tutorial Modal -->
                <div id="tutorialModal" class="modal">
                    <div class="modal-content">
                        <span class="close-modal" onclick="closeModal()">&times;</span>
                        <h2>Tutorial for ${movieTitle}</h2>
                        <h3>🎬 Tutorial for Movies</h3>
                        <a href="#">Movie Tutorial Link 1</a>
                        <a href="#">Movie Tutorial Link 2</a>
                        <h3>📺 Tutorial for Series</h3>
                        <a href="#">Series Tutorial Link 1</a>
                        <a href="#">Series Tutorial Link 2</a>
                    </div>
                </div>

                <script>
                    const movieData = ${JSON.stringify(movieData)};

                    // Handle Home Button Click
                    document.getElementById("homeBtn").addEventListener("click", function() {
                        window.location.href = "/";  // Redirect to Home Page
                    });

                    function openLinks(category) {
                        const categoryKey = category.toLowerCase().includes("movie") ? "movieLinks" : "seriesLinks";
                        
                        document.getElementById("modalTitle").innerText = category;
                        const linksContainer = document.getElementById("modalLinks");

                        if (!movieData[categoryKey]) {
                            alert("Links not available for this category.");
                            return;
                        }

                        linksContainer.innerHTML = Object.keys(movieData[categoryKey]).map(resolution => {
                            const link = movieData[categoryKey][resolution];
                            return \`
                                <h3>\${resolution}</h3>
                                <a href="\${link}" target="_blank">Download Now</a>
                            \`;
                        }).join("");

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
});


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const movieSections = document.querySelectorAll(".movie-section");
    const movieCards = document.querySelectorAll(".movie-card");
    const errorMessage = document.getElementById("noResultsMessage");  // Element to display no results message
    const fuzzySearchThreshold = 0.6;  // The threshold for fuzzy matching (adjustable)

    // Function to filter movies based on the search term (fuzzy search)
    function filterMovies(searchTerm) {
        let foundMovie = false;
        let matchedMovies = 0;

        // Hide all movie sections initially
        movieSections.forEach(section => {
            section.style.display = "none"; 
        });

        // Loop through each movie card and check for matches
        movieCards.forEach(card => {
            const movieTitle = card.querySelector("h3").innerText.toLowerCase();
            const movieSection = card.closest(".movie-section");
            
            // Check for fuzzy match
            const similarity = calculateSimilarity(movieTitle, searchTerm.toLowerCase());

            // If a fuzzy match exceeds the threshold, display the movie and its section
            if (similarity >= fuzzySearchThreshold || movieTitle.includes(searchTerm.toLowerCase())) {
                card.style.display = "block";  // Show the movie card
                movieSection.style.display = "block";  // Show the section containing the card
                foundMovie = true;  // A matching movie was found
                matchedMovies++;
            } else {
                card.style.display = "none";  // Hide the movie card if no match
            }
        });

        // Show or hide the "No results" message based on search results
        if (!foundMovie && searchTerm !== "") {
            errorMessage.style.display = "block";  // Show error message
            errorMessage.innerHTML = `No exact matches found for "${searchTerm}". try again wih exact keywords.`;
        } else if (matchedMovies > 0) {
            errorMessage.style.display = "none";  // Hide error message if there are results
        } else {
            errorMessage.style.display = "none";  // Hide error message if search term is empty
        }
    }

    // Simple function to calculate string similarity (fuzzy matching)
    function calculateSimilarity(str1, str2) {
        let longer = str1;
        let shorter = str2;
        if (str1.length < str2.length) {
            longer = str2;
            shorter = str1;
        }

        const longerLength = longer.length;
        if (longerLength === 0) {
            return 1.0;
        }

        return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }

    // Function to calculate the Levenshtein distance between two strings
    function editDistance(a, b) {
        const tmp = [];
        let i, j, alen = a.length, blen = b.length, res;

        for (i = 0; i <= alen; i++) {
            tmp[i] = [i];
        }

        for (j = 0; j <= blen; j++) {
            tmp[0][j] = j;
        }

        for (i = 1; i <= alen; i++) {
            for (j = 1; j <= blen; j++) {
                res = a[i - 1] === b[j - 1] ? 0 : 1;
                tmp[i][j] = Math.min(tmp[i - 1][j] + 1, tmp[i][j - 1] + 1, tmp[i - 1][j - 1] + res);
            }
        }

        return tmp[alen][blen];
    }

    // Event listener for the search input (real-time search while typing)
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase(); // Convert the search term to lowercase
        filterMovies(searchTerm);
    });

    // Event listener for the search button
    searchBtn.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase(); // Get the search term from input
        filterMovies(searchTerm);
    });
});
