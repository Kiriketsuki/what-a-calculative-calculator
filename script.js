
var no1 = "";
var isPlus = false;
var isMinus = false;
var isTimes = false;
var isDivide = false;
var justEvaluated = false;
var currentNo = "";

const buttonsNodeList = document.querySelectorAll(".button");
const operationButtonNodeList = document.querySelectorAll(".operationButton");
const clearButton = document.querySelector("#clear");
const divideButton = document.querySelector("#divide");
const timesButton = document.querySelector("#times");
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus"); 
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const numberArray = ["1","2","3","4","5","6","7","8","9","0"];

const keyboard = window.addEventListener("keydown", (e) => {

    // console.log(e.key == "Backspace");
    if (numberArray.includes(e.key)) {
        if (!justEvaluated) {
            currentNo +=  e.key;
            updateScreen();    
        } else {
            reset();
            currentNo = e.key;
            updateScreen();
        }
    } else if (e.key == "Backspace") {
        currentNo = currentNo.slice(0,-1);
        updateScreen();
    } else if (e.key == "+") {
        no1 = currentNo;
        currentNo = "";
        updateScreen();
        isPlus = true;  
        isMinus = false;
        isTimes = false;
        isDivide = false;
        justEvaluated = false;
    } else if (e.key == "-") {
        no1 = currentNo;
        currentNo = "";
        updateScreen();
        isPlus = false;
        isMinus = true;
        isTimes = false;
        isDivide = false;
        justEvaluated = false;
    } else if (e.key == "/") {
        no1 = currentNo;
        currentNo = "";
        updateScreen();
        isPlus = false;
        isMinus = false;
        isTimes = false;
        isDivide = true;
        justEvaluated = false;
    } else if (e.key == "*") {
        no1 = currentNo;
        currentNo = "";
        updateScreen();
        isPlus = false;
        isMinus = false;
        isTimes = true;
        isDivide = false;
        justEvaluated = false;  
    } else if (e.key == ".") {
        
        if (!currentNo.split("").includes(".")) {
            currentNo += ".";
            updateScreen();
        }
        
    } else if (e.key == "Enter") {
        if (currentNo == "" || currentNo == ".") {
            alert("Please choose a number");  
        }  else if (isPlus) {   
            currentNo = add(no1,currentNo).toString()
            justEvaluated = true;
        } else if (isMinus) {
            currentNo = subtract(no1,currentNo).toString()
            justEvaluated = true;
        } else if (isDivide) {
            currentNo = divide(no1,currentNo).toString()
            justEvaluated = true;
        } else if (isTimes) {
            currentNo = mutiply(no1,currentNo).toString()
            justEvaluated = true;
        } else {
            alert("Please choose an operation")
        }

        updateScreen();
    }
})

var screenContainer = document.querySelector("#screen");

function updateScreen(number = currentNo){
    screenContainer.textContent = currentNo;
}

function reset() {
    no1 = "";
    isPlus = false;
    isMinus = false;
    isTimes = false;
    isDivide = false;
    justEvaluated = false;
    currentNo = "";
    updateScreen();
}

function add(no1,no2) {
    return Number(no1) + Number(no2);
}

function subtract(no1,no2) {
    return Number(no1) - Number(no2);
}

function mutiply(no1,no2) {
    return Number(no1) * Number(no2);
}

function divide(no1,no2) {
    if (no2 == 0) {
        return 42;
    }
    return (Number(no1)/Number(no2)).toFixed(10);
}


buttonsNodeList.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (!justEvaluated) {
            currentNo +=  button.textContent.trim();
            updateScreen();    
        } else {
            reset();
            currentNo = button.textContent.trim();
            updateScreen();
        }
    })
})


clearButton.addEventListener("click", (e) => {
    currentNo = currentNo.slice(0,-1);
    updateScreen();
})

clearButton.addEventListener("dblclick", (e) => {
    reset();
    updateScreen();   
})

plusButton.addEventListener("click", (e) => {
    no1 = currentNo;
    currentNo = "";
    updateScreen();
    isPlus = true;  
    isMinus = false;
    isTimes = false;
    isDivide = false;
    justEvaluated = false;
})

minusButton.addEventListener("click", (e) => {
    no1 = currentNo;
    currentNo = "";
    updateScreen();
    isPlus = false;
    isMinus = true;
    isTimes = false;
    isDivide = false;
    justEvaluated = false;
})

timesButton.addEventListener("click", (e) => {
    no1 = currentNo;
    currentNo = "";
    updateScreen();
    isPlus = false;
    isMinus = false;
    isTimes = true;
    isDivide = false;
    justEvaluated = false;
})

divideButton.addEventListener("click", (e) => {
    no1 = currentNo;
    currentNo = "";
    updateScreen();
    isPlus = false;
    isMinus = false;
    isTimes = false;
    isDivide = true;
    justEvaluated = false;
})

decimalButton.addEventListener("click", (e) => {
    if (!currentNo.split("").includes(".")) {
        currentNo += ".";
        updateScreen();
    }
})

equalsButton.addEventListener("click", (e) => {

    if (currentNo == "" || currentNo == ".") {
        alert("Please choose a number");  
    }  else if (isPlus) {   
        currentNo = add(no1,currentNo).toString()
        justEvaluated = true;
    } else if (isMinus) {
        currentNo = subtract(no1,currentNo).toString()
        justEvaluated = true;
    } else if (isDivide) {
        currentNo = divide(no1,currentNo).toString()
        justEvaluated = true;
    } else if (isTimes) {
        currentNo = mutiply(no1,currentNo).toString()
        justEvaluated = true;
    } else {
        alert("Please choose an operation")
    }

    updateScreen();
        
})
