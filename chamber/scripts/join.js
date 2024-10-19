// Modal functionality
document.querySelectorAll('.card a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const modalId = event.target.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

// On DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the current date and time
    const now = new Date();
    const timestampInput = document.getElementById('timestamp');
    timestampInput.value = now.toISOString(); // Set the value to ISO format

    // Update year and last modified date
    document.getElementById('year').textContent = now.getFullYear();
    document.getElementById('last-modified').textContent = new Date(document.lastModified).toLocaleDateString();

    // Animate membership cards
    const cards = document.querySelectorAll('.membership-cards .card');
    cards.forEach((card, index) => {
        card.style.opacity = '0'; // Start with opacity 0
        card.style.transform = 'scale(0.9)'; // Start scaled down
        setTimeout(() => {
            card.style.opacity = '1'; // Set opacity to 1
            card.style.transform = 'scale(1)'; // Set scale back to normal
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Add transition effect
        }, index * 200); // Stagger the animations by 200ms
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
