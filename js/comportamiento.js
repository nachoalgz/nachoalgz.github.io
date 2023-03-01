console.log("BENVENIDO A MI CV");

var estado = false;
const fotoContainer = document.getElementById('fotoContainer');

const myFoto = document.getElementById('myFoto');
myFoto.addEventListener('click', function () {
    //console.log("CLICK EN FOTO");
    if(!estado){
        agrandar(myFoto);
    } else{
        achicar(myFoto);
    }
});

function agrandar(foto) {
    foto.style.width = '200px';
    estado = true;
}

function achicar(foto){
    foto.style.width = '128px';
    estado = false;
}