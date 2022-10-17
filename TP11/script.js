function calc() {
const pOperando = document.getElementById("pOperando");
const sOperando = document.getElementById("sOperando");
const resultado = document.getElementById("resultado");
const suma = document.getElementById("btnSumar");
const resta = document.getElementById("btnRestar");
const multiplicacion = document.getElementById("btnMultiplicar");
const division = document.getElementById("btnDividir");

let operandoUno
let operandoDos 

pOperando.addEventListener("input", function (event) {operandoUno = pOperando.value})
sOperando.addEventListener("input", function (event) {operandoDos = sOperando.value})

suma.addEventListener("click" , function(){
    let resul = Number(operandoUno) + Number(operandoDos)
    if( Number.isNaN(resul))
    resultado.textContent = "gil"
    else
    resultado.textContent = resul
})
resta.addEventListener("click" , function(){
    let resul = Number(operandoUno) - Number(operandoDos)
    if( Number.isNaN(resul))
    resultado.textContent = "gil"
    else
    resultado.textContent = resul
})
multiplicacion.addEventListener("click" , function(){
    let resul = Number(operandoUno) * Number(operandoDos)
    if( Number.isNaN(resul))
    resultado.textContent = "gil"
    else
    resultado.textContent = resul
})
division.addEventListener("click" , function(){
    let resul = Number(operandoUno) / Number(operandoDos)
    if( Number.isNaN(resul))
    resultado.textContent = "gil"
    else
    {
        if(operandoDos == 0)
        {   
            resultado.classList.add('resultadoError')
            resultado.textContent = "Error, no se puede dividir por 0."}
        else
        {resultado.textContent = resul}
    
    }
})

// result = pOperando + sOperando
// result = pOperando - sOperando
// if(sOperando==0)
// "Error, no se puede dividir por 0. Ingrese un valor correcto"
// result = pOperando / sOperando
// result = pOperando * sOperando
// result = 10
// result = document.getElementById("resultado")
// result.textContent = 1
}
calc();
