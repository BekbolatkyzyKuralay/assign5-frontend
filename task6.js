const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("keyup", function () {
  liveOutput.textContent = liveInput.value || "Your text will appear here.";
});