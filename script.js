const form = document.getElementById("registerForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const message = document.getElementById("message");

        if (name === "" || email === "" || phone === "" ||
            password === "" || confirmPassword === "") {
            message.textContent = "Please fill in all fields.";
            message.style.color = "red";
        }
        else if (password.length < 8) {
            message.textContent = "Password must have at least 8 characters.";
            message.style.color = "red";
        }
        else if (password !== confirmPassword) {
            message.textContent = "Passwords do not match.";
            message.style.color = "red";
        }
        else {
            message.textContent = "Registration successful!";
            message.style.color = "green";
            form.reset();
        }
    });
}