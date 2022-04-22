//1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.

/*
 alert("Hello World!");
*/

//2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).

/*
 document.write("Hello World!" + "<br>");
*/

//3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

/*
document.write("3 + 5 = " + (3 + 5) + "<br>");
*/

//4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”

//document.write("Hola " + prompt("Cual es tu nombre?") + "!" + "<br>"); Se puede hacer en una línea

/*
let nombre = prompt("Cuál es tu nombre?");
document.write(`Hola ${nombre}!<br>`);
*/

//5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

/*
num1 = parseInt(prompt("Ingrese un numero: "));
num2 = parseInt(prompt("Ingrese otro numero: "));
document.write(`${num1} + ${num2} = ` + (num1 + num2));
*/

//6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

/*
let num = parseInt(prompt("Ingrese un número")),num2 = parseInt(prompt("Ingrese otro número"));

if(num2 > num){
    num = num2;
}

document.write(`El mayor es: ${num}`);
*/

//7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

/*
let max = 0, i =0;

while(i < 3){
    let num = parseInt(prompt("Ingrese un numero:"));

    if(num > max){
        max = num;
    }
    i++;
}

document.write(`El número mayor es: ${max}`);
*/

//8. Escribe un programa que pida un número y diga si es divisible por 2

/*
if(parseInt(prompt("Ingrese un número: ")) % 2 == 0){
    document.write("El número es divisible por 2.");
}
else{
    document.write("El número no es divisible por 2.");
}
*/

//9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

/*
let frase = prompt("Escriba una frase: "),coincidencias = 0;
frase = frase.toLowerCase();

for(let i =0; i < frase.length; i++){
    if(frase[i] == 'a'){
        coincidencias++;
    }
}

if(coincidencias>0){
    document.write('Veces que aparece la letra "a" en la frase: ' + coincidencias);
}
else{
    document.write("La frase no contiene la letra a");
}
*/

//10. Escribe un programa que pida una frase y escriba las vocales que aparecen

/*
let frase = prompt("Escriba una frase: "),coincidencias = [],vocales = ['a','e','i','o','u'];
frase = frase.toLowerCase();

for(let i =0; i < frase.length; i++){
    if(vocales.includes(frase[i]) && !coincidencias.includes(frase[i])){
        coincidencias.push(frase[i]);
    }
}

coincidencias.sort();

document.write("La frase contiene estas vocales: " + coincidencias);
*/

//11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales

/*
let frase = prompt("Escriba una frase: "),coincidencias = 0,vocales = ['a','e','i','o','u'];
frase = frase.toLowerCase();

for(let i =0; i < frase.length; i++){
    if(vocales.includes(frase[i])){
        coincidencias++;
    }
}

document.write("La cantidad de vocales en la frase es de: " + coincidencias);
*/

//12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

/*
let frase = prompt("Escriba una frase: "),coincidencias = [],vocales = ['a','e','i','o','u'],conteo = 0;
frase = frase.toLowerCase();

for(let i =0; i < frase.length; i++){
    if(vocales.includes(frase[i])){
        coincidencias.push(frase[i]);
    }
}

for(i=0; i < vocales.length; i++){
    for(let k = 0; k < coincidencias.length; k++){
        if(vocales[i] == coincidencias[k]){
            conteo++;
        }
    }
    if(conteo>0){
        document.write(`Cantidad de "${vocales[i]}" en la frase: ${conteo}.` + "<br>");
        conteo = 0;
    }
}

*/

//13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

/*
let num = parseInt(prompt("Ingrese un numero: "));

if(num%5 == 0){
    document.write(`El número ${num} es divisible por 5.`);
}
else{
    document.write(`El número ${num} NO es divisible por 5.`);
}
*/

//14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

/*
let num = parseInt(prompt("Ingrese un numero: ")), divisores=[2,3,5,7];

document.write(`El número ${num} es divisible por: <br> `);

for(let i=0; i< divisores.length ;i++){
    if(num % divisores[i] == 0){
        document.write(divisores[i] + "<br>");
    }
}
*/

//15. Escribir un programa que escriba en pantalla los divisores de un número dado

/*
let num = parseInt(prompt("Ingrese un numero: "));

document.write(`El número ${num} es divisible por: <br> `);

for(let i=0; i <=num; i++){
    if(num % i == 0){
        document.write(i + "<br>");
    }
}
*/

//16. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

/*
function divisores(num){
    let divisores = []
    for(let i=0; i <=num; i++){
        if(num % i == 0){
            divisores.push(i);
        }
    }

    return divisores;
}

let num1 = parseInt(prompt("Ingrese un numero: ")),num2 = parseInt(prompt("Ingrese otro numero: ")),div1=[],div2=[];

div1 = divisores(num1);
div2 = divisores(num2);

document.write(`Los divisores comunes de ${num1} y ${num2} son: <br> `);

for(let i=0; i<div1.length;i++){
    for(let k=0; k<div2.length;k++){
        if(div1[i] == div2[k]){
            document.write(div1[i] + "<br>");
        }
    }
    k=0;
}
*/

//17. Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

/*
function primo(num){
    let divisores = []
    for(let i=0; i <=num; i++){
        if(num % i == 0){
            divisores.push(i);
        }
    }

    if(divisores.length != 2){
        document.write(`<p id="js-t-red">` + `El número ${num} NO es primo.` + `</p>`);
    }
    else{
        document.write(`<p id="js-t-green">`+`El número ${num} es primo.`+`</p>`);
    }
}

let num = parseInt(prompt("Ingrese un número: "));

primo(num);
*/

//18. Pide la edad y si es mayor de 18 años indica que ya puede conducir

/*
let edad = parseInt(prompt("Ingresa tu edad: "));

if(edad>=18){
    document.write(`<p id="js-t-green">`+`Tenés ${edad} años ya podes conducir!! :)`+`</p>`);
}
else{
    document.write(`<p id="js-t-red">` + `Tenés ${edad} años NO podes conducir :(` + `</p>`);
}
*/

/*19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente
*/

/*
let flag=false;
let nota=0;

while(flag == false){
    nota = parseInt(prompt("Ingresa la nota: "));
    if(nota>=0 && nota<=10){
        flag = true;
    }
    else{
        alert("Ingrese una nota con un valor de 0-10");
    }
}

if(nota>= 0 && nota<3){
    document.write("Calificacion: Muy deficiente");
}
else if(nota>= 3 && nota<5){
    document.write("Calificacion: Insuficiente");
}
else if(nota>= 5 && nota<6){
    document.write("Calificacion: Suficiente");
}
else if(nota>= 6 && nota<7){
    document.write("Calificacion: Bien");
}
else if(nota>= 7 && nota<9){
    document.write("Calificacion: Notable");
}
else if(nota>= 9 && nota<=10){
    document.write("Calificacion: Sobresaliente");
}
*/

//20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión

/*
let ss="",sconcat="";
console.log(ss);

while(ss != null){
    ss = prompt("ingrese tal");
    if(ss != null){
        sconcat = sconcat.concat(" - " + ss);
    }
}

document.write("El string resulta: " + sconcat);
*/

//21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


/*
let suma = 0,tonum="",num=0;

while(tonum != null){
    tonum = prompt("Ingrese un número");//--Probar sacar esto
    num = parseInt(tonum);
    
    if(tonum != null){
        if(isNaN(num)){
            alert("Lo ingresado NO es un número, vuelva a intentar.");
        }
        else{
            suma += num;
        }
    }
}

document.write("La suma de los numeros ingresados resulta: " + suma);
*/

/*22. Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente :
● El número debe ser entre 0 y 99999999
● Debemos calcular el resto de la división entera entre el número y el número
23.
● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
● Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

/*
let dni = 1, letras=["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"], todni="";

while(todni != null){
    todni = prompt("Ingrese un DNI:");
    dni = parseInt(todni);
    if(dni >0 && dni<=99999999){
        let i = dni%23;
        document.write(`<p>Al dni ${dni} le corresponde la letra: ${letras[i]}.</p>`);
    }
    if(todni != null){
        if(isNaN(dni)){
            alert("Lo que ha ingresado NO es un número, por favor intente de nuevo.");
        }
    }
}
*/

/*23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 1
22
333
4444
55555
666666
.......*/

/*
for(let i=1; i<=30; i++){
    for(let k=1;k<=i;k++){
        document.write(i);
    }
    document.write("<br>");
}
*/

/*24. Haz un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1*/

/*
for(let i=30; i>0; i--){
    for(let k=i;k>0;k--){
        document.write(i);
    }
    document.write("<br>");
}
*/

/*25. Un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5
————————————————————
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10*/

/*
for(let i=1; i<=500;i++){
    document.write(i);
    if(i%4 == 0){
        document.write(" " + "(Multiplo de 4)");
    }
    else if(i%9 == 0){
        document.write(" " + "(Multiplo de 9)");
    }

    document.write("<br>");
    if(i%5 == 0){
        document.write("————————————————————" + "<br>");
    }
}
*/