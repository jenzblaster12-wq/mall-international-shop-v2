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

    //================================================
    // ESPAÑOL
    //================================================

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
            "🔥 Ofertas del Día • Cupones • Envíos Internacionales • Grandes Descuentos",


        //================================================
        // PUBLICIDAD
        //================================================

        publicidadTitulo:
            "PUBLICIDAD PATROCINADA",

        publicidadDescripcion:
            "Este espacio está disponible para empresas, plataformas de comercio electrónico, servicios logísticos y campañas promocionales.",

        publicidadInformacion:
            "MÁS INFORMACIÓN →",


        //================================================
        // INFORMACIÓN LEGAL
        //================================================

        descargoTitulo:
            "🛡 DESCARGO DE RESPONSABILIDAD",

        descargoParrafo1:
            "MallInternationalShop.com ha sido diseñado para facilitar el acceso a reconocidas plataformas de comercio electrónico internacionales desde un único punto de consulta, permitiendo ahorrar tiempo en la búsqueda de productos y tiendas oficiales.",

        descargoParrafo2:
            "Este sitio no vende productos, no procesa pagos, ni participa en las transacciones comerciales. Todas las compras, envíos, garantías, devoluciones y reclamaciones deberán gestionarse directamente con la plataforma correspondiente.",

        descargoParrafo3:
            "Los nombres comerciales, logotipos, marcas registradas e imágenes pertenecen exclusivamente a sus respectivos propietarios y son utilizados únicamente con fines informativos y como referencia hacia sus sitios oficiales.",


        //================================================
        // PROPIEDAD INTELECTUAL
        //================================================

        propiedadTitulo:
            "© PROPIEDAD INTELECTUAL",

        propiedadParrafo1:
            "El concepto, diseño, programación, estructura, identidad visual y contenido original de MallInternationalShop.com constituyen una obra protegida por las leyes nacionales e internacionales sobre propiedad intelectual y derechos de autor.",

        propiedadParrafo2:
            "Queda prohibida la reproducción total o parcial del diseño, programación, identidad gráfica o contenido de este sitio sin autorización previa y por escrito de su titular.",


        //================================================
        // COPYRIGHT
        //================================================

        copyright:
            "© JAVIER2026 Mall International Shop.com",

        derechosReservados:
            " · Todos los derechos reservados.",

        disenoProtegido:
            " · Diseño, estructura e identidad visual protegidos por derechos de autor.",


        //================================================
        // CONTACTO
        //================================================

        contactoLegal:
            "Contacto:"

    },


    //==================================================
    // ENGLISH
    //==================================================

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
            "🔥 Daily Deals • Coupons • International Shipping • Great Discounts",


        //================================================
        // ADVERTISING
        //================================================

        publicidadTitulo:
            "SPONSORED ADVERTISING",

        publicidadDescripcion:
            "This space is available for companies, e-commerce platforms, logistics services and promotional campaigns.",

        publicidadInformacion:
            "MORE INFORMATION →",


        //================================================
        // LEGAL INFORMATION
        //================================================

        descargoTitulo:
            "🛡 DISCLAIMER",

        descargoParrafo1:
            "MallInternationalShop.com has been designed to facilitate access to recognized international e-commerce platforms from a single point of reference, helping users save time when searching for products and official stores.",

        descargoParrafo2:
            "This website does not sell products, process payments, or participate in commercial transactions. All purchases, shipments, warranties, returns and claims must be handled directly with the corresponding platform.",

        descargoParrafo3:
            "Trade names, logos, trademarks and images belong exclusively to their respective owners and are used solely for informational purposes and as references to their official websites.",


        //================================================
        // INTELLECTUAL PROPERTY
        //================================================

        propiedadTitulo:
            "© INTELLECTUAL PROPERTY",

        propiedadParrafo1:
            "The concept, design, programming, structure, visual identity and original content of MallInternationalShop.com constitute a work protected by national and international intellectual property and copyright laws.",

        propiedadParrafo2:
            "Total or partial reproduction of the design, programming, graphic identity or content of this website is prohibited without prior written authorization from its owner.",


        //================================================
        // COPYRIGHT
        //================================================

        copyright:
            "© JAVIER2026 Mall International Shop.com",

        derechosReservados:
            " · All rights reserved.",

        disenoProtegido:
            " · Design, structure and visual identity protected by copyright.",


        //================================================
        // CONTACT
        //================================================

        contactoLegal:
            "Contact:"

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
// ACTIVAR BOTONES DEL SELECTOR DE IDIOMA
//==================================================

function iniciarSelectorIdioma() {

    const botonesIdioma =
        document.querySelectorAll(
            "[data-idioma]"
        );


    botonesIdioma.forEach(boton => {

        boton.addEventListener(
            "click",
            function () {

                const idioma =
                    this.getAttribute(
                        "data-idioma"
                    );


                cambiarIdioma(idioma);

            }
        );

    });


    console.log(
        "✔ Selector de idioma preparado."
    );

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
// INICIO DEL SISTEMA
//==================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        iniciarIdioma();

        iniciarSelectorIdioma();

    }
);