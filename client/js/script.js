const titulo = document.getElementById("titulo");
const artista = document.getElementById("artista");
const lanzamiento = document.getElementById("lanzamiento");
const botonSubmit = document.getElementById("boton-submit");

const contenedorTarjeta = document.querySelector(".contenedor-tarjetas");

document.addEventListener("DOMContentLoaded", () => {

    botonSubmit.addEventListener("click", enviarFormulario);
})

function enviarFormulario(e) {

    contenedorTarjeta.innerHTML = "";

    e.preventDefault();
    let dataQuery = "";
    let hayDatos = false;
    console.log(titulo);
    if (titulo.value !== "") {
        
        dataQuery = `?titulo=${titulo.value}`;
        hayDatos = true;
    }

    if (artista.value !== "") {
        if (hayDatos) {
            dataQuery += `&artista=${artista.value}`;
        } else {
            dataQuery = `?artista=${artista.value}`;
            hayDatos = true;
        }
    }

    if (lanzamiento.value !== "") {
        if (hayDatos) {
            dataQuery += `&lanzamiento=${lanzamiento.value}`;
        } else {
            dataQuery = `?lanzamiento=${lanzamiento.value}`;
            hayDatos = true;
        }
    }


    if (hayDatos) {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", `/discos${dataQuery}`);

        xhr.onload = function () {
            console.log(xhr);
            const respuesta = JSON.parse(xhr.responseText).discos;
            console.log(respuesta);

            if (respuesta.length === 0 ||typeof respuesta === 'string') {
                contenedorTarjeta.innerHTML = "<h3> No se encontraron resultados <h3>";
            } else {
                console.log('entro', respuesta.length);
                for (let i = 0; i < respuesta.length; i++) {
                    console.log('esdsdsdsntro');

                    const tarjeta = document.createElement("div");
                    tarjeta.classList.add("tarjeta");

                    const tituloTarjeta = document.createElement("h2");
                    tituloTarjeta.textContent = respuesta[i].titulo;
                    tarjeta.append(tituloTarjeta);

                    const imagenTarjeta = document.createElement("img");
                    imagenTarjeta.setAttribute("src", respuesta[i].tapa);
                    tarjeta.append(imagenTarjeta);

                    const artistaTarjeta = document.createElement("p");
                    artistaTarjeta.append(respuesta[i].artista);
                    tarjeta.append(artistaTarjeta);

                    const lanzamientoTarjeta = document.createElement("p");
                    lanzamientoTarjeta.append(respuesta[i].lanzamiento);
                    tarjeta.append(lanzamientoTarjeta);
                    console.log(tarjeta);
                    contenedorTarjeta.append(tarjeta);
                }
            }


        }

        xhr.send();
    }
}