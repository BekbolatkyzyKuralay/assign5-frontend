const mouseBox = document.getElementById("mouseBox");
const originalColor = "#eaf1ff";

mouseBox.addEventListener("mouseover", function () {
  mouseBox.style.backgroundColor = "lightgreen";
});

mouseBox.addEventListener("mouseout", function () {
  mouseBox.style.backgroundColor = originalColor;
});