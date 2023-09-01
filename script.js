let createButton = document.querySelector(".createButton");
let errorField = document.querySelector(".errorField");
createButton.addEventListener("click", function () {
  let pwd = document.querySelector("#password").value;
  let confirmPwd = document.querySelector("#confirmPassword").value;
  if (pwd === "" || confirmPwd === "") {
    errorField.style.display = "block";
    errorField.style.color = "black";
    errorField.textContent = "One, or both of the password fields are empty!!";
    return;
  } else if (pwd !== confirmPwd) {
    errorField.style.display = "block";
  } else if (pwd === confirmPwd) {
    errorField.style.display = "block";
    errorField.style.color = "green";
    errorField.textContent = "The account was created successfully!";
  }
});
