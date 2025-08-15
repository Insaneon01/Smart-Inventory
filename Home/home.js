// Add event listeners for the nav buttons
document.getElementById('about-btn').addEventListener('click', function() {
    window.location.href = '../About/about.html';
});

document.getElementById('expired-btn').addEventListener('click', function() {
    window.location.href = '../Expired/expire.html';
});

document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = '../Landing/landing.html';
});

document.getElementById('profile-btn').addEventListener('click', function() {
    window.location.href = '../Profile/pf.html';
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the modal
    const addItemModal = new bootstrap.Modal(document.getElementById('addItemModal'));
    
    // Add Item button functionality - show modal
    document.querySelector('.add-btn').addEventListener('click', function() {
        addItemModal.show();
    });
    
    // Manual option click handler
    document.getElementById('manual-option').addEventListener('click', function() {
        console.log('Manual entry selected');
        addItemModal.hide();
        // Add your manual entry logic here
        // For example: window.location.href = 'manual-entry.html';
    });
    
    // Camera option click handler
    document.getElementById('camera-option').addEventListener('click', function() {
        console.log('Camera scan selected');
        addItemModal.hide();
        // Add your camera scan logic here
        // For example: window.location.href = 'camera-scan.html';
    });

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
    
    // Add ripple effect to add button
    document.querySelector('.add-btn').addEventListener('click', createRipple);
});
