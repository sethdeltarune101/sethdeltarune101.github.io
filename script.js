const btn1 = document.getElementById('writing-button');
const btn2 = document.getElementById('art-button');
const btn3 = document.getElementById('audio-button');
const btn4 = document.getElementById('video-button');
const btn5 = document.getElementById('pictures-button');
const btn6 = document.getElementById('objects-button');
const textInput = document.getElementById('textInput');
const hexInput = document.getElementById('hexInput');
btn1.addEventListener('click', function() {
	window.location.href = 'writing.html';
});
btn2.addEventListener('click', function() {
	window.location.href = 'art.html';
});
btn3.addEventListener('click', function () {
	window.location.href = 'audio.html';
});
btn4.addEventListener('click', function () {
	window.location.href = 'video.html';
});
btn5.addEventListener('click', function () {
	window.location.href = 'pictures.html';
});
btn6.addEventListener('click', function () {
	window.location.href = 'int.html';
});


// =======================
// HEX ↔ TEXT
// =======================

// 1. getting the html elements
const hexInput = document.getElementById('decode');
const hexBtn = document.getElementById('d-result');

const textInput = document.getElementById('encode');
const textBtn = document.getElementById('e-result');

// 2. Hex to text function (triggered by d-result button)
hexBtn.addEventListener('click', () => {
	const hexValue = hexInput.value.trim();
	if (!hexValue) return;

	// space separation
	const hexArray = hexValue.split(' ');
	let textResult = '';

	for (let i = 0; i < hexArray.length; i++) {
		textResult += String.fromCharCode(parseInt(hexArray[i], 16));
	}

textInput.value = textResult;
	
