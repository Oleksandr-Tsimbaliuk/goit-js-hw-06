const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

console.log(nameOutput.textContent);
nameInput.addEventListener("input", (event) => {
    nameOutput.textContent = event.target.value.trim() !==  ""
    ? event.target.value
    : 'Anonimus'
})