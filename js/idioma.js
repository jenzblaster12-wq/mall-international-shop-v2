/*==================================================*
 * MALL INTERNATIONAL SHOP
 * Sistema Bilingüe
 * Español / English
 *==================================================*/


//==================================================
// IDIOMA POR DEFECTO
//==================================================

const IDIOMA_POR_DEFECTO = "es";


//==================================================
// TEXTOS DEL MALL
//==================================================

const IDIOMAS = {

    es: {

        subtitulo:
            "Tu centro comercial internacional en un solo lugar",

        descripcion:
            "Ingresa directamente a los sitios oficiales, explora, compara y compra en la tienda que más te guste, todo desde una única plataforma.",

        inicio:
            "Inicio",

        tiendas:
            "Tiendas",

        promociones:
            "Promociones",

        contacto:
            "Contacto",

        bannerPrincipal:
            "🔥 Ofertas del Día • Cupones • Envíos Internacionales • Grandes Descuentos"

    },


    en: {

        subtitulo:
            "Your international shopping mall all in one place",

        descripcion:
            "Access official shopping websites directly, explore, compare and shop at the store you like most, all from a single platform.",

        inicio:
            "Home",

        tiendas:
            "Stores",

        promociones:
            "Promotions",

        contacto:
            "Contact",

        bannerPrincipal:
            "🔥 Daily Deals • Coupons • International Shipping • Great Discounts"

    }

};


//==================================================
// OBTENER IDIOMA DEL NAVEGADOR
//==================================================

function detectarIdiomaNavegador() {

    const idiomas =
        navigator.languages || [navigator.language];


    for (const idioma of idiomas) {

        if (
            idioma &&
            idioma.toLowerCase().startsWith("en")
        ) {

            return "en";

        }


        if (
            idioma &&
            idioma.toLowerCase().startsWith("es")
        ) {

            return "es";

        }

    }


    return IDIOMA_POR_DEFECTO;

}


//==================================================
// OBTENER IDIOMA GUARDADO
//==================================================

function obtenerIdiomaGuardado() {

    return localStorage.getItem(
        "mallIdioma"
    );

}


//==================================================
// CAMBIAR IDIOMA
//==================================================

function cambiarIdioma(idioma) {

    if (!IDIOMAS[idioma]) {

        console.warn(
            "Idioma no disponible:",
            idioma
        );

        return;

    }


    localStorage.setItem(
        "mallIdioma",
        idioma
    );


    aplicarIdioma(idioma);

}


//==================================================
// APLICAR IDIOMA
//==================================================

function aplicarIdioma(idioma) {

    const textos =
        IDIOMAS[idioma];


    if (!textos) {

        return;

    }


    //================================================
    // ACTUALIZAR HTML
    //================================================

    document
        .querySelectorAll("[data-i18n]")
        .forEach(elemento => {

            const clave =
                elemento.getAttribute(
                    "data-i18n"
                );


            if (textos[clave]) {

                elemento.textContent =
                    textos[clave];

            }

        });


    //================================================
    // ACTUALIZAR LANG DEL DOCUMENTO
    //================================================

    document.documentElement.lang =
        idioma;


    //================================================
    // ACTUALIZAR TITULO DEL NAVEGADOR
    //================================================

    document.title =
        "Mall International Shop.com";


    //================================================
    // MARCAR IDIOMA ACTIVO
    //================================================

    actualizarSelectorIdioma(idioma);


    console.log(
        "🌎 Idioma activo:",
        idioma
    );

}


//==================================================
// ACTUALIZAR SELECTOR
//==================================================

function actualizarSelectorIdioma(idioma) {

    const botonEs =
        document.getElementById("btn-es");

    const botonEn =
        document.getElementById("btn-en");


    if (botonEs) {

        botonEs.classList.toggle(
            "idioma-activo",
            idioma === "es"
        );

    }


    if (botonEn) {

        botonEn.classList.toggle(
            "idioma-activo",
            idioma === "en"
        );

    }

}


//==================================================
// INICIAR SISTEMA DE IDIOMA
//==================================================

function iniciarIdioma() {

    const idiomaGuardado =
        obtenerIdiomaGuardado();


    const idioma =
        idiomaGuardado ||
        detectarIdiomaNavegador();


    aplicarIdioma(idioma);


    console.log(
        "✔ Sistema de idioma iniciado."
    );

}


//==================================================
// INICIO
//==================================================

document.addEventListener(
    "DOMContentLoaded",
    iniciarIdioma
);
