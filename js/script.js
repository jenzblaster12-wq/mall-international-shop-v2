/*==================================================
  MALL INTERNATIONAL SHOP
  Archivo Principal
==================================================*/

document.addEventListener("DOMContentLoaded", iniciarMall);

//--------------------------------------------------

function iniciarMall() {

    console.log("==================================");
    console.log(APP_CONFIG.nombre);
    console.log("Versión: " + APP_CONFIG.version);
    console.log("==================================");

    iniciarInterfaz();

    iniciarAnimaciones();

    cargarTiendas();

    console.log("✔ Mall International Shop iniciado.");

}

//--------------------------------------------------

function cargarTiendas() {

    console.log("Tiendas disponibles:");

    STORES.forEach(store => {

        console.log("• " + store.nombre);

    });

}