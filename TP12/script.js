function app (){
    const htmlPeso = document.getElementById("peso")
    const htmlAltura = document.getElementById("altura")
    const htmlResultado = document.getElementById("resultado")
    const htmlBtnSubmit = document.getElementById("btnSubmit")
    let peso
    let altura
    let imc

    htmlPeso.addEventListener("input", function (event) {peso = htmlPeso.value})
    htmlAltura.addEventListener("input", function (event) {altura = htmlAltura.value})

    //IMC = peso (kg)/ [estatura (m)]2
    imc = peso / (altura * altura)
    
    htmlBtnSubmit.addEventListener("click" , function(){
        CaptarResultados ()
        htmlResultado.value = imc
    })

}
app

function CaptarResultados (){
    htmlPeso.addEventListener("input", function (event) {peso = htmlPeso.value})
    htmlAltura.addEventListener("input", function (event) {altura = htmlAltura.value})
}