const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const errorMessage= document.querySelector("#errorMessage");
const check = document.querySelector("#check");
const noOfNote = document.querySelectorAll(".notes");

const amountAvailable =[2000,500,100,20,10,5,1];


check.addEventListener("click",function (){
    hiddenMessage();
    if(billAmount.value > 0){
        if (cashGiven.value >= billAmount.value){
            const amountToBeReturned = (cashGiven.value - billAmount.value)
            calculateChange(amountToBeReturned)
        }else{
            showMessage("The amount should be atleast equal to the bill amount")
        }
    }else{
        showMessage("Invalid input")
    }
})

function showMessage(message){
    console.log("here")
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

function hiddenMessage(){
     errorMessage.style.display = "none";
 }

function calculateChange(amountToBeReturned ){
    for(let i=0; i< amountAvailable.length;i++){
       const note = Math.trunc(amountToBeReturned/amountAvailable[i]);
       amountToBeReturned %= amountAvailable[i];
       noOfNote[i].innerText = note;
    }
}
