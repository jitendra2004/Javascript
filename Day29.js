// FUNCTION CALL STACK EXAMPLE


console.log("Hello Coder Army");

function meet() {
    const arr = [2, 4, 6];
    console.log(arr[0]);
}

function greet() {
    const a = 2 + 3;

    console.log(a);

    meet();

    console.log(a * a);
}

greet();

console.log("Program End");


// FETCH + MICROTASK QUEUE EXAMPLE


console.log("I am first");

fetch("https://youtube.com")
    .then(() => console.log("Hello"));

console.log("I am last");


// setTimeout EXAMPLE


console.log("Hello Coder Army");

setTimeout(() => {
    const a = 2 + 4;
    console.log(a);
}, 5000);

let b = 20;

let arr = [20, 30, 11];

for (let i of arr) {
    console.log(i * b);
}

// setInterval EXAMPLE

console.log("Hello Coder Army");

setTimeout(() => {
    const a = 2 + 4;
    console.log(a);
}, 5000);

setInterval(() => {
    console.log("I am fast");
}, 2000);

let b2 = 20;

let arr2 = [20, 30, 11];

for (let i of arr2) {
    console.log(i * b2);
}


