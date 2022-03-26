class ButtonCounter extends HTMLElement {
    constructor() {
      super();
  
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = this.getTemplate();
    }
    
    getTemplate() {
      return `
        <div>
        <ion-icon name="caret-up-outline"></ion-icon>
        <span>0</span>
        <ion-icon name="caret-down-outline"></ion-icon>
        </div>      
      `;
    }
  }
  window.customElements.define('button-counter', ButtonCounter);