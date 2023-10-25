import { LitElement, html } from "../../assets/js/lit.js";

export class Info extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="footer__block footer__about">
        <div class="hours pb-4">
          <h3 class="pb-2">Info</h3>
          <span><i class="fa-solid fa-clock"></i></span>
          <span
            >Mon-Fri 09:00-6:00 <br /><span class="subheading"
              >(holiday hours may differ)</span
            >
          </span>
          <div class="footer__info-item">
            <span><i class="fa-solid fa-location-dot"></i></span>
            <a href="https://maps.app.goo.gl/gU6kEd5yXvKLAApL7" target="_blank">
              901 Wollard Blvd<br />
              Richmond, MO 64085</a
            >
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("footer-info", Info);
