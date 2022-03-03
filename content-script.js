// http://gist.github.com/jjperezaguinaga/4243341

const box = document.getElementsByName("acceptterms");
if (box.length) {
  box[0].checked = true;
  box[0].parentElement.hidden = true
}

const go = document.getElementById("login")
if (go) {
  go.value = "Let's go";
}

