const inputTitle = document.getElementById("inputTitle")
const inputAuthor = document.getElementById("inputAuthor")

const btnCreate = document.getElementById("btnCreate")
const btnEdit = document.getElementById("btnEdit")
const btnDelete = document.getElementById("btnDelete")

const containerLibros = document.getElementById("containerLibros")

let globalID
let auxiliar

btnEdit.hidden = true

btnCreate.addEventListener("click" , guardarLibro)
btnEdit.addEventListener("click" , actualizarLibro)
//btnDelete.addEventListener("click" , eliminar)

function mostrarTodosLibros(){
    let endpoint = "http://localhost:3000/libros"
    axios.get(endpoint)
    .then(function (respuesta) {
        containerLibros.innerHTML=""
        respuesta.data.forEach(element => {
        containerLibros.innerHTML +=  '<button class="frm__btn" onclick="eliminarLibro('+element.id+')">ELIMINAR</button>' + '<button class="frm__btn" onclick="modificarLibro('+element.id+')">EDITAR</button>' +  element.titulo + ", " +  element.autor + ". "  + "<br>" }); 

        //'<tr> <td>< <button class="frm__btn" onclick="eliminarLibro('+element.id+')">ELIMINAR</button>' + '<button class="frm__btn" onclick="modificarLibro('+element.id+')">EDITAR</button>' +  element.titulo + ", " +  element.autor + ". "})</tr>

    })
}
function guardarLibro(){
    axios.post("http://localhost:3000/libros",{titulo: inputTitle.value, autor: inputAuthor.value})
    .then(function (resultado){
        alert("dato guardado")
        mostrarTodosLibros()
    })
}

async function modificarLibro(id) {
    btnCreate.hidden = true
    btnEdit.hidden = false
    auxiliar = id
    resp = await axios.get("http://localhost:3000/libros/" + id)
    inputTitle.value = resp.data.titulo
    inputAuthor.value = resp.data.autor
}

async function actualizarLibro() {
    btnCreate.hidden = true;
    btnEdit.hidden = false;
    resp = await axios.put("http://localhost:3000/libros/" + auxiliar, { titulo: inputTitle.value, autor: inputAuthor.value })
}


function eliminarLibro(id){
    let endpoint = "http://localhost:3000/libros/"+id
    axios.delete(endpoint)
    .then(function (res){
        mostrarTodosLibros()
    })
}
mostrarTodosLibros()










