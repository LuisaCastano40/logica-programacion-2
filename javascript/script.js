//traemos el html necesario
const inputCelsius = document.getElementById('celsius');
const btnKelvin = document.getElementById('kelvin');
const btnFahrenheit = document.getElementById('fahrenheit');
const pantalla = document.getElementById('pantalla');
let conversion = 0;

//eventos
btnFahrenheit.addEventListener('click', convertToFahrenheit);
btnKelvin.addEventListener('click', convertToKelvin);

//Funciones
function convertToKelvin(){
    let celsius = parseFloat(inputCelsius.value);

    if(!isNaN(celsius)){
        conversion = celsius + 273.15;
        pantalla.textContent = conversion + " °K"
    }else{
        alert('Ingrese un dato válido');
    }
}
function convertToFahrenheit(){
    let celsius = parseFloat(inputCelsius.value);

    if(!isNaN(celsius)){
        conversion = (celsius*1.8) + 32;
        pantalla.textContent = conversion + " °F"
    }else{
        alert('ingrese un dato válido')
    }
}