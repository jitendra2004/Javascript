// Weather search using button
document.querySelector("button").addEventListener("click",()=>{
    const place = document.getElementById("location").value;

    function updateTemp(data){
        const element = document.getElementById("weatherInfo");

        element.innerHTML= `Today's Tempertaure:${data.current.temp_c}°C`;
    };
    fetch(`http://api.weatherapi.com/v1/current.json?key=42cabcedc3274555ac5145449261105&q=${place}&aqi=yes`)
    .then((response)=>response.json())
    .then((data)=>updateTemp(data))
    .catch((error)=>console.log(error));
});