/*==================================================*
 * MALL INTERNATIONAL SHOP
 * Sistema de Afiliados
 *==================================================*/

const AFILIADOS = {

    amazon: {
        activo: true,
        tag: "jenzblastersh-20",
        url: "https://www.amazon.com"
    },

    jd: {
        activo: false,
        url: "https://global.jd.com/?lang=en"
    },

    aliexpress: {
        activo: true,
        url: "https://s.click.aliexpress.com/e/_c3qnhq3z"
    }

};


//--------------------------------------------------
// Generar enlace de afiliado
//--------------------------------------------------

function obtenerEnlaceAfiliado(storeId) {

    const afiliado = AFILIADOS[storeId];

    // Si no existe configuración para la tienda
    if (!afiliado) {

        return null;

    }


    // Si existe pero todavía no está activa
    // utilizamos su destino internacional/normal
    if (!afiliado.activo) {

        return afiliado.url;

    }


    // AMAZON
    if (storeId === "amazon") {

        return afiliado.url + "/?tag=" + afiliado.tag;

    }


    // ALIEXPRESS
    if (storeId === "aliexpress") {

        return afiliado.url;

    }


    // Futuras tiendas afiliadas
    return afiliado.url;

}


//--------------------------------------------------
// Prueba del sistema
//--------------------------------------------------

console.log("✔ Sistema de afiliados iniciado.");


//--------------------------------------------------
// PRUEBA AMAZON
//--------------------------------------------------

const enlaceAmazon =
    obtenerEnlaceAfiliado("amazon");

console.log(
    "Amazon afiliado:",
    enlaceAmazon
);


//--------------------------------------------------
// PRUEBA ALIEXPRESS
//--------------------------------------------------

const enlaceAliExpress =
    obtenerEnlaceAfiliado("aliexpress");

console.log(
    "AliExpress afiliado:",
    enlaceAliExpress
);
