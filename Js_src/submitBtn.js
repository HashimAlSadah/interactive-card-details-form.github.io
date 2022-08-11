import { nameErrorCheck, numberErrorCheck } from "./errorCheckFunctions.js";
import { toggleThanYouAndForm } from "./helpersFunctions.js";
import { resetInputs } from "./reset-input-fields.js";

const submitBtn = document.querySelector("#confirm-btn");

const [nameInput, cardNumberInput, monthInput, yearInput, cvcInput] 
= document.querySelectorAll("#name, #card-number, .month, .year, #cvc");

const [displayCvc, displayedCradNumber, displayedName, displayedMonth, displayedYear] 
= document.querySelectorAll(".displayed-cvc, .displayed-card-number, .displayed-name, .displayed-month, .displayed-year")

export const submitInfo = () => {
    submitBtn.addEventListener("click", (event)=> {
        event.preventDefault();
        const nameError = nameErrorCheck(nameInput ,displayedName, nameInput.parentNode, "Jane Appleseed", nameInput.parentNode.parentNode);
        const cardNumberError = numberErrorCheck(cardNumberInput, displayedCradNumber, cardNumberInput.parentNode, "0000 0000 0000 0000", cardNumberInput.parentNode.parentNode);
        const cvcError = numberErrorCheck(cvcInput, displayCvc, cvcInput.parentNode, "000", cvcInput.parentNode.parentNode);
        const monthError = numberErrorCheck(monthInput, displayedMonth, monthInput.parentNode, "00", monthInput.parentNode.parentNode.parentNode);
        const yearError = numberErrorCheck(yearInput, displayedYear, yearInput.parentNode, "00", yearInput.parentNode.parentNode.parentNode);
        
        if (nameError || cardNumberError || cvcError || monthError || yearError){
            return
        }
        else{
            toggleThanYouAndForm();
            resetInputs();
        }
    });
}



