console.log(window.localStorage);
console.log(window.sessionStorage);

console.log(window.history);

console.log(navigator.clipboard);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
