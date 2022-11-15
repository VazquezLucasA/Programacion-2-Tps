const container = document.getElementById("container")
const sLibros = document.getElementById("sLibros")
const sAlumnos = document.getElementById("sAlumnos")
const btnLend = document.getElementById("btnLend")
const sAlumnosOp = document.getElementById("sAlumnos").value

listar()
mostrarTodosLibros()
mostrarAlumnos()

btnLend.addEventListener("click" , prestar(sAlumnos.options[sAlumnos.selectedIndex.value]))

//|||||||||||||||||||||||
async function listar() {
    resp = await axios.get("http://localhost:3000/prestamos")
    container.innerHTML = ""
    resp.data.forEach(element => {
        let prestamo = []
        prestamo [0]= element.alumnoId //libro
        prestamo [1]= element.libroId //alumno 
        prestamo [2] = element.fechaEntrega //fecha entrega
        prestamo [3] = element.fechaDevolucion //fecha devolucion

        let nombre = getAlumno(prestamo)
        //console.log(prestamo[1])

        container.innerHTML +=
            '<button onclick="borrar(' + element.id + ')">borrar</button>' +
            '<button onclick="mostrar('+element.id+')">editar</button>' + " " + element.alumnoId+ " " + element.libroId+ " " + element.fechaEntrega+ " " + element.fechaDevolucion+ " " + "<br>";

    });
}


async function getAlumno(prestamo){
    resp = await axios.get("http://localhost:3000/alumnos/"+prestamo[1])
    prestamo[1] = resp.data.nombre
    //console.log(prestamo[1])
    return JSON.stringify(resp.data.nombre)
}







function mostrarTodosLibros(){
    let endpoint = "http://localhost:3000/libros"
    axios.get(endpoint)
    .then(function (respuesta) {
        sLibros.innerHTML=""
        respuesta.data.forEach(element => {
        sLibros.innerHTML += '<option value="('+element.id+')">'+element.titulo+'</option>'
    })
}
)}

function mostrarAlumnos(){
    let endpoint = "http://localhost:3000/alumnos"
    axios.get(endpoint)
    .then(function (respuesta) {
        sAlumnos.innerHTML=""
        respuesta.data.forEach(element => {
        sAlumnos.innerHTML += '<option value="('+element.id+')">'+element.nombre+'</option>'
        //console.log(element.nombre)
    })
}
)}

function prestar (){
    
    alumnoPrestamo = sAlumnos.options[sAlumnos.selectedIndex].value;
    libroPrestado = sLibros.options[sLibros.selectedIndex].value;
    console.log(alumnoPrestamo, libroPrestado)
}
