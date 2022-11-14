const container = document.getElementById("container")

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
        console.log(prestamo[1])

        container.innerHTML +=
            '<button onclick="borrar(' + element.id + ')">borrar</button>' +
            '<button onclick="mostrar('+element.id+')">editar</button>' + " " + nombre   + "<br>";

    });
}

async function getAlumno(prestamo){
    resp = await axios.get("http://localhost:3000/alumnos/"+prestamo[1])
    prestamo[1] = resp.data.nombre
    console.log(prestamo[1])
    return JSON.stringify(resp.data.nombre)
}
listar()

function traerLibro(id){
    
    let endpoint = "http://localhost:3000/libros/"+id
    axios.get(endpoint)
    .then(function (respuesta) {
    })

}

