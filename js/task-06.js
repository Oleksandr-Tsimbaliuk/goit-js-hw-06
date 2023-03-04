const inputEl = document.querySelector("#validation-input")
const inputElLength = Number(inputEl.dataset.length)

const handleInputEl = (event) => {
  inputEl.classList.add('invalid')
  if (inputElLength === event.target.value.trim().length) {
    inputEl.classList.add('valid')
    inputEl.classList.remove('invalid')
  } else inputEl.classList.remove('valid')
} 
inputEl.addEventListener('blur', handleInputEl)

