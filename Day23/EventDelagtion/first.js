const child=document.getElementById("child");
const parent=document.getElementById("parent");
const grandparent=document.getElementById("grandParent");

child.addEventListener("click",(event)=>{
    // console.log(event.target.id);
    // console.log(event.currentTarget);
    event.stopPropagation();
    console.log("child clicked");
},false);

parent.addEventListener("click",(event)=>{
    // console.log(event.target.id);
    // console.log(event.currentTarget);
    //  event.stopPropagation();
    console.log("parent clicked");
},false);
grandParent.addEventListener("click",(event)=>{
    // console.log(event.target.id);
    // console.log(event.currentTarget);
    console.log("grandparent clicked");
    //  event.stopPropagation();
},false);