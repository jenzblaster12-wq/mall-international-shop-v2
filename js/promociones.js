/*==================================================*
 * MALL INTERNATIONAL SHOP
 * Sistema Central de Promociones
 * Gestión de campañas y tipos de publicidad
 *==================================================*/


//==================================================
// TIPOS DE PROMOCIÓN
//==================================================

const TIPOS_PROMOCION = {

    AFILIADO: "afiliado",

    PATROCINADO: "patrocinado",

    PUBLICIDAD: "publicidad"

};
//==================================================
// FUENTES DE PROMOCIÓN
//==================================================
//
// Indica de dónde procede cada promoción.
//
// MANUAL       → Promoción introducida directamente
// SITESTRIPE   → Promoción/enlace obtenido mediante Amazon SiteStripe
// CREATORS_API → Futuro sistema automático de Amazon
//

const FUENTES_PROMOCION = {

    MANUAL: "manual",

    SITESTRIPE: "sitestripe",

    CREATORS_API: "creators-api"

};



//==================================================
// TIPOS PERMITIDOS EN EL BANNER PRINCIPAL
//==================================================
//
// Por ahora solamente mostramos afiliados.
// Más adelante podremos activar patrocinados
// sin modificar banner.js.
//

const TIPOS_BANNER = [

    TIPOS_PROMOCION.AFILIADO

];


//==================================================
// BASE CENTRAL DE PROMOCIONES
//==================================================

const PROMOCIONES = [

    //==================================================
    // AMAZON
    //==================================================
{
    id: "amazon-demo-01",

    empresa: "Amazon",

    tipo: TIPOS_PROMOCION.AFILIADO,
    
    fuente: FUENTES_PROMOCION.SITESTRIPE,

    activo: true,

    titulo: "AMAZON OFERTAS DEL DÍA",

    descripcion:
        "Descubre promociones exclusivas y ofertas por tiempo limitado.",

    imagen: "images/banners/amazon01.jpg",

    tienda: "amazon",

    enlace: "https://amzn.to/45pBEXD",

    fechaInicio: "2026-01-01",

    fechaFin: "2026-12-31",

    prioridad: 1

},



    //==================================================
    // ALIEXPRESS
    //==================================================

    {

        id: "aliexpress-demo-01",

        empresa: "AliExpress",

        tipo: TIPOS_PROMOCION.AFILIADO,

        activo: true,

        titulo: "ALIEXPRESS MEGA SALE",

        descripcion:
        "Miles de productos con descuentos especiales.",

        imagen: "images/banners/aliexpress01.jpg",

        tienda: "aliexpress",

        enlace: null,

        fechaInicio: "2026-01-01",

        fechaFin: "2026-12-31",

        prioridad: 2

    },


    //==================================================
    // EJEMPLO DE PATROCINADO
    //==================================================
    //
    // NO se mostrará todavía en el banner principal.
    // Queda preparado para futuras campañas.
    //

    {

        id: "patrocinado-demo-01",

        empresa: "Empresa Patrocinadora",

        tipo: TIPOS_PROMOCION.PATROCINADO,

        activo: false,

        titulo: "PUBLICIDAD PATROCINADA",

        descripcion:
        "Espacio reservado para campañas comerciales.",

        imagen: "",

        tienda: null,

        enlace: "#",

        fechaInicio: "2026-01-01",

        fechaFin: "2026-12-31",

        prioridad: 10

    },


    //==================================================
    // EJEMPLO DE PUBLICIDAD
    //==================================================
    //
    // NO se mostrará en el banner principal.
    // Este tipo pertenece al sistema publicitario.
    //

    {

        id: "publicidad-demo-01",

        empresa: "Mall International Shop",

        tipo: TIPOS_PROMOCION.PUBLICIDAD,

        activo: false,

        titulo: "ESPACIO PUBLICITARIO",

        descripcion:
        "Espacio disponible para campañas y promociones.",

        imagen: "",

        tienda: null,

        enlace: "#",

        fechaInicio: "2026-01-01",

        fechaFin: "2026-12-31",

        prioridad: 20

    }

];


//==================================================
// OBTENER FECHA ACTUAL
//==================================================

function obtenerFechaActual() {

    const ahora = new Date();

    return ahora.toISOString().split("T")[0];

}


//==================================================
// COMPROBAR VIGENCIA
//==================================================

function promocionVigente(promocion) {

    if (!promocion) {

        return false;

    }


    // Debe estar activa

    if (promocion.activo !== true) {

        return false;

    }


    const fechaActual =
        obtenerFechaActual();


    // Fecha de inicio

    if (

        promocion.fechaInicio &&

        fechaActual < promocion.fechaInicio

    ) {

        return false;

    }


    // Fecha de finalización

    if (

        promocion.fechaFin &&

        fechaActual > promocion.fechaFin

    ) {

        return false;

    }


    return true;

}


//==================================================
// COMPROBAR SI EL TIPO PUEDE APARECER
// EN EL BANNER PRINCIPAL
//==================================================

function tipoPermitidoEnBanner(promocion) {

    if (!promocion) {

        return false;

    }


    return TIPOS_BANNER.includes(

        promocion.tipo

    );

}


//==================================================
// OBTENER PROMOCIONES PARA EL BANNER
//==================================================

function obtenerPromocionesActivas() {

    return PROMOCIONES

        .filter(

            promocion =>

                promocionVigente(promocion)

        )

        .filter(

            promocion =>

                tipoPermitidoEnBanner(promocion)

        )

        .sort(

            (a, b) =>

                a.prioridad - b.prioridad

        );

}


//==================================================
// OBTENER ENLACE DE UNA PROMOCIÓN
//==================================================

function obtenerEnlacePromocion(promocion) {

    if (!promocion) {

        return "#";

    }


    //==================================================
    // ENLACE ESPECÍFICO
    //==================================================

    if (promocion.enlace) {

        return promocion.enlace;

    }


    //==================================================
    // ENLACE DE AFILIADO
    //==================================================

    if (promocion.tienda) {

        const enlaceAfiliado =

            obtenerEnlaceAfiliado(

                promocion.tienda

            );


        if (enlaceAfiliado) {

            return enlaceAfiliado;

        }

    }


    return "#";

}


//==================================================
// MOSTRAR ESTADO DEL SISTEMA
//==================================================

function mostrarEstadoPromociones() {

    const activas =

        obtenerPromocionesActivas();


    console.log(

        "✔ Sistema central de promociones iniciado."

    );


    console.log(

        "Promociones para el banner:",

        activas.length

    );


    activas.forEach(

        promocion => {

            console.log(

                "•",

                promocion.empresa,

                "|",

                promocion.tipo,

                "|",

                promocion.titulo,

                "| Prioridad:",

                promocion.prioridad

            );

        }

    );

}


//==================================================
// INICIO
//==================================================

mostrarEstadoPromociones();