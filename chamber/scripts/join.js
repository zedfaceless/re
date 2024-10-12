// Modal functionality
document.querySelectorAll('.card a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const modalId = event.target.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});
// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the current date and time
    const now = new Date();
    const timestampInput = document.getElementById('timestamp');
    timestampInput.value = now.toISOString(); // Set the value to ISO format

    // Update year and last modified date
    document.getElementById('year').textContent = now.getFullYear();
    document.getElementById('last-modified').textContent = new Date(document.lastModified).toLocaleDateString();
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
