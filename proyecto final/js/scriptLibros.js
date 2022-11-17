const inputTitle = document.getElementById("inputTitle")
const inputAuthor = document.getElementById("inputAuthor")

const btnCreate = document.getElementById("btnCreate")
const btnEdit = document.getElementById("btnEdit")
const btnDelete = document.getElementById("btnDelete")

const containerLibros = document.getElementById("containerLibros")

let estado
let auxiliar

btnEdit.hidden = true

btnCreate.addEventListener("click" , guardarLibro)
btnEdit.addEventListener("click" , actualizarLibro)

function mostrarTodosLibros(){
    let endpoint = "http://localhost:3000/libros"
    axios.get(endpoint)
    .then(function (respuesta) {
        containerLibros.innerHTML=""
        respuesta.data.forEach(element => {

            if (element.prestado){
                
                containerLibros.innerHTML +=  '<button class="frm__btn" onclick="eliminarLibro('+element.id+')">ELIMINAR</button>' + '<button class="frm__btn" onclick="modificarLibro('+element.id+')">EDITAR</button>' +  element.titulo + ", " +  element.autor + ", "+  "<strong>PRESTADO.</strong>" + "<hr>" 

            }else{
                containerLibros.innerHTML +=  '<button class="frm__btn" onclick="eliminarLibro('+element.id+')">ELIMINAR</button>' + '<button class="frm__btn" onclick="modificarLibro('+element.id+')">EDITAR</button>' +  element.titulo + ", " +  element.autor + ", "+  "<strong>DISPONIBLE.</strong>" + "<hr>" 

            }
        })


    })
}

function guardarLibro(){
    if(inputTitle.value == "" || inputAuthor.value == "")
    {
        alert("debe completar todos los campos")
    }
    else{
        axios.post("http://localhost:3000/libros",{titulo: inputTitle.value, autor: inputAuthor.value, prestado: false})
    .then(function (resultado){
        alert("dato guardado")
        mostrarTodosLibros()
    })
    }
}

async function modificarLibro(id) {
    btnCreate.hidden = true
    btnEdit.hidden = false
    auxiliar = id
    resp = await axios.get("http://localhost:3000/libros/" + id)
    inputTitle.value = resp.data.titulo
    inputAuthor.value = resp.data.autor
    estado = resp.data.prestado
}

async function actualizarLibro() {
    btnCreate.hidden = true;
    btnEdit.hidden = false;
    resp = await axios.put("http://localhost:3000/libros/" + auxiliar, { titulo: inputTitle.value, autor: inputAuthor.value, prestado: estado})
}


function eliminarLibro(id){
    let endpoint = "http://localhost:3000/libros/"+id
    axios.get(endpoint)

    .then(function(resultado){
        if(!resultado.data.prestado){
            axios.delete(endpoint)
            .then(function (res){
                mostrarTodosLibros()
            })
            alert("viva la pepa")
        }
        else
        alert("no se puede eliminar un libro prestado")
    })
}

mostrarTodosLibros()






