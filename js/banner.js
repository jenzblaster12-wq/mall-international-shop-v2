/*==================================================*
* MALL INTERNATIONAL SHOP
* Motor Central de Banners
*==================================================*/

//==================================================
// VARIABLES DEL MOTOR
//==================================================

let bannerActual = 0;

const tiempoBanner = 10000;


//==================================================
// OBTENER PROMOCIONES
//==================================================

function obtenerBanners() {

    return obtenerPromocionesActivas();

}


//==================================================
// IMÁGENES DE RESPALDO
//==================================================

const IMAGENES_BANNER_RESPALDO = {

    amazon:
        "images/banner/amazon-logo.png",

    aliexpress:
        "images/banner/aliexpress-logo.png"

};


//==================================================
// OBTENER IMAGEN DE RESPALDO
//==================================================

function obtenerImagenRespaldo(banner) {

    if (!banner) {

        return "";

    }


    const tienda =
        banner.tienda ||
        banner.id ||
        "";


    if (
        tienda &&
        IMAGENES_BANNER_RESPALDO[tienda]
    ) {

        return IMAGENES_BANNER_RESPALDO[tienda];

    }


    return "";

}


//==================================================
// MOSTRAR BANNER
//==================================================

function mostrarBanner(indice) {

    const banners = obtenerBanners();

    const banner = banners[indice];


    if (!banner) {

        return;

    }


    const imagen =
        document.getElementById("banner-image");

    const titulo =
        document.getElementById("banner-title");

    const texto =
        document.getElementById("banner-text");

    const enlace =
        document.getElementById("banner-link");

    const boton =
        document.getElementById("banner-button");


    //==================================================
    // IMAGEN
    //==================================================

    if (imagen) {

        const imagenRespaldo =
            obtenerImagenRespaldo(banner);


        /*
        Si la imagen principal no existe,
        utilizamos automáticamente el logo
        correspondiente.
        */

        imagen.onerror = function () {

            console.warn(
                "Imagen no disponible:",
                banner.imagen
            );


            if (
                imagenRespaldo &&
                imagen.src.indexOf(
                    imagenRespaldo
                ) === -1
            ) {

                console.log(
                    "Usando imagen de respaldo:",
                    imagenRespaldo
                );


                imagen.src =
                    imagenRespaldo;

                imagen.alt =
                    banner.empresa +
                    " - " +
                    banner.titulo;

                imagen.style.display =
                    "";

            } else {

                /*
                Si tampoco existe el respaldo,
                ocultamos la imagen.
                */

                imagen.style.display =
                    "none";

            }

        };


        imagen.onload = function () {

            /*
            Mostramos nuevamente la imagen
            cuando la carga correctamente.
            */

            imagen.style.display = "";

        };


        if (banner.imagen) {

            imagen.style.display = "";

            imagen.src =
                banner.imagen;

            imagen.alt =
                banner.empresa +
                " - " +
                banner.titulo;

        }

        else if (imagenRespaldo) {

            imagen.style.display = "";

            imagen.src =
                imagenRespaldo;

            imagen.alt =
                banner.empresa +
                " - " +
                banner.titulo;

        }

        else {

            imagen.style.display =
                "none";

        }

    }


    //==================================================
    // TITULO
    //==================================================

    if (titulo) {

        titulo.textContent =
            banner.titulo;

    }


    //==================================================
    // DESCRIPCION
    //==================================================

    if (texto) {

        texto.textContent =
            banner.descripcion;

    }


    //==================================================
    // ENLACE
    //==================================================

    const enlacePromocion =
        obtenerEnlacePromocion(banner);


    if (enlace) {

        enlace.href =
            enlacePromocion || "#";

    }


    if (boton) {

        boton.href =
            enlacePromocion || "#";

    }


    //==================================================
    // INFORMACION EN CONSOLA
    //==================================================

    console.log(
        "Banner mostrado:",
        banner.empresa,
        "|",
        banner.titulo
    );

}


//==================================================
// SIGUIENTE BANNER
//==================================================

function siguienteBanner() {

    const banners =
        obtenerBanners();


    if (banners.length === 0) {

        return;

    }


    bannerActual++;


    if (bannerActual >= banners.length) {

        bannerActual = 0;

    }


    mostrarBanner(bannerActual);

}


//==================================================
// INICIAR BANNERS
//==================================================

function iniciarBanners() {

    const banners =
        obtenerBanners();


    if (banners.length === 0) {

        console.warn(
            "No existen promociones activas."
        );

        return;

    }


    console.log(
        "✔ Motor de banners iniciado."
    );


    console.log(
        "Promociones disponibles:",
        banners.length
    );


    mostrarBanner(bannerActual);


    setInterval(

        siguienteBanner,

        tiempoBanner

    );

}


//==================================================
// INICIO
//==================================================

document.addEventListener(

    "DOMContentLoaded",

    iniciarBanners

);
