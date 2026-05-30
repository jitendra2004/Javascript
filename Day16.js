// Reduce,set and maps
// 1.Reduce
let arr = ["orange","apple","banana","orange","apple","banana","orange","grapes"];
let count=arr.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr]=1;

    return acc;
},{});

console.log(count);

// 2.Map basics
let map=new Map([
    ["name","jitendra"],
    [0,5],
    [2,6],
    [1,7],
    ["pincode",4064545],
    ["district","thane"]
]);

map.set("place","thane");
console.log(map);

map.delete("name");
console.log(map);

map.set("palce","mumbai");
console.log(map);

console.log(map.get(0));

for(let values of map){
    console.log(values);
};
map.forEach((key,value) => {
      console.log(key,value);
});

// 3.set basics
let set = new Set([15,4,5,4,5,4,5,4,6,7,6,1]);
console.log(set);
set.add(8);
set.add(25);
console.log(set);

console.log(set.has(45));
console.log(set.has(8));

for(let vlaue of set){
    console.log(vlaue);
};

let arr1=[...set];
console.log(arr1);

let set1=new Set([...arr1]);
console.log(set1);