let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  document.getElementById("result-display").textContent += `${count} - `;
  count = 0;
  countEl.textContent = count;
}
