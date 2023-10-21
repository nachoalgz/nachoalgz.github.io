let configMode = false;
let buttonsState = [];

const buttons = Array.from(document.getElementsByClassName('buttons')[0].children);
const configButton = document.getElementById('settings');
const cancelButton = document.getElementById('cancel');
const saveButton = document.getElementById('save');

init();

function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const estadoAnterior = urlParams.get('state');
    if (estadoAnterior == null) {
        buttonsState = [true, true, true, true, true, true];
    } else{
        buttonsState = getBtnState(estadoAnterior);
        for (let index = 0; index < buttonsState.length; index++) {
            const element = buttonsState[index];
            if(element == false){
                buttons[index].classList.add('hide');
            }
        }
    }
    configButton.addEventListener('click', configExpo);
    cancelButton.addEventListener('click', cancelConfig);
    saveButton.addEventListener('click', saveConfig);
    buttonsEventListener();
}

function buttonsEventListener() {
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.addEventListener('click', videoClickHandler);
    }
}

function videoClickHandler() {
    const video = buttons.indexOf(this);
    const btnActivos = setBtnState();
    if (configMode == false) {
        //VIDEO
        const urlVideo = `pages/video.html?video=${encodeURIComponent(video + btnActivos)}`;
        window.open(urlVideo, '_self');
    } else {
        //CAMBIO OPACITY BOTON
        if (buttonsState[video] == true) {
            this.classList.replace('on', 'off');
            buttonsState[video] = false;
        } else {
            this.classList.replace('off', 'on');
            buttonsState[video] = true;
        }
    }
}

function configExpo() {
    configMode = true;
    const otherConfigButtons = document.getElementById('settings-2');
    otherConfigButtons.classList.remove('hide');
    this.classList.add('hide');
    buttonsState = [false, false, false, false, false, false];
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.classList.remove('hide');
        element.classList.replace('on', 'off');
    }
}

function cancelConfig() {
    configMode = false;
    const otherConfigButtons = document.getElementById('settings-2');
    otherConfigButtons.classList.add('hide');
    configButton.classList.remove('hide');
    buttonsState = [true, true, true, true, true, true];
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.classList.replace('off', 'on');
    }
}

function saveConfig() {
    configMode = false;
    const otherConfigButtons = document.getElementById('settings-2');
    otherConfigButtons.classList.add('hide');
    configButton.classList.remove('hide');
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        if (!element.classList.contains('on')) {
            element.classList.add('hide');
        }
    }
}

function setBtnState() {
    const decimal = buttonsState.reduce((acc, val) => (acc << 1) | val, 0);
    const hexa = decimal.toString(16);
    return hexa;
}

function getBtnState(hexString){
    const decimalValue = parseInt(hexString, 16);
    const binaryString = decimalValue.toString(2).padStart(6, '0');
    const booleanArray = binaryString.split('').map((bit) => bit === '1');
    return booleanArray;
}