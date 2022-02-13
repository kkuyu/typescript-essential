let a = 10;
let b = a;

b = 20;

let c = {
  isLoading: false,
};
let c2 = c;

function foo(c) {
  c.isLoading = true;
}

foo(c);
