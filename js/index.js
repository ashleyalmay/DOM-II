// // Your code goes here

const get = selector => {
  return document.querySelector(selector);
};

const button = get(".content-pick .btn");

button.addEventListener("mouseover", () => {
  button.style.color = "#A0522D";
});

const getall = selector => {
  return document.querySelectorAll(".content-pick .btn");
};

const buttons = getall(".content-pick .btn");

buttons[1].addEventListener("click", () => {
  alert("funbus");
});
buttons[2].addEventListener("dblclick", () => {
  buttons[2].style.color = "#A0522D";
});

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", () => {
//     alert("test");
//   });
// }
