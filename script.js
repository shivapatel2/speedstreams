// JavaScript to handle opening a movie page in a new tab with modal functionality
function openMoviePage(movieTitle) {
  // Create new page content dynamically
  const newPageContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${movieTitle}</title>
            <style>
               /* Global Body Styling */
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #4e73df, #1cc88a); /* Background Gradient */
    color: #343a40;
    margin: 0;
    padding: 0;
}

/* Page Header */
header {
    background-color: transparent;
    color: white;
    padding: 40px 0;
    text-align: center;
    position: relative;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 10;
}

h1 {
    font-size: 4rem;
    margin: 0;
    font-weight: bold;
    letter-spacing: 2px;
    animation: slideIn 1s ease-out; /* Slide-in animation */
}

@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

/* Search Bar Styling */
.search-bar {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    animation: fadeInUp 1s ease-out;
}

.search-bar input {
    padding: 12px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 50px;
    width: 250px;
    margin-right: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s ease;
}

.search-bar input:focus {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.search-bar button {
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 12px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.search-bar button:hover {
    background-color: #218838;
    transform: scale(1.05);
}

/* Movie Section */
section {
    margin: 40px auto;
    max-width: 1200px;
    padding: 0 20px;
}

/* Section Headings */
h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-align: center;
    color: white;
    animation: fadeIn 1s ease-out; /* Fade-in animation */
}

/* Movie Slider */
.movie-slider {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding-bottom: 20px;
}

.movie-card {
    width: 220px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
    padding: 10px;
    animation: fadeInCard 1s ease-out; /* Fade-in animation for cards */
}

@keyframes fadeInCard {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.movie-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.movie-card p {
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
}

/* Modal Styling */
#modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeInModal 0.3s ease-out;
}

@keyframes fadeInModal {
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

#modalContent {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    width: 80%;
    max-width: 600px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    text-align: center;
    animation: modalContentIn 0.5s ease-out;
}

@keyframes modalContentIn {
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

#modalContent h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #007bff;
}

#modalText {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 20px;
}

/* Modal Buttons */
.modal-button {
    background-color: #007bff;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin: 10px;
}

.modal-button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

/* Close Button Styling */
#closeModalBtn {
    background-color: #e74c3c;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#closeModalBtn:hover {
    background-color: #c0392b;
}

footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
    position: relative;
    bottom: 0;
    width: 100%;
}

/* Responsive Styling for Mobile and Tablet */
@media (max-width: 768px) {
    .movie-slider {
        flex-wrap: wrap;
        justify-content: center;
    }

    .movie-card {
        width: 180px;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    .search-bar input {
        width: 200px;
    }

    .search-bar button {
        padding: 10px 18px;
    }

    #modalContent {
        width: 90%;
        padding: 20px;
    }
}

            </style>
        </head>
        <body>
            <h1>${movieTitle}</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsm7R59dFD3X1IfhBrEXtsWVxo7B8fTZjWQ&s" alt="${movieTitle}">
            <p>Description of ${movieTitle} goes here...</p>
            
            <!-- Modal Buttons -->
            <div>
                <button class="modal-button" id="movieLinkBtn">Movie Link</button>
                <button class="modal-button" id="seriesLinkBtn">Series Link</button>
                <button class="modal-button" id="screenshotBtn">Screenshot</button>
            </div>
            
            <!-- Modals -->
            <div id="modal">
                <div id="modalContent" class="modal-content">
                    <h2>Modal Content for ${movieTitle}</h2>
                    <p id="modalText">Content will be updated here...</p>
                    <button class="modal-button" id="closeModalBtn">Close</button>
                </div>
            </div>

            <script>
                // Function to open a modal with content
                function openModal(content) {
                    const modal = document.getElementById("modal");
                    const modalText = document.getElementById("modalText");
                    modal.style.display = "flex";
                    modalText.textContent = content;
                }

                // Function to close the modal
                function closeModal() {
                    const modal = document.getElementById("modal");
                    modal.style.display = "none";
                }

                // Attach event listeners to buttons
                document.getElementById("movieLinkBtn").addEventListener("click", function() {
                    openModal('Movie Link for ' + "${movieTitle}");
                });
                document.getElementById("seriesLinkBtn").addEventListener("click", function() {
                    openModal('Series Link for ' + "${movieTitle}");
                });
                document.getElementById("screenshotBtn").addEventListener("click", function() {
                    openModal('Screenshot for ' + "${movieTitle}");
                });
                document.getElementById("closeModalBtn").addEventListener("click", closeModal);
            </script>
        </body>
        </html>
    `

  // Open a new window/tab
  const newWindow = window.open();
  newWindow.document.write(newPageContent);
}
