// const divBoton = getElementByClassName()
const divBoton = document.querySelector(".clase-button")
divBoton.addEventListener("click", agregarBoton)
    // buscar createElement, insertAfter, insert Before, ActionBefore, insertElement
    // LA JERARQUIA DE LOS ESTILOS EN CSS
function agregarBoton() {
    const newDiv = document.createElement("button");
    //newDiv.id = "botoncito"
    newDiv.style = [("background: red; width:200px; height:200px; margin:10px")];
    //añade texto al buton creado.
    const newContent = document.createTextNode("Nuevo boton");
    newDiv.appendChild(newContent);
    // añade el elemento creado y su contenido al DOM
    //var currentDiv = document.getElementById("div1");
    //el etiqueta.insertBefore(pide dos parametros)
    //document.body.insertBefore(newDiv, currentDiv);
    document.body.append(newDiv);
}

const eliminar = document.querySelector(".clase-button-eliminar")
const id = document.getElementById("#bot")
eliminar.addEventListener("click", eliminarBoton)

function eliminarBoton(id) {
    document.div.button.removeChild(eliminar)

}