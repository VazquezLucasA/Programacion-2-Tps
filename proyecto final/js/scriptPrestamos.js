const container = document.getElementById("container")
const sLibros = document.getElementById("sLibros")
const sAlumnos = document.getElementById("sAlumnos")
const btnLend = document.getElementById("btnLend")

listar()
mostrarTodosLibros()
mostrarAlumnos()

let test
btnLend.addEventListener("click" , prestar)


async function listar() {
    resp = await axios.get("http://localhost:3000/prestamos")
    container.innerHTML = ""

    
    resp.data.reverse().forEach(async (element) => {
        let alumno
        let libro
        alumno = await getAlumno(element.alumnoId)
        libro = await getLibro(element.libroId)

        if(element.fechaDevolucion == "")
        {
            
            container.innerHTML +=
            '<button class="frm__btn " onclick="devolver('+element.id+')">Devolver</button>' + " " + alumno + ", " + libro + ". " + element.fechaEntrega+ " - " + element.fechaDevolucion+ " " + "<hr>"

        }
        else{
            container.innerHTML +=
            '<button class="frm__btn frm__btn--devuelto">DEVUELTO</button>' + " " + alumno + ", " + libro + ". " + element.fechaEntrega+ " - " + element.fechaDevolucion+ " " + "<hr>"

        }
    })
}

async function getAlumno(id){
    resp = await axios.get("http://localhost:3000/alumnos/"+id)
    return resp.data.nombre
}

async function getLibro(id){
    resp = await axios.get("http://localhost:3000/libros/"+id)
    return resp.data.titulo
}

 async function devolver(id) {
    const hoy = new Date()
    let endpoint = "http://localhost:3000/prestamos/" + id
    axios.get(endpoint)
    .then(async function(res){
        resp = await axios.put(endpoint, {alumnoId: res.data.alumnoId, libroId: res.data.libroId, fechaEntrega: res.data.fechaEntrega, fechaDevolucion: hoy.toLocaleDateString()})
        estadoPrestado(res.data.libroId, false)
    })
}




function mostrarTodosLibros(){
    let endpoint = "http://localhost:3000/libros"
    axios.get(endpoint)
    .then(function (respuesta) {
        sLibros.innerHTML=""

        respuesta.data.forEach(element => {
            if(!element.prestado)
            sLibros.innerHTML += '<option value="'+element.id+'">'+element.titulo+'</option>'
    })
}
)}

function mostrarAlumnos(){
    let endpoint = "http://localhost:3000/alumnos"
    axios.get(endpoint)
    .then(function (respuesta) {
        sAlumnos.innerHTML=""
        respuesta.data.forEach(element => {
        sAlumnos.innerHTML += '<option value="'+element.id+'">'+element.nombre+'</option>'
    })
}
)}

function prestar(){
    const hoy = new Date()

    let alumnoPrestamo = sAlumnos.options[sAlumnos.selectedIndex].value
    let libroPrestado = sLibros.options[sLibros.selectedIndex].value

    //nuevo prestamo, post
    //nuevo prestamo, date
    guardarPrestamo(alumnoPrestamo, libroPrestado, hoy)
    
    //cambiar estado prestado a libro, put
    estadoPrestado(libroPrestado, true)
    
}

function guardarPrestamo(pibe, librito, hoy) 
{
    axios.post("http://localhost:3000/prestamos/", {alumnoId: pibe, libroId: librito, fechaEntrega: hoy.toLocaleDateString(), fechaDevolucion:""})
    .then(function(resultado){
        alert("libro prestado")
        listar()
    })
}


 function estadoPrestado(id , estado) {
    
    let endpoint = "http://localhost:3000/libros/" + id
    axios.get(endpoint)
    .then(async function(res){

     axios.put("http://localhost:3000/libros/" +id,  {titulo: res.data.titulo, prestado: estado, autor: res.data.autor})
     .then(function(resp){})})
}
