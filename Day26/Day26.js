let turn="O";
let total_turn=0;
const winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let board_array=new Array(9).fill("E");

// Check Winner
function checkWinner(){
    for (let [a,b,c] of winner){
        if(
            board_array[a]!=="E" && 
            board_array[a]===board_array[b]&&
            board_array[b]===board_array[c]
        ){
            return true;
        }
    }
    return false;
};

// Game Logic
const board= document.querySelector(".board");

const handleClick=(event)=>{
    const id = event.target.id;
    if (board_array[id]==="E"){
        total_turn++;

        // Place Move
        board_array[id] = turn;
        event.target.innerHTML = turn;

        // Check Number
        if (checkWinner()){
            document.getElementById("winningMessage").innerText=`Winner is ${turn}`;
            board.removeEventListener("click",handleClick);
            return;
        };

        // Switch turn
        turn=(turn==="O") ?"X":"O";

        // Check Draw
        if(total_turn===9){
            document.getElementById("winningMessage").innerText="Match is Draw";
            board.removeEventListener("click",handleClick);
        };
    };
};

// Add event
board.addEventListener("click",handleClick);

// Restart Game
const restartBtn = document.getElementById("restartButton");

restartBtn.addEventListener("click",()=>{
    const cells = document.getElementsByClassName("cell");

    Array.from(cells).forEach(cell=>{
        cell.innerHTML="";
    });

    turn='O';
    total_turn= 0;
    board_array= new Array(9).fill("E");
    
    document.getElementById("winningMessage").innerText='';
    board.addEventListener("click",handleClick);
});
