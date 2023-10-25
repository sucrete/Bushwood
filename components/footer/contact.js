import { LitElement, html } from "../../assets/js/lit.js";

export class Contact extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="footer__block">
        <div class="footer__block-body">
          <h3 class="pb-2" style="color: white">Contact</h3>
          <ul class="footer__info">
            <li class="footer__info-item">
              <span><i class="fa-solid fa-phone"></i></span>
              <a href="tel:8164702582" target="_blank">
                <span>(816) 470-2582</span></a
              >
            </li>
            
            <li class="footer__info-item">
              <span><i class="fa-solid fa-envelope"></i></span>
              <a href="mailto:info@shirkeygolfcourse.com"
                >info@shirkeygolfcourse.com</a
              >
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}
customElements.define("footer-contact", Contact);
