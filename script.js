const password = document.getElementById("password");
const bar = document.getElementById("strength-bar");
const result = document.getElementById("result");
const suggest = document.getElementById("suggestions");

password.addEventListener("input", () => {
  const val = password.value;
  const analysis = zxcvbn(val);

  const score = analysis.score; // 0 to 4
  const colors = ["red", "orange", "yellow", "lightgreen", "green"];
  const texts = ["Very Weak 😞", "Weak 😟", "Fair 🙂", "Good 😄", "Strong 💪"];

  bar.style.width = ((score + 1) * 20) + "%";
  bar.style.background = colors[score];
  result.textContent = texts[score];
  suggest.textContent = analysis.feedback.suggestions.join(" ");
});
