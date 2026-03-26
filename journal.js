const slider = document.getElementById("signalSlider");
const text = document.getElementById("signalText");

slider.addEventListener("input", () => {
  const value = slider.value;

  if (value < 20) {
    text.innerText = "NO SIGNAL";
  } else if (value < 40) {
    text.innerText = "STATIC...";
  } else if (value < 70) {
    text.innerText = "UNSTABLE";
  } else if (value < 90) {
    text.innerText = "INTERFERENCE DETECTED";
  } else {
    text.innerText = "THEY SEE YOU";
  }
});