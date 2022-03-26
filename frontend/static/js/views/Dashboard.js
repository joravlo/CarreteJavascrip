import AbstractView from "./AbstractView.js";
import loadHTML from "../utils/loadHTML.js";
//import ButtonCounter from "../utils/components/buttonCounter/buttonCounter.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");

        document.addEventListener('click',this.onClick.bind(this)); 
    }

    onClick(event) {
        if (!event.target.hasAttribute('action')) return;
        const action = event.target.getAttribute('action');
        if (action === 'clickUp') {
            this.increaseCounter(event.target);
        }
        if (action === 'clickDown') {
            this.decreaseCounter(event.target);
        }
      
    }

    increaseCounter(element) {
        const spanId = element.getAttribute('spanId');
        const eSpan = document.querySelector(`#${spanId}`);
        let counter = parseInt(eSpan.textContent);
        eSpan.textContent = counter + 1;
    }

    decreaseCounter(element) {
        const spanId = element.getAttribute('spanId');
        const eSpan = document.querySelector(`#${spanId}`);
        let counter = parseInt(eSpan.textContent);
        if (counter <= 0) return;
        eSpan.textContent = counter - 1;
    }

    async getHtml() {
        const template = await loadHTML('./Dashboard.html', import.meta.url);
        return template;
    }
}