const radioButtons = document.querySelectorAll(
  '.toggle__wrapper input[type="radio"]'
);

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", function () {
    if (document.getElementById("dark").checked) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });
}
