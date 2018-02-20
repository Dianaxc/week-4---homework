console.log('main.js is connected!')


document.querySelector('#convert').addEventListener('click',convertAndAppendResult);

function convertAndAppendResult() {
	var celsius = document.querySelector('#celsius').value;
	var convert = parseInt(document.querySelector('#convert').value);
	var farenheit = document.querySelector('#farenheit').value;
}

document.querySelector('#convert').addEventListener("click", illuminateRed);
document.querySelector('#convert').addEventListener("click", illuminateGrey);
document.querySelector('#convert').addEventListener("click", illuminateBlue);

function illuminateRed() {
  document.querySelector('#celsius').style.backgroundColor = "red";
}

function illuminateGrey() {
  document.querySelector('#celsius').style.backgroundColor = "grey";
}

function illuminateBlue() {
  document.querySelector('#celsius').style.backgroundColor = "blue";
} 