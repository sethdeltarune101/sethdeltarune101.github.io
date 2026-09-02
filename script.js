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
// text to hex
textInput.addEventListener('input', () => {
	const text = textInput.value;
	const hexResult = Array.from(text)
		.map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
		.join(' ');

	hexInput.value = hexResult;
});
// hex to text
hexInput.addEventListener('input', () => {
	const hex = hexInput.value.trim();
	if (!hex) {
		textInput.value = '';
		return;
	}
	try {
		const textResult = hex.split (/\s+/)
			.map(h => String.fromCharCode(parseInt(h, 16)))
			.join('');

	} catch (error) {
		textInput.value = "Incorrect hexadecimal format"
	}
});
