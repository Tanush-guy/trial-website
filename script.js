const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginTab.addEventListener("click", function () {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");

  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

signupTab.addEventListener("click", function () {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");

  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});

function togglePassword(inputId, button) {
  const input = document.getElementById(inputId);

  if (input.type === "password") {
    input.type = "text";
    button.textContent = "Hide";
  } else {
    input.type = "password";
    button.textContent = "Show";
  }
}