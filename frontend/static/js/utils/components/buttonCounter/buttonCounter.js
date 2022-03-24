class ButtonCounter extends HTMLElement {
    constructor() {
      super();
  
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = this.getTemplate();
    }
    
    getTemplate() {
      return `
        <div>
        <i class="fa-solid fa-chevron-up"></i>
        <p>0</p>
        <i class="fa-solid fa-chevron-down"></i>
        </div>      
      `;
    }
  }
  window.customElements.define('button-counter', ButtonCounter);