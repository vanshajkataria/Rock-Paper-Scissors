const person = document.getElementById("person-score");
const computer = document.getElementById("computer-score");
const resetBtn = document.getElementById("reset-btn");

let personScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const options = ["rock", "paper", "scissors"];
const resultText = document.getElementById("result-text");

const game = (choice) => {
    const computerChoice = Math.floor(Math.random()*3);
    console.log(computerChoice)
    console.log(`Person -> ${choice}`);
    console.log(`Computer -> ${options[computerChoice]}`)
    if(choice==="rock" && options[computerChoice]==="scissors" || choice==="paper" && options[computerChoice]==="rock" || choice==="scissors" && options[computerChoice]==="paper"){
        person.innerText = personScore+1;
        personScore++;
        resultText.innerHTML = `<span>Player Wins</span>`;
    }
    else if(choice===options[computerChoice]){
        resultText.innerHTML = `<span>It's a Tie</span>`;
    }
    else{
        computer.innerText = computerScore+1;
        computerScore++;
        resultText.innerHTML = `<span>Computer Wins</span>`;
    }
};

const reset = () => {
    personScore = 0;
    computerScore = 0;
    person.innerText = personScore;
    computer.innerText = computerScore;
    resultText.innerHTML = "";
}

rock.addEventListener("click", ()=>{game("rock")})
paper.addEventListener("click", ()=>{game("paper")})
scissors.addEventListener("click", ()=>{game("scissors")})

resetBtn.addEventListener("click", ()=>{reset()})