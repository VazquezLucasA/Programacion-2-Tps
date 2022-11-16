const titulo = document.getElementById("tit")
const listado = document.getElementById("lis")
mostrarTodos()
let idGlobal

function mostrar(id){
    let endpoint = "http://localhost:3000/libro/"+id
    axios.get(endpoint)
    .then(function (res) {
        titulo.value = res.data.titulo
        idGlobal = res.data.id
    })
}

function mostrarTodos(){
    let endpoint = "http://localhost:3000/libro"
    axios.get(endpoint)
    .then(function (res) {
        listado.innerHTML=""
        res.data.forEach(element => {
            listado.innerHTML +=  '<button onclick="borrar('+element.id+')">x</button>' + '<button onclick="mostrar('+element.id+')">m</button>' +  element.titulo + "<br>"
        });
    })
}

function guardar(){
    axios.post("http://localhost:3000/libro",{titulo: titulo.value})
    .then(function (res){
        alert("dato guardado")
        mostrarTodos()
    })
}

function borrar(id){
    let endpoint = "http://localhost:3000/libro/"+id
    axios.delete(endpoint).then(function (res){
        alert("dato borrado")
        mostrarTodos()
    })
}

function modificar(){
    let endpoint = "http://localhost:3000/libro/"+idGlobal
    axios.put(endpoint,{titulo: titulo.value})
    .then(function (res){
        alert("dato modificado")
        mostrarTodos()
    })
}