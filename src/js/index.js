import '../styles/app.css'

const display = document.querySelector('#calculate')

const Keys = document.querySelectorAll('.addToScreen')
const reset = document.querySelector('#reset')
const deleteButton = document.querySelector('#delete')
const equalTo = document.querySelector('#equalto')
const result = document.querySelector('#result')
function ifNumber(key){
    const val = key.getAttribute('data-val')
    return (val!=='/'&& val!=='*'&& val!=='-'&& val!=='+' && val!=='.') 

}

Keys.forEach(key =>(key.addEventListener('click', ()=>{
    if(display.textContent==='' && !ifNumber(key)){
        display.textContent = 0
    }
    display.textContent += key.getAttribute('data-val')
    calculate()
})))

reset.addEventListener('click', ()=>{
    display.textContent = ''
    result.textContent = ''
})

deleteButton.addEventListener('click', ()=>{
    console.log('del')
    display.textContent = display.textContent.slice(0,display.textContent.length-1)
    calculate()
})

equalTo.addEventListener('click', ()=>{
    calculate()
    display.textContent = result.textContent
    result.textContent = ''
})

function calculate(){
    if(isNaN(display.textContent.slice(-1))||display.textContent.length===1){
        result.textContent = ''
    }
    else{
        result.textContent = eval(display.textContent)
    }
}