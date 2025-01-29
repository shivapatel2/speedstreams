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
            "hindi1": {
                description: "A thrilling Hindi movie with an amazing storyline.",
                movieLinks: { "480p": "#", "720p": "#", "1080p": "#" },
                seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
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
            "punjabi1": {
                description: "A thrilling Punjabi movie with an amazing storyline.",
                movieLinks: { "480p": "#.com", "720p": "#.com", "1080p": "#.com" },
                seriesLinks: { "480p": "#", "720p": "#", "1080p": "#" }
            },
            "hollywood1": {
                description: "An action-packed Hollywood blockbuster.",
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
