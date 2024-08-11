class Cuenta {

    constructor(email, pass) {
        this.email = email;
        this.pass = pass
    }
}

function creador(event){
    event.preventDefault(); 
    let email = document.getElementById("email");
    let valueEmail = email.value;
    let pass = document.getElementById("pass");
    let valuePass = pass.value;
   
    let nuevaCuenta = new Cuenta(valueEmail, valuePass);
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];

    let isValid = false;

    for (const cuenta of cuentas) {

        if(valueEmail === cuenta.email){
            isValid = true;
            break;
        } 
    }

    if(isValid){
        alert("There's already an account created with that email");
    } else {
        cuentas.push(nuevaCuenta);
        localStorage.setItem("cuentas", JSON.stringify(cuentas));
        redirect();
    }
}

function redirect(){

    window.location.href = "login.html";

}


let submit = document.getElementById("crear");
submit.addEventListener("click", creador);






/* 

const guardaLocal = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
}

for (const cuenta of cuentas){

    guardaLocal("Email" + cuenta.email);
}
 */