export class UserComponents extends HTMLElement {
    constructor() {
        super();
        console.log('construtor');
        this.root = this.attachShadow({ mode: 'open' });
        this.appendChild(this.template());
        window.addEventListener('hashchange', (e) => this.onChange(e));
    }
    template() {
        var temp = document.createElement('template');
        temp.innerHTML = `<article><p>Teste</p></article>
        <p><a href="#/teste">Teste</a></p>
        <p><a href="#/teste2222">Testeeee</a></p>`;
        return temp.content.cloneNode(true);
    }
    connectedCallback() {
        console.log('connected');
    }
    onChange(e) {
        if (e.target.location.hash === "#/teste") {
            this.root.innerHTML = `<article><p>Teste</p><article>
            <p><a href="#/teste">Teste</a></p>
            <p><a href="#/test222">Testeeeeee</a></p>`;
        }
        else {
            this.root.innerHTML = `<p>Testeeeeee</p>
            <p><a href="#/teste">Teste</a></p>
            <p><a href="#/test222">Testeeeeee</a></p>`;
        }
    }
}
customElements.define('user-comp', UserComponents);