document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform username and password validation
    if (username === "albinkp" && password === "albinkp") {
      // Redirect to another file
      window.location.href = "switch.html";
    } else {
        window.location.href="login.html"
      alert("Invalid username or password. Please try again.");
      document.getElementById("message").textContent="invalid username or password"
    }
  });
  
