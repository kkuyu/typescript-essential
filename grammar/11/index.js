function myFn(x) {
  return x + 100;
}

// function sum(a, b, c) {
//     return a + b + c;
// }

function sum(a, b, ...args) {
  let s = 0;

  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
  }

  return s;
}

const result = myFn(10, 20);
const abcSum = sum(10, 20, 30, 40);

const myFnV2 = function () {
  return 100;
};

const arr = [10, 20, 30, 40, 50];
myFnV2();
myFnV2.call(null, 10, 20, 30);
myFnV2.apply(null, arr);

(function () {
  console.log("즉시 실행 함수 실행!");
})();

const sumV2 = (a, b, ...args) => {
  let s = 0;

  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
  }

  return s;
};

const ten = (x) => 100 + x;
const ten2 = (x, y) => 100 + x + y;

function* gen() {
  yield 10;
  yield 20;
  return 30;
}

const g = gen();

console.log(g);

g.next();
g.next();
g.next();

async function myTask() {}
