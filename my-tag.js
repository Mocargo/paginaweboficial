class MyTag extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
 
    connectedCallback() {
        this.mapComponentAttributes();
        this.render();
        this.initComponent();
    }

    mapComponentAttributes() {
        const attributesMapping = [
            'text',
        ];
        attributesMapping.forEach(key => {
            if (!this.attributes[key]) {
                this.attributes[key] = {value: ''};
            }
        });
    }
    
    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }

    template() {
        return `
            <div class="tag">holamundo
                ${this.attributes.text.value}
            </div>
        `;
    }
 
    templateCss() {
        return `
            <style>
             [...]
             [...]
            </style>
        `;
    }

    initComponent() {
        this.$tag = this.shadowDOM.querySelector('.tag');
    }
    disconnectedCallback() {
        this.remove();
    }


}
export default MyTag;



class Menu extends HTMLModElement {

constructor () {
    super();
    this.innerHTML = `
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">nueva validación</span>
    </button>
    `
}


}
customElements.define('menu-component', Menu);