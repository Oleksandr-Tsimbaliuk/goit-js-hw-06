const inputEl = document.querySelector("#validation-input")
const inputElLength = Number(inputEl.dataset.length)

const handleInputEl = (event) => {
  inputEl.classList.add('invalid')
  if (inputElLength === event.target.value.trim().length) {
    inputEl.classList.add('valid')
    inputEl.classList.remove('invalid')
  } 
   inputEl.classList.remove('valid')
} 
inputEl.addEventListener('blur', handleInputEl)

// 2.
// const inputEl = document.querySelector('#validation-input')
// const inputElLength = Number(inputEl.dataset.length)

// function handleInputEl() {
// if (inputEl.value.length === inputElLength) {
//     inputEl.classList.add('valid')
//     inputEl.classList.remove('invalid')
//     console.log(inputEl.value);
// } else {
// inputEl.classList.add('invalid')
// inputEl.classList.remove('valid')
//  }
// }
// inputEl.addEventListener('blur', handleInputEl)


// 3.
// const inputEl = document.querySelector("#validation-input");
// const inputElLength = Number(inputEl.dataset.length);


// const onValidationValue = (event) => {
//   const value = event.target.value;

//   inputEl.classList.add("invalid");

//   value.trim().length === inputElLength && value.trim() !== ""
//     ? inputEl.classList.replace("invalid", "valid")
//     : inputEl.classList.replace("valid", "invalid");
// };
// inputEl.addEventListener("blur", onValidationValue);

