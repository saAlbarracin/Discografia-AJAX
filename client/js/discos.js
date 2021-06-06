const traerDatos = () => {
    const contenedorTarjeta = document.querySelector(".contenedor-tarjetas");
    const xhr = new XMLHttpRequest();

        xhr.open("GET", `/discos`);

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

traerDatos()