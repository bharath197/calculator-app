import '../styles/app.css'

const calculateScreen = document.querySelector('#calculate')

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
    if(calculateScreen.textContent==='' && !ifNumber(key)){
        calculateScreen.textContent = 0
    }
    calculateScreen.textContent += key.getAttribute('data-val')
})))

reset.addEventListener('click', ()=>{
    calculateScreen.textContent = ''
    result.textContent = ''
})

deleteButton.addEventListener('click', ()=>{
    console.log('del')
    calculateScreen.textContent = calculateScreen.textContent.slice(0,calculateScreen.textContent.length-1)
})

equalTo.addEventListener('click', ()=>{
    result.textContent = eval(calculateScreen.textContent)
})
