document.body.addEventListener("click",(event)=>{
    const div=document.createElement("div");
    div.innerHTML="Hi";
    div.className="circle";
    div.id="circle";


    const color = ["#FF5733", "#FF8D1A", "#FFC300", "#DAF7A6",
  "#33FF57", "#2ECC71", "#1ABC9C", "#16A085",
  "#33CFFF", "#3498DB", "#2980B9", "#3357FF",
  "#6C5CE7", "#9B59B6", "#8E44AD", "#C0392B",
  "#E74C3C", "#FF6B6B", "#F1948A", "#F1C40F",
  "#F39C12", "#D35400", "#7F8C8D", "#2C3E50"];
    const index=Math.floor(Math.random()*color.length);
    div.style.backgroundColor=color[index];
    document.body.appendChild(div);

    const x=event.clientX;
    const y=event.clientY;

    div.style.left=`${x-25}px`;
    div.style.top=`${y-25}px`;
    document.body.appendChild(div);

    const messages = ['Hi', 'Hello', 'Welcome', 'Hey there', 'Hola'];
    const index1=Math.floor(Math.random()*messages.length);
    div.textContent=messages[index1];

    setTimeout(()=>{
        div.remove();
    },5000);

})