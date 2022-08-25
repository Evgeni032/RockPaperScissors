const choice = ["rock","paper","scissors"];
//This is my second attempt at RPS, the first one was too messy and didn't work properly, so i looked upthe solution on the WWW.
// "stole" the array part and the compChoice function from Coding With Rob on YouTube.
let j = 0;
let i =0;
function compChoice(){
    
    return choice[Math.floor(Math.random()*3)];
}

function playerChoice(){
    let pC = prompt("Rock/Paper/Scissors").toLowerCase();
    while(!choice.includes(pC)){
        pC = prompt("Wrong input,try again:");
    }
    return pC;
    
}


function round(player,comp){
  
    if(player == comp){
        console.log("Tie");
        r--; //when tie occurs, in order to play 5 rounds, the round variable r should be decremented
        console.log("=============================");
    }
    else {
        console.log("You: " + player + " Computer " + comp);
        console.log(winLose(player,comp));
        console.log("=============================");
    }

    if(winLose(player,comp) == "player")
    {
        i++;  
    }
    else {
       if(comp != player){ 
        
        j++;
    }
    }
}

function game(){
    for(r = 0;r<5;r++){
    round(playerChoice(),compChoice());
    }
    
    alert("Player result:" + i + " " + "Comp. result:" + j);
    if(i>j){
        alert("You Win!");
    }
    else if(i<j){
        alert("You lose!");
    }
}

function winLose(a,b){

    if((a == "rock" && b == "scissors") || 
       (a == "scissors" && b == "paper") ||
       (a == "paper" && b == "rock")) 
       {
           return "player";
       }

       else {
           return "computer";
       }


}