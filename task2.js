const paragraph = document.getElementById("messageParagraph");
const changeTextButton = document.getElementById("changeTextButton");

changeTextButton.addEventListener("click", function () {
  paragraph.textContent = "The paragraph text has been changed with JavaScript!";
});