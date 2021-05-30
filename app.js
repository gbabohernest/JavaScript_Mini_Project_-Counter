// set initial count value
let count = 0;

// select the value & btns
const countValue = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");
// console.log(buttons);

// forEach to select all btns
buttons.forEach(function (button) {
  // console.log(button);

  // add eventListener on each btn & use the event(e)oject
  button.addEventListener("click", function (event) {
    const btnClass = event.currentTarget.classList;

    if (btnClass.contains("decrease")) {
      count--;
    } else if (btnClass.contains("reset")) {
      count = 0;
    } else {
      count++;
    }
    // changing the colors for the counter
    if (count < 0) {
      countValue.style.color = "red";
    }
    if (count === 0) {
      countValue.style.color = "#222";
    }
    if (count > 0) {
      countValue.style.color = "green";
    }
    countValue.textContent = count;
  });
});
