
const colorGroups = [
  ['#91c419', '#0cb067'],
  ['#f39900', '#eb531a'],
  ['#eb531a', '#00ae8f'],
  ['#00a1ea', '#1b80c5'],
  ['#c4d700', '#a62a8e'],
];
customElements.define('japari-text', class extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = `
      span {
        font-family: 'japarifont';
        color: transparent;
      }
    `;
    shadowRoot.appendChild(style);
  }

  connectedCallback() {
    const text = this.getAttribute('text') || '';
    this.shadowRoot.append(...[...text].map((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      const colors = colorGroups[Math.floor(Math.random() * colorGroups.length)];
      const angle = Math.random() * 90 + 45;
      span.style.background = `linear-gradient(${angle}deg, ${colors[0]}, ${colors[0]} 50%, ${colors[1]} 50%)`;
      span.style.backgroundClip = 'text';
      span.style.webkitBackgroundClip = 'text';
      return span;
    }));
  }
});
