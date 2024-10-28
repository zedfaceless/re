function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const messageElement = document.getElementById("message");

    // Check if passwords match
    if (password !== confirmPassword) {
        messageElement.textContent = "Passwords do not match!";
        messageElement.style.color = "red";
        messageElement.classList.remove("hidden");
        return;
    }

    // Here, you can handle the form data, e.g., send it to a server or save it
    messageElement.textContent = "Registration successful!";
    messageElement.style.color = "green";
    messageElement.classList.remove("hidden");

    // Clear the form fields
    document.getElementById("registrationForm").reset();
}

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
