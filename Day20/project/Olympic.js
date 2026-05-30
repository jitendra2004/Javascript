// olympic timer

function olympic(){
const date4=new Date();
const date5=new Date("2028-07-14T00:00:00");
const date6=date5-date4;
console.log(date6);
const days=Math.floor(date6/(1000*60*60*24));
const hours=Math.floor((date6/(1000*60*60))%24);
const minutes=Math.floor((date6/(1000*60))%60);
const seconds=Math.floor((date6/1000)%60);
const timer=`Remaining time Olympics games :${days} Days, ${hours} Hours, ${minutes} Minutes,${seconds} Seconds`;

const time=document.getElementById("first");
time.innerHTML=timer;
};
setInterval(olympic,1000);

// Css of div
const time=document.getElementById("first");
time.style.color="100vh";
time.style.fontSize="6vh";

// Css of body
document.body.style.margin="0%";
document.body.style.padding="0%";
document.body.style.display="flex";
document.body.style.justifyContent="center";
document.body.style.alignItems="center";
document.body.style.height="100vh";
document.body.style.backgroundColor="black";
document.body.style.color="rgb(255, 255, 255)";
document.body.style.backgroundImage=`url('olympic.avif')`;
document.body.style.backgroundSize="contain";

