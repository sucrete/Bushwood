import { LitElement, html } from "../../assets/js/lit.js";

export class About extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="footer__about">
            <a class="footer__brand mb-1 pb-5 pm-5" href="home.html"
              ><img
                src="assets/images/logo/bushwood-simple-light.svg"
                alt="logo"
            /></a>
          </div>
    `;
  }
}
customElements.define("footer-about", About);
