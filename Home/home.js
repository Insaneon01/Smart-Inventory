

// Add event listeners for the nav buttons
document.getElementById('about-btn').addEventListener('click', function() {
    window.location.href = '../About/about.html';
});

document.getElementById('expired-btn').addEventListener('click', function() {
    window.location.href = '../Expired/expire.html';
});

document.getElementById('logout-btn').addEventListener('click', function() {
    // Handle Logout button click
    window.location.href = 'landing.html';
});

// Add Item button functionality
document.querySelector('.add-btn').addEventListener('click', function() {
    // Handle Add Item button click
    console.log('Add Item button clicked');
});

// Add Profile button functionality
document.getElementById('profile-btn').addEventListener('click', function() {
    // Handle Profile button click
    console.log('Profile button clicked');
});
