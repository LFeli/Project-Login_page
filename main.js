const inputs =  document.querySelectorAll('#formLogin input')
const form = document.getElementById('formLogin')
let validForSubmit = false

form.addEventListener("submit", (e) => {
    e.preventDefault()

    validateInputs()

    if(validForSubmit){
        e.currentTarget.submit()
    }
})

function validateInputs(){
    let errorDisplayed = false
    validForSubmit = true

    // default state for inputs
    inputs.forEach(function(input){
        input.addEventListener('blur', function() {
            if (input.parentElement.classList.contains('error-visible')) {
             input.focus();
            }
        });
   
         input.addEventListener('input', function(){
            if(input.parentElement.classList.contains('error-visible')){
               input.parentElement.classList.remove('error-visible');
            }
        })
    })

    // validation for empty input
    inputs.forEach(function(input){
        if(input.value.trim() == ''){
            if(!errorDisplayed){
                errorInput(input, "Por favor, preencha este campo")
                input.focus()
                errorDisplayed = true
            }
        
            validForSubmit = false
            return
        } else {
            sucessInput(input)
        }
    })
}

function errorInput(input, message){
    const inputField = input.parentElement
    const errorMessage = inputField.querySelector('p')

    // avoid duplicate error
    if(inputField.classList.contains('error-visible')){
        inputWrapper.classList.remove('error-visible');
        inputWrapper.classList.add('error-visible');
    }

    errorMessage.innerText = message
    inputField.classList.add('error-visible')
}

function sucessInput(input){
    const inputField = input.parentElement

    inputField.classList.remove('error-visible')
}