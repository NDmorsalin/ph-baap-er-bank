// Stored email and password

const dbEmail = "your@email.com";
const dbPws = "password";

const email = document.getElementById("email");
const password = document.getElementById("password");

document.getElementById("submit").addEventListener("click", function (event) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (dbEmail === email && dbPws === password) {
    location.href = "bank.html";
  } else {
    alert("You have provide wrong email or password");
  }
});
