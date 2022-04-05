let displayOperations = document.querySelector(".operations");
let displayResult = document.querySelector(".result");
if (displayOperations.value == null) {
    displayResult.innerHTML = "0";
}

let keyboard = document.querySelectorAll(".key");
for(let i = 0; i < keyboard.length; i++){
    keyboard[i].onclick = selectedKey;
}

let operations = document.querySelectorAll(".operation");
for(let i = 0; i < operations.length; i++){
    operations[i].onclick = selectedOperation;
}
let ope

let actions = document.querySelectorAll(".action");
for(let i = 0; i < actions.length; i++){
    actions[i].onclick = selectedAction;
}

let history = document.querySelector(".history-mark");
let stepsHistory = document.querySelectorAll(".step");
let start = true;

function selectedKey(){
    console.log(`Selected key ${this.innerHTML} pressed!`);
    displayOperations.innerHTML += this.innerHTML;
}

function selectedOperation(){
    console.log(`Selected operaction ${this.innerHTML} pressed!`);
    displayOperations.innerHTML += ` ${this.innerHTML} `;
    ops++;
    if(ops > 1){
        calculate();
    }
}

function selectedAction(){
    console.log(`Procceded action ${this.innerHTML} pressed!`);
    let action = this.innerHTML;
    switch(action){
        case 'AC':
            console.log(`Clean All, including History with ${action}`);
            cleanOperations();
            displayResult.innerHTML = 0; 
            cleanHistory();
            break;
        case 'C':
            console.log(`Clean only last introducction with ${action}`);
            cleanOperations();
            break;  
        case 'H':
            console.log(`Choosed hide/show History with ${action}`);
            history.classList.toggle("hidden");
            break;
        case '=':
            console.log(`Selected calculate with ${action}`);
            calculate();
            cleanOperations();
            break;
    }
}
function cleanOperations(){
    displayOperations.innerHTML = "";
}
function calculate(){
    moveStepHistory();
    stepsHistory[0].innerHTML = displayOperations.innerHTML;
    ops = 0;
}
function cleanHistory(){
    for(let i = 0; i < stepsHistory.length; i++){
        stepsHistory[i].innerHTML = "";
    }
    start = true;
}
function moveStepHistory(){
    stepsHistory[9].innerHTML = stepsHistory[8].innerHTML;
    stepsHistory[8].innerHTML = stepsHistory[7].innerHTML;
    stepsHistory[7].innerHTML = stepsHistory[6].innerHTML;
    stepsHistory[6].innerHTML = stepsHistory[5].innerHTML;
    stepsHistory[5].innerHTML = stepsHistory[4].innerHTML;
    stepsHistory[4].innerHTML = stepsHistory[3].innerHTML;
    stepsHistory[3].innerHTML = stepsHistory[2].innerHTML;
    stepsHistory[2].innerHTML = stepsHistory[1].innerHTML;
    stepsHistory[1].innerHTML = stepsHistory[0].innerHTML;
}