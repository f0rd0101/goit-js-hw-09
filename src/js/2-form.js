const form = document.querySelector(".feedback-form")
const text = document.querySelector(".textarea")
const emailInput = document.querySelector(".email-input")
const formData ={ email:'',message:''};


form.addEventListener("input", objIntoString)

function objIntoString (){
  formData.email = emailInput.value.trim()
  formData.message = text.value.trim()
  localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

const strIntoObj = JSON.parse(localStorage.getItem('feedback-form-state'))

if(strIntoObj !== null){
    text.value = strIntoObj.message
    emailInput.value = strIntoObj.email
}


form.addEventListener("submit", submitAction)

function submitAction(event){
    event.preventDefault();

    if(emailInput.value !== '' && text.value !==''){
        formData.email = emailInput.value.trim()
        formData.message = text.value.trim()
        localStorage.removeItem('feedback-form-state')
        emailInput.value = '';
        text.value = '';
        console.log(formData); 
    }
    else
    alert("Fill please all fields")
}