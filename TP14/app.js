const htmlIDTarea = document.getElementById("idTarea")
const htmlDescripcion = document.getElementById("descripcion")
const htmlBtnSubmit = document.getElementById("btnSubmit")
const htmlNotas = document.getElementById("notas")
const botonBorrar = document.getElementById("btnBorrar")

htmlBtnSubmit.addEventListener("click" ,  almacene )
mostrar()

function almacene(){
    if(htmlIDTarea.value == "")
    {
        alert("Complete los campos.")
        limpiar()
    }
    else
    {
        localStorage.setItem(htmlIDTarea.value , htmlDescripcion.value)
        limpiar()
    }
    mostrar()
}

function mostrar(){
    for(let i = 0 ; i < localStorage.length ; i++)
    {
        htmlNotas.innerHTML += "(" + localStorage.key(i)+ ") " + localStorage.getItem(localStorage.key(i)) + "<br>"
    }
}
function borrar(){

}
function modificar(){

}
function limpiar (){
    htmlIDTarea.value = ""
    htmlDescripcion.value = ""
}