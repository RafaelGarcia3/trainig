// setTimeout function
// storage the timeout id in case the user wants to stop the operation
let timeoutID;

const btn_delay = document.querySelector("#delayed");
const btn_cancel = document.querySelector("#cancel");

function setOutput(outputContent) {
  document.querySelector("#output").textContent = outputContent;
}

// we called setTimeout function with setOutput function, 2 seconds and a string as a parameter
function delayedMessage() {
  setOutput("");
  timeoutID = setTimeout(setOutput, 2 * 1000, "That was really slow!");
}

// use clearTimeout for when the user wants to cancell the operation
function clearMessage() {
  clearTimeout(timeoutID);
}

btn_delay.addEventListener("click", delayedMessage);
btn_cancel.addEventListener("click", clearMessage);


// setInterval function
// variable to store our intervalID in case the user wants to stop the process
let intervalId;

function changeColor() {
  // check if an interval has already been set up
  if (!intervalId) {
    intervalId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const my_box = document.getElementById("my_box");
  my_box.className = my_box.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(intervalId);
  // release our intervalId from the variable
  intervalId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
