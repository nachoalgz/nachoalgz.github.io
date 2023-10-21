const videoPlayer = document.getElementById('videoPlayer');
const exit = document.getElementById('botonRegresar');
const mute = document.getElementById('botonSilenciar');
let botonesActivos;
let muteValue = false;

loadVideo();

exit.addEventListener('click', cerrarVideo);
mute.addEventListener('click', muteVideo);

function loadVideo(){
    const urlParams = new URLSearchParams(window.location.search);
    const nroVideo = urlParams.get('video').charAt(0);
    botonesActivos = urlParams.get('video').slice(1);
    videoPlayer.src = `../video/video${nroVideo}.mp4`;
}

function cerrarVideo() {
    const urlVideo = `../index.html?state=${botonesActivos}`;
    window.open(urlVideo, '_self');
}

function muteVideo(){
    let volumenIcon;
    if(muteValue == false){
        volumenIcon = '../img/volume.svg';
    } else{
        volumenIcon = '../img/volume-3.svg';
    }
    mute.children[0].src = volumenIcon;
    muteValue = !muteValue;
    videoPlayer.muted = !videoPlayer.muted;
}