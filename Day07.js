// Maths
// 1.Compare number vs number object
let num=10;
let num1= new Number(10);
console.log(typeof num1);
console.log(num==num1);
console.log(num===num1);

// 2.number methods
let num2=251.45;
console.log(num2.toExponential(1));
console.log(num2.toFixed(2));
console.log(num2.toLocaleString());
console.log(num2.toPrecision());
console.log(num2.toString());

// 3.Math constants
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.LOG10E);
console.log(Math.LOG2E);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);

// 4.Floor and ceil values
let num3= 102.455;
console.log(Math.floor(num3));
console.log(Math.ceil(num3));

// 5.Random number generat
console.log(Math.random());
console.log(Math.floor(Math.random()*10)); //0-10
console.log(Math.floor((Math.random()*10)+40)); //40-49


// Ludo example 0-6
let min=0;
let max=6;
console.log(Math.floor(Math.random()*(max-min+1)+min)); // formula for any number 
