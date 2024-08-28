document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");
    const togglePasswordIcons = document.querySelectorAll(".toggle-password");

    togglePasswordIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const passwordField = this.previousElementSibling;
            const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
            passwordField.setAttribute("type", type);

            if (type === "text") {
                this.classList.remove("fa-eye-slash");
                this.classList.add("fa-eye");
            } else {
                this.classList.remove("fa-eye");
                this.classList.add("fa-eye-slash");
            }
        });
    });

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.,\-()])[A-Za-z\d!@#$%^&*.,\-()]{6,}$/;

    function validatePassword() {
        if (!passwordPattern.test(password.value)) {
            passwordError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
            passwordError.style.color = "red";
            return false;
        } else if (password.value !== confirmPassword.value) {
            passwordError.textContent = "Passwords do not match";
            passwordError.style.color = "red";
            return false;
        } else {
            passwordError.textContent = "Password is valid";
            passwordError.style.color = "green";
            return true;
        }
    }

    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validatePassword);
});