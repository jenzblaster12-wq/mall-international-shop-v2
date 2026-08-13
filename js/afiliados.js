/*==================================================*
 * MALL INTERNATIONAL SHOP
 * Sistema de Afiliados
 *==================================================*/

const AFILIADOS = {

    amazon: {
        activo: true,
        tag: "jenzblastersh-20",
        url: "https://www.amazon.com"
    }

};


//--------------------------------------------------
// Generar enlace de afiliado
//--------------------------------------------------

function obtenerEnlaceAfiliado(storeId) {

    const afiliado = AFILIADOS[storeId];

    // Si la tienda no tiene afiliado configurado
    if (!afiliado || !afiliado.activo) {

        return null;

    }

    // AMAZON
    if (storeId === "amazon") {

        return afiliado.url + "/?tag=" + afiliado.tag;

    }

    return afiliado.url;

}


//--------------------------------------------------
// Prueba del sistema
//--------------------------------------------------

console.log("✔ Sistema de afiliados iniciado.");

const enlaceAmazon = obtenerEnlaceAfiliado("amazon");

console.log("Amazon afiliado:", enlaceAmazon);