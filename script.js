const person = document.getElementById("person-score");
const computer = document.getElementById("computer-score");
const resetBtn = document.getElementById("reset-btn");

let personScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const options = ["Rock", "Paper", "Scissors"];
const resultText = document.getElementById("result-text");
const personChose = document.getElementById("person-chose");
const computerChose = document.getElementById("computer-chose");

const game = (choice) => {
    const computerChoice = Math.floor(Math.random()*3);
    console.log(computerChoice)
    console.log(`Person -> ${choice}`);
    console.log(`Computer -> ${options[computerChoice]}`)
    if(choice==="Rock" && options[computerChoice]==="Scissors" || choice==="Paper" && options[computerChoice]==="Rock" || choice==="Scissors" && options[computerChoice]==="Paper"){
        person.innerText = personScore+1;
        personScore++;
        personChose.innerText = `${choice}`;
        computerChose.innerText = `${options[computerChoice]}`;
        resultText.innerHTML = `<span>Player Wins</span>`;
    }
    else if(choice===options[computerChoice]){
        personChose.innerText = `${choice}`;
        computerChose.innerText = `${options[computerChoice]}`;
        resultText.innerHTML = `<span>It's a Tie</span>`;
    }
    else{
        computer.innerText = computerScore+1;
        computerScore++;
        personChose.innerText = `${choice}`;
        computerChose.innerText = `${options[computerChoice]}`;
        resultText.innerHTML = `<span>Computer Wins</span>`;
    }
};

const reset = () => {
    personScore = 0;
    computerScore = 0;
    person.innerText = personScore;
    computer.innerText = computerScore;
    personChose.innerText = "";
    computerChose.innerText = "";
    resultText.innerHTML = "";
}

rock.addEventListener("click", ()=>{game("Rock")})
paper.addEventListener("click", ()=>{game("Paper")})
scissors.addEventListener("click", ()=>{game("Scissors")})

resetBtn.addEventListener("click", ()=>{reset()})
