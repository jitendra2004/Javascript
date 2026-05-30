// Advanced loops
// 1.objects proprty descriptors
const obj={
    0:1,
    2:4,
    1:5,
    name:"john",
    age:52,
    pincode:54654
};
console.log(Object.getOwnPropertyDescriptors(obj," name"));

// 2.object define property
Object.defineProperty(obj,"name",{
    writable:false,
    enumerable:false,
    configurable:false
});

obj.name="mohit";

// 3.prototype inheritance
const obj1=obj;
console.log(obj.name);
console.log(obj1);

// 4.enumerable vs non - enumerable
for (let keys in obj1){
    console.log(keys, obj1[keys]);
};

// 5.object.keys()
for(let key in obj){
    console.log(key, obj[key]);
};

// 6.why not use for in loop for array
const arr=[10,5,0,4,0,50];
arr.name="rohit";
for(let index in arr){
    console.log(index, arr[index]);
};

// 7.for of loop/normal loop for array
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
};
