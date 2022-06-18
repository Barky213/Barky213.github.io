const email = document.getElementById("email");
const alert = document.getElementById("alert");
const submit = document.getElementById("submit");

const emailValidation = () => {
  if (email.value.length === 0) {
    alert.style.display = "block";
  } else if (email.value.indexOf("@") === -1) {
    alert.innerHTML = "Oops! Please check your email";
    alert.style.display = "block";
  }
};

const reset = () => {
    alert.style.display = '';
    alert.innerHTML = 'Oops! Please add your email';
}

submit.addEventListener("click", emailValidation);
email.addEventListener('keydown', reset);