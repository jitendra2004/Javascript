// this keyword
// 1.this keyword
console.log(this);

// 2.inside a object
const obj={
    name:"john",
    address:function(){
        console.log(this.name);
    }
};
obj.address();

// "use strict"
// 3.inside function
function meet(){
    console.log(this);
};
meet();

// 4.arrow function
const obj1={
    name:"david",
    address:()=>{
        console.log(this.name);
    }
};
obj1.address();


// 5.classes constructor
class car{
    constructor(name,no){
        this.nam=name;
        this.n=no;
    };
};
let u1=new car("BMW",454455);
let u2=new car("Audi",545445);
console.log(u1,u2);