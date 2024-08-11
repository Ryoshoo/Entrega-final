
let cuentas = [];

function traer(event){
    event.preventDefault();
    let localTraer = JSON.parse(localStorage.getItem("cuentas"));
    
    if(localTraer){

        cuentas = localTraer
    } else {
        cuentas = []
    }

    validacion();
}

function validacion(){

    let email = document.getElementById("email");
    let emailValue = email.value;
    let pass = document.getElementById("pass");
    let passValue = pass.value;
    let isValid = false;

    for(let i = 0; i < cuentas.length; i++){
    
        if(emailValue === cuentas[i].email && passValue === cuentas[i].pass){
            isValid = true;
            break;
        } 
    }

    if (isValid) {
        window.location.href = "granted.html";
    } else {
        alert("Either your email or pass is wrong");
    }
    
}


let submit = document.getElementById("vali");
submit.addEventListener("click", traer); 

