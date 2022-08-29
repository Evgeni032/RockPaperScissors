const choice = ["rock","paper","scissors"];
//This is my second attempt at RPS, the first one was too messy and didn't work properly, so i looked upthe solution on the WWW.
// "stole" the array part and the compChoice function from Coding With Rob on YouTube.
let j = 0;
let i =0;
function compChoice(){
    
    return choice[Math.floor(Math.random()*3)];
}




function round(player,comp){
  
    if(player == comp){
        //crude way to make a win/lose message disappear
        win.classList.toggle('show');
        win.textContent = 'TIE';
        setTimeout(() =>{win.classList.toggle('show')},800);
        setTimeout(()=>{win.textContent = '';},600) 
    }

    if(winLose(player,comp) == "player")
    {
        i++;  
        moi.textContent = i;
        if(i === 5){
            rund.classList.toggle('runda');
            setTimeout(() =>{rund.classList.toggle('runda')},600);
            rund.textContent = 'You win!';
            setTimeout(()=>{rund.textContent = '';},600);
           setTimeout(()=>{zeroing()},400);
           rund.style.color = "green"
            

    }
    }
    else if (comp != player)
    { 
        j++;
        tv.textContent = j;
        if(j ===5){
            rund.classList.toggle('runda');
            setTimeout(() =>{rund.classList.toggle('runda')},600);
            rund.textContent = 'You lose!';
            setTimeout(()=>{rund.textContent = '';},600);
            setTimeout(()=>{zeroing()},400);
            rund.style.color = "red"
              
        }
    }


    

}
//zeroing the counter
function zeroing(){
    i = j = 0;
    tv.textContent = j;
    moi.textContent = i;
}



function game(plei){
    round(plei,compChoice());
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


const rck = document.querySelector('.rck');
const pp = document.querySelector('.pp');
const sci = document.querySelector('.sci');
//button actions
rck.addEventListener('click', () => {game("rock");rck.disabled = true;setTimeout(()=>{rck.disabled = false}, 400)});
pp.addEventListener('click', () => {game("paper");pp.disabled = true;setTimeout(()=>{pp.disabled = false}, 400)});
sci.addEventListener('click', ()=>{game("scissors");sci.disabled = true;setTimeout(()=>{sci.disabled = false}, 400)});

//showing results
const moi = document.querySelector('.moi');
const tv = document.querySelector('.tv');
const win = document.querySelector('#win');
const rund = document.querySelector('#rund');


