
// Variable comprenant le contenu de code source du header
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>

/* Style the header with a grey background and some padding */
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

/* Style the header links */
.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header a.logo {
    font-family: "latoregular", "sans-serif";
    font-weight: 900;
    font-size: 25px;
}

/* Change the background color on mouse-over */
.header a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link*/
.header a.active {
    font-family: "latoregular", "sans-serif";
    font-weight: 900;
    color: dodgerblue;
}

/* Float the link section to the right */
.header-right {
  float: right;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
</style>
<div class="header">
    <a href="#default" class="logo">SIGITRAG</a>
    <div class="header-right">
        <a class="active" href="#index">Accueil</a>
        <a href="#services">Nos Services</a>
        <a href="produits.html">Nos Produits</a>
        <a href="contacts.html">Contact</a>
    </div>
</div>
`;
// fin Variable comprenant le contenu de code source du header

// Class javascripts Header etendu avec HTMLElement
class Header extends HTMLElement {
  // méthode de constructor et le mot-clé spécial super
  constructor() {
    super();
  }
  // Fin méthode de constructor et le mot-clé spécial super

  // rappels du cycle de vie pour ajouter l'en-tête à la page
  // connectedCallbacks'exécute chaque fois que votre élément personnalisé est inséré dans le DOM.
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
  // fin rappels du cycle de vie pour ajouter l'en-tête à la page
}
// fin Class javascripts Header etendu avec HTMLElement

// Enregistrement de l'élément personnalisé avec la méthode customElements.define()
customElements.define('header-component', Header);