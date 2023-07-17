const form = document.querySelector ("#form");
const nameInput = document.querySelector ("#name"); 
const emailInput = document.querySelector ("#email");
const passwordInput = document.querySelector ("#password"); 
const confirmpasswordInput = document.querySelector ("#confirmpassword"); 

form.addEventListener ("submit",(event) => {
 event.preventDefault ();

 // verificar se o nome esta vazio 

 if (nameInput.value === "") {

    alert ("Por favor, Preencha seu nome"); 
    return;
 }

 // verificar se o email esta preenchido e se é valido 

 if (emailInput.value === ""  || !isEmailvalid(emailInput.value)) {

    alert ("Por favor, Preencha seu Email"); 
    return;
 }

 //verificar se a esta preenchida 
 if (!validatePassword(passwordInput.value)) { 
    alert ("A senha precisa ter no minimo 8 digitos "); 
    return;

 }

 // se todos os campos estiver preenchido envio o form 
 form.submit();

}); 

// função que valida email 
function isEmailvalid (email) {

    //  criar uma regex para validar email 
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^ [a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    
    if(emailRegex.test()) {

        return true;
    }
    return false; 
}

// função valide a senha 

function validatePassword(password,minDigits) {

    if(password.length >= minDigits) {

        // senha válida 
        return true   
    }

     // senha invalida 
     return false
}


