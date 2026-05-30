const form=document.querySelector('form');
form.addEventListener("input",(event)=>{
    console.log(event.target.value);

});
form.addEventListener("change",(event)=>{
    console.log(event.target.value);

});

form.addEventListener("focusin",(event)=>{
    console.log(event.target.value);

});

form.addEventListener("focusout",(event)=>{
    console.log(event.target.value);

});
form.addEventListener("click",(event)=>{
    console.log(event.target.value);

});

form.addEventListener("dblclick",(event)=>{
    console.log(event.target.value);

});
form.addEventListener("reset",(event)=>{
    console.log(event.target.value);
    event.preventDefault();
    console.log("reset value");

});

form.addEventListener("submit",(event)=>{

    event.preventDefault();
    const q1=document.getElementById("first");
    console.log(q1.value);

    const q2=document.getElementById("second");
    console.log(q2.value);

    const q3=document.getElementById("third");
    console.log(q3.value);

    const data=new FormData(form);
    for(let [keys,values] of data.entries()){
        console.log(keys,values);
    };
    console.log(Array.from(data.keys()));
    console.log(Array.from(data.values()));
    const result=document.getElementById("result");
    result.innerHTML=`${q1.value} , ${q2.value} and ${q3.value} the result `;




})




