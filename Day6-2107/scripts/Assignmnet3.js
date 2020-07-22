// Make a webpage that will ask the name of the user. </br>
// Then will display a welcome message on the webpage. </br>
// The webpage should also have a clock. </br>
// Using the toggle method of classList add a dark mode feature to the website.

const greet = document.getElementById("greet");
const name = window.prompt("Whats your name???", "Rahul Rai");
greet.innerText = `Hi ${name}, Welcome to the Clock screen !!!`;
greet.style.textAlign = "center";
greet.style.fontSize = "40px";

const clock = document.getElementById("clock");
clock.style.textAlign = "center";
clock.style.fontSize = "150px";
const clockTime = () => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  clock.innerText = time;
};
setInterval(clockTime, 1000);

const body = document.getElementById("body");
const dmode = document.getElementById("btn");
dmode.onclick = () => {
  body.classList.toggle("dark");
  if ((body.className == "light")) {
    dmode.innerText = "Switch to Dark mode";
  } else {
    dmode.innerText = "Switch to Light mode";
  }
};
