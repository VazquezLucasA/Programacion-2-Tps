const titulo = document.getElementById("tit")
const listado = document.getElementById("lis")
const btnagr = document.getElementById("agr")
const btnact = document.getElementById("act");

let auxiliar

listar()


async function guardar() {
    // axios.post("http://localhost:3000/libros", { titulo: titulo.value })
    //      .then(function (resp) {
    //           alert("grabacion ok")
    //      })
    resp = await axios.post("http://localhost:3000/libros", { titulo: titulo.value })
}

async function listar() {
    resp = await axios.get("http://localhost:3000/libros")
    listado.innerHTML = ""
    resp.data.forEach(element => {
        listado.innerHTML +=
            '<button onclick="borrar(' + element.id + ')">borrar</button>' +
            '<button onclick="mostrar('+element.id+')">editar</button>' +
          element.titulo +
          "<br>";
    });
}



async function borrar(id) {
 //   if (!LibroEstaPrestado(id)) {  //ejemplo de como seria mas o menos la validacion de borrado
        try {
            await axios.delete("http://localhost:3000/lbros/" + id)
        } catch (error) {
            alert("error al borrar")
        }
 //   }
 //   else {
 //       alert("no puede borrar un libro que esta prestado")
 //   }

}

async function mostrar(id) {
    btnact.hidden = false
    btnagr.hidden = true
    auxiliar = id
    resp = await axios.get("http://localhost:3000/libros/" + id)
    titulo.value = resp.data.titulo
}

async function actualizar() {
    btnact.hidden = true;
    btnagr.hidden = false;
    resp = await axios.put("http://localhost:3000/libros/" + auxiliar, { titulo: titulo.value })
}

//verificar si funciona esta validadcion
async function LibroEstaPrestado(id) {
    resp = axios.get("http://localhost:3000/prestamos")
    array.forEach(element => {
        if (element.libroId == id && element.fecchadevolucion == "") {
            return true
        }
    })
    return false
}



