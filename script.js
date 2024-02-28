const myInput = document.querySelector("#input");
const validatebBtn = document.querySelector("#validatebBtn");
const messageDiv = document.querySelector("#messageDiv");

validatebBtn.addEventListener("click", ()=>{
    const validateNumber = myInput.value;
    const p = document.createElement("p");
    const validateNumberArray = validateNumber.split("-");
    if(!isNaN(validateNumberArray[0]) &&
        !isNaN(validateNumberArray[1]) &&
        !isNaN(validateNumberArray[2]) &&
        validateNumberArray[0].length === 3 && 
        validateNumberArray[1].length === 2 &&
        validateNumberArray[2].length === 4 ){
            p.textContent = `${validateNumber} is valid`; 
            messageDiv.appendChild(p);
            setTimeout(() => {
                myInput.value = "";
                messageDiv.textContent = "";
                myInput.focus()
            }, 2000);
    }else{
        p.textContent = `${validateNumber} is not valid`; 
        messageDiv.appendChild(p);
        setTimeout(() => {
            myInput.value = "";
            messageDiv.textContent = "";
            myInput.focus()
        }, 2000);
    }
})