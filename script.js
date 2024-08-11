// LOCAL STORAGE

let varia = localStorage.setItem("saludo", "Como te va locooooooo");
localStorage.saludo = "NO TEVEO MASSSS"
let salu = localStorage.getItem('saludo');


console.log(salu);

localStorage.usuario = document.getElementById("usu");

// JSON cuando se guarda un dato hay q convertir ese dato en JSON para luego recuperarlo y comvertirlo en el tipo de dato original

//conversion y parseo deJSON

/* let bebida = {id:1, nombre: "coca", precio: 2131};

localStorage.setItem("bebida", JSON.stringify(bebida)) //convertir el objeto beebida en formato json y guardar en localstorage
console.log(localStorage.getItem("bebida")); //esto vuelve un string o sea un JSON
let valor = JSON.parse(localStorage.getItem("bebida")); //parsear o sea volver al formato original del objeto guardado en localstorage

console.log(valor); */

/* let edad = parseInt(prompt("pone edad"));

localStorage.setItem("edad", JSON.stringify(edad)); //guardando en local storage la propiedad edad con el valor de la variable edad en formato string json
console.log(JSON.parse(localStorage.getItem("edad"))); //trayendo el valor en su formato original y consologeandolo

 */

//definir array, convertir a json y de vuelta al tipo original

/* const productos [




]

 */
//ejemmplo para almacenar objetos de un array

/* const bebidas = [ {id:1, nombre: "coca", precio: 2131},
    {id:2, nombre: "sprite", precio: 2121},
    {id:3, nombre: "famnta", precio: 231}
]


const guardaLocal = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
}

for (const bebida of bebidas){

    guardaLocal("bebida" + bebida.id, bebida);
}

guardaLocal("ListaBebidas", bebidas);
 */

//







