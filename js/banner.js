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

        /*
        Intentamos cargar la imagen indicada
        por la promoción.
        */

        imagen.onerror = function () {

            console.warn(
                "Imagen no disponible:",
                banner.imagen
            );

            /*
            Ocultamos la imagen para evitar
            mostrar un espacio roto.
            */

            imagen.style.display = "none";

        };


        imagen.onload = function () {

            /*
            Si anteriormente estuvo oculta,
            volvemos a mostrarla cuando exista.
            */

            imagen.style.display = "";

        };


        if (banner.imagen) {

            imagen.src = banner.imagen;

            imagen.alt =
                banner.empresa +
                " - " +
                banner.titulo;

        } else {

            imagen.style.display = "none";

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
