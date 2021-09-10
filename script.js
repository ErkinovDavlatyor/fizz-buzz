let elForm = document.querySelector("#form")
let elInput = elForm.querySelector("#input")
let elResult = elForm.querySelector("#result")

elForm.addEventListener('submit', function(evt){
    evt.preventDefault()

    let elInputValue = (elInput.value)-0

    if(!isNaN(elInputValue)){
        if(elInputValue % 15 == 0){
            elResult.textContent = 'FizzBuzz'
        }
        else if(elInputValue % 3 == 0){
            elResult.textContent = 'Fizz'
        }
        else if(elInputValue % 5 == 0){
            elResult.textContent = 'Buzz'
        }
        else{
            elResult.textContent = elInputValue
        }
    }else{
        elResult.textContent = "Raqam kiriting"
    }  
    elResult = " "
})
