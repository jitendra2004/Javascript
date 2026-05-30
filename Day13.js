// Conditional Statement
// 1.scope in js
// local scope
function fun(){
    let num=10;
    return num;
}
console.log(fun());

// golobal scope
let num1=20;
const num2=45;
console.log(num1,num2);

// Block scope
let i=5;
if(i<10){
    console.log("hello world");
}
else{
    console.log("hello");
}

// 2.function expression
// function declaration
function fun(){
    let num=10;
    return num;
}
console.log(fun());

// function expression
const num=()=>{
    console.log("my name is jitendra yadav");
    return 23;
}
num();

// 3.Conditional Statement 
// if else
let a=5;
let b=10;
if(a<b){
    console.log("a is less than b");
}
else if(b>a){
    console.log("b is less than to a")
}
else{
    console.log("both are same");
}

// switch case
let days=5;
switch(days){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;    
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;    
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("enter correct number");
}

// 4.loops
// for loops
for(let i=1;i<=10;i++){
    console.log(i);
}

// while loops
let j=1;
let sum=0; 
while(j<=10){
    sum=sum+j;
    j++
}console.log(sum);

// do while loops
let k=1;
do {
    console.log(k);
    k++;
}while(k<=10);

// nested loop
for(let i=1;i<5;i++){
    for(let j=1;j<=5;j++){
        console.log(j);
    }
}

// array loop
let arr=[10,20,30,40,50];
for(let i=0;i<=arr.length;i++){
    console.log(arr[i]);
}

// object loop
const obj={
    name:"jitendra",
    age:20,
    adress:"thane"
}
const key=Object.keys(obj)
for(let i=0;i<=key.length;i++){
    console.log(key[i],obj[key[i]]);
}