// Add event listeners for the nav buttons
document.getElementById('about-btn').addEventListener('click', function() {
    window.location.href = '/about';
});

document.getElementById('expired-btn').addEventListener('click', function() {
    window.location.href = '/expire';
});

document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = '/';
});

document.getElementById('profile-btn').addEventListener('click', function() {
    window.location.href = '/profile';
});
