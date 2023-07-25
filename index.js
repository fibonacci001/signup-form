function validateEmail(email) {
    
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return pattern.test(email);
  }

  const firstnameIcon = document.querySelector('#First-name + .erroricon');
  const lastnameIcon = document.querySelector('#Last-name + .erroricon'); 
  const emailIcon = document.querySelector('#Email-Address + .erroricon');
  const passwordIcon = document.querySelector('#Password + .erroricon');

  const passwordInput = document.getElementById('Password');
const toggleBtn = document.getElementById('toggle-password');

  toggleBtn.addEventListener('click', e => {
    e.preventDefault();
    if(passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleBtn.textContent = 'Hide'; 
    } else {
       passwordInput.type = 'password';
       toggleBtn.textContent = 'Show';
    } 
  });

  function handleSubmit(event) {
    event.preventDefault();
 let firstnameinput = document.getElementById('First-name');
 let lastnameinput = document.getElementById('Last-name');
 let emailinput = document.getElementById('Email-Address');
 let passwordinput = document.getElementById('Password');
 let errorfirstname = document.getElementById('errorfirstname');
 let errorlastname = document.getElementById('errorlastname');
 let erroremail = document.getElementById('erroremail');
 let errorpass = document.getElementById('errorpass');
//  var erroricon = document.getElementById('erroricon');

 let firstname = firstnameinput.value;
let lastname = lastnameinput.value;
 let email = emailinput.value;
 let password = passwordinput.value;
 let hasError = false;

//  const firstnameIcon = document.querySelector('#First-name + .erroricon');

if (firstname === "") {
  errorfirstname.textContent =  "First Name cannot be empty";
errorfirstname.style.display = 'block';
 firstnameIcon.classList.add('show');
hasError = true;
}
else {
  errorfirstname.textContent = "";
  errorfirstname.style.display ="none";
  firstnameIcon.classList.remove('show');
}
// const lastnameIcon = document.querySelector('#Last-name + .erroricon');


  if (lastname === "") {
    
    errorlastname.textContent = "Last Name cannot be empty"
    errorlastname.style.display = "block"
    lastnameIcon.classList.add("show")
    
    hasError = true
  } else {
    
   errorlastname.textContent = ""
   errorlastname.style.display = "none"
    lastnameIcon.classList.remove("show")
  }

  // const emailIcon = document.querySelector('#Email-Address + .erroricon');
  if (email === "") {
    
    erroremail.textContent = "Email cannot be empty"
    erroremail.style.display = "block"
    emailIcon.classList.add("show")
 
    hasError = true
  } else if (!validateEmail(email)) {
    
    erroremail.textContent = "Looks like this is not an email"
    erroremail.style.display = "block"
     emailIcon.classList.add("show")
    // Set the hasError variable to true
    hasError = true
  } else {
    
    erroremail.textContent = ""
    erroremail.style.display = "none"
     emailIcon.classList.remove("show")
  }
  // const passwordIcon = document.querySelector('#Password + .erroricon');

 if (password === "") {
    
    errorpass.textContent = "Password cannot be empty";
    errorpass.style.display = "block";
    passwordIcon.classList.add("show")
    
    hasError = true
  } else {
    
    errorpass.textContent = "";
    errorpass.style.display = "none";
    passwordIcon.classList.remove("show");
  }



  }



function clearErrors(inputId) {

  if(inputId === 'First-name') {
    errorfirstname.textContent = '';
    errorfirstname.style.display = 'none';
    firstnameIcon.classList.remove('show');
  }

  if(inputId === 'Last-name') {
    errorlastname.textContent = '';
    errorlastname.style.display = 'none';
    lastnameIcon.classList.remove('show');
  }

  if (inputId === 'Email-Address') {
    erroremail.textContent = "";
    erroremail.style.display = "none"
     emailIcon.classList.remove("show")
  }
  if (inputId === 'Password') {
    errorpass.textContent = "";
    errorpass.style.display = "none";
    passwordIcon.classList.remove("show");
  }

}


const inputs = document.querySelectorAll('input');

inputs.forEach(input => {

  input.addEventListener('focus', () => {
    clearErrors(input.id);
  });

});





  const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);
  