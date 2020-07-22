let page = document.getElementById("page");
let colors = ["red", "blue", "yellow", "green", "black", "brown", "white"];
let i = 0;
let colorChange = () => {
  if (i == colors.length) {
    i = 0;
  }
  page.style.backgroundColor = colors[i];
  i++;
};
setInterval(colorChange, 5000);



// let page = document.getElementById("page");
// let colors = ["red", "blue", "yellow", "green", "black", "brown", "white"];
// let i = 0;
// let colorChange = (i) => {
//   setTimeout(() => {
//     page.style.backgroundColor = colors[i];
//   }, 1000);
// };
// for (let i = 0; i <= colors.length; i++) {
//   if (i == colors.length) {
//     i = 0;
//   }
//   colorChange(i);
// }

