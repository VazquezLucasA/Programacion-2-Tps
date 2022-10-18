function calc() {
const pOperando = document.getElementById("pOperando");
const sOperando = document.getElementById("sOperando");
const resultado = document.getElementById("resultado");
const suma = document.getElementById("btnSumar");
const resta = document.getElementById("btnRestar");
const multiplicacion = document.getElementById("btnMultiplicar");
const division = document.getElementById("btnDividir");
const btnClear = document.getElementById("clear")

let operandoUno
let operandoDos 

pOperando.addEventListener("input", function (event) {operandoUno = pOperando.value})
sOperando.addEventListener("input", function (event) {operandoDos = sOperando.value})

suma.addEventListener("click" , function(){
    let resul = Number(operandoUno) + Number(operandoDos)
    if( Number.isNaN(resul)){
    resultado.classList.add('resultadoError')
    resultado.textContent = "Por favor, ingrese solo numeros"}
    else
    {
        colorNormal()
    resultado.textContent = resul}
})
resta.addEventListener("click" , function(){
    let resul = Number(operandoUno) - Number(operandoDos)
    if( Number.isNaN(resul)){
    resultado.classList.add('resultadoError')
    resultado.textContent = "Por favor, ingrese solo numeros"}
    else{
        colorNormal()
        resultado.textContent = resul
    }
})
multiplicacion.addEventListener("click" , function(){
    let resul = Number(operandoUno) * Number(operandoDos)
    if( Number.isNaN(resul)){
    resultado.classList.add('resultadoError')
    resultado.textContent = "Por favor, ingrese solo numeros"}
    else{
        colorNormal()
        resultado.textContent = resul
    }
})
division.addEventListener("click" , function(){
    let resul = Number(operandoUno) / Number(operandoDos)
    if( Number.isNaN(resul)){
    resultado.classList.add('resultadoError')
    resultado.textContent = "Por favor, ingrese solo numeros"}
    else
    {
        if(operandoDos == 0)
        {   
            resultado.classList.add('resultadoError')
            resultado.textContent = "Error, no se puede dividir por 0."}
        else
        {resultado.textContent = resul
            colorNormal()}
    
    }
})
btnClear.addEventListener("click" , function(){
    pOperando.value = ""
    sOperando.value = ""
    resultado.textContent = ""
    operandoUno = null
    operandoDos = null
    colorNormal()
})
function colorNormal(){
    resultado.classList.remove("resultadoError")
}
}
calc()
