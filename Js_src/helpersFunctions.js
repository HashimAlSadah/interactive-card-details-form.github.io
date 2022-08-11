//----Check if the input has at least one number--------
export const hasNumber = (string) =>{
    return /\d/.test(string);
}

//----check if the input is a number-------
export const isNumber = (string) =>{
    const output = string.replace(/\s/g, "");
    return !isNaN(output);
}

//----display and hide the form and the complete state---------
export const toggleThanYouAndForm = ()=>{
    const creditCardForm = document.querySelector(".credit-card");
    const thankYou = document.querySelector(".thank-you");
    creditCardForm.classList.toggle("inactive");
    thankYou.classList.toggle("active");
}