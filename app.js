// PEDIR 4 datos
// NOMBRE - CONTRASEÑA - AÑO de nacimiento - Año actual
//- INGRESAR
//SI LA CONTRASEÑA es "coderhouse"
//DETALLE A TENER ENCUENTA si el usuario ingresa CoDerHouse
// o variantes similares tiene que entrar igual
//TIPS OJO con los tipos de dato de los años 
//TENGO QUE MOSTRAR EN ALERT mi edad actual
// "NOMBRE TENES XX AÑOS"
//SINO digo que la contraseña es incorrecta

let nombre = prompt("Ingrese su nombre");
let contrasena = prompt("Ingrese su contraseña");
let anoNacimiento = Number(prompt("Ingrese su año de nacimiento"));
let anoActual = Number(prompt("Ingrese el año actual"));

if (contrasena.toLowerCase() == "coderhouse") {
    alert(nombre + " tenés " + (anoActual - anoNacimiento) + " años.");
} else {
    alert("Contraseña incorrecta");
}