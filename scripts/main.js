// Hamburger Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

// Dynamic Wayfinding (Highlight Active Menu Item)
document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Dynamic Total Credits Calculation
const courses = {
    CSE110: 3,
    CSE111: 3,
    CSE210: 3,
    WDD130: 3,
    WDD131: 3,
    WDD231: 3
};

let totalCredits = 0;
for (const course in courses) {
    totalCredits += courses[course];
}

document.getElementById("totalCredits").textContent = `Total Credits: ${totalCredits}`;
