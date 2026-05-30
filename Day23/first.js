// const red=document.getElementById("red");
// const blue=document.getElementById("blue");
// const orange=document.getElementById("orange");
// const green=document.getElementById("green");
// const purple=document.getElementById("purple");

// red.addEventListener("click",()=>{
//     document.body.style.backgroundColor="red";
// });

// blue.addEventListener("click",()=>{
//     document.body.style.backgroundColor="blue";
// });
// orange.addEventListener("click",()=>{
//     document.body.style.backgroundColor="orange";
// });
// green.addEventListener("click",()=>{
//     document.body.style.backgroundColor="green";
// });
// purple.addEventListener("click",()=>{
//     document.body.style.backgroundColor="purple";
// });


// const root=document.querySelectorAll("button");
// console.log(root);
// root.forEach((button)=>{
//     button.addEventListener("click",()=>{
        
//         document.body.style.backgroundColor=button.id;
//     });
// });


const root=document.getElementById("root");
root.addEventListener("click",(event)=>{
    if(event.target.tagName==="BUTTON")
        document.body.style.backgroundColor=event.target.id;
});