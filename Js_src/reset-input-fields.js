const inputs = document.querySelectorAll("#name, #card-number, .month, .year, #cvc");

export const resetInputs = () => {
    inputs.forEach(input => input.value = "");
}