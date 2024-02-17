const lastAmount = localStorage.getItem("balance");
const lastRisk = localStorage.getItem("risk");

document.getElementById("balance").value = lastAmount;
document.getElementById("risk").value = lastRisk;

var stoplosser = document.getElementById("stoploss");
stoplosser.addEventListener('keyup',()=>{
    let amount = document.getElementById("balance").value;
    let risk = document.getElementById("risk").value;
    let stoploss = document.getElementById("stoploss").value;

    let pipSize;
    
    risk = risk / 100; 
    risk = risk + amount;
    pipSize = risk / stoploss;
    pipSize = pipSize * (amount / 1);
    pipSize = pipSize / 10;

    n = pipSize.toFixed(2);

    document.getElementById("clipboardButton").innerText = n;
});

var balancer = document.getElementById("balance");
balancer.addEventListener('keyup',()=>{
    let amount = document.getElementById("balance").value;
    let risk = document.getElementById("risk").value;
    let stoploss = document.getElementById("stoploss").value;

    let pipSize;
    
    risk = risk / 100; 
    risk = risk + amount;
    pipSize = risk / stoploss;
    pipSize = pipSize * (amount / 1);
    pipSize = pipSize / 10;

    n = pipSize.toFixed(2);

    document.getElementById("clipboardButton").innerText = n;
});

var risker = document.getElementById("risk");
risker.addEventListener('keyup',()=>{
    let amount = document.getElementById("balance").value;
    let risk = document.getElementById("risk").value;
    let stoploss = document.getElementById("stoploss").value;

    let pipSize;
    
    risk = risk / 100; 
    risk = risk + amount;
    pipSize = risk / stoploss;
    pipSize = pipSize * (amount / 1);
    pipSize = pipSize / 10;

    n = pipSize.toFixed(2);

    document.getElementById("clipboardButton").innerText = n;
});

const clipboardButton = document.getElementById("clipboardButton");
clipboardButton.addEventListener('click',()=>{
    var amount = document.getElementById("balance").value;
    var risk = document.getElementById("risk").value;
    var stoploss = document.getElementById("stoploss").value;


    localStorage.setItem("balance", amount);
    console.log(amount + " " + risk);
    localStorage.setItem("risk", risk);

    var pipSize;
    
    risk = risk / 100; 
    risk = risk + amount;
    pipSize = risk / stoploss;
    pipSize = pipSize * (amount / 1);
    pipSize = pipSize / 10;

    n = pipSize.toFixed(2);

    clipboard(n);
}) 



function clipboard(pipSize) {
    navigator.clipboard.writeText(pipSize);
    document.getElementById("clipboardButton").style = "background-color: #4BB543"
    setTimeout(function(){
        document.getElementById("clipboardButton").style = "background-color: #1DA1F2";
    }, 500);
  }