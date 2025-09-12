// Home button functionality
document.getElementById('home-btn').addEventListener('click', function() {
    window.location.href = '/home';
});

// Change Password form handling
document.getElementById('changePasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert('New password and confirm password do not match!');
        return;
    }

    // Here you would typically send this to a server
    console.log('Password change requested');
    // Close the modal and reset form
    const modal = bootstrap.Modal.getInstance(document.getElementById('changePasswordModal'));
    modal.hide();
    this.reset();
});

// Forgot Password handling
document.getElementById('forgotPassword').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Password reset link will be sent to your email address.');
});
