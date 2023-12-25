$(()=> init());
var plantas_json;
function init(){
    fetch('/json/productos.json')
    .then((response) => response.json())
    .then((data) => {
        var dataset = data.plantas;
        plantas_json = data.plantas;
        mostrarPlantas(dataset);
    });
}

function mostrarPlantas(datos) {
    var contenedor_plantas = $("#plantas");
    contenedor_plantas.text(" ");

    datos.forEach((planta, index) => {
        var div_planta = $("<div>");
        div_planta.addClass("col");
        div_planta.id = "planta_" + index;
        div_planta.text(`
           
            <div class="divimagen" >
                <div>
                    <img src="/images/${planta.imagen_planta}" id="imagen_planta" alt="" class="img-galeria">
                </div>
                <div class="texto">
                    <p class="precio" id="precio">${planta.precio}€</p>
                    <p class="nombre" id="nombre">${planta.nombre}</p>
                    <p id="descripcion_1">${planta.descripcion_1}</p>
                    <p id="descripcion_2">${planta.descripcion_2}</p>
                </div>
                <input type="button" class="botones" onclick=showmodal(${coche.id}) value="Ver info">

            </div>
        `);
        contenedor_plantas.appendChild(div_planta)
    })

}