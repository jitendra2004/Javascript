// callBack hell and promises
// weather API using Fetch
fetch(`http://api.weatherapi.com/v1/current.json?key=42cabcedc3274555ac5145449261105&q=London&aqi=yes
`)
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.assert.log(error));



const cart = ["pizza", "coke","sandwich"];

// Place order
function placeOrder(cart){
    console.log("taling with Domin's");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const  food_available=false;

            if(food_available){
                console.log("Order Placed Successfully");

                const order={
                    orderId:221,
                    food:cart,
                    restuarnt:"Dominos",
                    location:"Dwarka",
                };

                resolve(order);
            }
            else{
                reject("Itmes Out of Stock");
            }
        },2000);
    });
};

// Prepare Order

function preparingOrder(order){
    console.log("Pizza Preparation Started...");

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Pizza preparaton Done");

            const foodDetails={
                token:12,
                restuarnt:order.restuarnt,
                location:order.location,
            };

            resolve(foodDetails);
        },5000);
    });
};

// Pickup Order

function pickupOrder(foodDetails){
    console.log("reaching resturant for picking order");

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Order Picked up by Delivery Boy");

            const droplocation = foodDetails.location;

            resolve(droplocation);
        },3000);
    });
};

// Delivery Order

function deliverOrder(dropLocation){
    return new Promise((resolve)=>{
        console.log("Delivery Boy on the way");
        setTimeout(()=>{
            console.log(`order Delivered Successfully at ${dropLocation}`);

            resolve();
        },5000);
    });
};

// Promise chaining 
placeOrder(cart)
.then((order)=> preparingOrder(order))
.then((foodDetails)=>pickupOrder(foodDetails))
.then((dropLocation)=>deliverOrder(dropLocation))
.catch((error)=>console.log(error));
