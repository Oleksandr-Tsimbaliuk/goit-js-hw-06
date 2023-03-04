let counterValue = 0

const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
const spanCounter = document.querySelector('#value')

btnDecrement.addEventListener('click', onDecrementCounter => {
    counterValue -= 1
    spanCounter.textContent = counterValue
})
btnIncrement.addEventListener("click", onIncrementCounter => {
    counterValue += 1
    spanCounter.textContent = counterValue
})


