// Timer project
function time(){
const time=new Date().toLocaleTimeString();
const timer=document.getElementById("first");
timer.innerHTML=time;
};
setInterval(time, 1000);

// css of div
const timer=document.getElementById("first");
timer.style.fontSize="10vw";

// Css of body
document.body.style.margin="0%";
document.body.style.padding="0%";
document.body.style.display="flex";
document.body.style.justifyContent="center";
document.body.style.alignItems="center";
document.body.style.height="100vh";
document.body.style.backgroundColor="black";
document.body.style.color="white";


