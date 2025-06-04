const textSteps = [
  "J", "Jh", "Jho", "Jhoa", "Jhoan", "Jhoan.", "Jhoan.",
  "Jhoan.B", "Jhoan.Bl", "Jhoan.Blo", "Jhoan.Bl", "Jhoan.B",
  "Jhoan.", "Jhoan.l", "Jhoan.lo", "Jhoan.log"
];

const terminal = document.getElementById("typed");
let step = 0;

function typeNext() {
  if (step < textSteps.length) {
    terminal.textContent = textSteps[step];
    step++;
    setTimeout(typeNext, 200);
  }
}

typeNext();