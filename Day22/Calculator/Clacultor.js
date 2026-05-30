const button=document.getElementById("sohan");
button.addEventListener("click",()=>{
    const input1=document.getElementById("first");
    const num1=Number(input1.value);
    const input2=document.getElementById("second");
    const num2=Number(input2.value);

    const re=num1+num2;
    const result=document.getElementById("result");
    result.textContent=`Result:${re}`

})