const form = document.querySelector("form")

form.addEventListener('submit', e => {
  e.preventDefault()
  alert("Form sended correctly")
})