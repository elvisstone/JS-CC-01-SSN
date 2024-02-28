const myInput = document.querySelector("#input");
const validatebBtn = document.querySelector("#validatebBtn");
const messageDiv = document.querySelector("#messageDiv");

validatebBtn.addEventListener("click", ()=>{
    const validateNumber = myInput.value;
    const p = document.createElement("p");
    const span = document.createElement("span");
    const validateNumberArray = validateNumber.split("-");
    if(!isNaN(validateNumberArray[0]) &&
        !isNaN(validateNumberArray[1]) &&
        !isNaN(validateNumberArray[2]) &&
        validateNumberArray[0].length === 3 && 
        validateNumberArray[1].length === 2 &&
        validateNumberArray[2].length === 4 ){
            span.textContent = `${validateNumber}`;
            span.style.color = "green"
            messageDiv.appendChild(span);

            p.textContent = ` is valid`; 
            messageDiv.appendChild(p);
            setTimeout(() => {
                myInput.value = "";
                messageDiv.textContent = "";
                myInput.focus()
            }, 2000);
    }else{
        span.textContent = `${validateNumber}`;
        span.style.color = "red"
        messageDiv.appendChild(span);

        p.textContent = ` is not valid`; 
        messageDiv.appendChild(p);
        setTimeout(() => {
            myInput.value = "";
            messageDiv.textContent = "";
            myInput.focus()
        }, 2000);
    }
})