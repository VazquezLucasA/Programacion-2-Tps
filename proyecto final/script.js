const inputTitle = document.getElementById("inputTitle")
const inputAuthor = document.getElementById("inputAuthor")
const btnCreate = document.getElementById("btnCreate")
const btnEdit = document.getElementById("btnEdit")
const btnDelete = document.getElementById("btnDelete")
const container = document.getElementById("container")
let globalID


btnCreate.addEventListener("click" , guardar)
btnEdit.addEventListener("click" , modificar)
btnDelete.addEventListener("click" , eliminar)

function mostrarTodosLibros(){
    let endpoint = "http://localhost:3000/libros"
    axios.get(endpoint)
    .then(function (respuesta) {
        container.innerHTML=""
        respuesta.data.forEach(element => {
            container.innerHTML +=  '<button onclick="borrar('+element.id+')">x</button>' + '<button onclick="'+`editLibro(${element.id})`+'">m</button>' +  element.titulo + ", " +  element.autor + ". "  + "<br>" 
             
        });
    })
}

function guardar(){
    axios.post("http://localhost:3000/libros",{titulo: inputTitle.value, autor: inputAuthor.value})
    .then(function (resultado){
        alert("dato guardado")
        mostrarTodos()
    })
}

function borrar(id){
    globalID = id
}
function modificar(id){
    let endpoint = "http://localhost:3000/libros/"+globalID
    axios.put(endpoint , {titulo: inputTitle.value, autor: inputAuthor.value})
    .then((respuesta) => {
        mostrarTodosLibros()
    })
}

function editLibro(id){
    globalID = id
    // inputTitle.value = element.titulo
    // inputAuthor.value = element.autor
    console.log(element)
    
}
function eliminar(){
    let endpoint = "http://localhost:3000/libros/"+globalID
    axios.delete(endpoint).then(function (res){
        mostrarTodosLibros()
    })
}

function mostrarTodosAlumnos(){
    let endpoint = "http://localhost:3000/alumnos"
    axios.get(endpoint)
    .then(function (respuesta) {
        container.innerHTML=""
        respuesta.data.forEach(element => {
            //container.innerHTML +=  '<button onclick="borrar('+element.id+')">x</button>' + '<button onclick="mostrar('+element.id+')">m</button>' +  element.titulo + "<br>"
            container.innerHTML += element.nombre + " " +  element.apellido + ". "  + "<br>"
        });
    })
}







mostrarTodosLibros()

