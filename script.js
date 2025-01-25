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
        /* General Page Styling */
        body {
            font-family: 'Arial', sans-serif;
            background-color: black; /* Black background */
            color: #fff; /* White text */
            margin: 0;
            padding: 0;
        }

        /* Table Styling */
        table {
            width: 80%;
            margin: 40px auto;
            border-collapse: collapse;
            animation: glow 3s ease-in-out infinite; /* Glowing margin animation */
        }

        @keyframes glow {
            0% {
                box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
            }
            50% {
                box-shadow: 0 0 20px rgba(0, 255, 0, 1);
            }
            100% {
                box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
            }
        }

        table, th, td {
            border: 1px solid #fff; /* White border */
            text-align: center;
            padding: 20px;
        }

        th {
            font-size: 1.5rem;
            background-color: black;
            color: #00ff00; /* Glowing green text for heading */
            font-weight: bold;
        }

        td {
            font-size: 1.2rem;
            background-color: black;
            color: white;
        }

        /* Heading Styling (no animation) */
        h1 {
            font-size: 3rem;
            text-align: center;
            margin: 40px 0;
            color: #00ff00; /* Glowing green color for heading */
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
            background-color: black;
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
            table {
                width: 100%;
            }

            h1 {
                font-size: 2.5rem;
            }

            th {
                font-size: 1.2rem;
            }

            td {
                font-size: 1rem;
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
