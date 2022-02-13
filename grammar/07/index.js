// ⭕
if ("asdsa") {
}
if (10) {
}
if ({}) {
}

// ❌
if ("") {
}
if (undefined) {
}
if (null) {
}

const age = 10;
switch (age) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("??");
    break;
}
