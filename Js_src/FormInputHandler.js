import { nameErrorCheck, numberErrorCheck } from "./errorCheckFunctions.js";
const creditCardForm = document.querySelector(".credit-card");
const cardNumber = document.querySelector("#card-number");

//-------Display the input data on the screen and check for errors--------
export const handleInput = () => {
    creditCardForm.addEventListener("input", (event)=>{

        if(event.target.id == "name"){
            const displayedName = document.querySelector(".displayed-name");
            const nameParent = event.target.parentNode;
            const errorParentContainer = event.target.parentNode.parentNode;
            displayedName.innerText = event.target.value;
            nameErrorCheck(event.target, displayedName, nameParent,  "Jane Appleseed", errorParentContainer);
            
        }

        if(event.target.id == "card-number"){
            const displayedCardNumber = document.querySelector(".displayed-card-number");
            const cardNumberParent = event.target.parentNode;
            const errorParentContainer = event.target.parentNode.parentNode;
            const defaultValue = "0000 0000 0000 0000";
            displayedCardNumber.innerText = event.target.value;            
            numberErrorCheck(event.target ,displayedCardNumber, cardNumberParent, defaultValue, errorParentContainer);
        }

        if(event.target.classList.contains("month")){
            const displayedMonth = document.querySelector(".displayed-month");
            const monthParent = event.target.parentNode;
            const errorParentContainer = event.target.parentNode.parentNode.parentNode;
            const defaultValue = "00";
            displayedMonth.innerText = event.target.value;
            numberErrorCheck(event.target, displayedMonth, monthParent, defaultValue, errorParentContainer);
        }

        if(event.target.classList.contains("year")){
            const displayedYear = document.querySelector(".displayed-year");
            const yearParent = event.target.parentNode;
            const errorParentContainer = event.target.parentNode.parentNode.parentNode;
            const defaultValue = "00";
            displayedYear.innerText = event.target.value;
            numberErrorCheck(event.target, displayedYear, yearParent, defaultValue, errorParentContainer);
        }

        if(event.target.id == "cvc"){
            const displayedCvc = document.querySelector(".displayed-cvc");
            const cvcParent = event.target.parentNode;
            const errorParentContainer = event.target.parentNode.parentNode;
            const defaultValue = "000";
            displayedCvc.innerText = event.target.value;
            numberErrorCheck(event.target, displayedCvc, cvcParent, defaultValue, errorParentContainer);
        }

    });
}

//-------Make sure that the card number is in the proper format-----------
cardNumber.addEventListener("keypress", (event)=> {
    let  value = event.target.value;
    value = value.replace(/\s/g, "");
    if(value.length >= 16) return;
    if(value.length % 4 == 0 && value.length != 0 ){
        event.target.value = event.target.value +  " ";
    }
});

