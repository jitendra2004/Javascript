// Date
// 1.Current Date
let d=new Date();
console.log(typeof d);
console.log(d);
console.log(d.toDateString());  

let d1=new Date(2024,4,11,15,5,5);
console.log(d1);

// 2.Date and time Components
let date =new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());


// 3.Setting Date Components
let date1=new Date();
console.log(typeof date1);
date1.setFullYear(2023);
date1.setMonth(5);
date1.setDate(23);
date1.setHours(14);
date1.setMinutes(49);
date1.setSeconds(59);
date1.setMilliseconds(5000);
console.log(date1);

// 4.Formatting Dates
const date2=new Date();
console.log(date2.toString());
console.log(date2.toISOString());
console.log(date2.toUTCString());
console.log(date2.toDateString());
console.log(date2.toJSON());
console.log(date2.toLocaleDateString());
console.log(date2.toLocaleString());
console.log(date2.toLocaleTimeString());
console.log(date2.toTimeString());

// 5.Another format
let date3=new Date(2024,11,23,22,49,59,500);
console.log(date3);

// 6.Date Calculations for olympics
const date4=new Date();
const date5=new Date("2028-07-14T00:00:00");
const date6=date5-date4;
console.log(date6);
const days=Math.floor(date6/(1000*60*60*24));
const hours=Math.floor((date6/(1000*60*60))%24);
const minutes=Math.floor((date6/(1000*60))%60);
const seconds=Math.floor((date6/1000)%60);
console.log(`Remaining time for olympics games :${days} Days,${hours} Hours, ${minutes} Minutes,${seconds} Seconds`);

 
