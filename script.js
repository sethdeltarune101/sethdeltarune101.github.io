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
class DocTitle extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const heading = document.createElement('span');
    heading.setAttribute('role', 'heading');
    heading.setAttribute('aria-level', '1');
    heading.innerHTML = `<slot></slot>`;
    const style = document.createElement('style');
    style.textContent = `
      span {
        display: block;
        font-size: 3em;
        font-weight: bold;
        margin-top: 0.67em;
        margin-bottom: 0.67em;
      }
    `;
    shadow.appendChild(style);
    shadow.appendChild(heading);
  }
}
customElements.define('doc-title', DocTitle);
class ExtraBold extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          font-weight: 800;
          display: inline;
        }
      </style>
      <slot></slot>
    `;
  }
}
customElements.define('extra-bold', ExtraBold);
class BlackText extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          font-weight: 900;
          display: inline;
        }
      </style>
      <slot></slot>
    `;
  }
}
customElements.define('black-text', BlackText);
