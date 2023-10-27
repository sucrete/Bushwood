import { LitElement, html } from "../../assets/js/lit.js";

export class FooterBottom extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="row">
        <div class="col-12 col-sm-6">
          <p class="pt-3 pb-3">
            Copyright © 2023 Shirkey Golf Course All Rights Reserved.
          </p>
        </div>
        <div class="col-12 col-sm-6 text-md-end ">
          <p class="pt-3 pb-3"><a class="privacy" style="cursor:pointer;">Privacy Policy</a></p>
        </div>
      </div>
    `;
  }
}
customElements.define("footer-bottom", FooterBottom);
