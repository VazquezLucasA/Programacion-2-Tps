    const htmlPeso = document.getElementById("peso")
    const htmlAltura = document.getElementById("altura")
    const htmlResultado = document.getElementById("resultado")
    const htmlBtnSubmit = document.getElementById("btnSubmit")
    let peso
    let altura
    let imc

    //htmlPeso.addEventListener("input", function (event) {peso = htmlPeso.value})
    //htmlAltura.addEventListener("input", function (event) {altura = htmlAltura.value})

    //IMC = peso (kg)/ [estatura (m)]2
    //imc = peso / (altura * altura)
    
    htmlBtnSubmit.addEventListener("click" , function(){
        peso = htmlPeso.value
        altura = htmlAltura.value
        imc = peso / (altura * altura)
        
        
        if(Number.isNaN(imc))
        {
            alert("Ingrese solo números")
            limpiar()
            htmlResultado.value = ""
        }
        else{
            htmlResultado.value = imc
            limpiar()
        }
    })


function CaptarResultados(){
    htmlPeso.addEventListener("input", function (event) {peso = htmlPeso.value})
    htmlAltura.addEventListener("input", function (event) {altura = htmlAltura.value})
}

function limpiar(){
    htmlAltura.value = ""
    htmlPeso.value = ""
}