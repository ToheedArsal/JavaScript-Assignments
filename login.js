const loginButton = document.getElementById("login-in-button"); //login-in button

// event listner on the login button
loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  const loginInForm = document.getElementById("sign-in-form");
  const loginFormDate = new FormData(loginInForm);

  const username = loginFormDate.get("username");
  const password = loginFormDate.get("password");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let verifyPassword = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      // Return password if username matches
      verifyPassword = users[i].password;
    }
  }

  if (verifyPassword == null) {
    alert("Incorrect Username");
  } else {
    if (verifyPassword == password) {
      window.location.href = "dashboard.html";
    }
    else
    {
      alert("Incorrect Password");
    }
  }
});
