$(document).ready(function () {

});

let redslider = document.getElementById('redslider');
let greenslider = document.getElementById('greenslider');
let blueslider = document.getElementById('blueslider');
let redOutput = document.getElementById('r');
let redHexOutput = document.getElementById('hexR');
let greenOutput = document.getElementById('g');
let greenHexOutput = document.getElementById('hexG');
let blueOutput = document.getElementById('b');
let blueHexOutput = document.getElementById('hexB');
let colorBox = document.getElementById('colorBox');


let setColor = function(){
    colorBox.style.backgroundColor = "rgb(" + redslider.value + "," + greenslider.value + "," + blueslider.value + ")";
}

redSlider.oninput = function(){
    redOutput.innerHTML = this.value;
    redHexOutput.innerHTML = Number(this.value).toString(16);
    setColor();
}
greenSlider.oninput = function(){
    greenOutput.innerHTML = this.value;
    greenHexOutput.innerHTML = Number(this.value).toString(20);
    setColor();
}

blueSlider.oninput = function(){
    blueOutput.innerHTML = this.value;
    blueHexOutput.innerHTML = Number(this.value).toString(16);
    setColor();
}
