const email = document.getElementById("email")
const password = document.getElementById("password")
const loginButton = document.getElementById("loginButton")
loginButton.addEventListener("click", handleLogin)
async  function handleLogin(e) {
  e.preventDefault()
  const emailId = email.value
  const passwordValue = password.value
  const formData = {
    email: emailId,
    password: passwordValue
  }
 const stringFiedFormData = JSON.stringify(formData)
 const response =  await fetch("/login",{
    method: "POST",
    headers: {
      'Content-type': "application/json" 
    },
    body: stringFiedFormData,
  })
  console.log(response)
}