import { LitElement, html } from "../../assets/js/lit.js";

export class Info extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="footer__block footer__about">
        <div class="hours pb-4">
          <h6 class="pb-2">Hours</h6>
          <span><i class="fa-solid fa-clock"></i></span>
          <span
            >Mon-Fri 09:00-6:00 <br /><span class="subheading"
              >(holiday hours may differ)</span
            >
          </span>
        </div>

        <div class="social__block footer__block-body">
          <h6>Follow Us:</h6>
          <ul class="social footer__info">
            <li class="social__item ">
              <a
                href="https://www.facebook.com/shirkeygolf/"
                class="social__link"
                target="_blank"
                ><i class="fab fa-facebook"></i
              ></a>
            </li>
            <li class="social__item">
              <a
                href="https://www.instagram.com/shirkeygolfcourse/"
                class="social__link"
                target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}
customElements.define("footer-info", Info);
