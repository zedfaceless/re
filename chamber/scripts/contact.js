// Function to set the last modified date in the footer
document.addEventListener("DOMContentLoaded", function() {
    const lastModifiedElement = document.getElementById("last-modified");
    const yearElement = document.getElementById("year");

    // Get the last modified date of the document
    lastModifiedElement.textContent = document.lastModified;
    // Get the current year
    yearElement.textContent = new Date().getFullYear();
});
