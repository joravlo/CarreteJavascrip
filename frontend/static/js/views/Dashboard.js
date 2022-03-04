import AbstractView from "./AbstractView.js";
import loadHTML from "../utils/loadHTML.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        const template = await loadHTML('./Dashboard.html', import.meta.url);
        return template;
    }
}