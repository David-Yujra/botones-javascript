// const divBoton = getElementByClassName()
const botonAgregar = document.querySelector( "#boton-agregar" );
const botonEliminar = document.querySelector( "#boton-eliminar" );

const galeriaBotones = document.querySelector( '#galeria-botones' );

botonAgregar.addEventListener( "click", agregarBoton )
botonEliminar.addEventListener( "click", eliminarBoton )
    // buscar createElement, insertAfter, insert Before, ActionBefore, insertElement
    // LA JERARQUIA DE LOS ESTILOS EN CSS
function agregarBoton() {
    const nuevoBoton = document.createElement( "button" );
    //newDiv.id = "botoncito"
    // nuevoBoton.style = [("background: red; width:200px; height:200px; margin:10px")];
    nuevoBoton.classList.add( 'boton' );
    //añade texto al buton creado.
    const nuevoContenido = document.createTextNode( "Nuevo boton" );
    nuevoBoton.appendChild( nuevoContenido );
    // añade el elemento creado y su contenido al DOM
    //var currentDiv = document.getElementById("div1");
    //el etiqueta.insertBefore(pide dos parametros)
    //document.body.insertBefore(newDiv, currentDiv);
    galeriaBotones.append( nuevoBoton );
}


function eliminarBoton() {
    const numeroNodosHijos = galeriaBotones.childNodes.length;
    galeriaBotones.removeChild( galeriaBotones.childNodes[ numeroNodosHijos - 1 ] )
    
}
