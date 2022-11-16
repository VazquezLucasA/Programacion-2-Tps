const inputDni = document.getElementById("inputDNI")
const inputName = document.getElementById("inputName")
const inputAdress = document.getElementById("inputAdress")

const btnCreate = document.getElementById("btnCreate")
const btnEdit = document.getElementById("btnEdit")
const btnDelete = document.getElementById("btnDelete")
const container = document.getElementById("container")

let globalAux
let idiliar

btnEdit.hidden = true

btnCreate.addEventListener("click" , guardarAlumno)
btnEdit.addEventListener("click" , actualizarAlumno)
//btnDelete.addEventListener("click" , eliminar)

function mostrarTodosAlumnos(){
    let endpoint = "http://localhost:3000/alumnos"
    axios.get(endpoint)
    .then(function (respuesta) {
        container.innerHTML=""
        respuesta.data.forEach(element => {
        container.innerHTML +=  '<button class="frm__btn" onclick="alumnoDeuda('+element.id+')">ELIMINAR</button>' + '<button class="frm__btn" onclick="modificarAlumno('+element.id+')">EDITAR</button>' +  element.dni + ", " +  element.nombre + ". " + element.direccion + "<br>" 

        //container.innerHTML += '<tr> <td>'+ element.dni + '</td> <td>' +  element.nombre +'</td> <td>'+element.direccion+'</td> <td><button class="frm__btn" onclick="eliminarAlumno('+element.id+')">ELIMINAR</button></td> <td><button class="frm__btn" onclick="modificarAlumno('+element.id+')">EDITAR</button> </td> </tr>'
        
        })
        
    })
}
function guardarAlumno(){
    axios.post("http://localhost:3000/alumnos",{dni: inputDni.value, nombre: inputName.value, direccion: inputAdress.value})
    .then(function (resultado){
        mostrarTodosAlumnos()
    })
}

async function modificarAlumno(id) {
    btnCreate.hidden = true
    btnEdit.hidden = false
    idiliar = id
    resp = await axios.get("http://localhost:3000/alumnos/" + id)
    inputDni.value = resp.data.dni
    inputName.value = resp.data.nombre
    inputAdress.value = resp.data.direccion
}

async function actualizarAlumno() {
    btnCreate.hidden = true;
    btnEdit.hidden = false;
    resp = await axios.put("http://localhost:3000/alumnos/" + idiliar, {dni: inputDni.value, nombre: inputName.value, direccion: inputAdress.value})
}


function eliminarAlumno(id){
   
    
   
        
        let endpoint = "http://localhost:3000/alumnos/"+id
         axios.delete(endpoint)
         .then(function (res){mostrarTodosAlumnos()})
    
    
}


async function alumnoDeuda(id) {
    let auxDeuda
    resp = await axios.get("http://localhost:3000/prestamos")

    resp.data.forEach(element => {
        
        if (element.alumnoId == id && element.fechaDevolucion == "") 
        {
            auxDeuda = true
        }
        else
        {
            auxDeuda = false
        }
        
        
    });

    if(auxDeuda)
        alert("no se puede eliminar un alumno con deuda")
    else
        eliminarAlumno(id)
 }






mostrarTodosAlumnos()

