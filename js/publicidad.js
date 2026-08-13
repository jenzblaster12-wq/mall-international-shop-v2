/*==================================================*
 * MALL INTERNATIONAL SHOP
 * Sistema de Publicidad
 *==================================================*/

const anuncios = [

    "🔥 AMAZON PRIME - OFERTAS ESPECIALES",

    "🛒 GRANDES DESCUENTOS EN TIENDAS INTERNACIONALES",

    "⚡ TECNOLOGÍA, MODA Y HOGAR EN UN SOLO LUGAR",

    "🚚 COMPRA INTERNACIONAL MÁS FÁCIL"

];

let indice = 0;


//--------------------------------------------------
// Cambiar publicidad
//--------------------------------------------------

function cambiarPublicidad() {

    const banner = document.getElementById("ad-content");

    indice++;

    if (indice >= anuncios.length) {

        indice = 0;

    }

    banner.textContent = anuncios[indice];

}


//--------------------------------------------------
// Cambiar cada 12 segundos
//--------------------------------------------------

setInterval(

    cambiarPublicidad,

    12000

);