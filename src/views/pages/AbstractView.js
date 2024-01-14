export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async render() {
        return "";
    }

    async reRender() {
        document.querySelector("#app").innerHTML = await this.render();
        this.after_render();
    }
}