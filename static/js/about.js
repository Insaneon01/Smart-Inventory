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

// Add event listeners for the nav buttons
document.getElementById('expired-btn').addEventListener('click', function() {
    window.location.href = '/expire';
});

document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = '/';
});

document.getElementById('profile-btn').addEventListener('click', function() {
    window.location.href = '/profile';
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");
        
        const ripple = button.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }
    
    // Add ripple effect to navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', createRipple);
    });
});
