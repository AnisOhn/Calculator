var buttons = document.getElementsByClassName("button");
var displayText = document.getElementById("screen");
var equalsButton = document.getElementById("equals");
var clearButton = document.getElementById("clear");

var counter = 0;


for (var i = 1; i < buttons.length - 1; i++) {
    buttons[i].addEventListener("click", function(e) {
        if (displayText.firstElementChild.innerText === "0") {
            displayText.firstElementChild.innerText = "";
        }
        if (displayText.firstElementChild.innerText.length < 10) {
            let buttonContent = e.target.textContent;
            displayText.firstElementChild.innerText += buttonContent;
        }
        
    });
}


equalsButton.addEventListener("click", function() {
    getResult();
})

clearButton.addEventListener("click", function() {
    displayText.firstElementChild.innerText = "0";
})


document.addEventListener("keydown", function(e) {
    var key = e.key;

    if (/^[0-9]$/.test(key) || key === "+" || key === "-" || key === "*" || key === "/") {
        
        if (displayText.firstElementChild.innerText === "0") {
            displayText.firstElementChild.innerText = "";
        }
        if (displayText.firstElementChild.innerText.length < 10) {
            displayText.firstElementChild.innerText += key;
        }
    }
    if (key === "Backspace") {
        let currentText = displayText.firstElementChild.innerText;
        displayText.firstElementChild.innerText = currentText.slice(0, -1);
    }

    if (key === "Enter") {
        e.preventDefault();
        getResult();
    }
    if (key === ".") {
        buttons[14].click();
    }
});


function getResult() {
    let expression = displayText.innerText;
    let result = eval(expression);
    displayText.firstElementChild.innerText = result;
}