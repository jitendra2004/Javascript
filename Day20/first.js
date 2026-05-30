// Accessing by css selector
// 1.single element
const id=document.querySelector("#first");
id.innerHTML="My name is jitendra yadav";

// 2.multiple element
const id2=document.querySelectorAll(".header1");
id2.forEach((curr)=>{
curr.style.backgroundColor="pink";
});

// Accessing by tagname
const obj=document.getElementsByTagName("h2");
for(let i=0;i<obj.length;i++){
    // console.log(obj[i]);
    obj[0].innerHTML="my";
};

// Accessing by relationship
// 1.parent node
const obj1=document.querySelector("h1");
console.log(obj1.parentNode);
console.log(obj1.parentElement);
// 2.chile node
console.log(obj1.childNodes);
console.log(obj1.children);
// 3.first and last child
const arr=document.querySelector("#third");
console.log(arr.firstChild);
console.log(arr.lastChild);
console.log(arr.firstElementChild);
console.log(arr.lastElementChild);

// 4.siblings
console.log(arr.nextSibling);
console.log(arr.nextElementSibling);
console.log(arr.previousSibling);
console.log(arr.previousElementSibling);