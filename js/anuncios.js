/*==================================================*
 * MALL INTERNATIONAL SHOP
 * Sistema de Anuncios Comerciales
 * Video + Imagen + Enlace
 *==================================================*/


//==================================================
// CONFIGURACIÓN
//==================================================

const volumenInicialAnuncio = 0;


//==================================================
// CAMPAÑAS COMERCIALES
//==================================================

const ANUNCIOS_COMERCIALES = [

    //==================================================
    // ESPACIO PUBLICITARIO 1
    //==================================================

    {
        id: "anuncio-001",

        empresa: "Espacio Publicitario 1",

        activo: true,

        titulo: "ESPACIO PUBLICITARIO",

        descripcion:
            "Disponible para campañas, promociones y acuerdos comerciales.",

        video: "",

        imagen: "",

        enlace: "#",

        espacio: 1,

        fechaInicio: "2026-01-01",

        fechaFin: "2026-12-31",

        prioridad: 1
    },


    //==================================================
    // ESPACIO PUBLICITARIO 2
    //==================================================

    {
        id: "anuncio-002",

        empresa: "Espacio Publicitario 2",

        activo: true,

        titulo: "ESPACIO PUBLICITARIO",

        descripcion:
            "Próximamente nuevos anunciantes.",

        video: "",

        imagen: "",

        enlace: "#",

        espacio: 2,

        fechaInicio: "2026-01-01",

        fechaFin: "2026-12-31",

        prioridad: 2
    }

];


//==================================================
// FECHA ACTUAL
//==================================================

function obtenerFechaAnuncio() {

    const ahora = new Date();

    return ahora.toISOString().split("T")[0];

}


//==================================================
// COMPROBAR VIGENCIA
//==================================================

function anuncioVigente(anuncio) {

    if (!anuncio) {

        return false;

    }


    if (anuncio.activo !== true) {

        return false;

    }


    const fechaActual =
        obtenerFechaAnuncio();


    if (
        anuncio.fechaInicio &&
        fechaActual < anuncio.fechaInicio
    ) {

        return false;

    }


    if (
        anuncio.fechaFin &&
        fechaActual > anuncio.fechaFin
    ) {

        return false;

    }


    return true;

}


//==================================================
// OBTENER ANUNCIOS ACTIVOS
//==================================================

function obtenerAnunciosActivos() {

    return ANUNCIOS_COMERCIALES

        .filter(

            anuncio =>
                anuncioVigente(anuncio)

        )

        .sort(

            (a, b) =>
                a.prioridad - b.prioridad

        );

}


//==================================================
// MOSTRAR ANUNCIO
//==================================================

function mostrarAnuncio(anuncio) {

    if (!anuncio) {

        return;

    }


    const espacio =
        document.getElementById(

            "publicidad-" +
            anuncio.espacio

        );


    if (!espacio) {

        console.warn(

            "No se encontró el espacio:",
            anuncio.espacio

        );

        return;

    }


    //==================================================
    // CONTENIDO DEL ANUNCIO
    //==================================================

    let contenido = "";


    //==================================================
    // VIDEO
    //==================================================

    if (anuncio.video) {

        contenido += `

            <video

                class="anuncio-video"

                autoplay

                muted

                loop

                playsinline

                poster="${anuncio.imagen || ""}"

            >

                <source

                    src="${anuncio.video}"

                    type="video/mp4"

                >

                Tu navegador no puede reproducir este video.

            </video>

        `;

    }

    //==================================================
    // IMAGEN
    //==================================================

    else if (anuncio.imagen) {

        contenido += `

            <img

                class="anuncio-imagen"

                src="${anuncio.imagen}"

                alt="${anuncio.titulo}"

            >

        `;

    }

    //==================================================
    // SIN MATERIAL
    //==================================================

    else {

        contenido += `

            <div class="anuncio-placeholder">

                <h3>
                    ${anuncio.titulo}
                </h3>

                <p>
                    ${anuncio.descripcion}
                </p>

            </div>

        `;

    }


    //==================================================
    // CONTENIDO COMPLETO
    //==================================================

    espacio.innerHTML = contenido;

    espacio.classList.add("active-ad");
    

    //==================================================
    // ENLACE DEL ANUNCIANTE
    //==================================================

    if (
        anuncio.enlace &&
        anuncio.enlace !== "#"
    ) {

        espacio.style.cursor = "pointer";


        espacio.onclick = function () {

            window.open(

                anuncio.enlace,

                "_blank",

                "noopener,noreferrer"

            );

        };

    }


    //==================================================
    // INFORMACIÓN EN CONSOLA
    //==================================================

    console.log(

        "Anuncio mostrado:",

        anuncio.empresa,

        "| Espacio:",

        anuncio.espacio

    );

}


//==================================================
// INICIAR SISTEMA
//==================================================

function iniciarAnuncios() {

    const anunciosActivos =
        obtenerAnunciosActivos();


    console.log(
        "✔ Sistema de anuncios iniciado."
    );


    console.log(

        "Anuncios activos:",

        anunciosActivos.length

    );


    anunciosActivos.forEach(

        anuncio => {

            mostrarAnuncio(anuncio);

        }

    );

}


//==================================================
// INICIO
//==================================================

document.addEventListener(

    "DOMContentLoaded",

    iniciarAnuncios

);
