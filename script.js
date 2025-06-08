document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitBtn = document.getElementById("submitBtn");
  const form = document.getElementById("registrationForm");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  let isNameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;

  function validateName() {
    if (nameInput.value.trim() === "") {
      nameError.classList.remove("hidden");
      isNameValid = false;
    } else {
      nameError.classList.add("hidden");
      isNameValid = true;
    }
    toggleSubmit();
  }

  function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailInput.value.trim())) {
      emailError.classList.remove("hidden");
      isEmailValid = false;
    } else {
      emailError.classList.add("hidden");
      isEmailValid = true;
    }
    toggleSubmit();
  }

  function validatePassword() {
    if (passwordInput.value.length < 6) {
      passwordError.classList.remove("hidden");
      isPasswordValid = false;
    } else {
      passwordError.classList.add("hidden");
      isPasswordValid = true;
    }
    toggleSubmit();
  }

  function toggleSubmit() {
    submitBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid);
  }

  // Bind validations
  nameInput.addEventListener("blur", validateName);
  emailInput.addEventListener("blur", validateEmail);
  passwordInput.addEventListener("blur", validatePassword);

  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);

  // Show popup message on successful submission
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing page
    alert("Registration successful!");
    form.reset();
    submitBtn.disabled = true;
    isNameValid = isEmailValid = isPasswordValid = false;
  });
});