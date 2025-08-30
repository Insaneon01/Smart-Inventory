// Initialize theme based on localStorage
function initializeTheme() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
}

// Run on page load
initializeTheme();

// Home button functionality
document.getElementById('home-btn').addEventListener('click', function() {
    window.location.href = '/home';
});
