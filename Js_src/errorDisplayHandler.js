export const displayError = (errorParentConatiner, messageText, parentContainer) =>{
    const errorMessage = errorParentConatiner.children[2];
    errorMessage.innerText = messageText;
    errorMessage.classList.add("active");
    parentContainer.classList.add("error");
    return true; // retrun true if there is error in the data
}

export const hideError = (errorParentConatiner, parentContainer) =>{
    const errorMessage = errorParentConatiner.children[2];
    errorMessage.classList.remove("active");
    parentContainer.classList.remove("error");
    return false;  // retrun false if there is no error in the data
}