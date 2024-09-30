document.addEventListener("DOMContentLoaded", () => {
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });
    
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Set last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});

// Filter Course Tabs by Category (ALL, CSE, WDD)
function filterTabs(category) {
    const allButtons = document.getElementsByClassName('course-button');

    for (let i = 0; i < allButtons.length; i++) {
        const buttonCategory = allButtons[i].getAttribute('data-category');

        // Show buttons based on the selected category
        if (category === 'all' || (buttonCategory && buttonCategory.startsWith(category))) {
            allButtons[i].style.display = 'inline-block';
        } else {
            allButtons[i].style.display = 'none'; // Only hide if it's not in the selected category
        }
    }

    const categoryButtons = document.getElementsByClassName('category-button');
    for (let i = 0; i < categoryButtons.length; i++) {
        categoryButtons[i].classList.remove('active');
    }

    event.target.classList.add('active');
}
