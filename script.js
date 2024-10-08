document.querySelector('.login-button').addEventListener('click', function (e) {
    e.preventDefault();

    // Get the username and password entered by the user
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // The correct username and password
    const validUsername = "swiping.cc";
    const validPassword = "venus420!";

    // Check if the entered username and password are correct
    if (username === validUsername && password === validPassword) {
        // Show welcome message if the credentials are correct
        showNotification(`Welcome, ${username}`);

        // After 2 seconds, redirect the user to the home.html page
        setTimeout(function () {
            window.location.href = "home.html";
        }, 2000);
    } else {
        // Show error message if the credentials are incorrect
        showNotification("The username or password entered is incorrect.");
    }
});

// Function to display the notification
function showNotification(message) {
    // Create the notification div
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;

    // Append the notification to the body
    document.body.appendChild(notification);

    // After 3 seconds, remove the notification
    setTimeout(function () {
        notification.remove();
    }, 3000);
}

// Function to start mining based on the user's selection
function startMining(cryptoType) {
    const miningOutput = document.getElementById('mining-output');
    miningOutput.style.display = 'block';  // Show the textbox when a mining option is clicked
    miningOutput.textContent = "Waking up botnet...";

    // Step 1: Wait 6 seconds for "Waking up botnet..."
    setTimeout(() => {
        let messages = [
            "Connecting to botnet..",
            "Connected to 129.39.21.2.",
            "Masking zombies under proxies..",
            "Using local network to initiate mining process..",
            "Spoofing network IP..",
            "Socks 5 Proxy active.",
            "Waiting for response from Tornet Market...",
            "Approved.",
            "Started."
        ];

        let messageIndex = 0;
        let messageInterval = setInterval(() => {
            miningOutput.textContent = messages[messageIndex];
            messageIndex++;

            // Clear the interval after the last message
            if (messageIndex === messages.length) {
                clearInterval(messageInterval);

                // Step 2: After botnet connection, initiate the mining process
                setTimeout(() => {
                    miningOutput.textContent = `${cryptoType} process initiated.`;
                    setTimeout(() => {
                        startMiningSimulation(cryptoType);  // Start mining simulation
                    }, 2000);
                }, 2000);
            }
        }, getRandomInt(2000, 6000));  // Random interval between 2 and 6 seconds
    }, 6000);  // Initial delay for the "Waking up botnet..."
}

// Helper function to generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Function to start the mining simulation
function startMiningSimulation(cryptoType) {
    const miningOutput = document.getElementById('mining-output');

    // Simulate mining every 1 second
    setInterval(() => {
        const randomAddress = generateRandomAddress();
        const randomBalance = generateRandomBalance();

        // Update the mining output message
        miningOutput.textContent = `│ TORNET IS MINING.. │ ${cryptoType} │ ${randomAddress} │ BALANCE: ${randomBalance} │`;
    }, 100);
}

// Generate a random mining address (starts with "1")
function generateRandomAddress() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let address = '1';
    for (let i = 0; i < 33; i++) {
        address += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return address;
}

// Generate a random balance between 0.0003 and 0.0008
function generateRandomBalance() {
    const min = 0.0001;
    const max = 0.0009;
    return (Math.random() * (max - min) + min).toFixed(4);
}

// Hide the mining output textbox initially
window.onload = function () {
    const miningOutput = document.getElementById('mining-output');
    miningOutput.style.display = 'none';  // Hide the mining output box initially
}
