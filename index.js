/* CARET FUNCTIONALITY */

function toggleCaret() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
}

var toggler = document.getElementsByClassName("caret");
for (var i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", toggleCaret);
}
