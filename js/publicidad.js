const ads = [

"🔥 AMAZON PRIME - OFERTAS ESPECIALES",

"🛒 GRANDES DESCUENTOS EN TIENDAS INTERNACIONALES",

"⚡ TECNOLOGÍA, MODA Y HOGAR EN UN SOLO LUGAR",

"🚚 COMPRA INTERNACIONAL MÁS FÁCIL"

];


let indice = 0;


function cambiarPublicidad(){


    const banner =
    document.getElementById("ad-content");


    indice++;


    if(indice >= anuncios.length){

        indice = 0;

    }


    banner.textContent =
    anuncios[indice];


}


setInterval(

cambiarPublicidad,

12000

);