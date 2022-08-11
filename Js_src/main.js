import { handleInput } from "./FormInputHandler.js";
import { highLightActiveInput } from "./highLightActiveInput.js";
import {submitInfo} from "./submitBtn.js";
import {resetInputs} from "./reset-input-fields.js";
import {returnHome} from "./returnHome.js";

//----Reset the input fields after loading the page---
window.onload = ()=>{
    resetInputs();
}

highLightActiveInput();
handleInput();
submitInfo();
returnHome();


