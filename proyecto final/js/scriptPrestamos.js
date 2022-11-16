const container = document.getElementById("container")
const sLibros = document.getElementById("sLibros")
const sAlumnos = document.getElementById("sAlumnos")
const btnLend = document.getElementById("btnLend")
const sAlumnosOp = document.getElementById("sAlumnos").value

listar()
mostrarTodosLibros()
mostrarAlumnos()

let test
btnLend.addEventListener("click" , prestar)


async function listar() {
    resp = await axios.get("http://localhost:3000/prestamos")
    container.innerHTML = ""
    resp.data.reverse().forEach(element => {
        if(element.fechaDevolucion == "")
        {
            container.innerHTML +=
            '<button class="frm__btn " onclick="devolver('+element.id+')">Devolver</button>' + " " + element.alumnoId+ " " + element.libroId+ " " + element.fechaEntrega+ " " + element.fechaDevolucion+ " " + "<br>"

        }
        else{
            container.innerHTML +=
            '<button class="frm__btn frm__btn--devuelto">DEVUELTO</button>' + " " + element.alumnoId+ " " + element.libroId+ " " + element.fechaEntrega+ " " + element.fechaDevolucion+ " " + "<br>"

        }
    })
}


async function getAlumno(prestamo){
    resp = await axios.get("http://localhost:3000/alumnos/"+prestamo[0])
    //prestamo[1] = resp.data.nombre
    //console.log(prestamo[1])
    return resp.data.nombre
}

 async function devolver(id) {
    let endpoint = "http://localhost:3000/prestamos/" + id
    axios.get(endpoint)
    .then(async function(res){
        resp = await axios.put(endpoint, {alumnoId: res.data.alumnoId, libroId: res.data.libroId, fechaEntrega: res.data.fechaEntrega, fechaDevolucion: 1})
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
        //console.log(element.nombre)
    })
}
)}

function prestar(){
    const hoy = new Date()
    console.log(test)
    let alumnoPrestamo = sAlumnos.options[sAlumnos.selectedIndex].value
    let libroPrestado = sLibros.options[sLibros.selectedIndex].value
    
    //console.log(alumnoPrestamo, libroPrestado)

    //nuevo prestamo, post
    //nuevo prestamo, date
    guardarPrestamo(alumnoPrestamo, libroPrestado, hoy)
    
    //cambiar estado prestado a libro, put ||||||||||||||||||||||||||||
    estadoPrestado(libroPrestado, true)
    
}

function guardarPrestamo(pibe, librito, hoy) {
    test = 12
    axios.post("http://localhost:3000/prestamos/", {alumnoId: pibe, libroId: librito, fechaEntrega: hoy.toLocaleDateString(), fechaDevolucion:""})
    .then(function(resultado){
        alert("viva la pepa")
        listar()
        console.log(3)
    }
    )
}

function guardarLibro(){
    
    axios.post("http://localhost:3000/libros",{titulo: inputTitle.value, autor: inputAuthor.value, prestado: false})
    .then(function (resultado){
        alert("dato guardado")
        mostrarTodosLibros()
    })
}


//|||||||||||||||||||||||||||||||
 function estadoPrestado(id , estado) {
    
    let endpoint = "http://localhost:3000/libros/" + id
    axios.get(endpoint)
    .then(async function(res){

     axios.put("http://localhost:3000/libros/" +id,  {titulo: res.data.titulo, prestado: estado, autor: res.data.autor})
     .then(function(resp){
        alert("viva la pepa")
     })})
}
