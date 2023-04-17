import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            h2 {
                color :red;
            }
        `
    ];
    static properties = {
        counter: { type: Number }
    }
    constructor () {
        super();
        this.counter = 0;
    }

    render() {
        return html`
            <h2>Hoals</h2>
            <p>${this.counter}</p>
            <button @click=${this.increment}>+1</button>

        `;
    }
    increment() {
        this.counter++;
    }
}
customElements.define('eit-counter', EitCounter);
