(function () {
    const TEMPLATE = document.createElement("template");
    const TEMPLATECONTENT = `
    
	<p id="output"></p>`;

    TEMPLATE.innerHTML = TEMPLATECONTENT;

    class CT extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({
                mode: 'open'
            });

            this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
        }

        connectedCallback() {

            const output = this.shadowRoot.getElementById("output");
            const current = new Date();

            output.innerHTML = current.toLocaleString();
        }
    }

    window.customElements.define('x-currenttime', CT);
})();