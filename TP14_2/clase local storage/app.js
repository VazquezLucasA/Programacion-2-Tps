const tarea = document.getElementById("nro")
const descripcion = document.getElementById("tar")
const boton = document.getElementById("btn")
const contenedor = document.getElementById("con")
const botonBorrar = document.getElementById("bor")

boton.addEventListener("click", almacene)


mostrar()

function almacene(){
    localStorage.setItem(tarea.value, descripcion.value)
    tarea.value=""
    descripcion.value=""
    mostrar()
}

function mostrar(){
    contenedor.innerHTML = ""
    for (let i=0; i<localStorage.length; i++){
        contenedor.innerHTML += '<button id="bor" onclick="borrar('+localStorage.key(i)+')" style="background-color:red">x</button>' + '<button id="bor" onclick="modificar('+localStorage.key(i)+')" style="background-color:green">m</button>' + ' ' +localStorage.key(i)+" - "+localStorage.getItem(localStorage.key(i)) + "<br>"
    }
}

function modificar(tar){
    tarea.value = tar
    descripcion.value = localStorage.getItem(tar)
    descripcion.focus()
}

function borrar(tarea){
    localStorage.removeItem(tarea)
    mostrar()
}