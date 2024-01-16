alert("coucou");
//Implémenter le JS de ma page

const InputNom = document.getElementById("NomInput");
const InputPrenom = document.getElementById("PrenomInput");
const InputEmail = document.getElementById("EmailInput");
const InputPassword = document.getElementById("PasswordInput");
const InputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

InputNom.addEventListener("keyup", validateForm);
PrenomInput.addEventListener("keyup", validateForm);
EmailInput.addEventListener("keyup", validateForm);
PasswordInput.addEventListener("keyup", validateForm);
ValidatePasswordInput.addEventListener("keyup", validateForm);

function validateForm(){
     const nomOK = validateRequired(InputNom);
     const prenomOK= validateRequired(InputPrenom);
     const mailOK= validateMail(InputEmail);
     const passwordOK= validatePassword(InputPassword);
     const passwordConfirmOK= validateConfirmationPassword(InputPassword, InputValidatePassword);

     if(nomOK && prenomOK && mailOK && passwordConfirmOK){
      btnValidation.disabled = false;
     }
     else{
      btnValidation.disabled = true;
     }
}

function validateMail(input){
  //Définir mon regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser= input.value;
  if(mailUser.match(emailRegex)){
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  }
  else{
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false
  }
}

function validateRequired (input){
  if(input.value != ''){
     input.classList.add("is-valid");
     input.classList.remove("is-invalid");
     return true;
  }
  else{
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validatePassword(input){
  //Définir mon regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const passwordUser= input.value;
  if(passwordUser.match(passwordRegex)){
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  }
  else{
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false
  }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
  if(inputPwd.value == inputConfirmPwd.value) {
    inputConfirmPwd.classList.add("is-valid");
    inputConfirmPwd.classList.remove("is-invalid");
    return true;
  }  
  else{
    inputConfirmPwd.classList.add("is-invalid");
    inputConfirmPwd.classList.remove("is-valid");
    return false;
  }
}
