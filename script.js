let  userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice= () => {
    const options=["rock","paper","scissors"];
    const randInx=Math.floor(Math.random()*3);
    return options[randInx];

};

const drawGame=() =>{
    msg.innerHTML="game was draw,play again";
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerHTML="you win";
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorepara.innerText=compScore;
     
        msg.innerHTML="you lose";
        msg.style.backgroundColor="red";
    }

}
const palyGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
     drawGame();
    } else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        } else {
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);


    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        palyGame(userChoice);
    });

});
