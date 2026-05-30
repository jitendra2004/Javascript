// callback function
// 1.callback function
function fun(){
    console.log("hello coder army");
};

function sun(){
    console.log("i am jitendra");
    fun();
};
sun(fun);

// // 2.settimeout/setinterval
// setInterval(fun,2000);
// setTimeout(fun,5000);

// 3.define property
let obj={
    name:"john",
    age:20,
    pincode:4000648
};
console.log(Object.getOwnPropertyDescriptors(obj,"pincode"));

// 4.for of loop
let arr=[40,5,4,0,,1,5]
for(let keys of arr){
    console.log(keys);
};

// 5.objects.keys( iteration)
const obj1={
    name:"marco",
    age:25,
    pincode:4000454
};
for(let keys in  obj1){
    console.log(keys,obj1[keys]);
};

// 6.foreach loop
let arr1=[1,5,0,4,6,4,4];
arr1.forEach(value => {
    console.log(value);
});

// 7.filter 
const jhjh=arr1.filter(value=>value%2==0);
console.log(jhjh);

// 8..map()
const ojb=arr1.map((num,index)=>num*index);
console.log(ojb);


// 9.reduce()
const jhi=arr1.reduce((acc,curr)=>{
      return acc=acc+curr;
},0);
console.log(jhi);
