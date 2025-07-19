// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
    const signinModal = new bootstrap.Modal(document.getElementById('signinModal'));

    // Add click handlers for buttons
    document.getElementById('signup-btn').addEventListener('click', () => {
        signupModal.show();
    });

    document.getElementById('signin-btn').addEventListener('click', () => {
        signinModal.show();
    });

    // Get Started button handler
    document.getElementById('get-started-btn').addEventListener('click', () => {
        // Trigger the sign up button click
        document.getElementById('signup-btn').click();
    });

    // Handle switching between modals
    document.getElementById('showSignin').addEventListener('click', () => {
        signupModal.hide();
        signinModal.show();
    });

    document.getElementById('showSignup').addEventListener('click', () => {
        signinModal.hide();
        signupModal.show();
    });

    // Form validation for signup
    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get all form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validation checks
        if (!name) {
            alert('Please enter your full name');
            return;
        }
        
        if (!email || !email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }
        
        if (!phone || phone.length < 10) {
            alert('Please enter a valid phone number');
            return;
        }
        
        if (!password || password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // If all validations pass
        console.log('Sign up successful!');
        signupModal.hide();
        // Redirect to home page
        window.location.href = '../Home/home.html';
    });

    // Form validation for signin
    document.getElementById('signinForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form inputs
        const email = document.getElementById('signinEmail').value.trim();
        const password = document.getElementById('signinPassword').value;
        
        // Validation checks
        if (!email || !email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }
        
        if (!password) {
            alert('Please enter your password');
            return;
        }
        
        // If all validations pass
        console.log('Sign in successful!');
        signinModal.hide();
        // Redirect to home page
        window.location.href = '../Home/home.html';
    });

    // Get Started button functionality
    document.querySelector('.btn-lg').addEventListener('click', () => {
        signupModal.show();
    });

    // Get Started button handler
    document.getElementById('get-started-btn').addEventListener('click', () => {
        // Trigger the sign up button click
        document.getElementById('signup-btn').click();
    });
});
