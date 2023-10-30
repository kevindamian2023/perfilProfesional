// ########## TIPO DE VARIABLES
// const para constantes
const pi  = 3.1416;
const pul = 2.54;
// var para variables globales
var cant_days = 10;
var name      = "Wilder Duarte" ;
// let para varaibles de bloque o locales
let count = 5;
let i     = 0;

// ########## FORMAS DE IMPRESIÓN O SALIDA EN PANTALLA
// alert
// alert(name);
// console
console.log(cant_days);
console.log("10");
// body - pantalla
document.write(name);
document.getElementById("text_one").innerHTML = "<h1>Wilder Duarte</h1>"
document.getElementById("text_two").innerText = "<h1>Wilder Duarte</h1>"
// librerías por ejm sweetalert
Swal.fire({
    icon: 'success',
    title: 'Wilder Duarte',
    text: 'Docente de la Ufpso',
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    background: '#000'
});

// ########## TIPO DE DATOS
// numéricos
let number_one = 10;
let number_two = 5.5;
// string
let text = "Soy un texto";
// booleanos
let boolean = true; // false
// array 
let array_num = [1,2,3,4,5,6];
let array_tex = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
let arrya_mix = [1.5, "a", 10, "b"];
let array_mul = [
    { name:"Wilder", last_name:"Duarte",age:31 },
    { name:"Anyi", last_name:"Martínez" ,age:32 },
    { name:"Celeste", last_name:"Duarte" ,age:3 },
    { name:"Antonella", last_name:"Duarte" ,age:1 }
];

// ########## OPERADORES BÁSICOS
// suma +
var suma = number_one + number_two;
console.log("Suma = " + suma);
// resta - 
var resta = number_one - number_two;
console.log("Resta = " + resta);
// multiplicacion * 
var multi = number_one * number_two;
console.log("Multi = " + multi);
// division / 
var divi = number_one / number_two;
// divi = divi.toFixed(2);
console.log("División = " + divi.toFixed(2));
// modulo %
var modulo = number_one % number_two;
console.log("Módulo = " + modulo);

console.log(
    "Suma = " + suma + "\n" +
    "Resta = " + resta + "\n" +
    "Multi = " + multi + "\n" +
    "División = " + divi.toFixed(2) + "\n" +
    "Módulo = " + modulo
    )

var respuesta = "Suma = " + suma + "<br>" + "Resta = " + resta + "<br>" + "Multi = " + multi + "<br>" + "División = " + divi.toFixed(2) + "<br>" + "Módulo = " + modulo;

Swal.fire({
    icon: 'success',
    title: 'Resultados',
    html: respuesta,
    background: '#fff'
});

// ########## OPERADORES LOGICOS Y ESTRUCTURAS CONDICIONALES(inverse,)
// AND & con if
var bool = true;
var numeric = 5;
if(!bool && numeric == 5){ // bool == true
    console.log(bool);
    count ++; //incremento
}
else{
console.log(bool);
count --; // decremento
}
// = es para asignar valores
// == comparar contenido
// === comparar contenido y tipo de dato
console.log(count);

// OR ||
var age = 31;
if(age === 31 || numeric == "5"){
    console.log("Una o dos variables aceptadas");
}
else{
    console.log("Ninguna variable aceptada");
}
// for
for(let i=0; i <= array_tex.length; i++){
    console.log(array_tex[i] + (i+1));
}

// while
let j = 0;
while(j < array_tex.length){
console.log(array_tex[j] + (j+1));
j++
}

// do while
let w = 0;
do{
    console.log(array_tex.length[w] + (w+1))
    w++;
}while(w < array_tex.length);

// eventos
function enviar(){
    document.body.style.backgroundColor= "red";
    document.body.style.color = "#fff";
}

const btn_limpiar = document.querySelector("#limpiar");

btn_limpiar.addEventListener("click", () => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
});

// ejercicio
const form_register = document.getElementById("form_register");
const nombres       = document.getElementById("nombres");
const apellidos     = document.getElementById("apellidos");
const information   = document.getElementById("information");

form_register.addEventListener("submit", name_even => {
    name_even.preventDefault();
    let info = "";
    if(nombres.value.length <=2 || apellidos.value.length <3){
        info += "Nombres Y Apellidos deben ser mayores o igual a 3 carecteres";
        information.style.color = "red";
    }
    else{
        alert("INFORMACION CORRECTAMENTE");
    }
    information.innerText = info;
});
function action(){
    let action = document.getElementById("action");
    if(action.value.length == 0){
        action.style.backgroundColor = "red";
    }else{
            action.style.backgroundColor = "green";
        }
    }

