/* =========================================================
   MALL INTERNATIONAL SHOP
   SISTEMA DE ESTADÍSTICAS
   ========================================================= */

console.log("📊 Estadísticas: módulo iniciado");


/* =========================================================
   CONFIGURACIÓN
   ========================================================= */

const ESTADISTICAS_CONFIG = {

    almacenamiento: "mallInternationalStats",

    version: "1.0.0"

};


/* =========================================================
   OBTENER ESTADÍSTICAS GUARDADAS
   ========================================================= */

function obtenerEstadisticas() {

    const datos = localStorage.getItem(
        ESTADISTICAS_CONFIG.almacenamiento
    );

    if (datos) {

        try {

            return JSON.parse(datos);

        } catch (error) {

            console.warn(
                "⚠️ No se pudieron leer las estadísticas guardadas."
            );

        }

    }


    return {

        visitas: 0,

        sesiones: 0,

        paginasVistas: 0,

        clicsTiendas: 0,

        clicsPublicidad: 0,

        clicsPromociones: 0,

        tiendas: {},

        ultimaVisita: null,

        primeraVisita: null,

        version: ESTADISTICAS_CONFIG.version

    };

}


/* =========================================================
   GUARDAR ESTADÍSTICAS
   ========================================================= */

function guardarEstadisticas(datos) {

    localStorage.setItem(

        ESTADISTICAS_CONFIG.almacenamiento,

        JSON.stringify(datos)

    );

}


/* =========================================================
   REGISTRAR VISITA
   ========================================================= */

function registrarVisita() {

    const datos = obtenerEstadisticas();

    const ahora = new Date().toISOString();


    datos.visitas++;

    datos.paginasVistas++;

    datos.ultimaVisita = ahora;


    if (!datos.primeraVisita) {

        datos.primeraVisita = ahora;

    }


    guardarEstadisticas(datos);


    console.log(
        "📊 Visita registrada:",
        datos.visitas
    );

}


/* =========================================================
   REGISTRAR SESIÓN
   ========================================================= */

function registrarSesion() {

    const sesionActiva =
        sessionStorage.getItem(
            "mallInternationalSession"
        );


    if (!sesionActiva) {

        const datos = obtenerEstadisticas();

        datos.sesiones++;

        guardarEstadisticas(datos);


        sessionStorage.setItem(
            "mallInternationalSession",
            "activa"
        );


        console.log(
            "👤 Nueva sesión registrada:",
            datos.sesiones
        );

    }

}


/* =========================================================
   REGISTRAR CLIC EN TIENDA
   ========================================================= */

function registrarClicTienda(nombreTienda) {

    const datos = obtenerEstadisticas();


    datos.clicsTiendas++;


    if (!datos.tiendas[nombreTienda]) {

        datos.tiendas[nombreTienda] = 0;

    }


    datos.tiendas[nombreTienda]++;


    guardarEstadisticas(datos);


    console.log(
        "🛒 Clic en tienda:",
        nombreTienda
    );

}


/* =========================================================
   REGISTRAR CLIC EN PUBLICIDAD
   ========================================================= */

function registrarClicPublicidad(nombrePublicidad) {

    const datos = obtenerEstadisticas();


    datos.clicsPublicidad++;


    guardarEstadisticas(datos);


    console.log(
        "📢 Clic en publicidad:",
        nombrePublicidad
    );

}


/* =========================================================
   REGISTRAR CLIC EN PROMOCIÓN
   ========================================================= */

function registrarClicPromocion(nombrePromocion) {

    const datos = obtenerEstadisticas();


    datos.clicsPromociones++;


    guardarEstadisticas(datos);


    console.log(
        "🎯 Clic en promoción:",
        nombrePromocion
    );

}


/* =========================================================
   MOSTRAR ESTADÍSTICAS EN CONSOLA
   ========================================================= */

function mostrarEstadisticas() {

    const datos = obtenerEstadisticas();


    console.table({

        "Visitas": datos.visitas,

        "Sesiones": datos.sesiones,

        "Páginas vistas": datos.paginasVistas,

        "Clics tiendas": datos.clicsTiendas,

        "Clics publicidad": datos.clicsPublicidad,

        "Clics promociones": datos.clicsPromociones

    });


    console.log(
        "🏬 Clics por tienda:",
        datos.tiendas
    );


    return datos;

}


/* =========================================================
   INICIALIZAR ESTADÍSTICAS
   ========================================================= */

function iniciarEstadisticas() {

    registrarVisita();

    registrarSesion();

    console.log(
        "📊 Sistema de estadísticas listo."
    );

}


/* =========================================================
   INICIAR CUANDO CARGUE LA PÁGINA
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    iniciarEstadisticas
);
