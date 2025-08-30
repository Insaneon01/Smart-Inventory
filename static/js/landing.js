// Enhanced form validation functions
function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorDiv = input.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }

    const error = document.createElement('div');
    error.className = 'error-message text-danger mt-1';
    error.style.fontSize = '0.875rem';
    error.textContent = message;
    input.parentNode.appendChild(error);
    input.style.borderColor = '#dc3545';
}

function clearError(inputId) {
    const input = document.getElementById(inputId);
    const errorDiv = input.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
    input.style.borderColor = '#f9f6d2';
}

// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    let signupModal, signinModal;
    
    try {
        signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
        signinModal = new bootstrap.Modal(document.getElementById('signinModal'));
    } catch (error) {
        console.error('Bootstrap modal initialization failed:', error);
        return;
    }
    
    // Add click handlers for buttons
    const signupBtn = document.getElementById('signup-btn');
    const signinBtn = document.getElementById('signin-btn');
    
    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            signupModal.show();
        });
    }

    if (signinBtn) {
        signinBtn.addEventListener('click', () => {
            signinModal.show();
        });
    }

    // Handle switching between modals
    const showSigninLink = document.getElementById('showSignin');
    const showSignupLink = document.getElementById('showSignup');
    
    if (showSigninLink) {
        showSigninLink.addEventListener('click', () => {
            signupModal.hide();
            setTimeout(() => {
                signinModal.show();
            }, 300);
        });
    }

    if (showSignupLink) {
        showSignupLink.addEventListener('click', () => {
            signinModal.hide();
            setTimeout(() => {
                signupModal.show();
            }, 300);
        });
    }

    // Form validation for signup with comprehensive error handling
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Signup form submitted');
            
            // Get all form inputs
            const name = document.getElementById('name')?.value?.trim() || '';
            const email = document.getElementById('email')?.value?.trim() || '';
            const phone = document.getElementById('phone')?.value?.trim() || '';
            const password = document.getElementById('password')?.value || '';
            const confirmPassword = document.getElementById('confirmPassword')?.value || '';

            // Validation checks
            if (!name) {
                alert('Please enter your full name');
                return false;
            }

            if (!email || !email.includes('@')) {
                alert('Please enter a valid email address');
                return false;
            }

            if (!phone || phone.length < 10) {
                alert('Please enter a valid phone number');
                return false;
            }

            if (!password || password.length < 6) {
                alert('Password must be at least 6 characters long');
                return false;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return false;
            }

            // If all validations pass
            console.log('Sign up validation passed!');
            
            // Hide modal first
            signupModal.hide();
            
            // Multiple redirect attempts with different methods
            setTimeout(() => {
                console.log('Attempting redirect to home page...');
                
                try {
                    // Try different redirect methods
                    if (typeof window !== 'undefined') {
                        // Method 1: Standard href
                        window.location.href = '/home';
                        
                        // Fallback method 2: replace (in case href fails)
                        setTimeout(() => {
                            window.location.replace('/home');
                        }, 100);
                        
                        // Fallback method 3: assign (last resort)
                        setTimeout(() => {
                            window.location.assign('/home');
                        }, 200);
                    }
                } catch (error) {
                    console.error('Redirect failed:', error);
                    alert('Registration successful! Please navigate to the home page manually.');
                }
            }, 500);
            
            return false;
        });
    }

    // Form validation for signin with comprehensive error handling
    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Signin form submitted');
            
            // Get form inputs
            const email = document.getElementById('signinEmail')?.value?.trim() || '';
            const password = document.getElementById('signinPassword')?.value || '';

            // Validation checks
            if (!email || !email.includes('@')) {
                alert('Please enter a valid email address');
                return false;
            }

            if (!password) {
                alert('Please enter your password');
                return false;
            }

            // If all validations pass
            console.log('Sign in validation passed!');
            
            // Hide modal first
            signinModal.hide();
            
            // Multiple redirect attempts with different methods
            setTimeout(() => {
                console.log('Attempting redirect to home page...');
                
                try {
                    // Try different redirect methods
                    if (typeof window !== 'undefined') {
                        // Method 1: Standard href
                        window.location.href = '/home';
                        
                        // Fallback method 2: replace (in case href fails)
                        setTimeout(() => {
                            window.location.replace('/home');
                        }, 100);
                        
                        // Fallback method 3: assign (last resort)
                        setTimeout(() => {
                            window.location.assign('/home');
                        }, 200);
                    }
                } catch (error) {
                    console.error('Redirect failed:', error);
                    alert('Login successful! Please navigate to the home page manually.');
                }
            }, 500);
            
            return false;
        });
    }

    // Alternative Get Started button functionality
    const btnLg = document.querySelector('.btn-lg');
    if (btnLg && !getStartedBtn) {
        btnLg.addEventListener('click', () => {
            signupModal.show();
        });
    }
});
