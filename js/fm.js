$(()=>init());
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
        div_planta.append(`
            <div class="divimagen container-100">
                <div class="row">
                    <img src="/images/${planta.imagen_planta}" id="imagen_planta" alt="" class="img-galeria">
                </div>
                <div class="texto row">
                    <p class="nombre col-9  d-flex justify-content-start" id="nombre">${planta.nombre}</p>
                    <p class="precio col-3 d-flex justify-content-end"  id="precio">${planta.precio}€</p>
                </div>
                <button class="botonadd" onclick=showmodal(${planta.id})>Añadir al carrito</button>

            </div>
        `);
        contenedor_plantas.append(div_planta);
    })

}