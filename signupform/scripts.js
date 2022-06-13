const firstname = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const emailAd = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("claimtrial");

let valCheck = () => {
  if (firstname.value.length === 0) {
    document.getElementById("alert-firstname").style.display = "block";
    firstname.style.borderColor = "hsl(0, 100%, 74%)";
    firstname.style.backgroundImage = "url(images/icon-error.svg)";
    firstname.style.backgroundRepeat = "no-repeat";
    firstname.style.backgroundPosition = "95%";
  }
  if (lastName.value.length === 0) {
    document.getElementById("alert-lastname").style.display = "block";
    lastName.style.borderColor = "hsl(0, 100%, 74%)";
    lastName.style.backgroundImage = "url(images/icon-error.svg)";
    lastName.style.backgroundRepeat = "no-repeat";
    lastName.style.backgroundPosition = "95%";
  }
  if (emailAd.value.length === 0) {
    document.getElementById("alert-email").style.display = "block";
    emailAd.style.borderColor = "hsl(0, 100%, 74%)";
    emailAd.style.backgroundImage = "url(images/icon-error.svg)";
    emailAd.style.backgroundRepeat = "no-repeat";
    emailAd.style.backgroundPosition = "95%";
  }
  if (password.value.length === 0) {
    document.getElementById("alert-password").style.display = "block";
    password.style.borderColor = "hsl(0, 100%, 74%)";
    password.style.backgroundImage = "url(images/icon-error.svg)";
    password.style.backgroundRepeat = "no-repeat";
    password.style.backgroundPosition = "95%";
  }
};

let resetFirst = () => {
  document.getElementById("alert-firstname").style.display = "none";
  firstname.style.borderColor = "";
  firstname.style.backgroundImage = "";
};

let resetLast = () => {
  document.getElementById("alert-lastname").style.display = "none";
  lastName.style.borderColor = "";
  lastName.style.backgroundImage = "";
};

let resetEmail = () => {
  document.getElementById("alert-email").style.display = "none";
  emailAd.style.borderColor = "";
  emailAd.style.backgroundImage = "";
};

let resetPassword = () => {
  document.getElementById("alert-password").style.display = "none";
  password.style.borderColor = "";
  password.style.backgroundImage = "";
};

submit.addEventListener("click", valCheck);

firstname.addEventListener("keydown", resetFirst);
lastName.addEventListener("keydown", resetLast);
emailAd.addEventListener("keydown", resetEmail);
password.addEventListener("keydown", resetPassword);
