// Generate random color
const randomColor = function () {
    const hex = '0123456789ABCDEF'; // Hexadecimal characters
    let color = '#'; // Initialize color with '#'
    for (let i = 0; i < 6; i++) { // Loop to generate a 6-character hex color code
        color += hex[Math.floor(Math.random() * 16)]; // Append a random hex character
    }
    return color; // Return the generated color
}

// Variable to store the interval ID
let intervalId;

// Function to start changing the background color
const startChangingColor = function () {
    if (!intervalId) { // Check if the interval is not already set
        intervalId = setInterval(changeBgColor, 1000); // Set interval to change color every second
    }

    // Function to change the background color
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor(); // Set the background color to a random color
    }
};

// Function to stop changing the background color
const stopChangingColor = function () {
    clearInterval(intervalId); // Clear the interval
    intervalId = null; // Reset the interval ID
};

// Add event listener to the "start" button to start changing the color
document.querySelector('#start').addEventListener('click', startChangingColor);

// Add event listener to the "stop" button to stop changing the color
document.querySelector('#stop').addEventListener('click', stopChangingColor);