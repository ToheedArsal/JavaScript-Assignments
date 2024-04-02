const signupButton = document.getElementById("sign-up-button"); //sign-up button

signupButton.addEventListener("click", function (event) {
  event.preventDefault();
  const signUpForm = document.getElementById("signup-form");
  const signUpFormData = new FormData(signUpForm);
  const username = signUpFormData.get("username");
  const email = signUpFormData.get("email");
  const password1 = signUpFormData.get("password1");
  const password2 = signUpFormData.get("password2");
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (password1 == password2) {
    const usernameExists = users.some((user) => user.username === username);
    if (usernameExists) {
      alert("Username Alrady Exists")
      return;
    } else {
      const user = {
        username: username,
        email: email,
        password: password1,
      };

      users.push(user);
      // Convert the array of users to JSON and save it in local storage
      localStorage.setItem("users", JSON.stringify(users));
      alert("Sign Up Successfully");
      window.location.href = "index.html"
    }
  } else {
    alert("Password1 and Password2 Does Not Match");
  }
});
