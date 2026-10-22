const styleBox = document.getElementById("styleBox");

document.getElementById("colorButton").addEventListener("click", function () {
  styleBox.style.backgroundColor = styleBox.style.backgroundColor === "lightyellow"
    ? "#eaf1ff"
    : "lightyellow";
});

document.getElementById("fontButton").addEventListener("click", function () {
  styleBox.style.fontSize = styleBox.style.fontSize === "24px" ? "16px" : "24px";
});