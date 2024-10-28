function toggleDetails(id) {
    const details = document.getElementById(id);
    details.classList.toggle('hidden');
}

// Set the last modified date
document.getElementById("last-modified").textContent = document.lastModified;

// Set the current year
document.getElementById("year").textContent = new Date().getFullYear();
