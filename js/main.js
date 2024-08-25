document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var hamburgericon = navbarToggler.querySelector("i");

  navbarToggler.addEventListener("click", function () {
    hamburgericon.classList.toggle("fa-bars");
    hamburgericon.classList.toggle("fa-times");
  });

  // Tasbih counter
  let count = 0;

  const counterDisplay = document.getElementById("counterDisplay");
  const increment = document.getElementById("increment");
  const decrement = document.getElementById("decrement");
  const btnReset = document.getElementById("btnReset");

  increment.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
  });
  decrement.addEventListener("click", () => {
    if (counterDisplay.textContent > 0) count--;
    counterDisplay.textContent = count;
  });

  btnReset.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
  });

  document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
        // If the clicked button is collapsed, remove the collapsed class and update aria-expanded
        if (this.classList.contains('collapsed')) {
            this.classList.remove('collapsed');
        }
        // Handle other buttons
        document.querySelectorAll('.accordion-button').forEach(otherButton => {
            if (otherButton !== this) {
                otherButton.classList.add('collapsed');
            }
        });
    });
});



});
