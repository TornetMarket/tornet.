// Login functionality
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
    const quitButton = document.getElementById('quit-button'); // Reference to the Quit button

    miningOutput.style.display = 'block';  // Show the mining output box
    miningOutput.textContent = "Waking up botnet...";
    quitButton.style.display = 'block';  // Show the Quit button once mining starts

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

        // Shuffle messages
        shuffleArray(messages);

        // Function to display the messages with random delays
        function displayMessages(index) {
            if (index < messages.length) {
                miningOutput.textContent = messages[index];

                // Set a random delay between 3 to 8 seconds for the next message
                const delay = getRandomInt(3000, 8000);
                setTimeout(() => {
                    displayMessages(index + 1);
                }, delay);
            } else {
                // Step 2: After botnet connection, initiate the mining process
                setTimeout(() => {
                    miningOutput.textContent = `${cryptoType} process initiated.`;
                    setTimeout(() => {
                        startMiningSimulation(cryptoType);  // Start mining simulation
                    }, 2000);
                }, 2000);
            }
        }

        // Start displaying messages from the first index
        displayMessages(0);
    }, 6000);  // Initial delay for the "Waking up botnet..."
}

// Function to stop mining, show the final balance, and send a Discord webhook embed
async function quitMining() {
    const miningOutput = document.getElementById('mining-output');
    const quitButton = document.getElementById('quit-button');

    // Hide the mining output and quit button
    miningOutput.style.display = 'none';
    quitButton.style.display = 'none';

    // Generate a random number of wallets captured between 2 and 21
    const walletsCaptured = Math.floor(Math.random() * (21 - 2 + 1)) + 2;

    // Determine siphoned amount based on wallets captured
    const minSiphonedAmount = 58;
    const maxSiphonedAmount = 1666;
    const siphonedAmount = ((walletsCaptured / 21) * (maxSiphonedAmount - minSiphonedAmount) + minSiphonedAmount).toFixed(2);

    // Generate a random crypto amount between 0.00020 and 0.018
    const totalMinedCrypto = (Math.random() * (0.018 - 0.0002) + 0.0002).toFixed(5);

    // Get the current time and format it as date and time
    const currentTime = new Date().toLocaleString();

    // Get the type of crypto the user mined (replace with actual mining type)
    const cryptoType = 'BTC';  // If your app tracks this, use the correct crypto type

    // Show notification that mining process has been terminated with final balance
    showNotification(`Mining process terminated. Final balance: ${totalMinedCrypto} ${cryptoType}`);

    // Construct the embed for Discord webhook
    const embed = {
        embeds: [
            {
                title: "Infinity Miner",
                description: `Total Mined Crypto: ${totalMinedCrypto}`,
                color: 0x5865F2, // Set the color to #5865f2
                fields: [
                    {
                        name: "Crypto Mined",
                        value: cryptoType,
                        inline: true
                    },
                    {
                        name: "Amount Mined",
                        value: `${totalMinedCrypto} ${cryptoType}`,
                        inline: true
                    },
                    {
                        name: "Wallets Captured",
                        value: walletsCaptured.toString(),
                        inline: true
                    },
                    {
                        name: "Siphoned Amount",
                        value: `$${siphonedAmount}`,
                        inline: true
                    },
                    {
                        name: "Stopped At",
                        value: currentTime,
                        inline: false
                    }
                ]
            }
        ]
    };

    // Send the embed to the Discord webhook
    await sendToDiscord(embed);
}


// Function to send the embed to the Discord webhook
async function sendToDiscord(embed) {
    const webhookUrl = 'https://discord.com/api/webhooks/1260757099403804713/A-s-RE5auaX9Z3bAm85biOUyZofiCtTSCte7A3Pl4Cc4jDMHURbavQ7b7NKX1ohbQQAS';

    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(embed)
        });
        console.log('Embed sent to Discord');
    } catch (error) {
        console.error('Error sending embed to Discord:', error);
    }
}


// Helper function to generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Shuffle function to randomize the order of an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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
    const min = 0.0003;
    const max = 0.0008;
    return (Math.random() * (max - min) + min).toFixed(4);
}

// Hide the mining output textbox initially
window.onload = function () {
    const miningOutput = document.getElementById('mining-output');
    miningOutput.style.display = 'none';  // Hide the mining output box initially
}

// Wake Lock API to prevent mobile devices from going into sleep mode
let wakeLock = null;

// Function to request a wake lock
async function requestWakeLock() {
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        console.log('Wake lock is active.');

        // If the wake lock is released (e.g., when the screen is locked or the tab is switched), request it again
        wakeLock.addEventListener('release', () => {
            console.log('Wake lock has been released.');
        });
    } catch (err) {
        console.error(`${err.name}, ${err.message}`);
    }
}

// Request wake lock when the page is loaded
window.addEventListener('load', requestWakeLock);

// Re-request wake lock when the page becomes visible again (e.g., when switching tabs)
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && wakeLock !== null) {
        requestWakeLock();
    }
});
