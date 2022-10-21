// function app() {
    const htmlNumero = document.getElementById("numeroIngresado")
    const htmlbtnSubmit = document.getElementById("btnSubmit")
    const htmlResultados = [document.getElementById("resultadoUno"),document.getElementById("resultadoDos"),document.getElementById("resultadoTres"),document.getElementById("resultadoCuatro"),document.getElementById("resultadoCinco"),document.getElementById("resultadoSeis"),document.getElementById("resultadoSiete"),document.getElementById("resultadoOcho"),document.getElementById("resultadoNueve"),document.getElementById("resultadoDiez")]
    const test = document.getElementById("resultadoDiez")
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let numero

    htmlNumero.addEventListener("input", function (event) {
    numero = htmlNumero.value;})
    
    htmlbtnSubmit.addEventListener("click" , function(){
        
        
        for (let index = 0; index < numeros.length; index++) {
           
            result = numeros[index] * numero;

            if(Number.isNaN(result))
            {
                alert("Por favor ingrese un valor válido. Solo números.");
                break;
            }
            else{
                
                htmlResultados[index].textContent =     numero + " x " + numeros[index] + " = " + parseInt(result)
            }
            htmlNumero.value = null
       }
       
  
    } )

    
// }
// app();
