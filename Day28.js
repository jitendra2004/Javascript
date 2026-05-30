// Js is a single Threaded synchoronous language
// Js behaviour :Async

console.log("10");

setTimeout(()=>{
    console.log("20");
},5000);

console.log("30");

// Single Threaded: one task will be executed at a time

console.log("10");

const timer = Date.now();
// timer older time
while(Date.now() - timer<2000){
    // wait for 2 second
}

console.log("20");

console.log("30");

// callback Hell
// fetchuser(greet)
// Domino's pizza oreder kar rahe ho:

callback =()=>{
 prepaingOrder();
}

function placeOrder(callback){
    console.log("talking with Domino's");
    setTimeout(()=>{
        console.log("Order Placed Successfully");
        callback();
    },2000);
};

function preparingOrder(callback){
    console.log("Pizza Preparation started...");
      
    setTimeout(()=>{
            console.log("Pizza preparation Done");
            callback();
        },5000);
    
};

function pickupOrder(callback){
    console.log("Reaching resturant for picking order");

    setTimeout(()=>{
        console.log("order picked up by Delivery Boy");
        callback();
    },5000);
}

function deliverOrder(){
    console.log("Delivery boy on the way");
    setTimeout(()=>{
        console.log("Oreder Delivered successfully");
    },5000);
};

// function ratingOrder(){
// }
// placeOrder(prepaingOrder);

placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    });
});

// CallBack function example

function greet(obj){
    console.log(`hello ${obj.name}`);
};

function meet(obj){
    console.log(`hello ${obj.name}, i will meet you in delhi`);
};

function edit(obj){
    console.log(`Edit ${obj.name} of the user`);
};

function printAge(obj){
    console.log(`User Age: ${obj.age}`);
};

// Fetch User Data

function fetchData(Callback){
    console.log("Fetching info of user...");
    
    setTimeout(()=> {
        console.log("user detail  fetched successfully");

        const obj={
            name:"Rohit",
            age:28,
            city:"Delhi",
        };

        Callback(obj);
    },2000);
};

// Function Calls
fetchData(greet);
fetchData(meet);
fetchData(edit);
fetchData(printAge);