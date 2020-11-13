// const btn = document.querySelector("#btn");
// const container = document.querySelector("#container");

// btn.addEventListener("click", hide);

// function hide() {
//   container.style.display = "none";
// }
// const img = document.querySelector("img");
const btnon = document.querySelector("#btnon");
const btndim = document.querySelector("#btndim");
const btnoff = document.querySelector("#btnoff");
const off = document.querySelector("#off");

btnon.addEventListener("click", lighton);
btndim.addEventListener("click", lightdim);
btnoff.addEventListener("click", lightoff);

function lighton() {
  off.src = "lighton.jpg";
}
function lightdim() {
  off.src = "dimlight.jpg";
}
function lightoff() {
  off.src = "lightoff.jpg";
}
