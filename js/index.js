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
buttons[1].addEventListener("mouseover", () => {
  buttons[1].style.color = "red";
});
buttons[2].addEventListener("dblclick", () => {
  buttons[2].style.color = "green";
});
// top pic zoom for wheel
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 1);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector(".img-content");
el.onwheel = zoom;
//
// const pic = document.querySelector();

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", () => {
//     alert("test");
//   });
// }
// const getallpics = selector => {
//   return document.querySelectorAll(".img-content .img");
// };

// const pics = getallpics(".img-content .img");

// pics[1].addEventListener(
//   "blur",
//   event => {
//     event.target.style.background = "";
//   },
//   true
// );

// const textbox = document.getElementById("form");
// textbox.addEventListener(
//   "blur",
//   event => {
//     event.target.style.background = "";
//   },
//   true
// );
const form = document.getElementById("form");

form.addEventListener("focus", event => {
  event.target.style.background = "yellow";
});
form.addEventListener(
  "blur",
  event => {
    event.target.style.background = "yellow";
  },
  true
);
// blur only works if its password locked on a form and placeholder tag

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  if (Math.ceil(scrolled) === scrollable) {
    alert("end of the page");
  }
});

window.addEventListener("load", event => {
  alert("page is fully loaded");
});
document.addEventListener("keypress", sound);

function sound(soundplay) {
  alert("you clicked a keypress");
}
// wanted to do sound on a key press but ran out of time

const video = document.querySelector("nav");

video.addEventListener("copy", event => {
  let play = new Audio("img/boop.mp3");
  play.play();
});
// const video = document.querySelector("video");

// video.onplay = event => {
//   let play = new
//   play.video();
// };
