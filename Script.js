const calTotal = ()=>{
    
const inputValue = document.querySelector('#input').value
const Tota = document.querySelector('.Total_price')
console.log(inputValue)

const total_Price = inputValue * 25;

console.log(total_Price)
Tota.innerHTML = `Total Price is ${total_Price} `



alert(`you add ${inputValue} item and total price is Rs: ${total_Price}`)

}

