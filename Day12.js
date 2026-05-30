// functions
// 1.Normal functions
function fun(){
    console.log("hello world");
}
fun();

// 2.parameters vs arguments
function sun(num1,num2){
    sum=num1+num2;
    return sum;
}
console.log(sun(10,20));

// 3.return value
function mun(){
    console.log("hello world");
    return "money";
}
mun();

// 4.function expression
const num=function(){
    console.log("my name is jitendra yadav");
    return 23;
}
num();

// 5.Arrow function
const num1=()=>{
    console.log("my name is jitendra yadav");
    return 23;
}
num();

const num2=()=>"i am the best";
console.log(num2());

// 5.spread opertor in function
const obj1={
    name:"jitendra",
    arr:[10,20,[50,80]],
    fun:(num1,num2)=>num1+num2
}
console.log(obj1.fun(10,20));
console.log(...obj1.arr[2]);


// 6.Rest opertor 
const opertor=[10,2,5,4,5,1,4,5];
const [first,second,...numbers]=opertor;
console.log(numbers);
console.log(first,second);

// 7.passing object to function (destructing in parameter)
const obj={
    name:"john",
    address:"thane",
    pincode:400607
}
// console.log(obj);

function fun({name,pincode}){
    console.log(name,pincode);
}
fun(obj);

// 8.pass by refernce(objects)
let user1={
    name:"david",
    address:"kalyan",
    pincode:4054545,
};
const user2=user1;
user1.name="john";
console.log(user2);

// 9.object.create(prototype)
let user3={
    name:"david",
    address:"kalyan",
    pincode:4054545,
};
const user4=Object.create(user3);
user3.name="john";
console.log(user4.name);




