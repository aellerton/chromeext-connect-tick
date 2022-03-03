// http://gist.github.com/jjperezaguinaga/4243341

const checkbox = document.getElementsByName("acceptterms");
if (checkbox.length) {
  checkbox[0].checked = true;
  const row = checkbox[0].parentElement;

  // row.hidden = true
  row.childNodes.forEach(n => n.hidden = true)
  const text = document.createElement("span")
  text.innerHTML = "By continuing you agree to the terms."
  text.style.fontSize="80%"
  row.prepend(text)
}

const labels = ["Let's go 🚗", "Log in already 🏃", "Yep yep", "Go", "🥳 Party on", "Do it 🏀"]
const label = labels[Math.floor(Math.random()*labels.length)];

const go = document.getElementById("login")
if (go) {
  go.value = label;
  go.style.fontSize = "150%"
  // go.parentElement.prepend(text)
}

