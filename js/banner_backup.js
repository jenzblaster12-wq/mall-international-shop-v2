/*==================================================*
 * MALL INTERNATIONAL SHOP
 * Motor de Banners
 *==================================================*/


const banners = [

    //==================================================
    // AMAZON
    //==================================================

    {

        empresa: "Amazon",

        tipo: "afiliado",

        titulo: "AMAZON OFERTAS DEL DÍA",

        descripcion:
        "Descubre promociones exclusivas y ofertas por tiempo limitado.",

        imagen: "images/banners/amazon01.jpg",

        enlace: obtenerEnlaceAfiliado("amazon")

    },


    //==================================================
    // ALIEXPRESS
    //==================================================

    {

        empresa: "AliExpress",

        tipo: "afiliado",

        titulo: "ALIEXPRESS MEGA SALE",

        descripcion:
        "Miles de productos con descuentos especiales.",

        imagen: "images/banners/aliexpress01.jpg",

        enlace: "https://www.aliexpress.com"

    }

];


//==================================================
// VARIABLES DEL MOTOR
//==================================================

let bannerActual = 0;

const tiempoBanner = 10000;


//==================================================
// MOSTRAR BANNER
//==================================================

function mostrarBanner(indice) {

    const banner = banners[indice];

    if (!banner) {

        return;

    }


    const imagen = document.getElementById("banner-image");

    const titulo = document.getElementById("banner-title");

    const texto = document.getElementById("banner-text");

    const enlace = document.getElementById("banner-link");

    const boton = document.getElementById("banner-button");


    if (imagen) {

        imagen.src = banner.imagen;

    }


    if (titulo) {

        titulo.textContent = banner.titulo;

    }


    if (texto) {

        texto.textContent = banner.descripcion;

    }


    if (enlace) {

        enlace.href = banner.enlace;

    }


    if (boton) {

        boton.href = banner.enlace;

    }

}


//==================================================
// SIGUIENTE BANNER
//==================================================

function siguienteBanner() {

    bannerActual++;

    if (bannerActual >= banners.length) {

        bannerActual = 0;

    }

    mostrarBanner(bannerActual);

}


//==================================================
// INICIAR MOTOR
//==================================================

function iniciarBanners() {

    mostrarBanner(bannerActual);

    setInterval(

        siguienteBanner,

        tiempoBanner

    );

}


//==================================================
// INICIAR CUANDO CARGUE LA PÁGINA
//==================================================

document.addEventListener(

    "DOMContentLoaded",

    iniciarBanners

);
