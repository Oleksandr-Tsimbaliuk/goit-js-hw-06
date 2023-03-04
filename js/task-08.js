const formEl = document.querySelector(".login-form");
// const formMail = formEl.firstElementChild.firstElementChild;
const formMail = formEl.children[0].firstElementChild
// const formPass = formEl.firstElementChild.nextElementSibling.firstElementChild;
const formPass = formEl.children[1].firstElementChild
const formBtn = formEl.lastElementChild;

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formMail.value !== "" && formPass.value !== "") {
    const userData = {
      mail: formMail.value,
      pass: formPass.value,
    };
    console.log(userData);
    event.target.reset();
  } else {
      alert("Fill all form data!");
  }
});


