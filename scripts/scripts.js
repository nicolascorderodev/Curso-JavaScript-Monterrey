/*
!Introducción a JavaScript.
*Se dio una pequeña introducción acerca de JavaScript, las diferencias de este lenguaje a comparación de HTML y CSS y se vieron las competencias a adquirir en este módulo.
!Finaliza la introducción.
*/


/*
!TEMA 1: Scripts.
*Se muestra la forma en la que se puede usar JavaScript en HTML:
1- A tráves de la etiqueta script haciendo la conexión con un archivo externo.
<script src="../scripts/scripts.js"></script>
alert("Alerta");

2-Colocando el código JavaScript dentro de la etiqueta script sin necesidad de un archivo externo.
<script>
    alert("Alerta");
</script>
!Finaliza el TEMA 1: Scripts.
*/


/*
!TEMA 2: Variables.
*LITERALES: VALORES FIJOS
12.57                       --   Número decimal.
12                          --   Número entero.
-12                         --   Número negativo.
"¡Hola mundo!"              --   Cadena de caracteres con comillas dobles.
'¡Hola mundo!'              --   Cadena de caracteres con comillas simples.

*VARIABLES: CAMBIAN SU VALOR
var x;                      --   Declarar una variable sin valor inicial.
var x = 5;                  --   Declarar variable con valor inicial.
var x = "¡Hola mundo!"      --   Declarar una variable con un string asignado.


*Como escribir correctamente una variable:
var var = 5; Incorrecta, utiliza var que es una palabra reservada.

var vari*able = 5; Incorrecta, utiliza un caracter especial para el nombre de la variable

var mi_variable = 5; Correcta, los simbolos "-" y "_" son válidos.


*Copiar el valor de la primera variable a la segunda
var a = 5;
var b = a;//Después de correr esta línea de código, JavaScript tendrá declaradas las variables a y b con el valor numérico 5
!Finaliza el TEMA 2: Variables.
*/


/*
!TEMA 3: Funciones.
*Función que regresa un valor
function miFuncion(a,b){
    var resultado = a * b + a;
    return resultado;
}
var respuesta = miFuncion(2, 3);
console.log(respuesta);



*Función que no regresa ningun valor.
function saludar() {
    console.log("¡Hola, Nicolás!");
}
saludar(); //Esto imprime "¡Hola, Nicolás!" pero no devuelve nada.



*Ejercicio hecho en clase.
function estructura(a,b,c){
    var desarrollo = a * a * b + c - c;
    console.log("Hola Mundo");
    return desarrollo;
}
console.log(estructura(7,2,3));
!Finaliza el TEMA 3: Funciones.
*/

/*
!TEMA 4: Operadores.
*Operadores aritméticos
var suma = 2 + 5;
console.log(suma);

var resta = -2 - 3;
console.log(resta);

var multiplicacion = 12 * .5;
console.log(multiplicacion);

var division = 6/3;
console.log(division);

var residuo_division = 8 % 2;
console.log(residuo_division);

var potencia = 2 ** 8;
console.log(potencia);
!Finaliza el TEMA 4: Operadores.
*/

suma = 2;
suma += 7;
console.log(suma);

resta = 9;
resta -= 9;
console.log(resta);

multiplicacion = 8;
multiplicacion *= 7;
console.log(multiplicacion);

division = 6;
division /= 6;
console.log(division);

modulo = 5;
modulo %= 11;
console.log(modulo);

potencia = 4;
potencia **= 2;
console.log(potencia);