function superPowerClick(el) {
  el.style.background = 'yellow';
  el.style.color = 'black';
}

var h3Showed = false;

function showHeaderContent() {
  const header3 = document.getElementById("1");
  
  header3.style.display = !h3Showed ? 'block' : 'none';
  h3Showed = !h3Showed;
}
