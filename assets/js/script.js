let listaNombresGastos = [];
let listaValoresGastos = [];
let listaCategoriasGastos = [];
let listaDescripcionesGastos = [];
let editIndex = -1;

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let categoriaGasto = document.getElementById('categoriaGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    if (valorGasto >= 100) {
        alert("Este gasto es demasiado alto, tenlo en cuenta.");
    }

    if (editIndex === -1) {
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaCategoriasGastos.push(categoriaGasto);
        listaDescripcionesGastos.push(descripcionGasto);
    } else {
        listaNombresGastos[editIndex] = nombreGasto;
        listaValoresGastos[editIndex] = valorGasto;
        listaCategoriasGastos[editIndex] = categoriaGasto;
        listaDescripcionesGastos[editIndex] = descripcionGasto;
        editIndex = -1;
        document.getElementById('botonFormulario').textContent = 'Agregar Gasto';
    }

    actualizarListaGastos();
    limpiar();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalGastos = document.getElementById('totalGastos');
    let totalMensual = 0;
    let htmlLista = '';
    
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const categoriaGasto = listaCategoriasGastos[posicion];
        const descripcionGasto = listaDescripcionesGastos[posicion];
        htmlLista += `<li>${categoriaGasto} - ${elemento} - ${descripcionGasto} - USD ${valorGasto.toFixed(2)} 
        <button onclick="editarBoton(${posicion});">Editar</button>
        <button onclick="eliminarBoton(${posicion});">Eliminar</button></li>`;
        totalMensual += Number(valorGasto);
    });

    listaElementos.innerHTML = htmlLista;
    totalGastos.innerHTML = totalMensual.toFixed(2);
}

function eliminarBoton(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaCategoriasGastos.splice(posicion, 1);
    listaDescripcionesGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function editarBoton(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionesGastos[posicion];
    document.getElementById('categoriaGasto').value = listaCategoriasGastos[posicion];
    document.getElementById('botonFormulario').textContent = 'Editar Gasto';
    editIndex = posicion;
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
    document.getElementById('categoriaGasto').selectedIndex = 1;
}
