// Async Await and promise example

const cart = ["pizza", "coke","sandwich"];

// Place order
function placeOrder(cart){
    console.log("taling with Domin's");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const  food_available=true;

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


async function greet(params) {
    try{
        const order= await placeOrder(cart);
        const foodDetails = await preparingOrder(order);
        const dropLoaction = await pickupOrder(foodDetails);
    } catch(error){
        console.log(error);
    }
}
greet();

// Promise Example

function test1(){
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise Resolved");
        },5000);
    });
    return p1;
};

function test2(){
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second PRomise Resolved");
        },5000);
    });
    return p2;
};

// Aysnc Await Example
async function greet(){
    const data1= await test1();
    console.log(data1);
    const data2= await test2();
    console.log(data2);
}
greet();

async function greetAll(params) {
    console.log("hello T greet You");
    const [data1,data2]=await Promise.all([
        test1(),test2()
    ]);

    console.log(data1);
    console.log(data2);
};
greetAll();