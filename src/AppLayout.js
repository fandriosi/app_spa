import { LitElement, html } from 'lit-element';
import '@vaadin/vaadin-app-layout/vaadin-app-layout'
import '@vaadin/vaadin-icons/vaadin-icons'
export class AppLayout extends LitElement {

    /**
     * Implement `render` to define a template for your element.
     *
     * You must provide an implementation of `render` for any element
     * that uses LitElement as a base class.
     */
    render(){
      /**
       * `render` must return a lit-html `TemplateResult`.
       *
       * To create a `TemplateResult`, tag a JavaScript template literal
       * with the `html` helper function:
       */
      return html`
        <custom-style>
            <style include="lumo-typography lumo-color"></style>
        </custom-style>
        <vaadin-app-layout primary-section="drawer">
            <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
            <img slot="navbar" src="https://i.imgur.com/GPpnszs.png" alt="Vaadin Logo" width="100" height="31" referrerpolicy="no-referrer">
            <h3 slot="branding">Application Name</h3>
            <vaadin-tabs slot="drawer" orientation="vertical" theme="minimal" style="margin: 0 auto; flex: 1;">
                <vaadin-tab>
                    <iron-icon icon="vaadin:home"></iron-icon>
                    Page 1
                </vaadin-tab>
                <vaadin-tab>
                    <iron-icon icon="vaadin:list"></iron-icon>
                    Page 2
                </vaadin-tab>
                <vaadin-tab>
                    <iron-icon icon="vaadin:options"></iron-icon>
                    Page 3
                </vaadin-tab>
                <vaadin-tab>
                    <iron-icon icon="vaadin:question"></iron-icon>
                    Page 4
                </vaadin-tab>
            </vaadin-tabs>
            <div class="content">
                <h3>Page title</h3>
                <p>Page content</p>
            </div>
        </vaadin-app-layout>
      `;
    }
  }
  // Register the new element with the browser.
  customElements.define('app-layout', AppLayout);
  