let saveNumber = 1;

function increment() {
  return saveNumber++;
}

console.log(increment());
console.log(increment());

saveNumber = 200;

console.log(increment());

function increment2() {
  let saveNumber = 1;
  return function () {
    return saveNumber++;
  };
}

const inc = increment2();

console.log(inc());
console.log(inc());
console.log(inc());

// saveNumber = 200;

// class MyObj {
//     private saveNumber = number
// }
