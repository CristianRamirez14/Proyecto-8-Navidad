function obtenerTiempoFaltante(fechaLimite) {

    let ahora = new Date();
    const tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    const segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    const minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    const horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 * 24)).slice(-2);
    const diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }

};


//console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));

let sonido = new Audio('./Imagenes_Musica/allWant.mp3')
const reproducirMusica = () =>{
    sonido.play()
}
const detenerMusica = () =>{
    sonido.pause()
}
function cuentaRegresiva(tiempoFaltante,mensaje) {
    const dias = document.getElementById('dias')
    const horas = document.getElementById('horas')
    const minutos = document.getElementById('minutos')
    const segundos = document.getElementById('segundos')

    const tiempoActual = setInterval( () => {   
        let t = obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML = `${t.diasFaltantes}`;
        horas.innerHTML = `${t.horasFaltantes}`
        minutos.innerHTML = `${t.minutosFaltantes}`
        segundos.innerHTML = `${t.segundosFaltantes}`
        if (t.tiempoFaltante <=1) {
            const papaNoel = document.getElementById("imagen")
            papaNoel.src = "./Imagenes_Musica/papaNoel.gif"
            clearInterval(tiempoActual);
            c = document.getElementById("mensaje")
            c.innerHTML = mensaje;
        }
    }, 1000)
};

cuentaRegresiva('Nov 8 2023 17:57:00 GMT-0500', '¡Feliz Navidad!')
