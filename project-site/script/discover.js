function showDetails(id) {
    const details = document.getElementById(id);
    details.classList.toggle('hidden');
}

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
