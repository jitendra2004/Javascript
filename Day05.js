
// primitive datatypes are mutable by call by value

const a=10;
let b=20;
b=30;
// a=40;
console.log(a,b);

// Non-primitve datatypes are Mutable by call by reference

const obj={
    name:"jitendra",
    age:20,
    address:"manorama nagar thane west"
}
obj.name="mahendra";
const obj1=obj;
console.log(obj,obj1);