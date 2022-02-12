function addAge(age) {
  return age + 1;
}

let age = addAge(30);
// let age = addAge('30'); 문자열로 변경한다

console.log(age);

age = 10;
age = false;
age = {};

// function addAge(age){
//     if(typeof age === 'number'){
//         return age + 1;
//     } else {
//         😨
//     }
// }
