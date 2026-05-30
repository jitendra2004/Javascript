// Resturant Array

const resturant=[];

// Images Array
const images = [
  "First",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "Eigth",
  "nine",
  "tenth"
];

// Resturant Names

const rest_name = [
      "The Gourmet Haven",
  "Spice Symphony",
  "Urban Bites",
  "Farm to Table",
  "Ocean Delights",
  "Fusion Fiesta",
  "The Cozy Corner",
  "Sunset Grill",
  "The Green Plate",
  "Golden Wok",
  "Savory Street",
  "Pasta Paradise",
  "Burger Bliss",
  "Sushi Spot",
  "Mediterranean Magic",
  "The Rustic Table",
  "Bistro Bliss",
  "Street Eats",
  "The Chocolate Box",
  "Breakfast Club"
];

// Food Types
const foodTypes =[
  "Italian",
  "Chinese",
  "Mexican",
  "Indian",
  "Japanese",
  "Mediterranean",
  "Thai",
  "American",
  "French",
  "Korean"
];

// Delhi Locations
const delhiLocations = [
  "Connaught Place",
  "Chandni Chowk",
  "Hauz Khas Village",
  "Saket",
  "Karol Bagh",
  "Lajpat Nagar",
  "Rajouri Garden",
  "Khan Market",
  "Vasant Kunj",
  "Dwarka"
];

// Generate 100 Resturant Objects
for (let i=0;i<1000;i++){
    const obj ={};
    // Random Image
    obj["image"]= images[Math.floor(Math.random()*10)];

    // Random Resturants Name
    obj["name"] = rest_name[Math.floor(Math.random()*20)];

    // Random Rating (1 to 5)
    obj["rating"] = Math.floor(Math.random()*5+1);

    // Random Food Type
    obj["food_type"]=foodTypes[Math.floor(Math.random()*10)];

    // Random Price
    obj["Price_for_two"] = Math.floor(Math.random ()* 2401+100);
    
    // Random Location
    obj["loaction"] = delhiLocations[Math.floor(Math.random()*10)];

    // Random Distance
    obj["Distance_from_Customer_house"]=(Math.random()*10+1).toFixed(1);

    // Random Offers
    obj["Offers"] = Math.floor(Math.random()*30);

    // Alcohol Available or Not
    obj["alcohol"] = Math.random()>0.7;

    // Restaurant Open Time
    obj["Resturant_open_time"] = Math.floor(Math.random()*24);

    // Resturant Close Time
    obj["Resturant_close_time"] = (obj["Resturant_open_time"]+12)% 24;

    // Push Object into Array
    resturant.push(obj);
};

// Print Resturant Array
console.log(resturant);

// Convert Array into JSON

const jsonData = JSON.stringify(
    resturant,
    null,
    2
);
console.log(jsonData);