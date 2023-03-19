import { LitElement, html, css } from 'lit';
import "./character-card.js";

export class CardDesign extends LitElement {
    static get tag(){
        return 'card-design';
    }
    static get properties() {
        return {
            character: { type: Array },
            franchise: { type: String},
        }
    }
    
    constructor() {
        super();
        this.character = [];
        this.franchise = "Star Wars";
        this.updateCard();
    }

     updateCard(){
        const address = new URL('../api/char', import.meta.url).href
      fetch(address).then((response) => {
        if (response.ok) {
            return response.json()
        }
        return [];
       })
       .then((data) => {
        this.character = data;
       });
    }

    static get style() {
        return css`
        :host{
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item{
            display: inline-flex;
        }
    `;
    }
    render() {
        return html`
        <h2>${this.franchise}</h2>
        <div class = "wrapper">
            ${this.character.map(character => html`
            <div class="item">
                <character-card name="${character.name}" title="${character.title}" top="${character.top}" bottom="${character.bottom}" characterImg="${character.characterImg}"></character-card>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(CardDesign.tag, CardDesign);
