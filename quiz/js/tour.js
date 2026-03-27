let panorama = new PANOLENS.ImagePanorama("imagenes/tour360.png");

let viewer = new PANOLENS.Viewer({
    container: document.querySelector("#container_principal"),
    controlBar: false
});

viewer.add(panorama);

document.addEventListener("fullscreenchange", function () {
    setTimeout(() => {
        viewer.onWindowResize();
        viewer.render();
    }, 300);
});

function fireLuminaSwal(options) {
    const isFullscreen = !!document.fullscreenElement;

    const baseConfig = {
        target: isFullscreen ? "#container_principal" : "body",
        background: "#000000",
        color: "#ffffff",
        confirmButtonColor: "#d4af37",
        confirmButtonText: "Cerrar",
        iconColor: "#d4af37",
        heightAuto: false,
        width: '600px',
        scrollbarPadding: false,
        customClass: {
            container: isFullscreen ? 'swal-in-fullscreen' : '',
            icon: 'no-border'
        }
    };

    return Swal.fire({ ...baseConfig, ...options });
}


function showInfo(title, text) {
    fireLuminaSwal({
        icon: "warning",
        title: `<span style="color: #d4af37; font-size: 26px; font-weight: bold;">${title}</span>`,
        html: `<div class="swal-lumina-body">${text}</div>`
    });
}

// INFOSPOTS

// INFOSPOT1
const infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(625, -114, 397);
infospot1.addEventListener("click", () => showInfo("Santuario de Agua", "Sumerja su cuerpo en nuestro jacuzzi de diseño orgánico. Deje que los potentes jets de hidroterapia alivien la tensión muscular profunda mientras el calor del agua purificada restaura su equilibrio interior."));
panorama.add(infospot1);

// INFOSPOT2 (Video)
const infospotVideo = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospotVideo.position.set(-585, 150, 455);
infospotVideo.addEventListener("click", () => {
    fireLuminaSwal({
        icon: "warning",
        title: `<span style="color: #d4af37; font-size: 26px; font-weight: bold;">Arte del Bienestar</span>`,
        html: `
            <div class="swal-lumina-body">
                <p>Descubra los secretos de nuestras técnicas de masaje. Acompáñenos en esta breve explicación.</p><br>
                <div class="video-wrapper" style="border-radius: 8px; overflow: hidden; line-height: 0;">
                    <iframe style="aspect-ratio:16/9; width:100%; border:0;" src="https://www.youtube.com/embed/-Y4fibz3eN0?autoplay=1&mute=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>
                </div>
            </div>`
    });
});
panorama.add(infospotVideo);

// INFOSPOT3
const infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(40, -320, 644);
infospot3.addEventListener("click", () => showInfo("Alquimia Aromática", "Nuestro sendero de pétalos frescos y velas artesanales no es solo decoración; es el inicio de su viaje sensorial. Utilizamos aceites esenciales puros, extraídos orgánicamente de plantas locales, para armonizar el ambiente y preparar su mente para la quietud."));
panorama.add(infospot3);

// INFOSPOT4(PDF)
const infospotPDF = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospotPDF.position.set(150, 30, -729);
infospotPDF.addEventListener("click", () => {
    fireLuminaSwal({
        icon: "warning",
        title: `<span style="color: #d4af37; font-size: 26px; font-weight: bold;">Viaje de Sensaciones</span>`,
        html: `
            <div class="swal-lumina-body">
            <p>Explore nuestra colección exclusiva de rituales, masajes de montaña y terapias corporales diseñadas para reconectar su cuerpo y alma. Descargue nuestro Menú de Experiencias completo en formato PDF y comience a planificar su próximo refugio de paz.</p>
            </div>
            <a href="pdf/lumina.pdf" download style="display:inline-block;padding:10px 22px;background:#d4af37;color:#000;text-decoration:none;border-radius:5px;font-weight:bold;margin-top:30px;margin-bottom:20px;">Descargar Menú</a>`
    });
});
panorama.add(infospotPDF);

// INFOSPOT5
const infospot5 = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info);
infospot5.position.set(-45, 255, 639);
infospot5.addEventListener("click", () => showInfo("Arquitectura Consciente", "El imponente techo de bambú y la estructura de mimbre tejida a mano celebran la construcción sostenible y la artesanía local. Este diseño biofílico permite que la energía fluya libremente, creando un espacio acogedor que respira en armonía con la naturaleza circundante."));
panorama.add(infospot5);

// INFOSPOT6
const infospot6 = new PANOLENS.Infospot(60, PANOLENS.DataImage.Info);
infospot6.position.set(512, -430, -331);
infospot6.addEventListener("click", () => showInfo("Piedras de Arraigo", "Cada piedra de río en este espacio ha sido seleccionada meticulosamente por su suavidad y forma energética. Representan la estabilidad de la montaña y el flujo constante del agua, proporcionando una base sólida que invita a la conexión con la tierra y el presente."));
panorama.add(infospot6);

// INFOSPOT7 (Imagen)
const infospot7 = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info);
infospot7.position.set(-850, 80, -212);
infospot7.addEventListener("click", () => {
    fireLuminaSwal({
        icon: "warning",
        title: `<span style="color: #d4af37; font-size: 26px; font-weight: bold;">Esencias de la Montaña</span>`,
        html: `<div class="swal-lumina-body">Inhale profundamente el aroma puro de Lúmina. Nuestros aceites esenciales son el resultado de la destilación artesanal de plantas recolectadas en nuestra propia montaña. Combinamos lavanda para la calma, eucalipto para la claridad mental y pino para el arraigo, creando un elixir único para su relajación profunda.</div>`,
        imageUrl: "imagenes/esencias.jpg",
        imageWidth: 300,
    });
});
panorama.add(infospot7);

// INFOSPOT8
const infospot8 = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info);
infospot8.position.set(747, 5, -50);
infospot8.addEventListener("click", () => showInfo("Jardín de Contemplación", "Este espacio exterior es un Jardín Zen viviente, diseñado para la meditación silenciosa antes o después de su tratamiento. La selección de flora bio-purificadora no solo limpia el aire, sino que crea un microclima de bienestar absoluto donde el tiempo parece detenerse."));
panorama.add(infospot8);

// INFOSPOT9
const infospotAudio = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info);
infospotAudio.position.set(555, 252, 414);
infospotAudio.addEventListener("click", () => {
    fireLuminaSwal({
        icon: "warning",
        title: `<span style="color: #d4af37; font-size: 26px; font-weight: bold;">Melodía Natural</span>`,
        html: `
            <div class="swal-lumina-body">
                <p>Permita que el sonido rítmico y cristalino de nuestra fuente de agua de manantial limpie su mente de ruido. Esta 'música blanca' natural es el telón de fondo perfecto para sincronizar su respiración y comenzar su estado de meditación profunda.</p>

                <div style="display:flex; justify-content:center;">
                    <audio id="audioRelajacion" controls autoplay style="width:70%; margin-top:20px;">
                        <source src="audios/lumina.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>`,
        didClose: () => {
            const audio = document.getElementById("audioRelajacion");
            if (audio) { audio.pause(); audio.currentTime = 0; }
        }
    });
});
panorama.add(infospotAudio);

// INFOSPOT10
const infospot10 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot10.position.set(550, 180, -225);
infospot10.addEventListener("click", () => showInfo("Relajación Posterior", "Nuestro gazebo exterior alberga una suntuosa cama de relajación con sábanas de hilos delicados de telas orgánicas, diseñadas para una sensación al tacto de tranquilidad absoluta. Es el lugar perfecto para reposar después de su masaje, disfrutando de una de nuestras infusiones botánicas exclusivas mientras contempla la naturaleza."));
panorama.add(infospot10);

//Fullscreen
const btnFullscreen = document.getElementById("btnFullscreen");
btnFullscreen.addEventListener("click", function () {
    const elem = document.getElementById("container_principal");
    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => console.log("Error: " + err.message));
    } else {
        document.exitFullscreen();
    }
});