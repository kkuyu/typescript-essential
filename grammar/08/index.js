const arr = ["a", "b", "c", "d"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const index in arr) {
  console.log(arr[index]);
}

const obj = {
  color: "red",
  width: 200,
  height: 200,
};

for (const key in obj) {
  console.log(key);
}

for (const item of arr) {
  console.log(item);
}

let j = 0;

while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

k = 0;

do {
  console.log(arr[k]);
  k++;
} while (k < arr.length);
