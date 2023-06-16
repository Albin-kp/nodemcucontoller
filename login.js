function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password match the fixed values
    if (username === "albin" && password === "7736950362") {
        // Username and password match, allow form submission
        return true;
    } else {
        // Invalid username or password, display an error message
        alert("Invalid username or password.");
        return false;
    }
}

// Assuming you have a form with an ID "myForm", a username input field with ID "username", and a password input field with ID "password"
document.getElementById("loginform").addEventListener("submit", validateForm);

