const nroTarea = document.getElementById("nro")
const tarea = document.getElementById("tarea")
const boton = document.getElementById("btn")
const borrado = document.getElementById("borrar")
const contenedor = document.getElementById("con")

boton.addEventListener("click", almacene)
mostrar()

function almacene(){
    localStorage.setItem(nroTarea.value , tarea.value)
    mostrar()
}

function mostrar(){
    contenedor.innerHTML = ""
    for (let i = 0 ; i < localStorage.length ; i++)
    {
        //contenedor.innerText += localStorage.getItem(localStorage.key(i))
        contenedor.innerHTML += "( " + parseInt(i+1) + ")  " + localStorage.getItem(localStorage.key(i)) + "<br>"
        //localStorage.getItem(localStorage.value(i))
    }
}
borrado.addEventListener("click",borroncito)

function borroncito () {
    localStorage.removeItem(nroTarea.value)
    mostrar()
}