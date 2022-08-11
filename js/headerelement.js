(function () {
    const TEMPLATE = document.createElement("template");
    const TEMPLATECONTENT = `
    <header class="page-header">
        <div class="header-cont">
            <div class="header-name">
                <a href="index.html"><h1 class="brandname">SunbeamCars Inc.</h1></a>
            </div>
            <div class="login-cont">
                <a href="#"><img src="img/login.png" alt="Log In icon" class="login-icon" id="login-icon"></a>
                <a href="#"><p class="login-label">Log In</p></a>
            </div>
        </div>
    </header>`;
    TEMPLATE.innerHTML = TEMPLATECONTENT;
    
    class Header extends HTMLElement {
        constructor() {
            super(); 
            this.attachShadow({
                mode: 'open'
            });

            this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
        }
    } 
    window.customElements.define('x-header', Header); 
})();