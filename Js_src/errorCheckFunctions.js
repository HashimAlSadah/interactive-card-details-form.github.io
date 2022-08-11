import { hasNumber, isNumber } from "./helpersFunctions.js";
import { displayError, hideError } from "./errorDisplayHandler.js";


export const nameErrorCheck = (inputContainer, displayedName, parentContainer, defaultValue =  "Jane Appleseed", errorParentContainer)=> {
    if(inputContainer.value.length === 0){
        displayedName.innerText = defaultValue; 
        return displayError(errorParentContainer, "Name can't be blank.", parentContainer);        
    }else if (hasNumber(displayedName.innerText)){
        return displayError(errorParentContainer, "Name can't have numbers.", parentContainer);
    }else{
        return hideError(errorParentContainer, parentContainer);
    }
}

export const numberErrorCheck = (inputContainer, numberContainer, parentContainer, defaultValue, errorParentContainer) =>{
    if(inputContainer.value.length === 0){
        numberContainer.innerText = defaultValue;
        return displayError(errorParentContainer, "Card number can't be blank.",parentContainer);
    }else if (!isNumber(numberContainer.innerText)){
        return displayError(errorParentContainer, "Only numbers, please.", parentContainer);
    }
    else if(numberContainer.innerText.length != defaultValue.length && inputContainer != document.activeElement){
        return displayError(errorParentContainer, "Input is incomplete.", parentContainer);
    }
    else{
        return hideError(errorParentContainer, parentContainer);
    }
}
