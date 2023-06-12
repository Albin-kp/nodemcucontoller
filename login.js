function logincheck()
{
var username = document.getElementById("username").value
var password = document.getElementById("password").value
if (username=="albinkp"&&password=="8266") {
    window.location.href="control.html"
} else {
    document.getElementById("message").textContent="incorrect username or password"
    
}
}