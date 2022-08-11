import { toggleThanYouAndForm } from "./helpersFunctions.js";
const continueBtn = document.querySelector("#continue");

export const returnHome = () => {
    continueBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        toggleThanYouAndForm();
    })
}