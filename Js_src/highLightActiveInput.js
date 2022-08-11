const creditCardForm = document.querySelector(".credit-card");
let activeInput;

//----------hightlight the selected input container---------
export const highLightActiveInput = () => {
    creditCardForm.addEventListener("click", (event)=> {
        if(event.target.tagName === "INPUT"){
            const parentTarget = event.target.parentNode;
            if(parentTarget != activeInput && activeInput){
                activeInput.classList.remove("active");
            }
            activeInput = parentTarget;
            parentTarget.classList.add("active");
        }else if(event.target.tagName !== "INPUT" && activeInput){
            activeInput.classList.remove("active");
        }
    
    });
}
