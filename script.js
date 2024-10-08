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
