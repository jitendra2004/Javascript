// Arrays
// 1.Array Declaration
let arr=[10,20,3,0,"jitendra",null];
console.log(arr);
console.log(typeof arr);

// 2.operations on array
console.log(arr.length);

arr.push(20);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(30);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.indexOf(20));


console.log(arr.slice(0,5));

arr.splice(1,2);
console.log(arr);

console.log(arr.toString());

console.log(arr.at(-1));

let arr1=[10,20,3,0,40];
let arr2=[1,2,3,5,4];
console.log(arr1.join(","));
console.log(arr2.concat(arr1));

// 2D and 3D array
let arr3=[1,5,4,5,32,[1,5,4,562,[15,4,5,24,6]]];
console.log(arr3[5][4][4]);
console.log(arr3.flat(3));

// 3.check array or not
console.log(Array.isArray(arr2));