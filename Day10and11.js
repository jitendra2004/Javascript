// // Objects
// // 1.Create objects
// // simple object
// const obj={
//     name:"jitendra",
//     age:23,
//     address:"manorama nagar thane west"
// }
// console.log(obj);

// // New keyword object
// const obj1=new Object
// ({
//     name:"Mahendra",
//     age:25,
//     address:" shri swami samarth manorama nagar thane west"
// });
// obj1.adhar_no="124445624215";
// obj1.car_name="BMW";
// console.log(obj1);

// // Class Based Object
// class car{
//     constructor(brand,car_no,model,year){
//         this.bran=brand;
//         this.car_n=car_no;
//         this.mode=model;
//         this.yea=year;
//     }
// }
// let person1=new car("BMW","MHO4GN6605","ver1",2023);
// let person2=new car("oddi","MHO4GN1245","ver12",2032);
// console.log(person1,person2);

// // 2.Accessing Object Properties
// // using dot notation
// const objj={
//     name:"jitendra",
//     age:23,
//     address:"manorama nagar thane west",
//     null:"shri swami samarth",
//     undefined:12454656
// }
// console.log(objj.name,objj.address);
// console.log(objj["age"]);  // using square brackets
// console.log(objj.null,objj["undefined"]);

// // computed property names
// const key1="full_name";
// const key2="last_name";
// const key3="age";
// const objjj={
//     [key1]:"Aarti",
//     [key2]:"Yadav",
//     [key3]:18
// }
// console.log(objjj);

// // 3.Common Methods for objects
// const obj3={
//     name:"jitendra",
//     age:23,
//     address:"manorama nagar thane west",
//     null:"shri swami samarth",
//     undefined:12454656
// }
// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));
// console.log(Object.freeze(obj3));
// console.log(Object.seal(obj3));

// // assign property
// const a1={
//     a:1,
//     b:2
// }
// const b1={
//     d:4,
//     e:5
// }
// const c1={
//     f:6,
//     g:7
// }
// console.log(Object.assign({},a1,b1,c1));

// // 4.Nested object
// const nest={
//     name:"jitendra",
//     age:23,
//     null:"shri swami samarth",
//     undefined:12454656,
//     address:{
//         place:"thane",
//         pincode:400607,
//         district:"thane"
//     }

// }
// console.log(nest.address.district);

// // 5.Destructing Object
// const {name,age}=(nest);
// console.log(name,age);

// // nested destructing
// const{address:{pincode,district}}=nest;
// console.log(pincode,district);

// // array destructring
// let ar=[10,2,5,0,4];
// let [ar1,ar2]=ar;
// console.log(ar1,ar2);

// // 6.spread operator
// // Array
// let arr2=[10,20,30,40,50,[405,50,1]];
// const arr3=[...arr2];
// arr3.push("string");
// console.log(arr3);

// // Array merge
// let a=[1,2,3,4];
// const b=[5,4,6,3];
// console.log(...a,...b);


// // object
// const o={
//     ...nest,
//     region:"thane"
// }
// console.log(o);

// // 7.Shallow vs deep copy
// const c=b;
// console.log(c);

// const d=structuredClone(b);
// console.log(d);

// // 8.operations on object
// // add
// nest.city="thane";
// console.log(nest);

// // delete
// delete nest.city;
// console.log(nest);

// // update or modify
// nest.age=28;
// console.log(nest);

// 9.proptype chaining
let user1={
    namee:"jitendra",
    contact_no:165245515221,
    age:12
}

let user2={
    name:"mahendra",
    age:25,
    contact_no:45665236152
}

user2.__proto__=user1;
console.log(user2.namee);
