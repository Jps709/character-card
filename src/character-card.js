import { LitElement, html, css } from 'lit';
const characterImg = new URL('../assets/obi.jpg', import.meta.url).href;
import "@lrnwebcomponents/meme-maker/meme-maker.js";

export class CharacterCard extends LitElement {
  static get properties(){
    return {
      name: { type: String},
      title: {type: String},
      description: {type: String},

    }
  }

  static get styles() {
    return css`

.outline {
 justify-content:center;
 display:flex;
 min-height:400px;
}

.lecard{
 text-align: center;
 border: solid grey 6px;
 max-width:400px;
 border-radius: 20px;
 margin-bottom: 10px;
 font-size:20px;
 background-color:white;
}
img{
  width: 350px;
}

@media screen and (min-width:501px) and (max-width:800px) {

}
@media screen and (max-width:500px) {
  details{
    display:none;
  }
}
.buttons {
  margin: 16px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly; 
}
button:hover{
  background-color:red;
}
button:focus{
 background-color:red;
}
  `;
  }
  constructor() {
    super();
    this.description = 'Details';
    this.name='Some Nerd';
    this.title = 'Hello There';
    this.top = 'Hello'
    this.bottom = 'There'
  }

  render() {
    return html`
<div class="outline">
      <div class="lecard">
      <h2>${this.name}</h2>
     <meme-maker image-url="${characterImg}"
     top-text="${this.top}"
     bottom-text="${this.bottom}">
  </meme-maker>
      
        <div class="header">
          <h4>${this.title}</h4>
        </div>
        <details class="details">
          <summary>${this.description}</summary>
          <div>
            <slot></slot>
          </div>
        </details>
      </div>
    </div>
    `;
  }
}

customElements.define('character-card', CharacterCard);