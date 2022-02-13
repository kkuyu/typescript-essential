const color = ["red", "blue", "yellow", "green", "purple"];
const [invalidColor, passColor, , ...restColor] = color;

const blue = {
  brightBlue: "#0096FF",
  cadetBlue: "#5F9EA0",
  cobaltBlue: "#0047AB",
};
const { brightBlue, cadetBlue } = blue;

let a = 10;
let b = "10";

if (a == b) {
}

if (a === b) {
}

if (!a) {
}

if (a === b) {
  a = 0;
} else {
  a = 1;
}

a = a === b ? 0 : 1;

function foo() {}

(function foo() {});
