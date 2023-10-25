import { LitElement, html } from "../../assets/js/lit.js";

export class About extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="footer__about">
        <a class="footer__brand mb-2 pb-5 pm-5" href="home.html"
          ><img src="assets/images/logo/bushwood-simple-light.svg" alt="logo"
        /></a>
        <div class="social__block footer__block-body">
          <h6>Follow Us:</h6>
          <ul class="social footer__info">
            <li class="social__item ">
              <a
                href="https://www.facebook.com/"
                class="social__link"
                target="_blank"
                ><i class="fab fa-facebook"></i
              ></a>
            </li>
            <li class="social__item">
              <a
                href="https://www.instagram.com/"
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
customElements.define("footer-about", About);
